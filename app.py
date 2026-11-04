import os
import sqlite3
import datetime
import json
from flask import Flask, render_template, request, jsonify, send_file, send_from_directory

app = Flask(__name__, static_folder='static', template_folder='templates')
DB_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'salud_slt.db')

def get_db():
    conn = sqlite3.connect(DB_FILE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    conn = get_db()
    cursor = conn.cursor()
    
    # Table: Fichas de Pre-Consulta
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS fichas (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT UNIQUE NOT NULL,
            fecha_creacion TEXT NOT NULL,
            nombre TEXT NOT NULL,
            edad INTEGER NOT NULL,
            comunidad TEXT NOT NULL,
            telefono TEXT,
            sintomas TEXT NOT NULL,
            dias_malestar INTEGER NOT NULL,
            destino TEXT NOT NULL,
            es_urgente INTEGER DEFAULT 0,
            nivel_triaje TEXT NOT NULL,
            alerta_medica TEXT,
            estado TEXT DEFAULT 'Pendiente',
            atendido_en TEXT,
            notas_atencion TEXT
        )
    ''')

    # Table: Donaciones
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS donaciones (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            codigo TEXT UNIQUE NOT NULL,
            fecha TEXT NOT NULL,
            donante_nombre TEXT NOT NULL,
            donante_tipo TEXT NOT NULL,
            contacto TEXT,
            meta_id TEXT NOT NULL,
            meta_titulo TEXT NOT NULL,
            monto REAL NOT NULL,
            mensaje TEXT
        )
    ''')

    # Table: Quiz Scores
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS quiz_scores (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            fecha TEXT NOT NULL,
            puntaje INTEGER NOT NULL,
            total INTEGER DEFAULT 3
        )
    ''')

    # Table: Directorio Medico
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS directorio_medico (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nivel INTEGER NOT NULL,
            nombre TEXT NOT NULL,
            tipo_institucion TEXT NOT NULL,
            direccion TEXT NOT NULL,
            plus_code TEXT NOT NULL,
            telefono TEXT NOT NULL,
            horario TEXT NOT NULL,
            calificacion REAL NOT NULL,
            tipo_costo TEXT NOT NULL,
            descripcion TEXT NOT NULL,
            emergencias_24h INTEGER DEFAULT 0,
            ambulancia INTEGER DEFAULT 0
        )
    ''')

    # Seed Directorio if empty
    cursor.execute('SELECT COUNT(*) as cnt FROM directorio_medico')
    if cursor.fetchone()['cnt'] == 0:
        directorio_inicial = [
            # NIVEL 1
            (1, "Centro de Salud San Lucas Tolimán (MSPAS)", "Red Pública Nacional", 
             "3 Av. y 3 Calle Zona 1", "JVP3+7X", "7792-0488", "Abierto 24 horas", 4.6, 
             "Atención 100% Gratuita", 
             "Primera línea de atención primaria, consulta médica general, vacunación infantil, control prenatal y entrega de medicamentos básicos del Ministerio de Salud Pública y Asistencia Social.", 1, 0),
            
            (1, "Hospital Parroquial Monseñor Gregorio Schaffer", "Hospital Parroquial / Obra Social", 
             "Ruta SOL-4", "JVP2+R9X", "7722-0097", "Abierto 24 horas (Emergencias y Ambulancia 24/7)", 5.0, 
             "Tarifas Sociales Bajas", 
             "Excelente reputación comunitaria. Cuenta con apoyo solidario, laboratorio clínico completo, farmacia comunitaria, odontología y servicio continuo de ambulancia con tarifas sumamente bajas.", 1, 1),

            (1, "Asociación Comunitaria de Comadronas Santa Ana G y G", "Maternidad Comunitaria", 
             "6a. Calle y 7a. Ave, esquina", "JVP4+3W", "4856-6818", "Atención continua para partos", 4.8, 
             "Tarifas Sociales Accesibles", 
             "Hospital de maternidad comunitario con amplia experiencia en atención humanizada del parto, control prenatal y acompañamiento ginecológico accesible.", 1, 0),

            (1, "Consultorio IGSS San Lucas Tolimán", "Seguridad Social", 
             "1a Avenida", "JVG3+MVX", "7792-0400", "Lunes a Viernes 7:00 a 15:00", 3.8, 
             "Exclusivo Afiliados y Derechohabientes", 
             "Atención médica y dotación farmacéutica exclusiva para trabajadores formales afiliados al Instituto Guatemalteco de Seguridad Social y familiares cubiertos.", 0, 0),

            # NIVEL 2
            (2, "Hospital Departamental de Sololá", "Hospital Nacional de Referencia", 
             "Sololá Cabecera Departamental", "QR7F+Q8G", "7762-4121", "Abierto 24 horas", 4.4, 
             "100% Gratuito (Referencia Nacional)", 
             "Hospital nacional de segundo nivel de referencia regional para cirugías mayores, cuidados intensivos (UCI), traumatología compleja y emergencias no resolubles en el municipio.", 1, 1),

            # NIVEL 3
            (3, "Centro Clínico de Especialidades Vida", "Clínica Privada", 
             "Zona Central", "JVF3+GV", "4228-6030", "Abierto 24 horas", 5.0, 
             "Costo Privado Medio-Alto", 
             "Instalaciones modernas privadas, servicios de ultrasonido diagnóstico, laboratorio y hospitalización rápida. Tarifas privadas comerciales.", 1, 0),

            (3, "Centro Médico Sagrado Corazón / Dr. César Rodas & Asociados", "Clínica Quirúrgica Privada", 
             "Av. Luciano Pavarotti 1-84", "JVP5+7F", "4116-9892", "Abierto 24 horas", 5.0, 
             "Costo Privado Alto", 
             "Dirigido por médico cirujano especialista en cirugía laparoscópica y gastrointestinal. Nivel médico avanzado pero de costo privado alto para procedimientos quirúrgicos.", 1, 0),

            (3, "Clínica Médica Genesaret", "Clínica de Consulta Externa Privada", 
             "6a Avenida", "JVJ4+XVW", "5912-1133", "Diurno (Desde las 9:00 a.m.)", 4.7, 
             "Costo Privado Moderado", 
             "Clínica privada equipada para consulta externa diurna y chequeos de rutina. Costo moderado. No dispone de emergencias nocturnas.", 0, 0)
        ]

        cursor.executemany('''
            INSERT INTO directorio_medico (nivel, nombre, tipo_institucion, direccion, plus_code, telefono, horario, calificacion, tipo_costo, descripcion, emergencias_24h, ambulancia)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', directorio_inicial)

    # Seed initial donations if empty so metrics show real context
    cursor.execute('SELECT COUNT(*) as cnt FROM donaciones')
    if cursor.fetchone()['cnt'] == 0:
        donaciones_iniciales = [
            ("DON-SLT-2026-001", "2026-10-15 10:20:00", "Asociación Amigos de San Lucas", "Organización Solidaria", "info@amigosdesanlucas.org", "meta-suero-zinc", "Lote de 500 sobres de Suero Oral y Zinc", 1250.00, "Para garantizar la rehidratación en niños de la cuenca."),
            ("DON-SLT-2026-002", "2026-10-22 15:45:00", "Familia Mendoza Morales", "Donante Particular", "familia.mendoza@email.gt", "meta-insumos-antibioticos", "Insumos de curación y antibióticos pediátricos", 1800.00, "Con gratitud por la atención recibida en el Hospital Parroquial."),
            ("DON-SLT-2026-003", "2026-11-01 09:10:00", "Turista Solidario (Mark Jensen)", "Turista / Donante Internacional", "mark.jensen@travelaid.org", "meta-ambulancia", "Aporte para combustible y servicio de ambulancia", 2400.00, "Apoyo para el traslado oportuno de emergencias hacia Sololá.")
        ]
        cursor.executemany('''
            INSERT INTO donaciones (codigo, fecha, donante_nombre, donante_tipo, contacto, meta_id, meta_titulo, monto, mensaje)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ''', donaciones_iniciales)

    conn.commit()
    conn.close()

# Routes for PWA
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/manifest.json')
def serve_manifest():
    return send_file(os.path.join(os.path.dirname(__file__), 'manifest.json'), mimetype='application/manifest+json')

@app.route('/service-worker.js')
def serve_sw():
    response = send_file(os.path.join(os.path.dirname(__file__), 'service-worker.js'), mimetype='application/javascript')
    response.headers['Service-Worker-Allowed'] = '/'
    response.headers['Cache-Control'] = 'no-cache'
    return response

# API: Directorio Médico
@app.route('/api/directorio', methods=['GET'])
def get_directorio():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM directorio_medico ORDER BY nivel ASC, id ASC')
    rows = cursor.fetchall()
    conn.close()
    
    directorio = [dict(row) for row in rows]
    return jsonify({"status": "success", "data": directorio})

# API: Fichas de Pre-Consulta
@app.route('/api/fichas', methods=['GET'])
def get_fichas():
    filtro_estado = request.args.get('estado')
    filtro_destino = request.args.get('destino')
    
    query = 'SELECT * FROM fichas WHERE 1=1'
    params = []
    
    if filtro_estado and filtro_estado != 'todos':
        query += ' AND estado = ?'
        params.append(filtro_estado)
        
    if filtro_destino and filtro_destino != 'todos':
        query += ' AND destino LIKE ?'
        params.append(f"%{filtro_destino}%")
        
    query += ' ORDER BY id DESC'
    
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute(query, params)
    fichas = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify({"status": "success", "data": fichas})

@app.route('/api/fichas', methods=['POST'])
def create_ficha():
    data = request.get_json() or {}
    
    nombre = data.get('nombre', '').strip()
    edad = int(data.get('edad', 0))
    comunidad = data.get('comunidad', '').strip()
    telefono = data.get('telefono', '').strip()
    sintomas = data.get('sintomas', [])
    dias_malestar = int(data.get('dias_malestar', 1))
    destino = data.get('destino', 'Centro de Salud San Lucas Tolimán (MSPAS)')
    
    if not nombre or not comunidad or not sintomas:
        return jsonify({"status": "error", "message": "Datos incompletos. Por favor complete los campos obligatorios."}), 400

    sintomas_str = ", ".join(sintomas) if isinstance(sintomas, list) else str(sintomas)
    
    # Lógica de Triaje Escalonado
    es_urgente = 0
    nivel_triaje = "VERDE"
    alerta_medica = ""
    
    # Criterios de Urgencia Crítica (Triaje Rojo)
    criterios_rojos = [
        "Dificultad para respirar / ahogo severo",
        "Pérdida de conciencia / desmayo",
        "Vómitos continuos sin retener suero",
        "Convulsiones o rigidez de nuca"
    ]
    
    # Criterios de Atención Prioritaria (Triaje Amarillo)
    criterios_amarillos = [
        "Fiebre persistente (>38.5°C por más de 3 días)",
        "Diarrea abundante más de 5 veces al día",
        "Dolor abdominal intenso",
        "Embarazo con sangrado o dolor"
    ]
    
    tiene_criterio_rojo = any(c in sintomas_str for c in criterios_rojos)
    tiene_criterio_amarillo = any(c in sintomas_str for c in criterios_amarillos)
    
    if tiene_criterio_rojo or (edad <= 2 and dias_malestar >= 3 and ("Fiebre" in sintomas_str or "Diarrea" in sintomas_str)):
        es_urgente = 1
        nivel_triaje = "ROJO"
        alerta_medica = "ALERTA DE TRIAJE CRÍTICO: Presenta signos de peligro inminente. Se recomienda acudir inmediatamente al Hospital Parroquial (Ambulancia 24/7) o traslado directo de emergencia al Hospital Departamental de Sololá."
    elif tiene_criterio_amarillo or dias_malestar >= 4:
        es_urgente = 0
        nivel_triaje = "AMARILLO"
        alerta_medica = "PRIORIDAD DE ATENCIÓN: Paciente con evolución moderada. Requiere evaluación médica temprana en ventanilla prioritaria."
    else:
        nivel_triaje = "VERDE"
        alerta_medica = "CONSULTA ESTÁNDAR: Atención regular por consulta médica general o dispensario."

    conn = get_db()
    cursor = conn.cursor()
    
    # Generar código único correlativo SLT-2026-XXX
    current_year = datetime.datetime.now().year
    cursor.execute("SELECT COUNT(*) as total FROM fichas")
    conteo = cursor.fetchone()['total'] + 1
    codigo = f"SLT-{current_year}-{conteo:04d}"
    
    fecha_creacion = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    cursor.execute('''
        INSERT INTO fichas (codigo, fecha_creacion, nombre, edad, comunidad, telefono, sintomas, dias_malestar, destino, es_urgente, nivel_triaje, alerta_medica, estado)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'Pendiente')
    ''', (codigo, fecha_creacion, nombre, edad, comunidad, telefono, sintomas_str, dias_malestar, destino, es_urgente, nivel_triaje, alerta_medica))
    
    ficha_id = cursor.lastrowid
    conn.commit()
    
    cursor.execute("SELECT * FROM fichas WHERE id = ?", (ficha_id,))
    nueva_ficha = dict(cursor.fetchone())
    conn.close()
    
    return jsonify({
        "status": "success",
        "message": "Ficha de pre-consulta registrada exitosamente.",
        "data": nueva_ficha
    }), 201

@app.route('/api/fichas/<int:id>/estado', methods=['PATCH'])
def update_ficha_estado(id):
    data = request.get_json() or {}
    nuevo_estado = data.get('estado', 'Atendido')
    notas = data.get('notas_atencion', 'Atención brindada en ventanilla / medicamento dispensado')
    
    fecha_atendido = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S") if nuevo_estado == 'Atendido' else None
    
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        UPDATE fichas 
        SET estado = ?, atendido_en = ?, notas_atencion = ?
        WHERE id = ?
    ''', (nuevo_estado, fecha_atendido, notas, id))
    conn.commit()
    conn.close()
    
    return jsonify({"status": "success", "message": f"Ficha actualizada a estado: {nuevo_estado}"})

# API: Donaciones
@app.route('/api/donaciones', methods=['GET'])
def get_donaciones():
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('SELECT * FROM donaciones ORDER BY id DESC')
    donaciones = [dict(row) for row in cursor.fetchall()]
    
    # Metas fijas y cálculos de recaudación
    metas = {
        "meta-suero-zinc": {
            "id": "meta-suero-zinc",
            "titulo": "Lote de 500 sobres de Suero Oral y Zinc",
            "objetivo": 2500.0,
            "recaudado": 0.0,
            "icono": "fa-prescription-bottle-medical",
            "descripcion": "Garantiza dotación inmediata para evitar deshidratación por diarreas infantiles en época seca y lluvias."
        },
        "meta-insumos-antibioticos": {
            "id": "meta-insumos-antibioticos",
            "titulo": "Insumos de curación y antibióticos pediátricos",
            "objetivo": 5000.0,
            "recaudado": 0.0,
            "icono": "fa-kit-medical",
            "descripcion": "Gasas estériles, apósitos, guantes de examen y antibióticos esenciales de rescate para el Centro de Salud."
        },
        "meta-ambulancia": {
            "id": "meta-ambulancia",
            "titulo": "Fondo Solidario de Combustible para Ambulancia y Traslados",
            "objetivo": 8000.0,
            "recaudado": 0.0,
            "icono": "fa-truck-medical",
            "descripcion": "Apoyo para el Hospital Parroquial en combustible y mantenimiento para traslados 24/7 al Hospital de Sololá."
        }
    }
    
    total_recaudado_global = 0.0
    for d in donaciones:
        monto = float(d['monto'])
        total_recaudado_global += monto
        meta_id = d['meta_id']
        if meta_id in metas:
            metas[meta_id]["recaudado"] += monto
            
    # Calcular porcentajes
    metas_lista = []
    for m in metas.values():
        pct = min(100.0, round((m["recaudado"] / m["objetivo"]) * 100, 1))
        m["porcentaje"] = pct
        metas_lista.append(m)
        
    conn.close()
    
    return jsonify({
        "status": "success",
        "data": {
            "donaciones": donaciones,
            "metas": metas_lista,
            "total_global": total_recaudado_global
        }
    })

@app.route('/api/donaciones', methods=['POST'])
def create_donacion():
    data = request.get_json() or {}
    
    donante_nombre = data.get('donante_nombre', 'Donante Anónimo').strip() or 'Donante Anónimo'
    donante_tipo = data.get('donante_tipo', 'Donante Particular').strip()
    contacto = data.get('contacto', '').strip()
    meta_id = data.get('meta_id', 'meta-suero-zinc')
    meta_titulo = data.get('meta_titulo', 'Apoyo General de Salud')
    try:
        monto = float(data.get('monto', 0))
    except ValueError:
        monto = 0.0
    mensaje = data.get('mensaje', '').strip()
    
    if monto <= 0:
        return jsonify({"status": "error", "message": "El monto debe ser mayor a Q 0.00"}), 400

    conn = get_db()
    cursor = conn.cursor()
    
    current_year = datetime.datetime.now().year
    cursor.execute("SELECT COUNT(*) as total FROM donaciones")
    conteo = cursor.fetchone()['total'] + 1
    codigo = f"DON-SLT-{current_year}-{conteo:04d}"
    
    fecha = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    cursor.execute('''
        INSERT INTO donaciones (codigo, fecha, donante_nombre, donante_tipo, contacto, meta_id, meta_titulo, monto, mensaje)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ''', (codigo, fecha, donante_nombre, donante_tipo, contacto, meta_id, meta_titulo, monto, mensaje))
    
    donacion_id = cursor.lastrowid
    conn.commit()
    
    cursor.execute("SELECT * FROM donaciones WHERE id = ?", (donacion_id,))
    nueva_donacion = dict(cursor.fetchone())
    conn.close()
    
    return jsonify({
        "status": "success",
        "message": "Donación registrada con éxito. ¡Muchas gracias por apoyar la salud de San Lucas Tolimán!",
        "data": nueva_donacion
    }), 201

# API: Quiz Score
@app.route('/api/quiz', methods=['POST'])
def save_quiz_score():
    data = request.get_json() or {}
    puntaje = int(data.get('puntaje', 0))
    total = int(data.get('total', 3))
    fecha = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    conn = get_db()
    cursor = conn.cursor()
    cursor.execute('''
        INSERT INTO quiz_scores (fecha, puntaje, total)
        VALUES (?, ?, ?)
    ''', (fecha, puntaje, total))
    conn.commit()
    conn.close()
    
    return jsonify({
        "status": "success",
        "message": "Calificación registrada satisfactoriamente."
    })

# API: Resumen Estadístico
@app.route('/api/stats', methods=['GET'])
def get_stats():
    conn = get_db()
    cursor = conn.cursor()
    
    cursor.execute("SELECT COUNT(*) as total_fichas FROM fichas")
    total_fichas = cursor.fetchone()['total_fichas']
    
    cursor.execute("SELECT COUNT(*) as atendidas FROM fichas WHERE estado = 'Atendido'")
    atendidas = cursor.fetchone()['atendidas']
    
    cursor.execute("SELECT COUNT(*) as urgentes FROM fichas WHERE es_urgente = 1")
    urgentes = cursor.fetchone()['urgentes']
    
    cursor.execute("SELECT COALESCE(SUM(monto), 0) as total_donaciones FROM donaciones")
    total_donaciones = cursor.fetchone()['total_donaciones']
    
    cursor.execute("SELECT COUNT(*) as total_quizzes FROM quiz_scores")
    total_quizzes = cursor.fetchone()['total_quizzes']
    
    conn.close()
    
    return jsonify({
        "status": "success",
        "data": {
            "total_fichas": total_fichas,
            "fichas_atendidas": atendidas,
            "fichas_pendientes": total_fichas - atendidas,
            "casos_urgentes": urgentes,
            "total_donaciones": total_donaciones,
            "quizzes_completados": total_quizzes
        }
    })

# Initialize DB on load
with app.app_context():
    init_db()

if __name__ == '__main__':
    # Local development server
    port = int(os.environ.get('PORT', 5000))
    print(f"Iniciando Aprendamos Salud San Lucas Tolimán en http://127.0.0.1:{port}")
    app.run(host='0.0.0.0', port=port, debug=True)


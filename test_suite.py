import app
import json

client = app.app.test_client()

# Test 1: Index
r = client.get('/')
assert r.status_code == 200, f"Index failed: {r.status_code}"
print("Test 1: GET / => 200 OK")

# Test 2: Manifest & SW
r_man = client.get('/manifest.json')
assert r_man.status_code == 200, "Manifest failed"
r_sw = client.get('/service-worker.js')
assert r_sw.status_code == 200, "SW failed"
print("Test 2: GET /manifest.json and /service-worker.js => 200 OK")

# Test 3: Directorio
r_dir = client.get('/api/directorio')
assert r_dir.status_code == 200
data_dir = json.loads(r_dir.data)
items_count = len(data_dir['data'])
assert items_count >= 8, f"Expected 8 directory items, got {items_count}"
print(f"Test 3: GET /api/directorio => {items_count} centros médicos precargados")

# Test 4: Post Ficha - Standard
payload_normal = {
    'nombre': 'María Gómez',
    'edad': 28,
    'comunidad': 'Cantón Pachichaj',
    'telefono': '5555-1234',
    'sintomas': ['Fiebre persistente (>38.5°C por más de 3 días)'],
    'dias_malestar': 2,
    'destino': 'Centro de Salud San Lucas Tolimán (MSPAS)'
}
r_f1 = client.post('/api/fichas', json=payload_normal)
assert r_f1.status_code == 201
data_f1 = json.loads(r_f1.data)['data']
print(f"Test 4: POST /api/fichas (Estándar/Amarillo) => Código {data_f1['codigo']}, Triaje: {data_f1['nivel_triaje']}")

# Test 5: Post Ficha - Urgent/Critical (Red)
payload_urgent = {
    'nombre': 'Pedro Morales',
    'edad': 1,
    'comunidad': 'Cantón Tziquinajay',
    'telefono': '4444-9876',
    'sintomas': ['Dificultad para respirar / ahogo severo', 'Vómitos continuos sin retener suero'],
    'dias_malestar': 3,
    'destino': 'Hospital Parroquial Monseñor Gregorio Schaffer'
}
r_f2 = client.post('/api/fichas', json=payload_urgent)
assert r_f2.status_code == 201
data_f2 = json.loads(r_f2.data)['data']
assert data_f2['nivel_triaje'] == 'ROJO', 'Expected ROJO triaje'
assert data_f2['es_urgente'] == 1, 'Expected es_urgente=1'
print(f"Test 5: POST /api/fichas (Crítico) => Código {data_f2['codigo']}, Triaje: {data_f2['nivel_triaje']}, Alerta: {data_f2['alerta_medica'][:50]}...")

# Test 6: PATCH Ficha Estado
r_patch = client.patch(f"/api/fichas/{data_f1['id']}/estado", json={'estado': 'Atendido'})
assert r_patch.status_code == 200
print(f"Test 6: PATCH /api/fichas/{data_f1['id']}/estado => Atendido")

# Test 7: Donaciones POST
r_don_post = client.post('/api/donaciones', json={
    'donante_nombre': 'Carlos Solís',
    'donante_tipo': 'Turista / Donante Internacional',
    'contacto': 'carlos@donor.org',
    'meta_id': 'meta-suero-zinc',
    'meta_titulo': 'Lote de 500 sobres de Suero Oral y Zinc',
    'monto': 500.0,
    'mensaje': 'Por la niñez de Tolimán'
})
assert r_don_post.status_code == 201
don_data = json.loads(r_don_post.data)['data']
print(f"Test 7: POST /api/donaciones => {don_data['codigo']}, Monto: Q{don_data['monto']}")

# Test 8: Donaciones GET
r_don_get = client.get('/api/donaciones')
assert r_don_get.status_code == 200
don_summary = json.loads(r_don_get.data)['data']
print(f"Test 8: GET /api/donaciones => Total recaudado: Q{don_summary['total_global']}")

# Test 9: Quiz Score
r_quiz = client.post('/api/quiz', json={'puntaje': 3, 'total': 3})
assert r_quiz.status_code == 200
print("Test 9: POST /api/quiz => OK")

# Test 10: Stats
r_stats = client.get('/api/stats')
assert r_stats.status_code == 200
stats = json.loads(r_stats.data)['data']
print(f"Test 10: GET /api/stats => Fichas: {stats['total_fichas']}, Atendidas: {stats['fichas_atendidas']}, Donaciones: Q{stats['total_donaciones']}")

print("\n--- ALL 10 TESTS PASSED WITH 100% SUCCESS! ---")


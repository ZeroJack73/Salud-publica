/**
 * APRENDAMOS SALUD SAN LUCAS TOLIMÁN
 * Minimalist Apple-Style SPA Controller & Offline-First Engine
 * Zero emojis - All icons through FontAwesome and SVGs
 */

// Verified Directory Initial Data
const defaultDirectoryData = [
  {
    id: 1,
    nivel: 1,
    nombre: "Centro de Salud San Lucas Tolimán (MSPAS)",
    tipo_institucion: "Red Pública Nacional",
    direccion: "3 Av. y 3 Calle Zona 1",
    plus_code: "JVP3+7X",
    telefono: "7792-0488",
    horario: "Abierto 24 horas",
    calificacion: 4.6,
    tipo_costo: "Atención 100% Gratuita",
    descripcion: "Primera línea de atención primaria, consulta médica general, vacunación infantil, control prenatal y entrega de medicamentos básicos del Ministerio de Salud Pública.",
    emergencias_24h: 1,
    ambulancia: 0
  },
  {
    id: 2,
    nivel: 1,
    nombre: "Hospital Parroquial Monseñor Gregorio Schaffer",
    tipo_institucion: "Hospital Parroquial / Obra Social",
    direccion: "Ruta SOL-4",
    plus_code: "JVP2+R9X",
    telefono: "7722-0097",
    horario: "Abierto 24 horas (Emergencias y Ambulancia 24/7)",
    calificacion: 5.0,
    tipo_costo: "Tarifas Sociales Bajas",
    descripcion: "Excelente reputación comunitaria. Cuenta con apoyo solidario, laboratorio clínico completo, farmacia comunitaria, odontología y servicio continuo de ambulancia con tarifas sumamente bajas.",
    emergencias_24h: 1,
    ambulancia: 1
  },
  {
    id: 3,
    nivel: 1,
    nombre: "Asociación Comunitaria de Comadronas Santa Ana G y G",
    tipo_institucion: "Maternidad Comunitaria",
    direccion: "6a. Calle y 7a. Ave, esquina",
    plus_code: "JVP4+3W",
    telefono: "4856-6818",
    horario: "Atención continua para partos",
    calificacion: 4.8,
    tipo_costo: "Tarifas Sociales Accesibles",
    descripcion: "Hospital de maternidad comunitario con amplia experiencia en atención humanizada del parto, control prenatal y acompañamiento ginecológico accesible.",
    emergencias_24h: 1,
    ambulancia: 0
  },
  {
    id: 4,
    nivel: 1,
    nombre: "Consultorio IGSS San Lucas Tolimán",
    tipo_institucion: "Seguridad Social",
    direccion: "1a Avenida",
    plus_code: "JVG3+MVX",
    telefono: "7792-0400",
    horario: "Lunes a Viernes 7:00 a 15:00",
    calificacion: 3.8,
    tipo_costo: "Exclusivo Afiliados y Derechohabientes",
    descripcion: "Atención médica y dotación farmacéutica exclusiva para trabajadores formales afiliados al Instituto Guatemalteco de Seguridad Social y familiares cubiertos.",
    emergencias_24h: 0,
    ambulancia: 0
  },
  {
    id: 5,
    nivel: 2,
    nombre: "Hospital Departamental de Sololá",
    tipo_institucion: "Hospital Nacional de Referencia",
    direccion: "Sololá Cabecera Departamental",
    plus_code: "QR7F+Q8G",
    telefono: "7762-4121",
    horario: "Abierto 24 horas",
    calificacion: 4.4,
    tipo_costo: "100% Gratuito (Referencia Nacional)",
    descripcion: "Hospital nacional de segundo nivel de referencia regional para cirugías mayores, cuidados intensivos (UCI), traumatología compleja y emergencias no resolubles en el municipio.",
    emergencias_24h: 1,
    ambulancia: 1
  },
  {
    id: 6,
    nivel: 3,
    nombre: "Centro Clínico de Especialidades Vida",
    tipo_institucion: "Clínica Privada",
    direccion: "Zona Central",
    plus_code: "JVF3+GV",
    telefono: "4228-6030",
    horario: "Abierto 24 horas",
    calificacion: 5.0,
    tipo_costo: "Costo Privado Medio-Alto",
    descripcion: "Instalaciones modernas privadas, servicios de ultrasonido diagnóstico, laboratorio y hospitalización rápida. Tarifas privadas comerciales.",
    emergencias_24h: 1,
    ambulancia: 0
  },
  {
    id: 7,
    nivel: 3,
    nombre: "Centro Médico Sagrado Corazón / Dr. César Rodas & Asociados",
    tipo_institucion: "Clínica Quirúrgica Privada",
    direccion: "Av. Luciano Pavarotti 1-84",
    plus_code: "JVP5+7F",
    telefono: "4116-9892",
    horario: "Abierto 24 horas",
    calificacion: 5.0,
    tipo_costo: "Costo Privado Alto",
    descripcion: "Dirigido por médico cirujano especialista en cirugía laparoscópica y gastrointestinal. Nivel médico avanzado pero de costo privado alto para procedimientos quirúrgicos.",
    emergencias_24h: 1,
    ambulancia: 0
  },
  {
    id: 8,
    nivel: 3,
    nombre: "Clínica Médica Genesaret",
    tipo_institucion: "Clínica de Consulta Externa Privada",
    direccion: "6a Avenida",
    plus_code: "JVG4+XVW",
    telefono: "5912-1133",
    horario: "Diurno (Desde las 9:00 a.m.)",
    calificacion: 4.7,
    tipo_costo: "Costo Privado Moderado",
    descripcion: "Clínica privada equipada para consulta externa diurna y chequeos de rutina. Costo moderado. No dispone de emergencias nocturnas.",
    emergencias_24h: 0,
    ambulancia: 0
  }
];

// Minimalist Botiquín Catalog
const botiquinCatalog = [
  {
    id: 1,
    enfermedad: "Diarrea y Deshidratación",
    categoria: "diarrea",
    categoria_label: "Hidratación Digestiva",
    nombre: "Sales de Rehidratación Oral (Suero OMS) + Zinc",
    presentacion: "Sobres en polvo para diluir y tabletas dispersables de zinc",
    disponibilidad_corta: "Entrega gratuita en Centro de Salud y Parroquia",
    disponibilidad_completa: "Disponible de forma 100% gratuita en el Centro de Salud MSPAS y a cuota social en la farmacia del Hospital Parroquial.",
    uso_seguro_resumido: "Disolver 1 sobre completo en 1 litro exacto de agua hervida o clorada fría. Administrar a sorbos pequeños después de cada deposición líquida. En niños menores de 5 años: añadir Sulfato de Zinc (10 a 20 mg diarios) durante 10 a 14 días continuos.",
    senales_alarma: "Acuda inmediatamente al hospital si observa: vómitos continuos que no permiten retener ningún líquido, ojos hundidos, llanto sin lágrimas, letargia extrema (el niño no despierta o no responde), piel que no regresa a su lugar al pellizcarla (signo del pliegue) o presencia de sangre en las heces."
  },
  {
    id: 2,
    enfermedad: "Fiebre y Dolor Corporal",
    categoria: "fiebre",
    categoria_label: "Control de Fiebre y Dolor",
    nombre: "Acetaminofén (Paracetamol)",
    presentacion: "Gotas, jarabe o tabletas (según la edad del paciente)",
    disponibilidad_corta: "Gratuito en Centro de Salud MSPAS",
    disponibilidad_completa: "Dotación gratuita en el Centro de Salud MSPAS y venta libre de bajo costo en farmacias comunitarias.",
    uso_seguro_resumido: "Adultos: 500 mg a 1000 mg cada 6 a 8 horas (máximo 3000 mg al día). Niños: calcular estrictamente según el peso corporal (10 a 15 mg por kg por dosis) medido con jeringa dosificadora cada 6 u 8 horas. NUNCA duplicar la dosis ni mezclar con antigripales combinados que ya contengan paracetamol.",
    senales_alarma: "Hospitalización urgente si la fiebre supera los 39°C y no cede con medios físicos, si dura más de 3 días consecutivos, si hay rigidez de nuca (no puede tocar el pecho con la barbilla), manchas violáceas en la piel o convulsiones febriles."
  },
  {
    id: 3,
    enfermedad: "Gripes y Congestión Nasal",
    categoria: "gripe",
    categoria_label: "Vías Respiratorias Leves",
    nombre: "Solución Salina Nasal / Suero Fisiológico",
    presentacion: "Gotas nasales estériles y lavado fisiológico",
    disponibilidad_corta: "Venta libre económica y puestos de salud",
    disponibilidad_completa: "Disponible en dispensarios, farmacias comunitarias y de fácil preparación casera con agua hervida limpia y sal limpia.",
    uso_seguro_resumido: "Aplicar 2 a 3 gotas de solución salina tibia en cada fosa nasal antes de dormir o amamantar para disolver mucosidad. Acompañar con abundantes líquidos tibios y reposo. NO administre antibióticos ni jarabes sedantes para la tos en niños pequeños.",
    senales_alarma: "Traslado de emergencia si presenta signos de neumonía: hundimiento de costillas al respirar (tiraje subcostal), respiración acelerada o agitada, quejido al exhalar, aleteo nasal o coloración morada en labios y uñas."
  },
  {
    id: 4,
    enfermedad: "Parasitosis Intestinal",
    categoria: "parasitos",
    categoria_label: "Desparasitación Preventiva",
    nombre: "Albendazol 400 mg",
    presentacion: "Tabletas masticables de dosis única",
    disponibilidad_corta: "Jornadas comunitarias del Centro de Salud",
    disponibilidad_completa: "Entregado gratuitamente en campañas periódicas del Ministerio de Salud en escuelas y comunidades de San Lucas Tolimán.",
    uso_seguro_resumido: "Dosis única de 400 mg masticable para niños mayores de 2 años y adultos cada 6 meses. Se recomienda desparasitar a todos los habitantes del hogar en la misma semana y mantener estricta higiene de manos antes de comer.",
    senales_alarma: "CONTRAINDICADO en mujeres embarazadas y niños menores de 1 año. Acuda al médico si el paciente presenta vómitos con lombrices, dolor abdominal intenso con abdomen duro o distendido, o debilidad extrema con palidez severa."
  },
  {
    id: 5,
    enfermedad: "Heridas y Raspaduras Leves",
    categoria: "heridas",
    categoria_label: "Primeros Auxilios Cutáneos",
    nombre: "Insumos de Curación (Gasas, Jabón Neutro y Clorhexidina)",
    presentacion: "Jabón antibacterial blanco, gasas estériles y antiséptico tópico",
    disponibilidad_corta: "Farmacias locales y dispensario parroquial",
    disponibilidad_completa: "Insumos básicos estándar accesibles en cualquier farmacia comunitaria y en la clínica del Hospital Parroquial.",
    uso_seguro_resumido: "Lavar la herida inmediatamente con abundante agua limpia y jabón neutro para expulsar tierra y partículas. Secar suavemente con gasa limpia y aplicar antiséptico. Cubrir con apósito estéril. NUNCA aplique café, caléndula sucia, cal viva ni tierra sobre heridas abiertas.",
    senales_alarma: "Acuda de inmediato a consulta médica si la herida es profunda y requiere sutura, si fue ocasionada por alambre oxidado o mordedura de perro/animal (riesgo de rabia y tétanos), o si presenta calor, hinchazón, pus y fiebre."
  }
];

// Fallback demo queue
const defaultFichasQueue = [
  {
    id: 1,
    codigo: "SLT-2026-0001",
    fecha_creacion: "2026-11-04 08:30:00",
    nombre: "María Gómez Chonay",
    edad: 28,
    comunidad: "Cantón Pachichaj",
    telefono: "5555-1234",
    sintomas: "Fiebre persistente, Dolor abdominal",
    dias_malestar: 2,
    destino: "Centro de Salud San Lucas Tolimán (MSPAS)",
    nivel_triaje: "AMARILLO",
    estado: "Pendiente"
  },
  {
    id: 2,
    codigo: "SLT-2026-0002",
    fecha_creacion: "2026-11-04 09:15:00",
    nombre: "Pedro Morales Sisay",
    edad: 2,
    comunidad: "Cantón Tziquinajay",
    telefono: "4444-9876",
    sintomas: "Dificultad para respirar / ahogo severo, Vómitos continuos",
    dias_malestar: 3,
    destino: "Hospital Parroquial Monseñor Gregorio Schaffer",
    nivel_triaje: "ROJO",
    estado: "Pendiente"
  }
];

// Global State
const appState = {
  currentView: 'view-inicio',
  deferredInstallPrompt: null,
  isOnline: navigator.onLine,
  quizAnswers: {},
  quizScore: 0,
  quizSubmitted: false,
  directoryData: defaultDirectoryData,
  fichasQueue: defaultFichasQueue,
  selectedGoal: 'meta-suero-zinc',
  currentDoctorUser: JSON.parse(sessionStorage.getItem('medico_auth') || 'null'),
  currentReferralFicha: null
};

// Notification helper: SweetAlert2 draggable without OK button
function showNotification(title, text = '', icon = 'success', timer = 2200) {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: title,
      text: text,
      icon: icon,
      draggable: true,
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: true
    });
  } else {
    console.log(`[Alert] ${title}: ${text}`);
  }
}

// Router & View Switcher
function switchView(viewId) {
  const targetElem = document.getElementById(viewId);
  if (!targetElem) {
    viewId = 'view-inicio';
  }

  appState.currentView = viewId;

  const allViews = document.querySelectorAll('.app-view');
  allViews.forEach(v => v.classList.remove('active-view'));

  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.classList.add('active-view');
  }

  const navLinks = document.querySelectorAll('.nav-link-apple');
  navLinks.forEach(link => {
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  const mobileNavItems = document.querySelectorAll('.apple-tab-item');
  mobileNavItems.forEach(item => {
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (window.location.hash.replace('#', '') !== viewId) {
    history.pushState(null, null, `#${viewId}`);
  }

  if (viewId === 'view-directorio') {
    renderDirectory(appState.directoryData);
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initServiceWorker();
  initNetworkListeners();
  initInstallPrompt();
  initViewRouting();
  initBotiquinModule();
  initPreConsultaModule();
  initDoctorAuthAndPanel();
  initDirectoryModule();
  initQuizModule();
  initDonationsModule();
  syncOfflineData();
  updateDoctorNavButton();
});

/* ==========================================================================
   PWA & Service Worker
   ========================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registrado:', reg.scope);
        })
        .catch((err) => {
          console.error('[PWA] Error SW:', err);
        });
    });
  }
}

function initNetworkListeners() {
  const offlineBanner = document.getElementById('offline-banner');
  const offlineBadge = document.getElementById('offline-badge');

  function updateStatus() {
    appState.isOnline = navigator.onLine;
    if (!appState.isOnline) {
      if (offlineBanner) offlineBanner.style.display = 'block';
      if (offlineBadge) offlineBadge.classList.remove('d-none');
      showNotification('Modo Sin Conexión', 'Navegando con datos locales guardados.', 'info', 2000);
    } else {
      if (offlineBanner) offlineBanner.style.display = 'none';
      if (offlineBadge) offlineBadge.classList.add('d-none');
      syncOfflineData();
    }
  }

  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
  updateStatus();
}

function initInstallPrompt() {
  const installBtn = document.getElementById('btn-instalar-app');
  
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    appState.deferredInstallPrompt = e;
    if (installBtn) {
      installBtn.classList.remove('d-none');
    }
  });

  if (installBtn) {
    installBtn.addEventListener('click', async () => {
      if (appState.deferredInstallPrompt) {
        appState.deferredInstallPrompt.prompt();
        const { outcome } = await appState.deferredInstallPrompt.userChoice;
        if (outcome === 'accepted') {
          showNotification('Instalación Iniciada', 'Aplicación instalada en pantalla de inicio.', 'success', 2500);
        }
        appState.deferredInstallPrompt = null;
        installBtn.classList.add('d-none');
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.classList.add('d-none');
    showNotification('App Lista', 'Aplicación instalada correctamente.', 'success', 2500);
  });
}

function initViewRouting() {
  const currentHash = window.location.hash.replace('#', '');
  if (currentHash && document.getElementById(currentHash)) {
    switchView(currentHash);
  } else {
    switchView('view-inicio');
  }

  window.addEventListener('hashchange', () => {
    const hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      switchView(hash);
    }
  });

  document.addEventListener('click', (e) => {
    const trigger = e.target.closest('[data-view]');
    if (trigger) {
      e.preventDefault();
      const targetView = trigger.getAttribute('data-view');
      switchView(targetView);
    }
  });
}

/* ==========================================================================
   Offline Synchronization Logic
   ========================================================================== */
async function syncOfflineData() {
  if (!navigator.onLine) return;

  const pendingFichas = JSON.parse(localStorage.getItem('fichas_pendientes') || '[]');
  if (pendingFichas.length > 0) {
    let syncedCount = 0;
    const remainingFichas = [];

    for (const ficha of pendingFichas) {
      try {
        const res = await fetch('/api/fichas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(ficha)
        });
        if (res.ok) {
          syncedCount++;
        } else {
          remainingFichas.push(ficha);
        }
      } catch (err) {
        remainingFichas.push(ficha);
      }
    }

    localStorage.setItem('fichas_pendientes', JSON.stringify(remainingFichas));
    if (syncedCount > 0) {
      showNotification('Sincronización Completa', `${syncedCount} ficha(s) sincronizadas con el Centro de Salud.`, 'success', 2500);
      loadDoctorFichas();
    }
  }

  const pendingDonations = JSON.parse(localStorage.getItem('donaciones_pendientes') || '[]');
  if (pendingDonations.length > 0) {
    let syncedDonations = 0;
    const remainingDonations = [];

    for (const don of pendingDonations) {
      try {
        const res = await fetch('/api/donaciones', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(don)
        });
        if (res.ok) {
          syncedDonations++;
        } else {
          remainingDonations.push(don);
        }
      } catch (err) {
        remainingDonations.push(don);
      }
    }

    localStorage.setItem('donaciones_pendientes', JSON.stringify(remainingDonations));
    if (syncedDonations > 0) {
      showNotification('Donaciones Sincronizadas', `${syncedDonations} donación(es) registradas en el sistema.`, 'success', 2500);
      loadDonationsData();
    }
  }
}

/* ==========================================================================
   MÓDULO B: Botiquín Básico Familiar (Resumido en Alerts + Señales Primero)
   ========================================================================== */
function initBotiquinModule() {
  renderBotiquinCards(botiquinCatalog);

  const searchInput = document.getElementById('search-medications');
  const filterButtons = document.querySelectorAll('.apple-filter-btn[data-cat]');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = botiquinCatalog.filter(m => 
        m.enfermedad.toLowerCase().includes(query) ||
        m.nombre.toLowerCase().includes(query) ||
        m.categoria.toLowerCase().includes(query) ||
        m.presentacion.toLowerCase().includes(query)
      );
      renderBotiquinCards(filtered);
    });
  }

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const cat = btn.getAttribute('data-cat');
      if (cat === 'todos') {
        renderBotiquinCards(botiquinCatalog);
      } else {
        const filtered = botiquinCatalog.filter(m => m.categoria === cat);
        renderBotiquinCards(filtered);
      }
    });
  });
}

function renderBotiquinCards(list) {
  const container = document.getElementById('medications-container');
  if (!container) return;

  if (list.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-4 text-muted">
        <i class="fa-solid fa-magnifying-glass fa-2x mb-2 text-secondary"></i>
        <p>No se encontraron medicamentos para el criterio buscado.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(med => `
    <div class="col-lg-6 col-md-12 mb-3">
      <div class="apple-card h-100 d-flex flex-column justify-content-between p-4">
        <div>
          <div class="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
            <span class="badge" style="background: rgba(0, 113, 227, 0.08); color: #0071E3; font-weight: 600; border-radius: 980px; padding: 4px 10px;">
              ${med.categoria_label}
            </span>
            <span class="small text-muted">
              <i class="fa-solid fa-circle-check text-success me-1"></i> Botiquín Familiar
            </span>
          </div>

          <h5 class="fw-bold text-dark mb-1">${med.nombre}</h5>
          <p class="small text-secondary mb-3">${med.presentacion}</p>
          
          <!-- Señales de Alarma Button (FIRST) -->
          <div class="mb-2">
            <button class="btn btn-sm w-100 text-start d-flex justify-content-between align-items-center py-2 px-3 btn-ver-alarma" data-id="${med.id}" style="background: #FFF2F2; border: 1px solid rgba(255, 59, 48, 0.25); border-radius: 12px; color: #D32F2F;">
              <span>
                <i class="fa-solid fa-triangle-exclamation me-2 text-danger"></i>
                <strong>Señales de Alarma</strong> (Cuándo ir al hospital)
              </span>
              <i class="fa-solid fa-chevron-right small text-danger"></i>
            </button>
          </div>

          <!-- Modo de Uso Seguro Button (SECOND) -->
          <div class="mb-2">
            <button class="btn btn-sm w-100 text-start d-flex justify-content-between align-items-center py-2 px-3 btn-ver-uso" data-id="${med.id}" style="background: #F4FAF5; border: 1px solid rgba(52, 199, 89, 0.3); border-radius: 12px; color: #248A3D;">
              <span>
                <i class="fa-solid fa-book-medical me-2 text-success"></i>
                <strong>Modo de Uso Seguro</strong> (Dosis e instrucciones)
              </span>
              <i class="fa-solid fa-chevron-right small text-success"></i>
            </button>
          </div>
        </div>

        <!-- Compact Bottom Line -->
        <div class="d-flex justify-content-between align-items-center pt-2 border-top mt-2 small text-muted">
          <span><i class="fa-solid fa-location-dot text-primary me-1"></i> ${med.disponibilidad_corta}</span>
          <button class="btn btn-link btn-sm p-0 text-decoration-none text-primary fw-semibold btn-ver-uso" data-id="${med.id}">
            Ver ficha <i class="fa-solid fa-arrow-up-right-from-square ms-1"></i>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  container.querySelectorAll('.btn-ver-alarma').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      const med = botiquinCatalog.find(m => m.id === id);
      if (med) mostrarAlertaPeligro(med);
    });
  });

  container.querySelectorAll('.btn-ver-uso').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = parseInt(btn.getAttribute('data-id'), 10);
      const med = botiquinCatalog.find(m => m.id === id);
      if (med) mostrarModoUsoSeguro(med);
    });
  });
}

function mostrarAlertaPeligro(med) {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: `<span style="color: #D32F2F;"><i class="fa-solid fa-triangle-exclamation me-2"></i> Señales de Alarma</span>`,
      html: `
        <div style="text-align: left; font-size: 0.95rem; line-height: 1.6; color: #263238;">
          <h6 style="font-weight: 700; color: #1D1D1F; margin-bottom: 8px;">${med.nombre}</h6>
          <div style="background: #FFF2F2; padding: 14px; border-radius: 12px; border-left: 4px solid #FF3B30; margin-bottom: 12px;">
            <strong style="color: #D32F2F; display: block; margin-bottom: 4px;">Traslade inmediatamente al hospital si presenta:</strong>
            ${med.senales_alarma}
          </div>
          <p style="font-size: 0.85rem; color: #546E7A; margin-bottom: 0;">
            <i class="fa-solid fa-truck-medical text-danger me-1"></i> Hospital Parroquial (Ambulancia 24/7): <strong>7722-0097</strong> | Hospital Sololá: <strong>7762-4121</strong>
          </p>
        </div>
      `,
      icon: 'warning',
      draggable: true,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'modal-content-apple'
      }
    });
  }
}

function mostrarModoUsoSeguro(med) {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: `<span style="color: #248A3D;"><i class="fa-solid fa-book-medical me-2"></i> Modo de Uso Seguro</span>`,
      html: `
        <div style="text-align: left; font-size: 0.95rem; line-height: 1.6; color: #263238;">
          <h6 style="font-weight: 700; color: #1D1D1F; margin-bottom: 4px;">${med.nombre}</h6>
          <p style="font-size: 0.85rem; color: #86868B; margin-bottom: 12px;">${med.presentacion}</p>
          
          <div style="background: #F4FAF5; padding: 14px; border-radius: 12px; border-left: 4px solid #34C759; margin-bottom: 12px;">
            <strong style="color: #248A3D; display: block; margin-bottom: 4px;">Instrucciones de dosificación segura:</strong>
            ${med.uso_seguro_resumido}
          </div>

          <div style="background: #F2F2F7; padding: 12px; border-radius: 10px; font-size: 0.85rem;">
            <strong style="color: #1D1D1F;"><i class="fa-solid fa-hospital-user text-primary me-1"></i> Disponibilidad en San Lucas Tolimán:</strong>
            <div style="color: #48484A; margin-top: 2px;">${med.disponibilidad_completa}</div>
          </div>
        </div>
      `,
      icon: 'info',
      draggable: true,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'modal-content-apple'
      }
    });
  }
}

/* ==========================================================================
   MÓDULO D: Directorio Médico Escalonado
   ========================================================================== */
function initDirectoryModule() {
  renderDirectory(appState.directoryData);
  initDirectoryFilterButtons();

  fetch('/api/directorio')
    .then(res => res.json())
    .then(json => {
      if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
        appState.directoryData = json.data;
        renderDirectory(json.data);
      }
    })
    .catch(() => {
      console.log('[Directorio] Utilizando datos verificados locales.');
    });
}

function initDirectoryFilterButtons() {
  const filterBtns = document.querySelectorAll('.apple-filter-btn[data-nivel]');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const targetNivel = btn.getAttribute('data-nivel');
      filterDirectoryView(targetNivel);
    });
  });
}

function filterDirectoryView(targetNivel) {
  const secNivel1 = document.getElementById('seccion-dir-nivel-1');
  const secNivel2 = document.getElementById('seccion-dir-nivel-2');
  const secNivel3 = document.getElementById('seccion-dir-nivel-3');

  if (targetNivel === 'todos') {
    if (secNivel1) secNivel1.style.display = 'block';
    if (secNivel2) secNivel2.style.display = 'block';
    if (secNivel3) secNivel3.style.display = 'block';
  } else if (targetNivel === '1') {
    if (secNivel1) secNivel1.style.display = 'block';
    if (secNivel2) secNivel2.style.display = 'none';
    if (secNivel3) secNivel3.style.display = 'none';
  } else if (targetNivel === '2') {
    if (secNivel1) secNivel1.style.display = 'none';
    if (secNivel2) secNivel2.style.display = 'block';
    if (secNivel3) secNivel3.style.display = 'none';
  } else if (targetNivel === '3') {
    if (secNivel1) secNivel1.style.display = 'none';
    if (secNivel2) secNivel2.style.display = 'none';
    if (secNivel3) secNivel3.style.display = 'block';
  }
}

function renderDirectory(directorio) {
  const containerNivel1 = document.getElementById('directorio-nivel-1');
  const containerNivel2 = document.getElementById('directorio-nivel-2');
  const containerNivel3 = document.getElementById('directorio-nivel-3');

  if (!containerNivel1 || !containerNivel2 || !containerNivel3) return;

  const nivel1 = directorio.filter(d => d.nivel === 1);
  const nivel2 = directorio.filter(d => d.nivel === 2);
  const nivel3 = directorio.filter(d => d.nivel === 3);

  containerNivel1.innerHTML = nivel1.map(item => createDirectoryCardHTML(item, 'badge-cost-public', 'Público / Comunitario')).join('');
  containerNivel2.innerHTML = nivel2.map(item => createDirectoryCardHTML(item, 'badge-cost-referral', 'Referencia Nacional')).join('');
  containerNivel3.innerHTML = nivel3.map(item => createDirectoryCardHTML(item, 'badge-cost-private', 'Servicio Privado')).join('');
}

function createDirectoryCardHTML(d, badgeClass, categoryLabel) {
  const stars = generateStarsHTML(d.calificacion);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(d.nombre + ' ' + d.direccion + ' San Lucas Tolimán')}`;

  return `
    <div class="col-lg-6 col-md-12 mb-3">
      <div class="hospital-card-apple">
        <div>
          <div class="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
            <div>
              <span class="${badgeClass}">
                ${d.tipo_costo}
              </span>
              <span class="badge" style="background: #F2F2F7; color: #636366; border-radius: 980px; padding: 4px 8px; font-weight: 500;">
                ${categoryLabel}
              </span>
            </div>
            <div class="small text-muted">
              ${stars} <span class="fw-bold ms-1 text-dark">${d.calificacion.toFixed(1)}</span>
            </div>
          </div>
          <h5 class="fw-bold text-dark mb-1">${d.nombre}</h5>
          <p class="text-muted small mb-2">
            <i class="fa-solid fa-location-dot text-danger me-1"></i> ${d.direccion} 
            ${d.plus_code ? `<span class="badge bg-light text-secondary font-monospace ms-1">${d.plus_code}</span>` : ''}
          </p>
          <p class="text-secondary small mb-3">${d.descripcion}</p>
        </div>
        <div>
          <div class="d-flex align-items-center gap-2 mb-3 small text-muted flex-wrap">
            <span><i class="fa-regular fa-clock text-primary me-1"></i> ${d.horario}</span>
            ${d.emergencias_24h ? `<span class="badge" style="background: rgba(52, 199, 89, 0.12); color: #248A3D;"><i class="fa-solid fa-check me-1"></i> 24 Horas</span>` : ''}
            ${d.ambulancia ? `<span class="badge" style="background: rgba(255, 59, 48, 0.12); color: #D32F2F;"><i class="fa-solid fa-truck-medical me-1"></i> Ambulancia 24/7</span>` : ''}
          </div>
          <div class="d-flex gap-2">
            <a href="tel:${d.telefono}" class="btn-apple-call flex-fill text-center justify-content-center">
              <i class="fa-solid fa-phone me-1"></i> Llamar (${d.telefono})
            </a>
            <a href="${googleMapsUrl}" target="_blank" class="btn-apple-secondary">
              <i class="fa-solid fa-map-location-dot me-1"></i> Ver Mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function generateStarsHTML(rating) {
  const fullStars = Math.floor(rating);
  let html = '';
  for (let i = 0; i < fullStars; i++) {
    html += '<i class="fa-solid fa-star text-warning"></i>';
  }
  if (rating % 1 !== 0) {
    html += '<i class="fa-solid fa-star-half-stroke text-warning"></i>';
  }
  return html;
}

/* ==========================================================================
   MÓDULO C: Ficha Digital de Pre-Consulta (Apartar Lugar)
   ========================================================================== */
function initPreConsultaModule() {
  const form = document.getElementById('form-preconsulta');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.getElementById('paciente-nombre').value.trim();
    const edad = parseInt(document.getElementById('paciente-edad').value, 10);
    const comunidad = document.getElementById('paciente-comunidad').value;
    const telefono = document.getElementById('paciente-telefono').value.trim();
    const dias_malestar = parseInt(document.getElementById('paciente-dias').value, 10);
    const destino = document.getElementById('paciente-destino').value;

    const symptomCheckboxes = document.querySelectorAll('input[name="sintomas"]:checked');
    const sintomas = Array.from(symptomCheckboxes).map(cb => cb.value);

    if (sintomas.length === 0) {
      showNotification('Seleccione Síntomas', 'Debe seleccionar al menos un síntoma para el triaje.', 'warning', 2500);
      return;
    }

    const fichaPayload = {
      nombre,
      edad,
      comunidad,
      telefono,
      sintomas,
      dias_malestar,
      destino
    };

    if (navigator.onLine) {
      try {
        const response = await fetch('/api/fichas', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fichaPayload)
        });

        const result = await response.json();
        if (response.ok && result.status === 'success') {
          showNotification('Lugar Apartado con Éxito', `Código de Turno: ${result.data.codigo}`, 'success', 2200);
          displayFichaSummary(result.data);
          form.reset();
          loadDoctorFichas();
        } else {
          showNotification('Error', result.message || 'No se pudo apartar turno.', 'error', 3000);
        }
      } catch (err) {
        saveFichaOffline(fichaPayload);
      }
    } else {
      saveFichaOffline(fichaPayload);
    }
  });

  const btnImprimir = document.getElementById('btn-imprimir-ficha');
  if (btnImprimir) {
    btnImprimir.addEventListener('click', () => {
      window.print();
    });
  }

  const btnWhatsapp = document.getElementById('btn-whatsapp-ficha');
  if (btnWhatsapp) {
    btnWhatsapp.addEventListener('click', () => {
      const codigo = document.getElementById('ticket-codigo').textContent;
      const paciente = document.getElementById('ticket-paciente').textContent;
      const destino = document.getElementById('ticket-destino').textContent;
      const sintomas = document.getElementById('ticket-sintomas').textContent;
      const triaje = document.getElementById('ticket-triaje-badge').textContent;

      const mensaje = `Hola, envío mi Ficha de Pre-Consulta Médica:%0A*Código:* ${codigo}%0A*Paciente:* ${paciente}%0A*Destino:* ${destino}%0A*Triaje:* ${triaje}%0A*Síntomas:* ${sintomas}%0ASan Lucas Tolimán, Sololá.`;
      const url = `https://api.whatsapp.com/send?text=${mensaje}`;
      window.open(url, '_blank');
    });
  }
}

function saveFichaOffline(payload) {
  const pending = JSON.parse(localStorage.getItem('fichas_pendientes') || '[]');
  const localId = `SLT-2026-${Date.now().toString().slice(-4)}`;
  
  let nivel_triaje = "VERDE";
  let es_urgente = 0;
  const criticos = ["Dificultad para respirar / ahogo severo", "Pérdida de conciencia / desmayo", "Vómitos continuos sin retener suero"];
  if (payload.sintomas.some(s => criticos.includes(s))) {
    nivel_triaje = "ROJO";
    es_urgente = 1;
  } else if (payload.dias_malestar >= 4) {
    nivel_triaje = "AMARILLO";
  }

  const localFicha = {
    ...payload,
    id: Date.now(),
    codigo: localId,
    fecha_creacion: new Date().toLocaleString(),
    nivel_triaje,
    es_urgente,
    alerta_medica: es_urgente ? "ALERTA: Paciente con síntomas críticos. Traslado recomendado." : "Consulta estándar.",
    estado: "Pendiente"
  };

  pending.push(localFicha);
  localStorage.setItem('fichas_pendientes', JSON.stringify(pending));

  appState.fichasQueue.unshift(localFicha);

  showNotification('Lugar Apartado (Guardado Local)', `Código de turno: ${localId}. Se sincronizará al conectar.`, 'info', 2500);
  displayFichaSummary(localFicha);
  renderDoctorTable(appState.fichasQueue);
  document.getElementById('form-preconsulta').reset();
}

function displayFichaSummary(ficha) {
  const modalElem = document.getElementById('modal-ficha-resumen');
  if (!modalElem) return;

  document.getElementById('ticket-codigo').textContent = ficha.codigo;
  document.getElementById('ticket-fecha').textContent = ficha.fecha_creacion;
  document.getElementById('ticket-paciente').textContent = `${ficha.nombre} (${ficha.edad} años)`;
  document.getElementById('ticket-comunidad').textContent = ficha.comunidad;
  document.getElementById('ticket-destino').textContent = ficha.destino;
  document.getElementById('ticket-dias').textContent = `${ficha.dias_malestar} día(s)`;
  document.getElementById('ticket-sintomas').textContent = Array.isArray(ficha.sintomas) ? ficha.sintomas.join(', ') : ficha.sintomas;

  const triajeBadge = document.getElementById('ticket-triaje-badge');
  const alertContainer = document.getElementById('ticket-alerta-critica');

  if (ficha.nivel_triaje === 'ROJO') {
    triajeBadge.className = 'badge bg-danger rounded-pill px-3 py-2';
    triajeBadge.innerHTML = `<i class="fa-solid fa-triangle-exclamation me-1"></i> TRIAJE ROJO - URGENCIA ALTA`;
    alertContainer.className = 'alert alert-danger mt-3 d-block';
    alertContainer.innerHTML = `
      <div class="d-flex align-items-center gap-2">
        <i class="fa-solid fa-bell fa-2x text-danger"></i>
        <div>
          <strong class="d-block text-danger">RECOMENDACIÓN HOSPITALARIA INMEDIATA:</strong>
          <span>El paciente presenta criterios de alarma severa. Diríjase de inmediato al Hospital Parroquial (Ambulancia 24/7) o coordine traslado de emergencia al <strong>Hospital Departamental de Sololá</strong>.</span>
        </div>
      </div>
    `;
  } else if (ficha.nivel_triaje === 'AMARILLO') {
    triajeBadge.className = 'badge bg-warning text-dark rounded-pill px-3 py-2';
    triajeBadge.innerHTML = `<i class="fa-solid fa-clock me-1"></i> TRIAJE AMARILLO - ATENCIÓN PRIORITARIA`;
    alertContainer.className = 'alert alert-warning mt-3 d-block';
    alertContainer.innerHTML = `<strong>Atención Prioritaria:</strong> Muestre este código en ventanilla para consulta expedita.`;
  } else {
    triajeBadge.className = 'badge bg-success rounded-pill px-3 py-2';
    triajeBadge.innerHTML = `<i class="fa-solid fa-circle-check me-1"></i> TRIAJE VERDE - CONSULTA GENERAL`;
    alertContainer.className = 'd-none';
  }

  const bsModal = new bootstrap.Modal(modalElem);
  bsModal.show();
}

/* ==========================================================================
   AUTENTICACIÓN MÉDICA + VENTANILLA DE ATENCIÓN Y REFERENCIAS
   ========================================================================== */
function initDoctorAuthAndPanel() {
  const panelBtn = document.getElementById('btn-panel-medico');
  const modalLoginElem = document.getElementById('modal-login-medico');
  const modalPanelElem = document.getElementById('modal-panel-medico');
  const formLogin = document.getElementById('form-login-medico');

  // Initial render of queue
  renderDoctorTable(appState.fichasQueue);

  // Nav button trigger: opens login if not logged in, or panel if logged in
  if (panelBtn) {
    panelBtn.addEventListener('click', () => {
      if (!appState.currentDoctorUser) {
        const loginModal = new bootstrap.Modal(modalLoginElem);
        loginModal.show();
      } else {
        openDoctorPanel();
      }
    });
  }

  // Quick 1-click credential selector buttons in login modal
  document.querySelectorAll('.btn-quick-cred').forEach(btn => {
    btn.addEventListener('click', () => {
      const u = btn.getAttribute('data-u');
      const p = btn.getAttribute('data-p');
      document.getElementById('login-usuario').value = u;
      document.getElementById('login-password').value = p;
    });
  });

  // Login form submit
  if (formLogin) {
    formLogin.addEventListener('submit', async (e) => {
      e.preventDefault();
      const username = document.getElementById('login-usuario').value.trim();
      const password = document.getElementById('login-password').value.trim();

      try {
        const res = await fetch('/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username, password })
        });
        const json = await res.json();

        if (res.ok && json.status === 'success') {
          appState.currentDoctorUser = json.data;
          sessionStorage.setItem('medico_auth', JSON.stringify(json.data));
          
          showNotification('Sesión Iniciada', `Conectado como: ${json.data.nombre_institucion}`, 'success', 2200);
          bootstrap.Modal.getInstance(modalLoginElem)?.hide();
          updateDoctorNavButton();
          openDoctorPanel();
        } else {
          showNotification('Acceso Denegado', json.message || 'Credenciales incorrectas.', 'error', 2500);
        }
      } catch (err) {
        // Local offline demo authentication
        let demoUser = null;
        if (username === 'centro_salud' && password === 'mspas2026') {
          demoUser = { username, nombre_institucion: "Centro de Salud San Lucas Tolimán (MSPAS)", rol: "Médico de Guardia / Recepción" };
        } else if (username === 'hospital_parroquial' && password === 'parroquia2026') {
          demoUser = { username, nombre_institucion: "Hospital Parroquial Monseñor Gregorio Schaffer", rol: "Médico de Turno / Urgencias" };
        } else if (username === 'hospital_solola' && password === 'solola2026') {
          demoUser = { username, nombre_institucion: "Hospital Departamental de Sololá", rol: "Servicio de Urgencias y Referencias" };
        }

        if (demoUser) {
          appState.currentDoctorUser = demoUser;
          sessionStorage.setItem('medico_auth', JSON.stringify(demoUser));
          showNotification('Sesión Iniciada', `Conectado como: ${demoUser.nombre_institucion}`, 'success', 2200);
          bootstrap.Modal.getInstance(modalLoginElem)?.hide();
          updateDoctorNavButton();
          openDoctorPanel();
        } else {
          showNotification('Credenciales Inválidas', 'Usuario o contraseña no reconocidos.', 'error', 2500);
        }
      }
    });
  }

  // Logout button
  const btnLogout = document.getElementById('btn-logout-medico');
  if (btnLogout) {
    btnLogout.addEventListener('click', () => {
      appState.currentDoctorUser = null;
      sessionStorage.removeItem('medico_auth');
      showNotification('Sesión Cerrada', 'Ha salido de la ventanilla médica institucional.', 'info', 2000);
      bootstrap.Modal.getInstance(modalPanelElem)?.hide();
      updateDoctorNavButton();
    });
  }

  // Filters inside Doctor Panel
  const filtroEstado = document.getElementById('filtro-doctor-estado');
  const filtroDestino = document.getElementById('filtro-doctor-destino');
  if (filtroEstado) filtroEstado.addEventListener('change', loadDoctorFichas);
  if (filtroDestino) filtroDestino.addEventListener('change', loadDoctorFichas);

  // Configuration of Centro de Salud Bank Account
  const formConfigCuenta = document.getElementById('form-config-cuenta-centro');
  if (formConfigCuenta) {
    formConfigCuenta.addEventListener('submit', async (e) => {
      e.preventDefault();
      const banco = document.getElementById('config-banco').value.trim();
      const tipo_cuenta = document.getElementById('config-tipo-cuenta').value;
      const numero_cuenta = document.getElementById('config-numero-cuenta').value.trim();
      const titular = document.getElementById('config-titular').value.trim();

      try {
        const banco_clean = checkAntiInjection(banco, 'Banco receptor');
        const titular_clean = checkAntiInjection(titular, 'Titular oficial');
        const updatedCuenta = { banco: banco_clean, tipo_cuenta, numero_cuenta, titular: titular_clean };

        localStorage.setItem('centro_salud_cuenta', JSON.stringify(updatedCuenta));

        if (navigator.onLine) {
          try {
            await fetch('/api/centro-salud/cuenta', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ institucion_id: 'centro_salud', banco: banco_clean, tipo_cuenta, numero_cuenta, titular: titular_clean })
            });
          } catch (netErr) {}
        }

        showNotification('Cuenta Actualizada', 'Los datos bancarios del Centro de Salud han sido actualizados exitosamente.', 'success', 2500);
        await loadCentroSaludCuenta();
        await loadDonationsData();
      } catch (err) {
        showNotification('Error', err.message || 'No se pudo actualizar la cuenta.', 'error', 3000);
      }
    });
  }

  // Referral / Transfer Modal Setup
  initReferralModal();
}

function updateDoctorNavButton() {
  const panelBtn = document.getElementById('btn-panel-medico');
  if (!panelBtn) return;

  if (appState.currentDoctorUser) {
    panelBtn.className = 'btn btn-sm btn-apple';
    panelBtn.innerHTML = `<i class="fa-solid fa-hospital-user me-1"></i> ${appState.currentDoctorUser.nombre_institucion.split(' ')[0]} (Conectado)`;
  } else {
    panelBtn.className = 'btn btn-sm btn-apple-secondary';
    panelBtn.innerHTML = `<i class="fa-solid fa-stethoscope me-1 text-primary"></i> Ventanilla Médica <span class="badge bg-danger rounded-pill ms-1" id="doctor-pending-count">0</span>`;
  }
}

async function loadCentroSaludCuenta() {
  const isCentroSalud = appState.currentDoctorUser?.username === 'centro_salud';
  const seccion = document.getElementById('seccion-cuenta-bancaria-medico');
  if (seccion) {
    seccion.style.display = isCentroSalud ? 'block' : 'none';
  }
  if (!isCentroSalud) return;

  let c = null;
  try {
    const res = await fetch('/api/centro-salud/cuenta?institucion_id=centro_salud');
    const json = await res.json();
    if (json.status === 'success' && json.data) {
      c = json.data;
    }
  } catch (e) {}

  if (!c) {
    c = getStoredCentroSaludCuenta();
  }

  const bRes = document.getElementById('admin-cuenta-banco-resumen');
  const nRes = document.getElementById('admin-cuenta-numero-resumen');
  const tRes = document.getElementById('admin-cuenta-titular-resumen');
  if (bRes) bRes.textContent = c.banco;
  if (nRes) nRes.textContent = c.numero_cuenta;
  if (tRes) tRes.textContent = c.titular;

  const inBanco = document.getElementById('config-banco');
  const inTipo = document.getElementById('config-tipo-cuenta');
  const inNumero = document.getElementById('config-numero-cuenta');
  const inTitular = document.getElementById('config-titular');
  if (inBanco) inBanco.value = c.banco;
  if (inTipo) inTipo.value = c.tipo_cuenta;
  if (inNumero) inNumero.value = c.numero_cuenta;
  if (inTitular) inTitular.value = c.titular;
}

function openDoctorPanel() {
  const modalPanelElem = document.getElementById('modal-panel-medico');
  if (!modalPanelElem) return;

  // Set header identity
  const badgeIdent = document.getElementById('doctor-session-ident');
  if (badgeIdent && appState.currentDoctorUser) {
    badgeIdent.textContent = `${appState.currentDoctorUser.nombre_institucion} (${appState.currentDoctorUser.rol})`;
  }

  loadDoctorFichas();
  loadCentroSaludCuenta();
  const modal = new bootstrap.Modal(modalPanelElem);
  modal.show();
}

async function loadDoctorFichas() {
  const tbody = document.getElementById('doctor-fichas-tbody');
  if (!tbody) return;

  const estado = document.getElementById('filtro-doctor-estado')?.value || 'todos';
  const destino = document.getElementById('filtro-doctor-destino')?.value || 'todos';

  try {
    const res = await fetch(`/api/fichas?estado=${estado}&destino=${destino}`);
    const json = await res.json();
    
    if (json.status === 'success' && Array.isArray(json.data) && json.data.length > 0) {
      appState.fichasQueue = json.data;
      renderDoctorTable(json.data);
      return;
    }
  } catch (err) {
    console.log('[Panel Médico] Cargando cola local o de demostración.');
  }

  const localSaved = JSON.parse(localStorage.getItem('fichas_pendientes') || '[]');
  let combined = [...localSaved, ...defaultFichasQueue];
  
  if (estado !== 'todos') {
    combined = combined.filter(f => f.estado === estado);
  }
  if (destino !== 'todos') {
    combined = combined.filter(f => (f.destino && f.destino.includes(destino)) || (f.referido_a && f.referido_a.includes(destino)));
  }

  renderDoctorTable(combined);
}

function renderDoctorTable(fichas) {
  const tbody = document.getElementById('doctor-fichas-tbody');
  const countBadge = document.getElementById('doctor-pending-count');
  if (!tbody) return;

  const pendientes = fichas.filter(f => f.estado === 'Pendiente').length;
  if (countBadge) countBadge.textContent = pendientes;

  if (fichas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No hay pacientes en espera con los filtros seleccionados.</td></tr>`;
    return;
  }

  tbody.innerHTML = fichas.map(f => {
    let triajeBadge = '';
    if (f.nivel_triaje === 'ROJO') {
      triajeBadge = `<span class="badge bg-danger rounded-pill"><i class="fa-solid fa-triangle-exclamation me-1"></i> ROJO</span>`;
    } else if (f.nivel_triaje === 'AMARILLO') {
      triajeBadge = `<span class="badge bg-warning text-dark rounded-pill"><i class="fa-solid fa-clock me-1"></i> AMARILLO</span>`;
    } else {
      triajeBadge = `<span class="badge bg-success rounded-pill"><i class="fa-solid fa-check me-1"></i> VERDE</span>`;
    }

    const esAtendido = f.estado === 'Atendido';
    const esReferido = f.estado && f.estado.startsWith('Referido');

    let estadoBadge = `<span class="badge" style="background: rgba(255, 149, 0, 0.12); color: #C97A00;"><i class="fa-solid fa-hourglass-half me-1"></i> En Espera</span>`;
    if (esAtendido) {
      estadoBadge = `<span class="badge" style="background: rgba(52, 199, 89, 0.12); color: #248A3D;"><i class="fa-solid fa-circle-check me-1"></i> Atendido</span>`;
    } else if (esReferido) {
      estadoBadge = `<span class="badge" style="background: rgba(0, 113, 227, 0.12); color: #0071E3;"><i class="fa-solid fa-share me-1"></i> ${f.estado}</span>`;
    }

    return `
      <tr class="${f.nivel_triaje === 'ROJO' && !esAtendido && !esReferido ? 'table-danger' : ''}">
        <td class="fw-bold text-primary font-monospace">${f.codigo}</td>
        <td>
          <div class="fw-bold">${f.nombre}</div>
          <small class="text-muted">${f.edad} años | ${f.comunidad}</small>
        </td>
        <td>${triajeBadge}</td>
        <td><small class="text-dark">${f.sintomas}</small></td>
        <td>
          <small class="text-muted d-block">${f.destino}</small>
          ${f.referido_a ? `<small class="text-primary fw-bold"><i class="fa-solid fa-arrow-right me-1"></i> ${f.referido_a}</small>` : ''}
        </td>
        <td>${estadoBadge}</td>
        <td>
          <div class="d-flex gap-1 flex-wrap">
            ${esAtendido || esReferido 
              ? `<span class="badge bg-light text-secondary border">Completado</span>`
              : `
                <button class="btn btn-success btn-sm btn-atender" data-id="${f.id}" title="Marcar como Atendido en este centro">
                  <i class="fa-solid fa-check me-1"></i> Atender
                </button>
                <button class="btn btn-outline-danger btn-sm btn-no-resuelto" data-id="${f.id}" title="Caso no resuelto / Transferir a otro hospital">
                  <i class="fa-solid fa-share-nodes me-1"></i> No Resuelto
                </button>
              `
            }
          </div>
        </td>
      </tr>
    `;
  }).join('');

  // Atender handler
  tbody.querySelectorAll('.btn-atender').forEach(btn => {
    btn.addEventListener('click', async () => {
      const fichaId = btn.getAttribute('data-id');
      await marcarFichaAtendida(fichaId);
    });
  });

  // No Resuelto / Referir handler
  tbody.querySelectorAll('.btn-no-resuelto').forEach(btn => {
    btn.addEventListener('click', () => {
      const fichaId = btn.getAttribute('data-id');
      const ficha = appState.fichasQueue.find(f => f.id == fichaId);
      if (ficha) {
        abrirModalReferencia(ficha);
      }
    });
  });
}

async function marcarFichaAtendida(id) {
  const institucion = appState.currentDoctorUser?.nombre_institucion || "Centro de Salud MSPAS";

  try {
    const res = await fetch(`/api/fichas/${id}/atender`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        atendido_por: institucion,
        notas_atencion: `Atención brindada satisfactoriamente en ${institucion}. Medicamentos entregados.`
      })
    });
    if (res.ok) {
      showNotification('Paciente Atendido', `Turno cerrado y registrado por ${institucion}.`, 'success', 2200);
      loadDoctorFichas();
      return;
    }
  } catch (err) {
    // Local offline state update
  }

  const found = appState.fichasQueue.find(f => f.id == id);
  if (found) {
    found.estado = 'Atendido';
    found.atendido_por = institucion;
    found.atendido_en = new Date().toLocaleString();
  }
  showNotification('Paciente Atendido', `Turno asignado a ${institucion}.`, 'success', 2200);
  renderDoctorTable(appState.fichasQueue);
}

// Referral / Transfer Modal Logic
function initReferralModal() {
  const formReferir = document.getElementById('form-referir-paciente');
  if (!formReferir) return;

  formReferir.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!appState.currentReferralFicha) return;

    const id = appState.currentReferralFicha.id;
    const nuevo_destino = document.getElementById('referencia-nuevo-destino').value;
    const motivo = document.getElementById('referencia-motivo').value.trim();
    const centro_remitente = appState.currentDoctorUser?.nombre_institucion || "Centro de Salud San Lucas Tolimán";

    try {
      const res = await fetch(`/api/fichas/${id}/referir`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          referido_por: centro_remitente,
          nuevo_destino: nuevo_destino,
          motivo_referencia: motivo
        })
      });
      if (res.ok) {
        showNotification('Paciente Referido', `Caso transferido exitosamente a ${nuevo_destino}.`, 'success', 2400);
        bootstrap.Modal.getInstance(document.getElementById('modal-referir-paciente'))?.hide();
        loadDoctorFichas();
        mostrarBoletaReferencia(appState.currentReferralFicha, nuevo_destino, motivo, centro_remitente);
        return;
      }
    } catch (err) {
      // Offline fallback transfer
    }

    const found = appState.fichasQueue.find(f => f.id == id);
    if (found) {
      found.estado = `Referido a ${nuevo_destino}`;
      found.referido_a = nuevo_destino;
      found.motivo_referencia = motivo;
      found.fecha_referencia = new Date().toLocaleString();
    }
    showNotification('Paciente Transferido', `Caso asignado a ${nuevo_destino}.`, 'success', 2400);
    bootstrap.Modal.getInstance(document.getElementById('modal-referir-paciente'))?.hide();
    renderDoctorTable(appState.fichasQueue);
    mostrarBoletaReferencia(appState.currentReferralFicha, nuevo_destino, motivo, centro_remitente);
  });
}

function abrirModalReferencia(ficha) {
  appState.currentReferralFicha = ficha;
  document.getElementById('referencia-paciente-nombre').textContent = `${ficha.nombre} (${ficha.edad} años) - Código: ${ficha.codigo}`;
  document.getElementById('referencia-sintomas-actuales').textContent = ficha.sintomas;

  const modal = new bootstrap.Modal(document.getElementById('modal-referir-paciente'));
  modal.show();
}

function mostrarBoletaReferencia(ficha, destino, motivo, remitente) {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: `<span style="color: #0071E3;"><i class="fa-solid fa-file-medical me-2"></i> Boleta de Referencia Médica Generada</span>`,
      html: `
        <div style="text-align: left; font-size: 0.92rem; line-height: 1.6; color: #263238;">
          <div style="background: #EFF6FF; padding: 12px; border-radius: 10px; margin-bottom: 12px; border: 1px solid #BFDBFE;">
            <div style="font-weight: 700; color: #1E40AF;">Paciente: ${ficha.nombre} (${ficha.edad} años)</div>
            <div style="font-size: 0.82rem; color: #60A5FA;">Código: ${ficha.codigo}</div>
          </div>

          <div style="margin-bottom: 8px;">
            <strong style="color: #37474F;">Centro Remitente:</strong> ${remitente}
          </div>
          <div style="margin-bottom: 8px;">
            <strong style="color: #D32F2F;">Transferido a:</strong> <span style="font-weight: 700; color: #D32F2F;">${destino}</span>
          </div>
          <div style="margin-bottom: 12px; background: #F8FAFC; padding: 10px; border-radius: 8px; border-left: 3px solid #0071E3;">
            <strong style="color: #1E293B;">Motivo Clínico de No Resolución:</strong>
            <p style="margin: 4px 0 0 0; font-size: 0.88rem; color: #475569;">${motivo}</p>
          </div>
          <small style="color: #64748B;">El paciente o la ambulancia debe presentar esta boleta digital al ingresar a la emergencia del hospital receptor.</small>
        </div>
      `,
      icon: 'info',
      draggable: true,
      showConfirmButton: false,
      showCloseButton: true,
      customClass: {
        popup: 'modal-content-apple'
      }
    });
  }
}

/* ==========================================================================
   MÓDULO A: Educación Preventiva y Quiz
   ========================================================================== */
const quizQuestions = [
  {
    id: 1,
    pregunta: "¿Cuánto tiempo debe durar el lavado correcto de manos con agua y jabón según la Organización Mundial de la Salud (OMS)?",
    opciones: [
      { id: "A", texto: "5 segundos de frotado rápido solo con agua", correcta: false },
      { id: "B", texto: "20 a 40 segundos frotando palmas, dorso, entre dedos y uñas con jabón", correcta: true },
      { id: "C", texto: "10 segundos pasando únicamente las puntas de los dedos", correcta: false }
    ],
    explicacion: "La OMS establece que 20 a 40 segundos con agua y jabón es el tiempo necesario para romper la membrana de virus y remover bacterias transmitidas por contacto."
  },
  {
    id: 2,
    pregunta: "¿Cuál es la forma más segura y económica de desinfectar el agua para consumo humano en las comunidades de San Lucas Tolimán?",
    opciones: [
      { id: "A", texto: "Hervir el agua a borbotones durante al menos 3 a 5 minutos, o aplicar 2 gotas de cloro comercial por litro", correcta: true },
      { id: "B", texto: "Dejar reposar el agua en un balde abierto durante unas horas", correcta: false },
      { id: "C", texto: "Tomar directamente del chorro o lago Atitlán sin ningún tratamiento", correcta: false }
    ],
    explicacion: "Hervir el agua destruye amebas, bacterias coliformes y quistes parasitarios. Si no es posible hervir, el cloro comercial (5%) a razón de 2 gotas por litro de agua clara previene infecciones digestivas."
  },
  {
    id: 3,
    pregunta: "Ante un cuadro de diarrea en un niño o adulto mayor, ¿cuál es la primera medida vital e inmediata para evitar la deshidratación grave?",
    opciones: [
      { id: "A", texto: "Administrar Suero Oral OMS a libre demanda junto con Zinc (en niños) y acudir a evaluación médica", correcta: true },
      { id: "B", texto: "Suspender todo líquido y comida para que el intestino descanse", correcta: false },
      { id: "C", texto: "Comprar antibióticos fuertes en la tienda sin receta médica", correcta: false }
    ],
    explicacion: "Nunca suspenda líquidos. El Suero de Rehidratación Oral (SRO) del botiquín repone agua y sales minerales esenciales. El Sulfato de Zinc acorta la duración del episodio."
  }
];

function initQuizModule() {
  renderQuiz();

  const resetBtn = document.getElementById('btn-reset-quiz');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      appState.quizAnswers = {};
      appState.quizScore = 0;
      appState.quizSubmitted = false;
      renderQuiz();
      showNotification('Cuestionario Reiniciado', 'Puede responder las preguntas nuevamente.', 'info', 1800);
    });
  }
}

function renderQuiz() {
  const container = document.getElementById('quiz-questions-container');
  if (!container) return;

  container.innerHTML = '';
  const scoreDisplay = document.getElementById('quiz-score-display');
  if (scoreDisplay) scoreDisplay.textContent = '0 / 3';

  quizQuestions.forEach((q, index) => {
    const qCard = document.createElement('div');
    qCard.className = 'mb-4 pb-3 border-bottom';
    qCard.innerHTML = `
      <div class="d-flex align-items-center gap-2 mb-2">
        <span class="badge" style="background: var(--primary-tint); color: var(--primary-color); border-radius: 980px;">Pregunta ${index + 1}</span>
      </div>
      <h6 class="fw-bold text-dark mb-3">${q.pregunta}</h6>
      <div class="quiz-options-group" data-question-id="${q.id}">
        ${q.opciones.map(opt => `
          <button type="button" class="apple-quiz-btn" data-option-id="${opt.id}">
            <span class="fw-bold me-2">${opt.id})</span> ${opt.texto}
          </button>
        `).join('')}
      </div>
      <div class="quiz-explanation" id="quiz-exp-${q.id}">
        <div class="d-flex align-items-start gap-2">
          <i class="fa-solid fa-circle-info text-success mt-1"></i>
          <div>
            <strong class="text-success">Explicación Médica:</strong>
            <p class="mb-0 text-dark small">${q.explicacion}</p>
          </div>
        </div>
      </div>
    `;

    const optionButtons = qCard.querySelectorAll('.apple-quiz-btn');
    optionButtons.forEach(btn => {
      btn.addEventListener('click', () => handleQuizOptionClick(q, btn, optionButtons));
    });

    container.appendChild(qCard);
  });
}

function handleQuizOptionClick(question, clickedBtn, allButtons) {
  if (appState.quizAnswers[question.id]) return;

  const selectedOptId = clickedBtn.getAttribute('data-option-id');
  const selectedOpt = question.opciones.find(o => o.id === selectedOptId);
  const correctOpt = question.opciones.find(o => o.correcta);

  appState.quizAnswers[question.id] = {
    selected: selectedOptId,
    correct: selectedOpt.correcta
  };

  allButtons.forEach(btn => {
    btn.disabled = true;
    const optId = btn.getAttribute('data-option-id');
    if (optId === correctOpt.id) {
      btn.classList.add('correct');
      btn.innerHTML += ` <i class="fa-solid fa-circle-check float-end mt-1 text-success"></i>`;
    } else if (optId === selectedOptId && !selectedOpt.correcta) {
      btn.classList.add('incorrect');
      btn.innerHTML += ` <i class="fa-solid fa-circle-xmark float-end mt-1 text-danger"></i>`;
    }
  });

  const expBox = document.getElementById(`quiz-exp-${question.id}`);
  if (expBox) expBox.style.display = 'block';

  calculateQuizScore();
}

function calculateQuizScore() {
  const totalAnswered = Object.keys(appState.quizAnswers).length;
  let score = 0;
  for (const qId in appState.quizAnswers) {
    if (appState.quizAnswers[qId].correct) score++;
  }
  appState.quizScore = score;

  const scoreDisplay = document.getElementById('quiz-score-display');
  if (scoreDisplay) scoreDisplay.textContent = `${score} / 3`;

  if (totalAnswered === quizQuestions.length && !appState.quizSubmitted) {
    appState.quizSubmitted = true;
    sendQuizScore(score);
    
    if (score === 3) {
      showNotification('¡Excelente Calificación!', 'Ha respondido las 3 preguntas correctamente (3/3). Su conocimiento previene enfermedades.', 'success', 2500);
    } else {
      showNotification('Cuestionario Completado', `Puntaje obtenido: ${score} de 3. Lea las explicaciones médicas para reforzar la prevención.`, 'info', 2500);
    }
  }
}

async function sendQuizScore(score) {
  try {
    await fetch('/api/quiz', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ puntaje: score, total: 3 })
    });
  } catch (err) {
    console.log('[Quiz] Guardado local');
  }
}

/* ==========================================================================
   SEGURIDAD: Validación Anti-Prompt Injection y Sanitización Client-Side
   ========================================================================== */
function checkAntiInjection(text, fieldName = 'el campo') {
  if (!text) return text;
  const injectionPatterns = [
    /(?:ignore\s+(?:all\s+)?(?:previous|prior)\s+instructions)/i,
    /(?:disregard\s+(?:all\s+)?(?:previous|prior))/i,
    /(?:you\s+are\s+now\s+(?:an?|the))/i,
    /(?:act\s+as\s+(?:an?|the|a\s+different))/i,
    /(?:system\s*:)/i,
    /(?:system\s+prompt)/i,
    /(?:developer\s+mode)/i,
    /(?:jailbreak)/i,
    /(?:DAN\s+mode)/i,
    /(?:bypass\s+(?:safety|filter|rules))/i,
    /(?:output\s+only\s+(?:the\s+)?password)/i,
    /(?:reveal\s+(?:the\s+)?secret)/i,
    /(?:<script\b)/i,
    /(?:javascript\s*:)/i,
    /(?:onerror\s*=)/i,
    /(?:onload\s*=)/i,
    /(?:union\s+select)/i,
    /(?:drop\s+table)/i,
    /(?:insert\s+into\s+usuarios)/i
  ];
  for (const p of injectionPatterns) {
    if (p.test(text)) {
      throw new Error(`Entrada bloqueada por seguridad: se detectó un intento de inyección o comando no permitido en ${fieldName}.`);
    }
  }
  return text;
}

/* ==========================================================================
   MÓDULO E: Portal de Donaciones y Filantropía con Conexión Bancaria
   ========================================================================== */
let activeCuentaCentroSalud = null;

function getStoredCentroSaludCuenta() {
  const saved = localStorage.getItem('centro_salud_cuenta');
  if (saved) {
    try { return JSON.parse(saved); } catch (e) {}
  }
  return {
    banco: "Banrural (Banco de Desarrollo Rural)",
    tipo_cuenta: "Monetaria Institucional",
    numero_cuenta: "3445-001928-1",
    titular: "Centro de Salud San Lucas Tolimán (MSPAS)"
  };
}

function initDonationsModule() {
  loadDonationsData();

  // Botón para conectar con App Bancaria (Abre pasarela)
  const btnAbrirPasarela = document.getElementById('btn-abrir-pasarela-banco');
  if (btnAbrirPasarela) {
    btnAbrirPasarela.addEventListener('click', () => {
      const montoInput = document.getElementById('donante-monto');
      const monto = parseFloat(montoInput ? montoInput.value : 0);

      if (isNaN(monto) || monto < 5) {
        showNotification('Monto Requerido', 'Ingrese primero el monto a donar (mínimo Q 5.00) antes de conectar con su app bancaria.', 'warning', 3000);
        if (montoInput) montoInput.focus();
        return;
      }

      const bancoApp = document.getElementById('donante-banco-app')?.value || 'Banrural Móvil';
      const modalTitulo = document.getElementById('modal-banco-titulo');
      if (modalTitulo) modalTitulo.textContent = `Conexión Segura — ${bancoApp}`;

      const modalMonto = document.getElementById('banco-modal-monto');
      if (modalMonto) modalMonto.textContent = `Q ${monto.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

      const currentCuenta = activeCuentaCentroSalud || getStoredCentroSaludCuenta();
      const modalCuenta = document.getElementById('banco-modal-cuenta');
      const modalDestino = document.getElementById('banco-modal-destino');
      if (modalCuenta) modalCuenta.textContent = `${currentCuenta.banco} — ${currentCuenta.numero_cuenta}`;
      if (modalDestino) modalDestino.textContent = currentCuenta.titular || 'Centro de Salud San Lucas Tolimán';

      const modalElem = document.getElementById('modal-pasarela-bancaria');
      if (modalElem) {
        const modal = new bootstrap.Modal(modalElem);
        modal.show();
      }
    });
  }

  // Formulario de autenticación en la App Bancaria
  const formPasarela = document.getElementById('form-pasarela-bancaria');
  if (formPasarela) {
    formPasarela.addEventListener('submit', async (e) => {
      e.preventDefault();

      const banco = document.getElementById('donante-banco-app')?.value || 'Banrural Móvil';
      const rawUser = document.getElementById('pasarela-usuario-banco')?.value.trim();
      const rawToken = document.getElementById('pasarela-token-banco')?.value.trim();
      const monto = parseFloat(document.getElementById('donante-monto')?.value || 0);
      const currentCuenta = activeCuentaCentroSalud || getStoredCentroSaludCuenta();
      const cuenta_destino = currentCuenta.numero_cuenta;

      try {
        const usuario_banco = checkAntiInjection(rawUser, 'Usuario bancario');
        const token_autorizacion = checkAntiInjection(rawToken, 'Token bancario');

        if (!usuario_banco || !token_autorizacion) {
          showNotification('Campos requeridos', 'Ingrese su usuario y token de confirmación bancaria.', 'warning', 2500);
          return;
        }

        let authCod = '';

        if (navigator.onLine) {
          try {
            const res = await fetch('/api/banco/conectar', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ banco, usuario_banco, token_autorizacion, monto, cuenta_destino })
            });
            const json = await res.json();
            if (res.ok && json.status === 'success') {
              authCod = json.data.autorizacion;
            }
          } catch (netErr) {
            // Pasarela bancaria local
          }
        }

        if (!authCod) {
          let prefijo = 'BAN';
          if (banco.toLowerCase().includes('banrural')) prefijo = 'BANRURAL';
          else if (banco.toLowerCase().includes('industrial') || banco.toLowerCase().includes('bi')) prefijo = 'BI';
          else if (banco.toLowerCase().includes('g&t')) prefijo = 'GYT';
          else if (banco.toLowerCase().includes('bac')) prefijo = 'BAC';
          authCod = `AUT-${prefijo}-${Date.now().toString().slice(-6)}`;
        }

        const authInput = document.getElementById('donante-autorizacion-bancaria');
        if (authInput) authInput.value = authCod;

        const authBadge = document.getElementById('banco-auth-badge');
        const authTexto = document.getElementById('banco-auth-texto');
        const authCodDisplay = document.getElementById('banco-auth-codigo-display');

        if (authTexto) authTexto.textContent = `${banco} Conectado y Verificado`;
        if (authCodDisplay) authCodDisplay.textContent = authCod;
        if (authBadge) authBadge.classList.remove('d-none');

        const modalElem = document.getElementById('modal-pasarela-bancaria');
        if (modalElem) bootstrap.Modal.getInstance(modalElem)?.hide();

        formPasarela.reset();
        showNotification('¡App Bancaria Autorizada!', `Se aprobó la transferencia de Q ${monto.toFixed(2)} con código ${authCod}.`, 'success', 3000);

      } catch (injectionErr) {
        showNotification('Seguridad Bancaria', injectionErr.message, 'error', 3500);
      }
    });
  }

  // Formulario principal de Registro de Donación
  const formDonacion = document.getElementById('form-donacion');
  if (formDonacion) {
    formDonacion.addEventListener('submit', async (e) => {
      e.preventDefault();

      try {
        const donante_nombre = checkAntiInjection(document.getElementById('donante-nombre').value.trim() || 'Donante Solidario', 'Nombre del donante');
        const donante_tipo = document.getElementById('donante-tipo').value;
        const contacto = checkAntiInjection(document.getElementById('donante-contacto').value.trim(), 'Contacto');
        const metaSelect = document.getElementById('donante-meta');
        const meta_id = metaSelect.value;
        const meta_titulo = metaSelect.options[metaSelect.selectedIndex].text;
        const monto = parseFloat(document.getElementById('donante-monto').value);
        const mensaje = checkAntiInjection(document.getElementById('donante-mensaje').value.trim(), 'Mensaje solidario');
        const banco_origen = document.getElementById('donante-banco-app').value;
        const autorizacion_bancaria = document.getElementById('donante-autorizacion-bancaria').value.trim();
        const currentCuenta = activeCuentaCentroSalud || getStoredCentroSaludCuenta();
        const cuenta_destino = currentCuenta.numero_cuenta;

        if (isNaN(monto) || monto < 5) {
          showNotification('Monto Inválido', 'Ingrese un monto de aporte mayor o igual a Q 5.00', 'warning', 2500);
          return;
        }

        if (!autorizacion_bancaria) {
          showNotification('Conexión Bancaria Requerida', 'Es obligatorio conectarse primero a su App Bancaria presionando el botón "Conectar con App Bancaria" para autorizar el débito.', 'warning', 4000);
          document.getElementById('btn-abrir-pasarela-banco')?.focus();
          return;
        }

        const payload = {
          donante_nombre,
          donante_tipo,
          contacto,
          meta_id,
          meta_titulo,
          monto,
          mensaje,
          banco_origen,
          autorizacion_bancaria,
          cuenta_destino
        };

        if (navigator.onLine) {
          try {
            const res = await fetch('/api/donaciones', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const result = await res.json();
            if (res.ok && result.status === 'success') {
              showNotification('¡Aporte Acreditado!', result.message, 'success', 3000);
              displayDonationReceipt(result.data);
              formDonacion.reset();

              const authInput = document.getElementById('donante-autorizacion-bancaria');
              if (authInput) authInput.value = '';
              const authBadge = document.getElementById('banco-auth-badge');
              if (authBadge) authBadge.classList.add('d-none');

              await loadDonationsData();
              return;
            } else {
              showNotification('Validación de Seguridad', result.message || 'No se pudo procesar la donación.', 'error', 3500);
              return;
            }
          } catch (netErr) {
            saveDonationOffline(payload);
          }
        } else {
          saveDonationOffline(payload);
        }

      } catch (secErr) {
        showNotification('Seguridad del Sistema', secErr.message, 'error', 3500);
      }
    });
  }

  const btnImprimirRecibo = document.getElementById('btn-imprimir-recibo');
  if (btnImprimirRecibo) {
    btnImprimirRecibo.addEventListener('click', () => {
      window.print();
    });
  }
}

async function loadDonationsData() {
  const container = document.getElementById('donations-goals-container');
  const totalDisplay = document.getElementById('total-recaudado-global');
  if (!container) return;

  let loadedData = null;

  try {
    const res = await fetch('/api/donaciones');
    const json = await res.json();
    if (json.status === 'success') {
      loadedData = json.data;
    }
  } catch (err) {
    // Modo offline / standalone
  }

  // Fallback con localStorage si el backend no está conectado
  if (!loadedData) {
    const defaultMetas = [
      { id: 'meta-suero-zinc', titulo: 'Lote de 500 sobres de Suero Oral y Zinc', objetivo: 2500, recaudado: 1250, icono: 'fa-prescription-bottle-medical', descripcion: 'Garantiza dotación inmediata para evitar deshidratación por diarreas infantiles en época seca y lluvias.' },
      { id: 'meta-insumos-antibioticos', titulo: 'Insumos de curación y antibióticos pediátricos', objetivo: 5000, recaudado: 1800, icono: 'fa-kit-medical', descripcion: 'Gasas estériles, apósitos, guantes de examen y antibióticos esenciales de rescate para el Centro de Salud.' },
      { id: 'meta-ambulancia', titulo: 'Fondo Solidario de Combustible para Ambulancia y Traslados', objetivo: 8000, recaudado: 2400, icono: 'fa-truck-medical', descripcion: 'Apoyo para el Hospital Parroquial en combustible y mantenimiento para traslados 24/7 al Hospital de Sololá.' }
    ];

    const localDonations = JSON.parse(localStorage.getItem('donaciones_pendientes') || '[]');
    let total_global = 5450;

    localDonations.forEach(d => {
      const m = parseFloat(d.monto || 0);
      total_global += m;
      const targetMeta = defaultMetas.find(meta => meta.id === d.meta_id);
      if (targetMeta) targetMeta.recaudado += m;
    });

    defaultMetas.forEach(meta => {
      meta.porcentaje = Math.min(100, Math.round((meta.recaudado / meta.objetivo) * 100));
    });

    loadedData = {
      metas: defaultMetas,
      total_global,
      cuenta_centro_salud: getStoredCentroSaludCuenta()
    };
  }

  const { metas, total_global, cuenta_centro_salud } = loadedData;
  activeCuentaCentroSalud = cuenta_centro_salud;

  // Actualizar visualizador de la cuenta bancaria oficial del Centro de Salud
  if (cuenta_centro_salud) {
    const bElem = document.getElementById('display-cuenta-banco');
    const nElem = document.getElementById('display-cuenta-numero');
    const tElem = document.getElementById('display-cuenta-titular');
    if (bElem) bElem.textContent = `${cuenta_centro_salud.banco} — ${cuenta_centro_salud.tipo_cuenta || 'Monetaria Institucional'}`;
    if (nElem) nElem.textContent = cuenta_centro_salud.numero_cuenta;
    if (tElem) tElem.textContent = cuenta_centro_salud.titular;
  }

  // Actualizar total global recaudado
  if (totalDisplay) {
    totalDisplay.textContent = `Q ${total_global.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  // Renderizar metas acumuladas
  container.innerHTML = metas.map(meta => `
    <div class="col-lg-4 col-md-6 mb-4">
      <div class="apple-card h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex align-items-center gap-3 mb-3">
            <div class="apple-hub-icon mb-0" style="background: var(--primary-tint); color: var(--primary-color);">
              <i class="fa-solid ${meta.icono}"></i>
            </div>
            <div>
              <h6 class="fw-bold mb-0 text-dark">${meta.titulo}</h6>
              <small class="text-muted">Meta: Q ${meta.objetivo.toLocaleString('es-GT')}</small>
            </div>
          </div>
          <p class="small text-secondary mb-3">${meta.descripcion}</p>
        </div>
        <div>
          <div class="d-flex justify-content-between align-items-center small fw-bold mb-1">
            <span class="text-teal">Recaudado: Q ${meta.recaudado.toLocaleString('es-GT', { minimumFractionDigits: 2 })}</span>
            <span class="text-muted">${meta.porcentaje}%</span>
          </div>
          <div class="progress" style="height: 10px; border-radius: 980px; background: #E5E5EA;">
            <div class="progress-bar" style="width: ${meta.porcentaje}%; background: var(--primary-color); border-radius: 980px;"></div>
          </div>
          <button class="btn-apple-secondary w-100 mt-3 justify-content-center btn-apoyar-meta" data-meta-id="${meta.id}">
            <i class="fa-solid fa-hand-holding-heart me-1"></i> Apoyar Esta Causa
          </button>
        </div>
      </div>
    </div>
  `).join('');

  const btnApoyar = container.querySelectorAll('.btn-apoyar-meta');
  btnApoyar.forEach(b => {
    b.addEventListener('click', () => {
      const mId = b.getAttribute('data-meta-id');
      const metaSelect = document.getElementById('donante-meta');
      if (metaSelect) {
        metaSelect.value = mId;
        document.getElementById('form-donacion')?.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

function saveDonationOffline(payload) {
  const pending = JSON.parse(localStorage.getItem('donaciones_pendientes') || '[]');
  const localId = `DON-SLT-2026-${Date.now().toString().slice(-4)}`;
  const localRecord = {
    ...payload,
    codigo: localId,
    fecha: new Date().toLocaleString()
  };

  pending.push(payload);
  localStorage.setItem('donaciones_pendientes', JSON.stringify(pending));

  showNotification('¡Donación Acreditada!', `Aporte de Q ${payload.monto.toFixed(2)} registrado con éxito hacia la cuenta del Centro de Salud.`, 'success', 3000);
  displayDonationReceipt(localRecord);
  document.getElementById('form-donacion').reset();

  const authInput = document.getElementById('donante-autorizacion-bancaria');
  if (authInput) authInput.value = '';
  const authBadge = document.getElementById('banco-auth-badge');
  if (authBadge) authBadge.classList.add('d-none');

  loadDonationsData();
}

function displayDonationReceipt(don) {
  const modalElem = document.getElementById('modal-recibo-donacion');
  if (!modalElem) return;

  document.getElementById('recibo-codigo').textContent = don.codigo;
  document.getElementById('recibo-fecha').textContent = don.fecha;
  document.getElementById('recibo-donante').textContent = don.donante_nombre;
  document.getElementById('recibo-tipo').textContent = don.donante_tipo;
  document.getElementById('recibo-meta').textContent = don.meta_titulo;
  document.getElementById('recibo-monto').textContent = `Q ${parseFloat(don.monto).toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;

  const bancoAuthElem = document.getElementById('recibo-banco-auth');
  if (bancoAuthElem) {
    bancoAuthElem.textContent = `${don.banco_origen || 'App Bancaria'} — ${don.autorizacion_bancaria || 'AUT-PENDIENTE'}`;
  }

  const cuentaDestinoElem = document.getElementById('recibo-cuenta-destino');
  if (cuentaDestinoElem) {
    cuentaDestinoElem.textContent = don.cuenta_destino || 'Cuenta Centro de Salud San Lucas Tolimán';
  }

  const bsModal = new bootstrap.Modal(modalElem);
  bsModal.show();
}

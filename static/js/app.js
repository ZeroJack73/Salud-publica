/**
 * APRENDAMOS SALUD SAN LUCAS TOLIMÁN
 * Minimalist Apple-Style SPA Controller & Offline-First Engine
 * Zero emojis - All icons through FontAwesome and SVGs
 */

// Immediate Verified Directory Data (Prevents any blank view delay)
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
    plus_code: "JVJ4+XVW",
    telefono: "5912-1133",
    horario: "Diurno (Desde las 9:00 a.m.)",
    calificacion: 4.7,
    tipo_costo: "Costo Privado Moderado",
    descripcion: "Clínica privada equipada para consulta externa diurna y chequeos de rutina. Costo moderado. No dispone de emergencias nocturnas.",
    emergencias_24h: 0,
    ambulancia: 0
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
  selectedGoal: 'meta-suero-zinc'
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

// Router & View Switcher (Single Nav Control - No Duplication)
function switchView(viewId) {
  const targetElem = document.getElementById(viewId);
  if (!targetElem) {
    viewId = 'view-inicio';
  }

  appState.currentView = viewId;

  // 1. Hide all views, display active view
  const allViews = document.querySelectorAll('.app-view');
  allViews.forEach(v => v.classList.remove('active-view'));

  const activeView = document.getElementById(viewId);
  if (activeView) {
    activeView.classList.add('active-view');
  }

  // 2. Update top navbar active state
  const navLinks = document.querySelectorAll('.nav-link-apple');
  navLinks.forEach(link => {
    if (link.getAttribute('data-view') === viewId) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });

  // 3. Update mobile bottom bar active state
  const mobileNavItems = document.querySelectorAll('.apple-tab-item');
  mobileNavItems.forEach(item => {
    if (item.getAttribute('data-view') === viewId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // 4. Update browser URL hash cleanly
  if (window.location.hash.replace('#', '') !== viewId) {
    history.pushState(null, null, `#${viewId}`);
  }

  // 5. If switching to Directory view, ensure list is immediately rendered
  if (viewId === 'view-directorio') {
    renderDirectory(appState.directoryData);
  }

  // 6. Scroll smoothly to top
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
  initDoctorPanel();
  initDirectoryModule();
  initQuizModule();
  initDonationsModule();
  syncOfflineData();
});

/* ==========================================================================
   PWA & Service Worker
   ========================================================================== */
function initServiceWorker() {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/service-worker.js')
        .then((reg) => {
          console.log('[PWA] Service Worker registrado con éxito:', reg.scope);
        })
        .catch((err) => {
          console.error('[PWA] Error al registrar Service Worker:', err);
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
      showNotification('Modo Sin Conexión', 'La app funciona offline con datos guardados.', 'info', 2000);
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
          showNotification('Instalación Iniciada', 'Aprendamos Salud se ha instalado en su pantalla de inicio.', 'success', 2500);
        }
        appState.deferredInstallPrompt = null;
        installBtn.classList.add('d-none');
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    if (installBtn) installBtn.classList.add('d-none');
    showNotification('App Lista', 'Aplicación instalada correctamente para acceso rápido y offline.', 'success', 2500);
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
      showNotification('Sincronización Completa', `Se sincronizaron ${syncedCount} ficha(s) de pre-consulta con el Centro de Salud.`, 'success', 2500);
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
      showNotification('Donaciones Sincronizadas', `Se transmitieron ${syncedDonations} donación(es) pendientes.`, 'success', 2500);
      loadDonationsData();
    }
  }
}

/* ==========================================================================
   MÓDULO B: Botiquín Básico Familiar ("Por Si Acaso") y Medicamentos
   ========================================================================== */
const botiquinCatalog = [
  {
    id: 1,
    enfermedad: "Diarrea Repentina y Deshidratación",
    categoria: "diarrea",
    medicamento: "Sales de Rehidratación Oral (Sobres OMS) + Sulfato de Zinc",
    por_si_acaso: "Tener en casa por si acaso un niño o adulto amanece con diarrea nocturna. Permite iniciar hidratación de inmediato sin esperar horas a que abran el puesto de salud.",
    disponibilidad: "Gratuito en Centro de Salud MSPAS y dispensario del Hospital Parroquial.",
    uso_seguro: "Disolver 1 sobre completo en 1 litro exacto de agua hervida o clorada fría. Dar a cucharaditas o sorbos pequeños después de cada deposición líquida. En niños menores de 5 años: añadir Zinc según dosis médica.",
    peligro: "Acudir al hospital si no tolera líquidos (vomita todo), ojos hundidos, decaimiento extremo, o si hay sangre visible en las heces."
  },
  {
    id: 2,
    enfermedad: "Fiebre y Dolor Corporal Agudo",
    categoria: "fiebre",
    medicamento: "Acetaminofén (Paracetamol) Gotas, Jarabe o Tabletas",
    por_si_acaso: "Tener guardado por si acaso sube fiebre repentina de noche, dolor de cabeza o malestar tras una vacuna. Alivia temporalmente el dolor.",
    disponibilidad: "Entrega gratuita en Centro de Salud y muy bajo costo en farmacias locales.",
    uso_seguro: "Adultos: 500 mg a 1000 mg cada 6 a 8 horas (no exceder 3000 mg al día). Niños: calcular estrictamente según el peso corporal con jeringa dosificadora (10-15 mg/kg por dosis). Nunca duplicar dosis ni mezclar con antigripales combinados.",
    peligro: "Hospitalización urgente si la fiebre supera 39°C, no baja tras 3 días, si el niño convulsiona, no despierta o tiene rigidez en el cuello."
  },
  {
    id: 3,
    enfermedad: "Gripes, Tos Leve y Congestión",
    categoria: "gripe",
    medicamento: "Solución Salina / Suero Fisiológico Nasal + Hidratación",
    por_si_acaso: "Tener por si acaso hay congestión nasal en bebés o niños que no pueden dormir o mamar. La solución salina despeja la nariz de forma natural y segura.",
    disponibilidad: "De venta libre y fácil preparación con agua hervida limpia y sal limpia.",
    uso_seguro: "Aplicar 2 a 3 gotas de solución salina tibia en cada fosa nasal antes de dormir o comer. Ofrecer abundantes líquidos tibios. NO use antibióticos ni jarabes antitusivos con sedantes en niños pequeños.",
    peligro: "Acudir de urgencia si se le hunden las costillas al respirar (tiraje), respira muy rápido o tiene los labios morados (signo de neumonía)."
  },
  {
    id: 4,
    enfermedad: "Parasitosis Intestinal Familiar",
    categoria: "parasitos",
    medicamento: "Albendazol 400 mg (Tratamiento Periódico)",
    por_si_acaso: "Tener disponible según recomendación del Centro de Salud para desparasitar a la familia cada 6 meses (desparasitación preventiva comunitaria).",
    disponibilidad: "Gratuito en jornadas de salud comunitaria del Ministerio de Salud.",
    uso_seguro: "Dosis única masticable de 400 mg para mayores de 2 años y adultos. Tomar todos los miembros de la casa en la misma semana. Mantener el lavado de manos constante.",
    peligro: "NO tomar en mujeres embarazadas ni niños menores de 1 año. Si hay dolor abdominal agudo con vómito de parásitos o vientre duro, ir al hospital."
  },
  {
    id: 5,
    enfermedad: "Raspaduras, Cortaduras y Curaciones",
    categoria: "heridas",
    medicamento: "Jabón Neutro, Gasas Estériles, Micropore y Clorhexidina",
    por_si_acaso: "Indispensable por si acaso hay cortadas con machete, raspaduras jugando, caídas en el campo o quemaduras leves de cocina.",
    disponibilidad: "Insumos básicos de primeros auxilios accesibles en cualquier farmacia comunitaria.",
    uso_seguro: "Lavar la herida con abundante agua hervida y jabón blanco para retirar tierra. Secar con gasa limpia y aplicar antiséptico. Cubrir con gasa. NUNCA colocar café, caléndula sucia ni tierra sobre heridas abiertas.",
    peligro: "Si la herida es profunda, no para de sangrar, fue causada por clavo oxidado o mordedura de perro, acudir de inmediato por sutura y vacuna antitetánica."
  }
];

function initBotiquinModule() {
  renderBotiquinCards(botiquinCatalog);

  const searchInput = document.getElementById('search-medications');
  const filterButtons = document.querySelectorAll('.apple-filter-btn[data-cat]');

  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      const filtered = botiquinCatalog.filter(m => 
        m.enfermedad.toLowerCase().includes(query) ||
        m.medicamento.toLowerCase().includes(query) ||
        m.categoria.toLowerCase().includes(query) ||
        m.por_si_acaso.toLowerCase().includes(query)
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
        <p>No se encontraron medicamentos para el criterio buscado. Consulte al Centro de Salud.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(med => `
    <div class="col-lg-6 col-md-12">
      <div class="apple-card h-100 d-flex flex-column justify-content-between">
        <div>
          <div class="d-flex justify-content-between align-items-start mb-2 flex-wrap gap-2">
            <span class="badge" style="background: rgba(0, 113, 227, 0.08); color: #0071E3; font-weight: 600; border-radius: 980px; padding: 4px 10px;">
              ${med.enfermedad}
            </span>
            <span class="badge" style="background: rgba(52, 199, 89, 0.12); color: #248A3D; font-weight: 600; border-radius: 980px; padding: 4px 10px;">
              <i class="fa-solid fa-kit-medical me-1"></i> Botiquín del Hogar
            </span>
          </div>
          <h5 class="fw-bold text-dark mb-2">${med.medicamento}</h5>
          
          <div class="p-2 mb-2 rounded" style="background-color: #F4FAF5; border-left: 3px solid #34C759;">
            <strong class="text-success small d-block">
              <i class="fa-solid fa-house-medical me-1"></i> ¿Por qué tenerlo en casa 'por si acaso'?
            </strong>
            <span class="small text-secondary">${med.por_si_acaso}</span>
          </div>

          <p class="text-muted small mb-2">
            <i class="fa-solid fa-circle-check text-primary me-1"></i>
            <strong>Disponibilidad:</strong> ${med.disponibilidad}
          </p>

          <div class="mb-2">
            <strong class="text-dark small"><i class="fa-solid fa-shield-halved text-teal me-1"></i> Modo de Uso Seguro:</strong>
            <p class="small text-secondary mb-0">${med.uso_seguro}</p>
          </div>
        </div>

        <div class="p-2 rounded mt-2" style="background: #FFF5F5; border-left: 3px solid #FF3B30;">
          <strong class="d-block mb-1 text-danger small"><i class="fa-solid fa-triangle-exclamation me-1"></i> Señales de Alarma (Acudir al Hospital):</strong>
          <span class="small text-secondary">${med.peligro}</span>
        </div>
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   MÓDULO D: Directorio Médico Escalonado (Inmediato y sin vacíos)
   ========================================================================== */
function initDirectoryModule() {
  // Render default data immediately so cards are visible with zero wait
  renderDirectory(appState.directoryData);
  initDirectoryFilterButtons();

  // Then fetch updated version from server
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

  // Render Nivel 1 (Público y Social)
  containerNivel1.innerHTML = nivel1.map(item => createDirectoryCardHTML(item, 'badge-cost-public', 'Público / Comunitario')).join('');
  
  // Render Nivel 2 (Regional Sololá)
  containerNivel2.innerHTML = nivel2.map(item => createDirectoryCardHTML(item, 'badge-cost-referral', 'Referencia Nacional')).join('');

  // Render Nivel 3 (Hospitales y Clínicas Privadas)
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
   MÓDULO C: Ficha Digital de Pre-Consulta (Triaje)
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
          showNotification('Ficha Registrada', `Código asignado: ${result.data.codigo}`, 'success', 2200);
          displayFichaSummary(result.data);
          form.reset();
          loadDoctorFichas();
        } else {
          showNotification('Error', result.message || 'No se pudo guardar la ficha.', 'error', 3000);
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
  const localId = `SLT-OFFLINE-${Date.now().toString().slice(-4)}`;
  
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
    codigo: localId,
    fecha_creacion: new Date().toLocaleString(),
    nivel_triaje,
    es_urgente,
    alerta_medica: es_urgente ? "ALERTA: Paciente con síntomas críticos. Traslado recomendado." : "Consulta estándar.",
    estado: "Pendiente (Sin conexión)"
  };

  pending.push(payload);
  localStorage.setItem('fichas_pendientes', JSON.stringify(pending));

  showNotification('Guardado Localmente', 'Sin internet. La ficha se guardó en el dispositivo y se sincronizará al reconectar.', 'info', 2500);
  displayFichaSummary(localFicha);
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
   Panel Médico / Recepción (Doctor Queue)
   ========================================================================== */
function initDoctorPanel() {
  const panelBtn = document.getElementById('btn-panel-medico');
  const modalPanelElem = document.getElementById('modal-panel-medico');
  
  if (panelBtn && modalPanelElem) {
    panelBtn.addEventListener('click', () => {
      loadDoctorFichas();
      const modal = new bootstrap.Modal(modalPanelElem);
      modal.show();
    });
  }

  const filtroEstado = document.getElementById('filtro-doctor-estado');
  const filtroDestino = document.getElementById('filtro-doctor-destino');

  if (filtroEstado) filtroEstado.addEventListener('change', loadDoctorFichas);
  if (filtroDestino) filtroDestino.addEventListener('change', loadDoctorFichas);
}

async function loadDoctorFichas() {
  const tbody = document.getElementById('doctor-fichas-tbody');
  if (!tbody) return;

  const estado = document.getElementById('filtro-doctor-estado')?.value || 'todos';
  const destino = document.getElementById('filtro-doctor-destino')?.value || 'todos';

  tbody.innerHTML = `<tr><td colspan="7" class="text-center py-3 text-muted"><i class="fa-solid fa-spinner fa-spin me-2"></i> Cargando fichas recibidas...</td></tr>`;

  try {
    const res = await fetch(`/api/fichas?estado=${estado}&destino=${destino}`);
    const json = await res.json();
    
    if (json.status === 'success') {
      renderDoctorTable(json.data);
    }
  } catch (err) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted py-3">Modo offline. Solo se visualizan datos locales si existen.</td></tr>`;
  }
}

function renderDoctorTable(fichas) {
  const tbody = document.getElementById('doctor-fichas-tbody');
  const countBadge = document.getElementById('doctor-pending-count');
  if (!tbody) return;

  const pendientes = fichas.filter(f => f.estado === 'Pendiente').length;
  if (countBadge) countBadge.textContent = pendientes;

  if (fichas.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" class="text-center py-4 text-muted">No hay fichas registradas con los filtros seleccionados.</td></tr>`;
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

    return `
      <tr class="${f.nivel_triaje === 'ROJO' && !esAtendido ? 'table-danger' : ''}">
        <td class="fw-bold text-primary font-monospace">${f.codigo}</td>
        <td>
          <div class="fw-bold">${f.nombre}</div>
          <small class="text-muted">${f.edad} años | ${f.comunidad}</small>
        </td>
        <td>${triajeBadge}</td>
        <td><small class="text-dark">${f.sintomas}</small></td>
        <td><small class="text-muted">${f.destino}</small></td>
        <td>
          ${esAtendido 
            ? `<span class="badge" style="background: rgba(52, 199, 89, 0.12); color: #248A3D;"><i class="fa-solid fa-circle-check me-1"></i> Atendido</span>` 
            : `<span class="badge" style="background: rgba(255, 149, 0, 0.12); color: #C97A00;"><i class="fa-solid fa-hourglass-half me-1"></i> En Espera</span>`
          }
        </td>
        <td>
          ${esAtendido 
            ? `<button class="btn btn-outline-secondary btn-sm" disabled><i class="fa-solid fa-check-double"></i></button>`
            : `<button class="btn btn-success btn-sm btn-atender" data-id="${f.id}" title="Marcar Paciente Atendido">
                <i class="fa-solid fa-check me-1"></i> Atender
               </button>`
          }
        </td>
      </tr>
    `;
  }).join('');

  const atenderBtns = tbody.querySelectorAll('.btn-atender');
  atenderBtns.forEach(btn => {
    btn.addEventListener('click', async () => {
      const fichaId = btn.getAttribute('data-id');
      await marcarFichaAtendida(fichaId);
    });
  });
}

async function marcarFichaAtendida(id) {
  try {
    const res = await fetch(`/api/fichas/${id}/estado`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ estado: 'Atendido' })
    });
    const result = await res.json();
    if (res.ok) {
      showNotification('Paciente Atendido', 'Se ha registrado la atención satisfactoriamente.', 'success', 2000);
      loadDoctorFichas();
    }
  } catch (err) {
    showNotification('Error', 'No se pudo actualizar el estado de la ficha.', 'error', 2000);
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
    console.log('[Quiz] Guardado local en modo sin conexión');
  }
}

/* ==========================================================================
   MÓDULO E: Portal de Donaciones y Filantropía
   ========================================================================== */
function initDonationsModule() {
  loadDonationsData();

  const formDonacion = document.getElementById('form-donacion');
  if (formDonacion) {
    formDonacion.addEventListener('submit', async (e) => {
      e.preventDefault();

      const donante_nombre = document.getElementById('donante-nombre').value.trim() || 'Donante Solidario';
      const donante_tipo = document.getElementById('donante-tipo').value;
      const contacto = document.getElementById('donante-contacto').value.trim();
      const metaSelect = document.getElementById('donante-meta');
      const meta_id = metaSelect.value;
      const meta_titulo = metaSelect.options[metaSelect.selectedIndex].text;
      const monto = parseFloat(document.getElementById('donante-monto').value);
      const mensaje = document.getElementById('donante-mensaje').value.trim();

      if (isNaN(monto) || monto <= 0) {
        showNotification('Monto Inválido', 'Ingrese un monto de aporte mayor a Q 0.00', 'warning', 2000);
        return;
      }

      const payload = {
        donante_nombre,
        donante_tipo,
        contacto,
        meta_id,
        meta_titulo,
        monto,
        mensaje
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
            showNotification('Aporte Recibido', 'Agradecemos profundamente su solidaridad con el municipio.', 'success', 2400);
            displayDonationReceipt(result.data);
            formDonacion.reset();
            loadDonationsData();
          } else {
            showNotification('Error', result.message || 'No se pudo registrar la donación.', 'error', 2500);
          }
        } catch (err) {
          saveDonationOffline(payload);
        }
      } else {
        saveDonationOffline(payload);
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

  try {
    const res = await fetch('/api/donaciones');
    const json = await res.json();

    if (json.status === 'success') {
      const { metas, total_global } = json.data;
      if (totalDisplay) {
        totalDisplay.textContent = `Q ${total_global.toLocaleString('es-GT', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
      }

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
  } catch (err) {
    console.log('[Donaciones] Modo offline.');
  }
}

function saveDonationOffline(payload) {
  const pending = JSON.parse(localStorage.getItem('donaciones_pendientes') || '[]');
  const localId = `DON-OFFLINE-${Date.now().toString().slice(-4)}`;
  const localRecord = {
    ...payload,
    codigo: localId,
    fecha: new Date().toLocaleString()
  };

  pending.push(payload);
  localStorage.setItem('donaciones_pendientes', JSON.stringify(pending));

  showNotification('Donación Registrada Localmente', 'Se almacenó en el dispositivo y se sincronizará al detectar internet.', 'info', 2500);
  displayDonationReceipt(localRecord);
  document.getElementById('form-donacion').reset();
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

  const bsModal = new bootstrap.Modal(modalElem);
  bsModal.show();
}

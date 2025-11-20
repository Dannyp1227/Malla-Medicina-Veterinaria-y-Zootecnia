/* ---------------------------
   Datos de la malla: array de objetos
   Edita este array para actualizar la malla.
   Campos: id, nombre, semestre (1-10), tipo, creditos, prereq, descripcion
   tipos admitidos: "Básica", "Humanidades", "Profesional básica", "Profesional específica"
---------------------------- */
const cursos = [
  // SEMESTRE I
  { id: "M001", nombre: "Biología", semestre: 1, tipo: "Básica", creditos: 4, prereq: "-", descripcion: "Fundamentos de biología celular y molecular." },
  { id: "M002", nombre: "Matemáticas", semestre: 1, tipo: "Básica", creditos: 3, prereq: "-", descripcion: "Álgebra, funciones y trigonometría aplicadas a ciencias." },
  { id: "M003", nombre: "Ética", semestre: 1, tipo: "Humanidades", creditos: 2, prereq: "-", descripcion: "Ética profesional y bioética básica." },
  { id: "M004", nombre: "Comunicación", semestre: 1, tipo: "Humanidades", creditos: 2, prereq: "-", descripcion: "Habilidades de expresión oral y escrita." },

  // SEMESTRE II
  { id: "M011", nombre: "Bioquímica", semestre: 2, tipo: "Básica", creditos: 4, prereq: "Biología", descripcion: "Estructura y función de biomoléculas." },
  { id: "M012", nombre: "Fisiología I", semestre: 2, tipo: "Profesional básica", creditos: 4, prereq: "Biología", descripcion: "Fisiología animal: sistemas principales." },
  { id: "M013", nombre: "Anatomía I", semestre: 2, tipo: "Profesional básica", creditos: 4, prereq: "Biología", descripcion: "Anatomía macroscópica del animal doméstico." },
  { id: "M014", nombre: "Bioestadística", semestre: 2, tipo: "Básica", creditos: 3, prereq: "Matemáticas", descripcion: "Estadística aplicada a investigación y diagnóstico." },

  // SEMESTRE III
  { id: "M021", nombre: "Histología", semestre: 3, tipo: "Profesional básica", creditos: 3, prereq: "Biología", descripcion: "Tejidos y microanatomía." },
  { id: "M022", nombre: "Microbiología", semestre: 3, tipo: "Profesional básica", creditos: 3, prereq: "Bioquímica", descripcion: "Bacteriología, virología y hongos." },
  { id: "M023", nombre: "Parasitología", semestre: 3, tipo: "Profesional específica", creditos: 3, prereq: "Microbiología", descripcion: "Parásitos de interés veterinario." },

  // SEMESTRE IV
  { id: "M031", nombre: "Fisiología II", semestre: 4, tipo: "Profesional básica", creditos: 3, prereq: "Fisiología I", descripcion: "Sistemas cardiovascular, respiratorio y renal." },
  { id: "M032", nombre: "Farmacología General", semestre: 4, tipo: "Profesional básica", creditos: 3, prereq: "Bioquímica", descripcion: "Principios de farmacocinética y farmacodinamia." },
  { id: "M033", nombre: "Nutrición Animal", semestre: 4, tipo: "Profesional específica", creditos: 3, prereq: "Bioquímica", descripcion: "Requerimientos y formulación de dietas." },

  // SEMESTRE V
  { id: "M041", nombre: "Patología", semestre: 5, tipo: "Profesional básica", creditos: 4, prereq: "Histología", descripcion: "Bases de la enfermedad, lesiones y diagnóstico." },
  { id: "M042", nombre: "Inmunología", semestre: 5, tipo: "Profesional básica", creditos: 3, prereq: "Microbiología", descripcion: "Sistema inmune e inmunopatología." },
  { id: "M043", nombre: "Epidemiología", semestre: 5, tipo: "Profesional específica", creditos: 3, prereq: "Bioestadística", descripcion: "Distribución y control de enfermedades." },

  // SEMESTRE VI
  { id: "M051", nombre: "Medicina de Producción - Bovinos", semestre: 6, tipo: "Profesional específica", creditos: 3, prereq: "Nutrición Animal", descripcion: "Manejo y enfermedades en ganado bovino." },
  { id: "M052", nombre: "Cirugía Básica", semestre: 6, tipo: "Profesional básica", creditos: 3, prereq: "Anatomía I, Fisiología I", descripcion: "Técnicas quirúrgicas y asepsia." },
  { id: "M053", nombre: "Medicina de Pequeños Animales I", semestre: 6, tipo: "Profesional específica", creditos: 3, prereq: "Patología", descripcion: "Diagnóstico y tratamiento en pequeños animales." },

  // SEMESTRE VII
  { id: "M061", nombre: "Técnicas Operatorias", semestre: 7, tipo: "Profesional específica", creditos: 3, prereq: "Cirugía Básica", descripcion: "Procedimientos quirúrgicos avanzados." },
  { id: "M062", nombre: "Producción Porcina", semestre: 7, tipo: "Profesional específica", creditos: 3, prereq: "Nutrición Animal", descripcion: "Manejo y sanidad del porcino." },
  { id: "M063", nombre: "Reproducción II", semestre: 7, tipo: "Profesional específica", creditos: 3, prereq: "Reproducción I", descripcion: "Técnicas de reproducción asistida." },

  // SEMESTRE VIII
  { id: "M071", nombre: "Medicina de Grandes Animales", semestre: 8, tipo: "Profesional específica", creditos: 3, prereq: "Medicina de Producción - Bovinos", descripcion: "Patologías y diagnóstico en especies de granja." },
  { id: "M072", nombre: "Epidemias y Salud Pública", semestre: 8, tipo: "Profesional específica", creditos: 3, prereq: "Epidemiología", descripcion: "Vigilancia y control de zoonosis." },
  { id: "M073", nombre: "Producción Avícola", semestre: 8, tipo: "Profesional específica", creditos: 3, prereq: "Nutrición Animal", descripcion: "Manejo y enfermedades en aves de producción." },

  // SEMESTRE IX
  { id: "M081", nombre: "Prácticas Clínicas I", semestre: 9, tipo: "Profesional específica", creditos: 4, prereq: "Medicina de Pequeños Animales I", descripcion: "Rotación clínica en pequeños animales." },
  { id: "M082", nombre: "Medicina y Cirugía de Especies Menores", semestre: 9, tipo: "Profesional específica", creditos: 4, prereq: "Cirugía Básica", descripcion: "Casos clínicos y manejo quirúrgico." },

  // SEMESTRE X
  { id: "M091", nombre: "Prácticas Clínicas II / Internado", semestre: 10, tipo: "Profesional específica", creditos: 6, prereq: "Prácticas Clínicas I", descripcion: "Internado rotacional en áreas hospitalarias y de producción." },
  { id: "M092", nombre: "Trabajo de Grado / Seminario", semestre: 10, tipo: "Profesional específica", creditos: 6, prereq: "-", descripcion: "Seminario y trabajo final de grado." }
];

/* ------------- Generación dinámica de la malla ------------- */
const container = document.getElementById('mallaContainer');

function crearColumnas(){
  // crear 10 columnas (semestres)
  for(let s=1;s<=10;s++){
    const col = document.createElement('section');
    col.className = 'semester';
    col.dataset.sem = s;
    col.innerHTML = `<div class="semester-header">Semestre ${s}</div><div class="cards" id="col-${s}"></div>`;
    container.appendChild(col);
  }
}

function tipoClass(tipo){
  switch(tipo){
    case "Básica": return 'type-basica';
    case "Humanidades": return 'type-humanidades';
    case "Profesional básica": return 'type-profbas';
    case "Profesional específica": return 'type-profespecifica';
    default: return '';
  }
}

function renderizar(cursosList){
  // limpiar columnas
  for(let s=1;s<=10;s++){
    const cont = document.getElementById(`col-${s}`);
    cont.innerHTML = '';
  }
  // ordenar por semestre y añadir tarjetas
  cursosList.sort((a,b)=> a.semestre - b.semestre || a.nombre.localeCompare(b.nombre));
  cursosList.forEach(c=>{
    const cont = document.getElementById(`col-${c.semestre}`);
    if(!cont) return; // seguridad
    const card = document.createElement('article');
    card.className = `card ${tipoClass(c.tipo)}`;
    card.tabIndex = 0;
    card.innerHTML = `<h3>${c.nombre}</h3><p>${c.tipo} · ${c.creditos} cr.</p>`;
    card.addEventListener('click', ()=> openModal(c));
    card.addEventListener('keypress', (e)=> { if(e.key==='Enter') openModal(c) });
    cont.appendChild(card);
  });
}

/* -------------- Modal -------------- */
const modal = document.getElementById('modal');
const modalName = document.getElementById('modalName');
const modalSem = document.getElementById('modalSem');
const modalType = document.getElementById('modalType');
const modalCredits = document.getElementById('modalCredits');
const modalPrereq = document.getElementById('modalPrereq');
const modalDesc = document.getElementById('modalDesc');
const closeModalBtn = document.getElementById('closeModal');

function openModal(c){
  modalName.textContent = c.nombre;
  modalSem.textContent = c.semestre;
  modalType.textContent = c.tipo;
  modalCredits.textContent = c.creditos;
  modalPrereq.textContent = c.prereq || '-';
  modalDesc.textContent = c.descripcion || 'Sin descripción.';
  modal.classList.remove('hidden');
  modal.setAttribute('aria-hidden','false');
}
function closeModal(){ modal.classList.add('hidden'); modal.setAttribute('aria-hidden','true'); }

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e=> { if(e.target === modal) closeModal(); });

/* ------------- Filtros y búsqueda ------------- */
const semFilter = document.getElementById('semFilter');
const typeFilter = document.getElementById('typeFilter');
const searchInput = document.getElementById('searchInput');
const resetBtn = document.getElementById('resetBtn');

function aplicarFiltros(){
  const sem = semFilter.value;
  const tipo = typeFilter.value;
  const q = searchInput.value.trim().toLowerCase();

  let resultado = cursos.filter(c=>{
    if(sem !== 'todos' && String(c.semestre) !== String(sem)) return false;
    if(tipo !== 'todos' && c.tipo !== tipo) return false;
    if(q){
      const hay = c.nombre.toLowerCase().includes(q) || (c.descripcion && c.descripcion.toLowerCase().includes(q));
      return hay;
    }
    return true;
  });
  renderizar(resultado);
}

semFilter.addEventListener('change', aplicarFiltros);
typeFilter.addEventListener('change', aplicarFiltros);
searchInput.addEventListener('input', aplicarFiltros);
resetBtn.addEventListener('click', ()=> {
  semFilter.value='todos'; typeFilter.value='todos'; searchInput.value=''; aplicarFiltros();
});

/* Inicializar */
crearColumnas();
renderizar(cursos);

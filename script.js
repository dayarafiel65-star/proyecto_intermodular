
// ===== PCS FIJOS (SIN BUGS) =====

let pcs = [
  { id: 1, nombre: "PC-01", reservado: false },
  { id: 2, nombre: "PC-02", reservado: false },
  { id: 3, nombre: "PC-03", reservado: false },
  { id: 4, nombre: "PC-04", reservado: false },
  { id: 5, nombre: "PC-05", reservado: false },
  { id: 6, nombre: "PC-06", reservado: false },
  { id: 7, nombre: "PC-07", reservado: false },
  { id: 8, nombre: "PC-08", reservado: false }
];

// ===== ELEMENTOS =====

const listaPcs = document.getElementById("lista-pcs");
const select = document.getElementById("pcSeleccionado");
const form = document.getElementById("formReserva");

// ===== MOSTRAR PCS =====

function mostrarPCs() {
  if (!listaPcs) return;

  listaPcs.innerHTML = "";

  pcs.forEach(pc => {
    const div = document.createElement("div");
    div.classList.add("pc");

    if (pc.reservado) {
      div.classList.add("reservado");
      div.textContent = pc.nombre + " (Reservado)";
    } else {
      div.classList.add("disponible");
      div.textContent = pc.nombre + " (Disponible)";
    }

    listaPcs.appendChild(div);
  });
}

// ===== SELECT =====

function cargarSelect() {
  if (!select) return;

  select.innerHTML = "";

  pcs.forEach(pc => {
    if (!pc.reservado) {
      const option = document.createElement("option");
      option.value = pc.id;
      option.textContent = pc.nombre;
      select.appendChild(option);
    }
  });
}

// ===== RESERVA =====

if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const grupo = document.getElementById("grupo").value;
    const pcId = Number(document.getElementById("pcSeleccionado").value);
    const motivo = document.getElementById("motivo").value;
    const error = document.getElementById("error");

    if (!nombre || !grupo || !pcId) {
      error.textContent = "Rellena todos los campos";
      return;
    }

    const pc = pcs.find(p => p.id === pcId);

    if (pc) pc.reservado = true;

    mostrarPCs();
    cargarSelect();

    form.reset();
  });
}

// ===== RESET =====

function resetearPCs() {
  pcs.forEach(pc => pc.reservado = false);
  mostrarPCs();
  cargarSelect();
}

// ===== INICIO =====

mostrarPCs();
cargarSelect();
// ===============================
// PERSONALIZA ESTAS 2 COSAS
// ===============================
const fechaInicio = new Date("2025-09-22T00:00:00");

// Cambia el mensaje directamente en index.html si quieres.

// ===============================
// ABRIR / CERRAR LA SORPRESA
// ===============================
const btn = document.getElementById("sunflowerBtn");
const letter = document.getElementById("letter");
const closeBtn = document.getElementById("closeBtn");

btn.addEventListener("click", () => {
  letter.classList.add("open");
  lanzarPetalos(28);
});

closeBtn.addEventListener("click", () => {
  letter.classList.remove("open");
});

letter.addEventListener("click", (e) => {
  if (e.target === letter) letter.classList.remove("open");
});

// ===============================
// CONTADOR EN TIEMPO REAL
// ===============================
function actualizarContador() {
  const ahora = new Date();
  let diferencia = Math.max(0, ahora - fechaInicio);

  const segundosTotales = Math.floor(diferencia / 1000);
  const dias = Math.floor(segundosTotales / 86400);
  const horas = Math.floor((segundosTotales % 86400) / 3600);
  const minutos = Math.floor((segundosTotales % 3600) / 60);
  const segundos = segundosTotales % 60;

  document.getElementById("counter").textContent =
    `${dias} días · ${horas} horas · ${minutos} minutos · ${segundos} segundos`;
}

actualizarContador();
setInterval(actualizarContador, 1000);

// ===============================
// PÉTALOS QUE CAEN
// ===============================
function lanzarPetalos(cantidad = 10) {
  for (let i = 0; i < cantidad; i++) {
    const petalo = document.createElement("div");
    petalo.className = "falling";
    petalo.textContent = Math.random() > 0.5 ? "🌻" : "💛";

    const duracion = 4 + Math.random() * 5;
    const x = (Math.random() - 0.5) * 300;

    petalo.style.left = Math.random() * 100 + "vw";
    petalo.style.fontSize = (12 + Math.random() * 18) + "px";
    petalo.style.animationDuration = duracion + "s";
    petalo.style.setProperty("--x", x + "px");

    document.getElementById("petals").appendChild(petalo);

    setTimeout(() => petalo.remove(), duracion * 1000);
  }
}

// Algunos pétalos de fondo
setInterval(() => lanzarPetalos(2), 2200);

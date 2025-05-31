function calcular() {
  const ventas = parseFloat(document.getElementById("ventas").value) || 0;
  const gastoVentas = parseFloat(document.getElementById("gastoVentas").value) || 0;
  const gastoAdmin = parseFloat(document.getElementById("gastoAdmin").value) || 0;
  const gastoGasolina = parseFloat(document.getElementById("gastoGasolina").value) || 0;
  const gastoOtros = parseFloat(document.getElementById("gastoOtros").value) || 0;
  const activos = parseFloat(document.getElementById("activos").value) || 0;
  const pasivos = parseFloat(document.getElementById("pasivos").value) || 0;

  const utilidad = ventas - (gastoVentas + gastoAdmin + gastoGasolina + gastoOtros);
  const balance = activos - pasivos;

  document.getElementById("utilidad").innerText = `$${utilidad.toFixed(2)}`;
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;

  document.getElementById("resultados").classList.remove("hidden");
}

function enviarWhatsApp() {
  const utilidad = document.getElementById("utilidad").innerText;
  const balance = document.getElementById("balance").innerText;

  const mensaje = `Resumen Financiero:%0AUtilidad Neta: ${utilidad}%0ABalance Neto: ${balance}`;
  const telefono = "5218138474143"; // Teléfono de MTK

  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}

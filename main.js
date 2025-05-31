
function calcular() {
  const ventas = parseFloat(document.getElementById("ventas").value) || 0;
  const gastoVentas = parseFloat(document.getElementById("gastoVentas").value) || 0;
  const gastoAdmin = parseFloat(document.getElementById("gastoAdmin").value) || 0;
  const gastoGasolina = parseFloat(document.getElementById("gastoGasolina").value) || 0;
  const gastoOtros = parseFloat(document.getElementById("gastoOtros").value) || 0;
  const activos = parseFloat(document.getElementById("activos").value) || 0;
  const pasivos = parseFloat(document.getElementById("pasivos").value) || 0;

  const iva = ventas * 0.16;
  const utilidad = ventas - (gastoVentas + gastoAdmin + gastoGasolina + gastoOtros + iva);
  const balance = activos - pasivos;

  document.getElementById("iva").innerText = `$${iva.toFixed(2)}`;
  document.getElementById("utilidad").innerText = `$${utilidad.toFixed(2)}`;
  document.getElementById("balance").innerText = `$${balance.toFixed(2)}`;
  document.getElementById("resultados").classList.remove("hidden");
}

function enviarWhatsApp() {
  const ventas = document.getElementById("ventas").value;
  const gastoVentas = document.getElementById("gastoVentas").value;
  const gastoAdmin = document.getElementById("gastoAdmin").value;
  const gastoGasolina = document.getElementById("gastoGasolina").value;
  const gastoOtros = document.getElementById("gastoOtros").value;
  const activos = document.getElementById("activos").value;
  const pasivos = document.getElementById("pasivos").value;
  const utilidad = document.getElementById("utilidad").innerText;
  const balance = document.getElementById("balance").innerText;
  const iva = document.getElementById("iva").innerText;

  const mensaje =
    `📊 Reporte Financiero MTK:%0A` +
    `🔹 Ventas Totales: $${ventas}%0A` +
    `🔹 Gasto en Ventas: $${gastoVentas}%0A` +
    `🔹 Gasto Administrativo: $${gastoAdmin}%0A` +
    `🔹 Gasto Gasolina: $${gastoGasolina}%0A` +
    `🔹 Otros Gastos: $${gastoOtros}%0A` +
    `🔹 IVA (16%): ${iva}%0A` +
    `🔹 Activos: $${activos}%0A` +
    `🔹 Pasivos: $${pasivos}%0A` +
    `----------------------------%0A` +
    `✅ Utilidad Neta: ${utilidad}%0A` +
    `📈 Balance Neto: ${balance}`;

  const telefono = "5218138474143";
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  window.open(url, "_blank");
}

function descargarPDF() {
  alert("La funcionalidad PDF estará disponible en la siguiente versión.");
}

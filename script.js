
function toggleTooltip(id) {
  const tooltip = document.getElementById(id);
  tooltip.style.display = tooltip.style.display === 'block' ? 'none' : 'block';
}

function calcular() {
  const ventas = parseFloat(document.getElementById('ventas').value) || 0;
  const costos = parseFloat(document.getElementById('costos').value) || 0;
  const gasolina = parseFloat(document.getElementById('gasolina').value) || 0;
  const activos = parseFloat(document.getElementById('activos').value) || 0;
  const pasivos = parseFloat(document.getElementById('pasivos').value) || 0;

  const iva = ventas * 0.16;
  const utilidadNeta = ventas - costos - gasolina - iva;
  const balanceNeto = activos - pasivos;

  const resultado = `
    ✅ Utilidad Neta: $${utilidadNeta.toFixed(2)}<br>
    🧮 IVA (16%): $${iva.toFixed(2)}<br>
    💼 Balance Neto: $${balanceNeto.toFixed(2)}
  `;
  document.getElementById('resultados').innerHTML = resultado;

  const textoWhatsApp = `Resumen Financiero:%0A- Ventas: $${ventas}%0A- Costos y Gastos: $${costos}%0A- Gasolina: $${gasolina}%0A- IVA: $${iva.toFixed(2)}%0A- Utilidad Neta: $${utilidadNeta.toFixed(2)}%0A- Pagos Recibidos (Activos): $${activos}%0A- Pendiente por Pagar (Pasivos): $${pasivos}%0A- Balance Neto: $${balanceNeto.toFixed(2)}`;
  const url = `https://wa.me/?text=${textoWhatsApp}`;
  window.lastWhatsAppMessage = textoWhatsApp;
  window.resultadosCalculo = { ventas, costos, gasolina, iva, utilidadNeta, activos, pasivos, balanceNeto };

  mostrarResultados(utilidadNeta, iva, balanceNeto);
ventas, costos, gasolina, iva, utilidadNeta, activos, pasivos, balanceNeto);
}

function generarPDF(ventas, costos, gasolina, iva, utilidadNeta, activos, pasivos, balanceNeto) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Resumen Financiero - MTK", 20, 20);
  doc.setFontSize(12);
  doc.text(`Ventas: $${ventas}`, 20, 35);
  doc.text(`Costos y Gastos: $${costos}`, 20, 45);
  doc.text(`Gasolina: $${gasolina}`, 20, 55);
  doc.text(`IVA (16%): $${iva.toFixed(2)}`, 20, 65);
  doc.text(`Utilidad Neta: $${utilidadNeta.toFixed(2)}`, 20, 75);
  doc.text(`Pagos Recibidos (Activos): $${activos}`, 20, 85);
  doc.text(`Pendiente por Pagar (Pasivos): $${pasivos}`, 20, 95);
  doc.text(`Balance Neto: $${balanceNeto.toFixed(2)}`, 20, 105);

  doc.save("Resumen_Financiero_MTK.pdf");
}

function enviarWhatsApp() {
  if (window.lastWhatsAppMessage) {
    window.open(`https://wa.me/?text=${window.lastWhatsAppMessage}`, '_blank');
  } else {
    alert("Por favor, primero haz clic en Calcular.");
  }
}

function generarPDFGlobal() {
  if (!window.resultadosCalculo) {
    alert("Primero realiza el cálculo.");
    return;
  }

  const { ventas, costos, gasolina, iva, utilidadNeta, activos, pasivos, balanceNeto } = window.resultadosCalculo;
  generarPDF(ventas, costos, gasolina, iva, utilidadNeta, activos, pasivos, balanceNeto);
}

function mostrarResultados(utilidadNeta, iva, balanceNeto) {
  const resultado = `
    ✅ Utilidad Neta: $${utilidadNeta.toFixed(2)}<br>
    🧮 IVA (16%): $${iva.toFixed(2)}<br>
    💼 Balance Neto: $${balanceNeto.toFixed(2)}
  `;
  document.getElementById('resultados').innerHTML = resultado;
}


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
}

function calcular() {
  const ventas = parseFloat(document.getElementById('ventas').value) || 0;
  const costos = parseFloat(document.getElementById('costos').value) || 0;
  const gasolina = parseFloat(document.getElementById('gasolina').value) || 0;
  const activos = parseFloat(document.getElementById('activos').value) || 0;
  const pasivos = parseFloat(document.getElementById('pasivos').value) || 0;
  const pagado = parseFloat(document.getElementById('pagado').value) || 0;
  const adeuda = parseFloat(document.getElementById('adeuda').value) || 0;

  const iva = ventas * 0.16;
  const utilidadNeta = ventas - costos - gasolina - iva;
  const balanceNeto = activos - pasivos;

  const comisionVendedor = ventas * 0.05;
  const empresa = utilidadNeta * 0.25;
  const socio1 = utilidadNeta * 0.25;
  const socio2 = utilidadNeta * 0.25;
  const socio3 = utilidadNeta * 0.25;

  const resultado = `
    ✅ Utilidad Neta: $${utilidadNeta.toFixed(2)}<br>
    🧮 IVA (16%): $${iva.toFixed(2)}<br>
    💼 Balance Neto: $${balanceNeto.toFixed(2)}<br>
    💰 Comisión Vendedor (5%): $${comisionVendedor.toFixed(2)}<br>
    🏢 Empresa (25%): $${empresa.toFixed(2)}<br>
    👤 Socio 1: $${socio1.toFixed(2)}<br>
    👤 Socio 2: $${socio2.toFixed(2)}<br>
    👤 Socio 3: $${socio3.toFixed(2)}<br>
    ✅ Cliente pagó: $${pagado.toFixed(2)}<br>
    ❗ Cliente adeuda: $${adeuda.toFixed(2)}
  `;

  document.getElementById('resultados').innerHTML = resultado;
}

function enviarWhatsApp() {
  const ventas = document.getElementById('ventas').value;
  const costos = document.getElementById('costos').value;
  const gasolina = document.getElementById('gasolina').value;
  const activos = document.getElementById('activos').value;
  const pasivos = document.getElementById('pasivos').value;
  const pagado = document.getElementById('pagado').value;
  const adeuda = document.getElementById('adeuda').value;

  const resultados = document.getElementById('resultados').innerText;
  const mensaje = `*Resumen Financiero MTK*\nVentas: $${ventas}\nCostos: $${costos}\nGasolina: $${gasolina}\nActivos: $${activos}\nPasivos: $${pasivos}\nPagado: $${pagado}\nAdeuda: $${adeuda}\n\n${resultados.replace(/<br>/g, '\n')}`;

  const url = `https://wa.me/5218138474143?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

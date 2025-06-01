
function calcular() {
  const ventas = parseFloat(document.getElementById('ventas').value) || 0;
  const costos = parseFloat(document.getElementById('costos').value) || 0;
  const gasolina = parseFloat(document.getElementById('gasolina').value) || 0;
  const activos = parseFloat(document.getElementById('activos').value) || 0;
  const pasivos = parseFloat(document.getElementById('pasivos').value) || 0;
  const pagado = parseFloat(document.getElementById('pagado').value) || 0;
  const boletos = parseFloat(document.getElementById('boletos').value) || 0;
  const fletes = parseFloat(document.getElementById('fletes').value) || 0;
  const comida = parseFloat(document.getElementById('comida').value) || 0;
  const taxi = parseFloat(document.getElementById('taxi').value) || 0;

  const comisionista = ventas * 0.05;
  
  const gastosTotales = costos + gasolina + boletos + fletes + comida + taxi + activos + comisionista;
  const iva = ventas * 0.16;
  const ingresosTotales = ventas + pasivos;
  const utilidadNeta = ingresosTotales - gastosTotales - iva;
  const balanceNeto = ingresosTotales - gastosTotales;

  const empresa = utilidadNeta * 0.25;
  const socio = utilidadNeta * 0.25;

  const totalDistribuido = empresa + socio * 3;
  const totalNecesario = gastosTotales + iva + totalDistribuido;
  const faltante = totalNecesario - pagado;

  let resultado = `
    <span style="color:green;">💳 Pagado por cliente: $${pagado.toFixed(2)}</span><br>
    💼 Ventas: $${ventas.toFixed(2)}<br>
    📦 Costos y Gastos: $${costos.toFixed(2)}<br>
    ⛽ Gasolina: $${gasolina.toFixed(2)}<br>
    ✈️ Boletos: $${boletos.toFixed(2)}<br>
    🚛 Fletes: $${fletes.toFixed(2)}<br>
    🍽️ Comida: $${comida.toFixed(2)}<br>
    🚕 Taxi: $${taxi.toFixed(2)}<br>
    🧰 Herramientas (activos): $${activos.toFixed(2)}<br>
    📥 Pasivos (ingresos adicionales): $${pasivos.toFixed(2)}<br>
    💼 Comisión (5%): $${comisionista.toFixed(2)}<br>
    🧾 IVA (16%): $${iva.toFixed(2)}<br>
    💼 Balance Neto: $${balanceNeto.toFixed(2)}<br>
    💰 Utilidad Neta: $${utilidadNeta.toFixed(2)}<br>
  `;

  if (utilidadNeta < 0) {
    resultado += `<span style="color:red; font-weight:bold;">❌ Utilidad Neta NEGATIVA. No se puede repartir ganancias.</span><br>`;
  } else {
    resultado += `<span style="color:green;">✅ Utilidad positiva. Se puede repartir.</span><br>`;
    resultado += `🏢 Empresa (25% utilidad): $${empresa.toFixed(2)}<br>`;
    resultado += `👤 Socio 1: $${socio.toFixed(2)}<br>`;
    resultado += `👤 Socio 2: $${socio.toFixed(2)}<br>`;
    resultado += `👤 Socio 3: $${socio.toFixed(2)}<br>`;
  }

  resultado += `<br><strong>📊 TOTAL A CUBRIR: $${totalNecesario.toFixed(2)}</strong><br>`;
  if (pagado < totalNecesario) {
    resultado += `<span style="color:red;">🔴 Falta por cubrir: $${faltante.toFixed(2)}</span><br>`;
  } else {
    resultado += `<span style="color:green;">✅ Todo cubierto. No hay adeudo.</span><br>`;
  }

  document.getElementById("resultados").innerHTML = resultado;
}


function enviarWhatsApp() {
  const cot = document.getElementById("cotizacion").value || "Sin folio";
  const cliente = document.getElementById("cliente").value || "Sin nombre";
  const tel = document.getElementById("telefono").value || "Sin teléfono";
  const resultados = document.getElementById("resultados").innerText;

  const mensaje = `*Cotización MTK*

🧾 Cotización: ${cot}
👤 Cliente: ${cliente}
📞 Teléfono: ${tel}

📊 Detalles:
${resultados}`;

  // Número fijo de destino (ejemplo: número de la empresa)
  const url = `https://wa.me/5218138474143?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

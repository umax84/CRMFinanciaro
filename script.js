
function calcular() {
  const ventas = parseFloat(document.getElementById('ventas').value) || 0;
  const costos = parseFloat(document.getElementById('costos').value) || 0;
  const gasolina = parseFloat(document.getElementById('gasolina').value) || 0;
  const activos = parseFloat(document.getElementById('activos').value) || 0; // herramientas compradas
  const pasivos = parseFloat(document.getElementById('pasivos').value) || 0; // ingresos por otros productos
  const pagado = parseFloat(document.getElementById('pagado').value) || 0;
  const adeuda = parseFloat(document.getElementById('adeuda').value) || 0;
  const boletos = parseFloat(document.getElementById('boletos').value) || 0;
  const fletes = parseFloat(document.getElementById('fletes').value) || 0;
  const comida = parseFloat(document.getElementById('comida').value) || 0;
  const taxi = parseFloat(document.getElementById('taxi').value) || 0;

  const gastosTotales = costos + gasolina + boletos + fletes + comida + taxi + activos; // activos = herramientas = gasto
  const iva = ventas * 0.16;
  const ingresosTotales = ventas + pasivos; // pasivos = ingreso por otros productos
  const utilidadNeta = ingresosTotales - gastosTotales - iva;
  const balanceNeto = ingresosTotales - gastosTotales;

  const comisionVendedor = ventas * 0.05;
  const empresa = utilidadNeta * 0.25;
  const socio = utilidadNeta * 0.25;

  let resultado = `
    <span style="color:green;">💳 Pagado por cliente: $${pagado.toFixed(2)}</span><br>
    💵 Total Adeudado: $${adeuda.toFixed(2)}<br>
    🧾 IVA: $${iva.toFixed(2)}<br>
    📥 Ingresos por otros productos: $${pasivos.toFixed(2)}<br>
    🧰 Herramientas compradas (activos): $${activos.toFixed(2)}<br>
    🧮 Gastos Totales: $${gastosTotales.toFixed(2)}<br>
    💰 Comisión Vendedor (5%): $${comisionVendedor.toFixed(2)}<br>
    💼 Balance Neto: $${balanceNeto.toFixed(2)}<br>
  `;

  const totalParaCubrir = gastosTotales + comisionVendedor + empresa + iva;
  const restante = pagado - totalParaCubrir;

  if (restante >= socio * 3) {
    resultado += `<span style="color:green;">✅ Se puede pagar todo, incluyendo empresa y socios.</span><br>`;
    resultado += `🏢 Empresa (25%): $${empresa.toFixed(2)}<br>`;
    resultado += `👤 Socio 1: $${socio.toFixed(2)}<br>`;
    resultado += `👤 Socio 2: $${socio.toFixed(2)}<br>`;
    resultado += `👤 Socio 3: $${socio.toFixed(2)}<br>`;
  } else {
    resultado += `<span style="color:red;">❗ No alcanza para pagar a todos los socios.</span><br>`;
    resultado += `🔴 Faltan: $${Math.abs(restante - (socio * 3)).toFixed(2)} para cubrir socios.<br>`;
  }

  document.getElementById("resultados").innerHTML = resultado;
}

function enviarWhatsApp() {
  const cot = document.getElementById("cotizacion").value;
  const cliente = document.getElementById("cliente").value;
  const tel = document.getElementById("telefono").value;
  const resultados = document.getElementById("resultados").innerText;

  const mensaje = `*Cotización MTK*
Cotización: ${cot}
Cliente: ${cliente}
Tel: ${tel}

${resultados}`;
  const url = `https://wa.me/5218138474143?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

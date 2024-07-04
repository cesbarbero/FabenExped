// Obtener el elemento del formulario y el número de entrada
const numberForm = document.getElementById('numberForm');
const numberInput = document.getElementById('numberInput');
const resultsList = document.getElementById('results');

// Agregar un event listener al numberInput para limpiar los resultados cuando se modifique
numberInput.addEventListener('input', function() {
    resultsList.innerHTML = ''; // Limpiar los resultados
});

// Agregar un event listener al formulario para manejar el envío
numberForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener el valor del número de entrada
    const number = parseInt(numberInput.value, 10);

    // Verificar que el input sea un número entero válido
    if (isNaN(number) || !Number.isInteger(number)) {
        alert('Por favor, introduce un número entero válido.');
        return;
    }

    // Realizar los cálculos utilizando Math.ceil
    const cajas = Math.ceil(number * 1.07 / 800);
    const pallets = Math.ceil(cajas / 32);
    const separadores = Math.ceil(cajas / 8);
    const etiquetas = cajas;
    const bolsas = cajas;

    // Mostrar los resultados
    resultsList.innerHTML = `
        <li>Cantidad de pouch por OP: ${number}</li>
        <li>Cantidad de cajas: ${cajas}</li>
        <li>Cantidad de pallets: ${pallets}</li>
        <li>Cantidad de separadores: ${separadores}</li>
        <li>Cantidad de etiquetas: ${etiquetas}</li>
        <li>Cantidad de bolsas: ${bolsas}</li>
    `;
});

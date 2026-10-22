// Número oficial de CFMOTO Chihuahua (614 111 7959)
const TELEFONO_WHATSAPP = "526141117959";

function seleccionarOpcion(nombreCategoria) {
    const selectCategoria = document.getElementById("categoria");
    selectCategoria.value = nombreCategoria;
    
    document.getElementById("contacto").scrollIntoView({ behavior: 'smooth' });
}

document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const categoria = document.getElementById("categoria").value;
    const consulta = document.getElementById("mensaje").value;

    const mensaje = `Hola CFMOTO Chihuahua.%0A%0AMi nombre es *${nombre}*.%0AEstoy interesado en: *${categoria}*.%0A%0A*Detalles de mi consulta:* ${consulta}%0A%0AQuedo en espera de información o cotización. Gracias.`;

    const url = `https://wa.me/${TELEFONO_WHATSAPP}?text=${mensaje}`;
    window.open(url, "_blank");
});
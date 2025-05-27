// Datos de ofertas estáticos
const ofertas = [
    {
        id: 1,
        titulo: "Plan O2 ",
        descripcion: "Ideal para hogares pequeños",
        precio: "29.99€",
        caracteristicas: [
            "Internet de alta velocidad",
            "Soporte 24/7",
            "Sin permanencia"
        ],
        tipo: "O2"
    },
    {
        id: 2,
        titulo: "Plan Vodafone",
        descripcion: "Perfecto para familias",
        precio: "49.99€",
        caracteristicas: [
            "Internet de alta velocidad",
            "Soporte 24/7",
            "Sin permanencia",
            "Instalación gratuita"
        ],
        tipo: "Vodafone"
    },
    {
        id: 3,
        titulo: "Plan Orange",
        descripcion: "Para negocios y empresas",
        precio: "79.99€",
        caracteristicas: [
            "Internet de alta velocidad",
            "Soporte 24/7",
            "Sin permanencia",
            "Instalación gratuita",
            "IP fija"
        ],
        tipo: "Orange"
    }
];

// Función para generar las tarjetas de ofertas
function generarOfertas() {
    const contenedor = document.getElementById('ofertas-container');
    if (!contenedor) return;

    ofertas.forEach(oferta => {
        const card = document.createElement('div');
        card.className = `col-md-4 mb-4 d-flex`;
        card.innerHTML = `
            <div class="card ${oferta.tipo} w-100">
                <div class="card-body d-flex flex-column">
                    <h3 class="card-title">${oferta.titulo}</h3>
                    <p class="card-text">${oferta.descripcion}</p>
                    <div class="precio">${oferta.precio}<small>/mes</small></div>
                    <ul class="caracteristicas flex-grow-1">
                        ${oferta.caracteristicas.map(caracteristica => 
                            `<li><i class="fas fa-check"></i>${caracteristica}</li>`
                        ).join('')}
                    </ul>
                </div>
                <div class="card-footer">
                    <button class="btn btn-primary w-100" onclick="abrirModalContratacion('${oferta.titulo}')">
                        Solicitar ahora
                    </button>
                </div>
            </div>
        `;
        contenedor.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    // Generar ofertas al cargar la página
    generarOfertas();

    // Manejar el formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            alert('¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.');
            this.reset();
        });
    }

    // Manejar el slider de hora
    const horaSlider = document.getElementById('horaLlamada');
    const horaSeleccionada = document.getElementById('horaSeleccionada');
    
    if (horaSlider && horaSeleccionada) {
        horaSlider.addEventListener('input', function() {
            const hora = parseInt(this.value);
            const minutos = hora % 1 === 0 ? '00' : '30';
            horaSeleccionada.textContent = `${hora}:${minutos}`;
        });
    }
});

// Función para abrir el modal de contratación
function abrirModalContratacion(plan) {
    const modal = new bootstrap.Modal(document.getElementById('contratacionModal'));
    document.getElementById('contratacionModalLabel').textContent = `Contratar ${plan}`;
    modal.show();
}

// Función para enviar la solicitud
function enviarSolicitud() {
    const nombre = document.getElementById('nombreContrato').value;
    const apellidos = document.getElementById('apellidosContrato').value;
    const telefono = document.getElementById('telefonoContrato').value;
    const hora = document.getElementById('horaSeleccionada').textContent;

    if (!nombre || !apellidos || !telefono) {
        alert('Por favor, complete todos los campos del formulario.');
        return;
    }

    alert(`¡Gracias ${nombre} ${apellidos}!\nTe llamaremos al ${telefono} a las ${hora}.`);
    
    // Cerrar el modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('contratacionModal'));
    modal.hide();
    
    // Limpiar el formulario
    document.getElementById('contratacionForm').reset();
    document.getElementById('horaSeleccionada').textContent = '13:30';
} 
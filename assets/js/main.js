document.addEventListener('DOMContentLoaded', function() {
    // Datos de ofertas estáticos
    const ofertas = [
        {
            id: 1,
            titulo: "Plan Básico",
            descripcion: "Internet de alta velocidad para tu hogar",
            precio: "29.99",
            caracteristicas: [
                "50 Mbps de velocidad",
                "Sin límite de datos",
                "Instalación gratuita",
                "Soporte 24/7"
            ]
        },
        {
            id: 2,
            titulo: "Plan Familiar",
            descripcion: "La mejor opción para toda la familia",
            precio: "49.99",
            caracteristicas: [
                "200 Mbps de velocidad",
                "Sin límite de datos",
                "Instalación gratuita",
                "Soporte 24/7",
                "Router de última generación"
            ]
        },
        {
            id: 3,
            titulo: "Plan Empresarial",
            descripcion: "Solución completa para tu negocio",
            precio: "99.99",
            caracteristicas: [
                "1 Gbps de velocidad",
                "Sin límite de datos",
                "IP fija",
                "Soporte prioritario 24/7",
                "Router empresarial",
                "Backup de datos"
            ]
        }
    ];

    // Mostrar ofertas
    const ofertasContainer = document.getElementById('ofertas-container');
    ofertas.forEach(oferta => {
        const ofertaHTML = `
            <div class="col-md-4 mb-4">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${oferta.titulo}</h5>
                        <p class="card-text">${oferta.descripcion}</p>
                        <h3 class="text-primary mb-3">$${oferta.precio}/mes</h3>
                        <ul class="list-unstyled">
                            ${oferta.caracteristicas.map(caracteristica => 
                                `<li><i class="bi bi-check-circle-fill text-success me-2"></i>${caracteristica}</li>`
                            ).join('')}
                        </ul>
                    </div>
                    <div class="card-footer bg-white border-top-0">
                        <button class="btn btn-primary w-100" onclick="abrirModalContratacion('${oferta.titulo}')">
                            Contratar ahora
                        </button>
                    </div>
                </div>
            </div>
        `;
        ofertasContainer.innerHTML += ofertaHTML;
    });

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
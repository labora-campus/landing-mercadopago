// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Manejo del formulario de contacto
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener los valores del formulario
            const formData = {
                nombre: this.querySelector('input[type="text"]').value,
                email: this.querySelector('input[type="email"]').value,
                mensaje: this.querySelector('textarea').value
            };

            // Aquí puedes agregar la lógica para enviar los datos del formulario
            console.log('Datos del formulario:', formData);
            
            // Mostrar mensaje de éxito
            alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
            
            // Limpiar el formulario
            this.reset();
        });
    }

    // Animación de aparición para las tarjetas de características
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a las tarjetas de características
    document.querySelectorAll('.feature-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-in-out';
        observer.observe(card);
    });

    // Efecto hover para el botón de crear cuenta
    const botonesCrearCuenta = document.querySelectorAll('.btn-crear-cuenta');
    
    botonesCrearCuenta.forEach(boton => {
        boton.addEventListener('mouseenter', () => {
            boton.style.backgroundColor = '#0082BE'; // Un azul más oscuro
            boton.style.transform = 'translateY(-2px)';
            boton.style.transition = 'all 0.3s ease';
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.backgroundColor = '#009EE3'; // Color original
            boton.style.transform = 'translateY(0)';
        });
    });

    // Efecto hover para los enlaces de la navbar
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            link.style.color = '#009EE3'; // Color azul de Mercado Pago
            link.style.transition = 'color 0.3s ease';
        });

        link.addEventListener('mouseleave', () => {
            link.style.color = '#333'; // Color original
        });
    });

    // Efecto hover para los botones de features
    const botonesFeature = document.querySelectorAll('.btn-feature');
    
    botonesFeature.forEach(boton => {
        boton.addEventListener('mouseenter', () => {
            boton.style.backgroundColor = '#0082BE';
            boton.style.transform = 'translateY(-2px)';
            boton.style.boxShadow = '0 4px 8px rgba(0,0,0,0.1)';
            boton.style.transition = 'all 0.3s ease';
        });

        boton.addEventListener('mouseleave', () => {
            boton.style.backgroundColor = '#009EE3';
            boton.style.transform = 'translateY(0)';
            boton.style.boxShadow = 'none';
        });
    });
}); 
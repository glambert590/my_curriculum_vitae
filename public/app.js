// Importamos componentes
import Header from './components/header.js';
import Education from './components/education.js';
import Experience from './components/experience.js';
import Navigation from './components/navigation.js';
import Languages from './components/languages.js';
import Skills from './components/skills.js';
import Contact from './components/contact.js';

// Importamos datos
import enData from './data/en.js';
import esData from './data/es.js';

class CVApp {
  constructor() {
    this.state = {
      lang: 'en',
      data: enData
    };

    this.dropdownInstance = null; // Guardaremos la instancia del dropdown aquí
    this.init();
  }

  init() {
    this.render();
    this.setupDropdown();
  }

  render() {
    const navigationbar = document.getElementById('navigation');
    navigationbar.innerHTML = `
      ${Navigation(this.state.data.navigation, this.state.lang)}
    `;

    const app = document.getElementById('app');
    app.innerHTML = `
    ${Header(this.state.data.header, this.state.lang)}
    ${Education(this.state.data.education)}
    ${Experience(this.state.data.experience)}
    ${Languages(this.state.data.languages)}
    ${Skills(this.state.data.skills)}
    ${Contact(this.state.data.contact)}
    `;

    // Volvemos a configurar el dropdown después de cada render
    this.setupDropdown();
  }

  setupDropdown() {
    // Destruimos el dropdown anterior si existe
    if (this.dropdownInstance) {
      this.dropdownInstance.hide();
      this.dropdownInstance = null;
    }

    const $targetEl = document.getElementById('dropdownMenu');
    const $triggerEl = document.getElementById('dropdownButton');

    if ($targetEl && $triggerEl) {
      // Configuración del dropdown
      const options = {
        placement: 'bottom',
        triggerType: 'click',
        offsetSkidding: 0,
        offsetDistance: 10,
        delay: 300,
        ignoreClickOutsideClass: false,
        onHide: () => console.log('dropdown has been hidden'),
        onShow: () => console.log('dropdown has been shown'),
        onToggle: () => console.log('dropdown has been toggled'),
      };

      // Inicializar el dropdown
      this.dropdownInstance = new Dropdown($targetEl, $triggerEl, options, {
        id: 'dropdownMenu',
        override: true
      });

      // Manejador de eventos para las opciones del dropdown
      const handleOptionClick = (e) => {
        e.preventDefault();
        const option = e.currentTarget;
        const selectedValue = option.dataset.value;
        const selectedText = option.querySelector('span').textContent;
        const selectedIcon = option.querySelector('img').src;
        
        this.handleSelection(selectedValue, selectedText, selectedIcon);
        this.dropdownInstance.hide();
      };

      // Limpiamos event listeners anteriores para evitar duplicados
      const optionsElements = document.querySelectorAll('[data-callback="handleSelection"]');
      optionsElements.forEach(option => {
        option.removeEventListener('click', handleOptionClick);
        option.addEventListener('click', handleOptionClick);
      });
    }
  }

  // Método para manejar la selección de idioma
  handleSelection(value, text, iconSrc) {
    console.log('Selección:', { value, text, iconSrc });

    const button = document.getElementById('dropdownButton');
    if (!button) return;

    // Actualizar el botón
    const buttonText = button.querySelector('.dropdown-button-text');
    const buttonIcon = button.querySelector('img');

    if (buttonText) buttonText.textContent = text;
    if (buttonIcon) buttonIcon.src = iconSrc;

    // Cambiar el idioma y los datos
    this.state.lang = value;
    this.state.data = value === 'es' ? esData : enData;
    
    // Volver a renderizar
    this.render();
  }
}

// Iniciamos la aplicación
document.addEventListener('DOMContentLoaded', () => {
  new CVApp();
});
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
    this.dropdownInstance = null;
    this.init();
  }

  init() {
    this.render();
    this.setupGlobalListeners();

  }

  setupGlobalListeners() {
    // Listeners que solo necesitan configurarse una vez
    window.addEventListener('scroll', this.handleScroll.bind(this));
    window.addEventListener('scroll', () => this.closeAllMenus(), { passive: true });
  }

  handleScroll() {
    const menuButton = document.getElementById('mobile-menu-button');
    if (menuButton) {
      menuButton.style.position = 'fixed';
      menuButton.style.zIndex = '1001';
    }
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

    this.setupDynamicListeners();
  }

  setupDynamicListeners() {
    this.setupDropdown();
    this.setupMobileMenu();
    this.setupNavNameClick();
  }

  closeAllMenus() {
    const menu = document.getElementById('mobile-menu');
    const dropdownMenu = document.getElementById('mobile-dropdownMenu');

    menu?.classList.remove('active');
    dropdownMenu?.classList.add('hidden');
    this.dropdownInstance?.hide();
  }
  setupNavNameClick() {
    const navName = document.getElementById('nav-name');
    if (navName) {
      navName.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      });
    }
  }

  setupMobileMenu() {
    const menu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('mobile-menu-button');
    const dropdownButton = document.getElementById('mobile-dropdownButton');
    const dropdownMenu = document.getElementById('mobile-dropdownMenu');

    // Limpiar listeners antiguos
    const cleanElement = (element) => {
      if (element) {
        const newElement = element.cloneNode(true);
        element.replaceWith(newElement);
        return newElement;
      }
      return null;
    };

    const cleanMenuButton = cleanElement(menuButton);
    const cleanDropdownButton = cleanElement(dropdownButton);

    // Menú principal
    cleanMenuButton?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      menu.classList.toggle('active');
      dropdownMenu?.classList.add('hidden');
      this.dropdownInstance?.hide();
    });

    // Dropdown de idiomas
    cleanDropdownButton?.addEventListener('click', (e) => {
      e.stopPropagation();
      e.preventDefault();
      dropdownMenu?.classList.toggle('hidden');

      if (dropdownMenu && !dropdownMenu.classList.contains('hidden')) {
        const dropdownRect = dropdownMenu.getBoundingClientRect();
        if (dropdownRect.bottom > window.innerHeight) {
          menu.scrollTop += (dropdownRect.bottom - window.innerHeight + 10);
        }
      }
    });

    // Cerrar menús al hacer click fuera
    document.addEventListener('click', (e) => {
      if (!e.target.closest('#mobile-menu') && !e.target.closest('#mobile-menu-button')) {
        menu?.classList.remove('active');
      }

      if (!e.target.closest('#mobile-dropdownButton') && !e.target.closest('#mobile-dropdownMenu')) {
        dropdownMenu?.classList.add('hidden');
      }
    });
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
  handleSelection(value, text, iconSrc) {
    const button = document.getElementById('dropdownButton');
    if (!button) return;

    const buttonText = button.querySelector('.dropdown-button-text');
    const buttonIcon = button.querySelector('img');

    if (buttonText) buttonText.textContent = text;
    if (buttonIcon) buttonIcon.src = iconSrc;

    this.state.lang = value;
    this.state.data = value === 'es' ? esData : enData;

    this.render();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new CVApp();
});
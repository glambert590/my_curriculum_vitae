
export default function Navigation(data, lang) {
    return `
    <div class="container mx-auto px-4 py-3">
    <div class="flex justify-between items-center">
        <a href="#" id="nav-name" class="text-xl font-semibold text-gray-700 hover:text-gray-900 cursor-pointer">Gabriel Lambert</a>
        <div class="hidden md:flex space-x-6">            
            <button onclick="window.print()"
                class="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md text-sm">
                <i class="fas fa-print mr-1"></i>${data.print}
            </button>
            
            
            <button id="dropdownButton" data-dropdown-toggle="dropdownMenu" class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-500 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                <span class="dropdown-button-text">${lang === 'en' ? 'En' : 'Es'}</span>
                    <img src="${lang === 'en' ? './images/english.png' : './images/spanish.png'}" class="w-5 h-5 ml-2" alt="Idioma">
                <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>

                </svg>
            </button>
            
            <!-- Dropdown menu -->
            <div id="dropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownButton">
                    <li>
                        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-value="en" 
                            data-callback="handleSelection">
                            <span class="text-md mr-2">En</span>
                            <img 
                            src="./images/english.png"
                            class="w-5 h-5"
                            alt="Bandera"
                            />
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            data-value="es" 
                            data-callback="handleSelection">
                            <span class="text-md mr-2">Es</span> <!-- Añadí mr-2 para margen derecho -->
                            <img 
                            src="./images/spanish.png"
                            class="w-5 h-5"
                            alt="Bandera"
                            />
                        </a>
                    </li>
                  
                </ul>
            </div>

        </div>



        <!-- Mobile menu button -->
        <div class="md:hidden">
            <button id="mobile-menu-button" class="text-gray-800 focus:outline-none">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
            </button>
        </div>
    </div>
</div>
<!-- Mobile menu -->
<div id="mobile-menu" class="fixed top-0 right-0 w-full max-w-xs h-screen z-50 overflow-y-auto bg-white transform translate-x-full transition-transform duration-300 pt-16">
<!-- <div id="mobile-menu" class="hidden md:hidden bg-white">-->
    <div class="px-2 pt-2 pb-3 space-y-1">        
        <!-- Botón de imprimir -->
        <button onclick="window.print()" class="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-blue-600 hover:text-blue-800">
            <i class="fas fa-print mr-1"></i>${data.print}
        </button>
        
        <!-- Selector de idioma para móvil -->
        <div class="mobile-language-selector pt-2">
            <button id="mobile-dropdownButton" data-dropdown-toggle="mobile-dropdownMenu" 
                    class="text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center w-full justify-between" 
                    type="button">
                <span class="dropdown-button-text">${lang === 'en' ? 'En' : 'Es'}</span>
                <div class="flex items-center">
                    <img src="${lang === 'en' ? './images/english.png' : './images/spanish.png'}" class="w-5 h-5 ml-2" alt="Idioma">
                    <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </div>
            </button>
            
            <!-- Dropdown menu para móvil -->
            <div id="mobile-dropdownMenu" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-full mt-1">
                <ul class="py-2 text-sm text-gray-700" aria-labelledby="mobile-dropdownButton">
                    <li>
                        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100"
                            data-value="en" 
                            data-callback="handleSelection">
                            <span class="text-md mr-2">En</span>
                            <img src="./images/english.png" class="w-5 h-5" alt="Bandera"/>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex items-center px-4 py-2 hover:bg-gray-100"
                            data-value="es" 
                            data-callback="handleSelection">
                            <span class="text-md mr-2">Es</span>
                            <img src="./images/spanish.png" class="w-5 h-5" alt="Bandera"/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
    `;
  }

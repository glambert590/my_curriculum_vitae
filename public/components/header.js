

export default function Header(data, lang) {
      return `
            
            </div>
            <header id="about" class="flex flex-col items-center md:items-start md:flex-row mb-8 border-b pb-8 section">
          <div
            class="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4 md:mb-0 md:mr-6">
            <img src="./images/IMGP79531.jpg" alt="Gabriel Lambert" class="w-full h-full object-cover">/</img>
          </div>
          <div class="text-center md:text-left w-full md:w-auto">
            <h1 class="text-3xl font-bold text-gray-800">Gabriel Lambert</h1>
            <h2 class="text-xl text-blue-600 font-semibold mb-2">.NET Backend Developer</h2>
            <p class="text-gray-600 mb-2">
              <i class="fas fa-map-marker-alt mr-1"></i> Havana, Cuba
            </p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4 mt-3">
              <a href="mailto:glambert590@gmail.com" class="text-gray-700 hover:text-blue-600">
                <i class="fas fa-envelope mr-1"></i> glambert590@gmail.com
              </a>
              <a href="tel:+5352004038" class="text-gray-700 hover:text-blue-600">
                <i class="fas fa-phone mr-1"></i> +53 52004038
              </a>
            </div>
          </div>
      </header>
            <p class="mb-6">${data.description}</p>
      `;
    }
export default function Experience(experiences) {
    return `
      <h2 class="text-xl font-semibold mt-6 mb-2 border-b  pb-1">
        ${experiences.title || 'Professional experience'}
      </h2>
      
      ${experiences.sections.map(exp => `
    <div class="mb-6">
      <div class="flex justify-between">
        <p class="font-bold">${exp.company}</p>
        <p>${exp.date}</p>
      </div>
      <p class="mb-3">${exp.description}</p>
  
      ${Object.entries(exp.achievements).map(([category, items]) => `
        <div class="mb-4">
          <h4 class="font-semibold mb-2">${category}</h4>
          <ul class="list-disc pl-5 space-y-2">
            ${items.map(item => 
              typeof item === 'string' 
                ? `<li>${item}</li>`
                : `
                  <li>
                    ${item.main}
                    <ul class="list-[circle] pl-5 mt-1 space-y-1">
                      ${item.details.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                  </li>
                `
            ).join('')}
          </ul>
        </div>
      `).join('')}
    </div>
  `).join('')}
    `;
  }
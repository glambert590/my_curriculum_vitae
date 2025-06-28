export default function Skills(skills) {
    return `
    <h2 class="text-xl font-semibold mt-6 mb-2 border-b  pb-1">
      ${skills.title || 'Skills'}
    </h2>
    <div class="flex flex-wrap gap-4 mb-6">
      ${skills.items.map(item => `
        <span class="bg-gray-100 px-3 py-1 rounded">${item}</span>
      `).join('')}
    </div>
      
    `;
  }
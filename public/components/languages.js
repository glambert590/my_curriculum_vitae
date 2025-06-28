export default function Languages(languages) {
    return `
    <h2 class="text-xl font-semibold mt-6 mb-2 border-b  pb-1">
    ${languages.title || 'Languages'}
  </h2>
  <ul class="list-disc pl-5 mb-6">
    ${languages.list.map(lang => `
      <li>✓ ${lang.name} : ${lang.level}</li>
    `).join('')}
  </ul>
      
    `;
  }
export default function Education(education) {
    return `
        <h2 class="text-xl font-semibold mt-6 mb-2 border-b  pb-1">
        ${education.title || 'Education'}
      </h2>
      <div class="mb-6">
        <h3 class="font-bold">${education.degree}</h3>
        <p class="italic">${education.university}</p>
        <p>${education.date}</p>
      </div>
      
    `;
  }
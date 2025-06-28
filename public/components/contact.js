export default function Contact(contact) {
    return `
    <div class="text-center mt-8">
      <p>${contact.phone}</p>
      <p>${contact.email}</p>
      <p>${contact.address}</p>
    </div>
      
    `;
  }
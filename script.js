const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-link');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

document.addEventListener('DOMContentLoaded', () => {
  const ngoList = document.getElementById('ngoList');
  const searchInput = document.getElementById('searchInput');

  let ngos = [];

  // Fetch NGOs from backend
  fetch('http://localhost:3001/api/ngos')
    .then(res => res.json())
    .then(data => {
      ngos = data;
      renderNGOs(ngos);
    });

  // Render NGOs as cards with image
  function renderNGOs(list) {
    ngoList.innerHTML = '';
    if (list.length === 0) {
      ngoList.innerHTML = '<p>No NGOs found for this search.</p>';
      return;
    }
    list.forEach(ngo => {
      const card = document.createElement('div');
      card.className = 'ngo-card';
      card.innerHTML = `
        <img src="${ngo.image || '/image/logo.png'}" alt="${ngo.name}" class="ngo-card-img" />
        <div class="ngo-card-content">
          <h3>${ngo.name}</h3>
          <p>${ngo.description || ''}</p>
          <p><strong>City:</strong> ${ngo.city || ''}</p>
          <p><strong>State:</strong> ${ngo.state || ''}</p>
          <p><strong>Address:</strong> ${ngo.address || ''}</p>
          <p><strong>Phone:</strong> ${ngo.phone || ''}</p>
          <p><strong>Email:</strong> <a href="mailto:${ngo.email}">${ngo.email}</a></p>
        </div>
      `;
      ngoList.appendChild(card);
    });
  }

  // Filter NGOs by address on Enter key
  searchInput.addEventListener('keydown', (e) => {
    // if (e.key === 'Enter') {
      const searchValue = searchInput.value.trim().toLowerCase();
      if (!searchValue) {
        renderNGOs(ngos);
      } else {
        renderNGOs(
          ngos.filter(ngo => (ngo.address || '').toLowerCase().includes(searchValue))
        );
      }
    // }
  });
});


document.head.appendChild(style);



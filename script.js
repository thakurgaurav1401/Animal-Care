
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-link');


mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const ngos = [
  {
    name: "Akhand Jyoti Eye Hospital",
    city: "Saran",
    focus: "Eye-care, Girl Empowerment",
    contact: "https://akhandjyoti.com"
  },
  {
    name: "Project Potential Trust",
    city: "Kishanganj",
    focus: "Youth Development",
    contact: "https://projectpotential.org"
  },
  {
    name: "ABHEER Foundation",
    city: "Muzaffarpur",
    focus: "Women Empowerment",
    contact: "https://abheerfoundation.org"
  },
  {
    name: "Aarogya Jeevan",
    city: "Patna",
    focus: "Healthcare, Animal Welfare",
    contact: "https://aarogyajeevan.org"
  }
];

const searchInput = document.getElementById('searchInput');
const ngoList = document.getElementById('ngoList');

function displayNGOs(filteredNGOs) {
  ngoList.innerHTML = '';
  if (filteredNGOs.length === 0) {
    ngoList.innerHTML = '<p>No NGOs found for this city.</p>';
    return;
  }

  filteredNGOs.forEach(ngo => {
    const card = document.createElement('div');
    card.className = 'ngo-card';
    card.innerHTML = `
      <h3>${ngo.name}</h3>
      <p><strong>City:</strong> ${ngo.city}</p>
      <p><strong>Focus:</strong> ${ngo.focus}</p>
      <p><strong>Contact:</strong> <a href="${ngo.contact}" target="_blank">${ngo.contact}</a></p>
    `;
    ngoList.appendChild(card);
  });
}

// Initial display
displayNGOs(ngos);

// Filter on input
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase().trim();
  const filtered = ngos.filter(ngo => ngo.city.toLowerCase().includes(query));
  displayNGOs(filtered);
});


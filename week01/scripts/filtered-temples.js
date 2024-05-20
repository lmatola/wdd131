const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },

  {
    templeName: "Durban South Africa",
    location: "Durban, South Africa",
    dedicated: "2020, February, 16",
    area: 19860,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/durban-south-africa/400x250/5-a34bb1899983ed73e499a18da741b3704e1d4d35.jpg"
  },


  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, Gauteng, South Africa",
    dedicated: "1985, August, 24",
    area: 19184,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/400x250/johannesburg-south-africa-temple-lds-83166-wallpaper.jpg"
  },

  {
    templeName: "Lisbon Portugal",
    location: "Lisbon, Portugal",
    dedicated: "2019, September, 15",
    area: 23730,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lisbon-portugal/400x250/03-045a97e8471a9f581e927698521a1d184f4b3753.jpeg"
  },

  {
    templeName: "Madrid Spain",
    location: "Madrid, Madrid, Spain",
    dedicated: "1999, March , 19",
    area: 45800,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/400x250/madrid-spain-mormon-temple-902157-wallpaper.jpg"
  },

  {
    templeName: "Manaus Brazil",
    location: "Manaus, Amazonas, Brazil",
    dedicated: "2012, June, 10",
    area: 32032,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/400x250/lds-temple-manaus-brazil-1085299-wallpaper.jpg"
  },
];


const homeButton = document.querySelector("#homeButton");
const oldButton = document.querySelector("#oldButton");
const newButton = document.querySelector("#newButton");
const largeButton = document.querySelector("#largeButton");
const smallButton = document.querySelector("#smallButton");

homeButton.addEventListener("click", () => {
  createTempleCards(temples)
});

oldButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900))
});

newButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000))
});

largeButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area > 90000))
});

smallButton.addEventListener("click", () => {
  createTempleCards(temples.filter(temple => temple.area < 10000))
});


const templeContainer = document.getElementById("templeContainer");

function createTempleCards(filteredTemples) {
  templeContainer.innerHTML = "";

  filteredTemples.forEach((temple) => {
      const templeCard = document.createElement("figure");
      templeCard.classList.add("templeCard");

      const name = document.createElement("h3");
      name.textContent = temple.templeName;
      templeCard.appendChild(name);

      const location = document.createElement("figcaption");
      location.textContent = `Location: ${temple.location}`;
      templeCard.appendChild(location);

      const dedicated = document.createElement("figcaption");
      dedicated.textContent = `Dedicated: ${temple.dedicated}`;
      templeCard.appendChild(dedicated);

      const area = document.createElement("figcaption");
      area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
      templeCard.appendChild(area);

      const templeImage = document.createElement("img");
      templeImage.src = temple.imageUrl;
      templeImage.alt = temple.templeName;
      templeImage.loading = "lazy";
      templeImage.width = 400;
      templeImage.height = 250;
      templeCard.appendChild(templeImage);

      templeContainer.appendChild(templeCard);
  });
}




createTempleCards(temples);

function changeText(event){
  event.innerHTML="Old";
}
import { countries, reset, search } from './countriesService.js';
import { updateData, getData } from './storageService.js';

document.getElementById('search-input').addEventListener('input', event => {
  const word = event.target.value;
  word || word === '' ? search(word) : reset();
  document.getElementById('cards').innerHTML = '';
  createCards();
});

const generateCard = country => {
  const card = document.createElement('div');
  card.className = 'card m-2 col-sm-12 col-md-3';

  const cardImg = document.createElement('img');
  cardImg.src = country.flags.png;
  cardImg.className = 'card-img-top img mt-2 border shadow';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const cardTitle = document.createElement('h5');
  cardTitle.className = 'card-title';
  cardTitle.innerText = country.name.common;

  const population = document.createElement('h5');
  population.className = 'card-text';
  population.innerText = `Population: ${country.population}`;

  const region = document.createElement('p');
  region.className = 'card-text';
  region.innerText = `Region: ${country.region}`;

  const cardFooter = document.createElement('div');
  cardFooter.className = 'card-footer d-flex justify-content-center mb-2';

  let heartIcon = document.createElement('i');
  heartIcon.className = 'fa fa-heart text-dark ';

  let likedCountries = getData();
  let isLiked = false;
  if (likedCountries.includes(country.name.common)) {
    isLiked = true;
  }

  heartIcon.addEventListener('click', () => {
    updateData(country.name.common);
    heartIcon.classList.toggle('text-dark');
    heartIcon.classList.toggle('text-danger');
  });

  cardFooter.appendChild(heartIcon);

  cardBody.appendChild(cardTitle);
  cardBody.appendChild(population);
  cardBody.appendChild(region);

  card.appendChild(cardImg);
  card.appendChild(cardBody);
  card.appendChild(cardFooter);

  const cardsContainer = document.getElementById('cards');
  cardsContainer.appendChild(card);
};

const createCards = () => {
  for (const country of countries) {
    generateCard(country);
  }
};

export { createCards };

const createMovieCard = async (movie) => {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100 shadow';

  const img = document.createElement('img');
  img.src = `../../resources/img/${movie.image}`;
  img.className = 'card-img-top';
  img.alt = movie.name;
  img.style.height = '200px';
  img.class = 'img-fluens';

  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';

  const title = document.createElement('h5');
  title.className = 'card-title';
  title.textContent = movie.name;

  const description = document.createElement('p');
  description.className = 'card-text';
  description.textContent = movie.described;

  const category = document.createElement('span');
  category.className = 'badge bg-secondary';
  category.textContent = movie.category;

  cardBody.appendChild(title);
  cardBody.appendChild(description);
  cardBody.appendChild(category);

  card.appendChild(img);
  card.appendChild(cardBody);
  col.appendChild(card);

  return col;
};

const container = document.getElementById('movie-container');
const actionLink = document.getElementById('action-movies');
const animatioLink = document.getElementById('animation-movies');
const comedyLink = document.getElementById('comedy-movies');
const fictionLink = document.getElementById('fiction-movies');
const terrorLink = document.getElementById('terror-movies');

document.addEventListener('DOMContentLoaded', async () => {
  for (const movie of Object.values(Movies)) {
    const card = await createMovieCard(movie);
    container.appendChild(card);
  }

  actionLink.addEventListener('click', async (event) => {
    event.preventDefault();
    container.innerHTML = '';

    for (const movie of Object.values(Movies)) {
      if (movie.category && movie.category.toLowerCase().includes('acción')) {
        const card = await createMovieCard(movie);
        container.appendChild(card);
      }
    }
  });

  animatioLink.addEventListener('click', async (event) => {
    event.preventDefault();
    container.innerHTML = '';
  
    for (const movie of Object.values(Movies)) {
      if (movie.category && movie.category.toLowerCase().includes('animación')) {
        const card = await createMovieCard(movie);
        container.appendChild(card);
      }
    }
  });

  comedyLink.addEventListener('click', async (event) => {
    event.preventDefault();
    container.innerHTML = '';

    for (const movie of Object.values(Movies)) {
      if (movie.category && movie.category.toLowerCase().includes('comedia')) {
        const card = await createMovieCard(movie);
        container.appendChild(card);
      }
    }
  });

  fictionLink.addEventListener('click', async (event) => {
    event.preventDefault();
    container.innerHTML = '';

    for (const movie of Object.values(Movies)) {
      if (movie.category && movie.category.toLowerCase().includes('fantasía')) {
        const card = await createMovieCard(movie);
        container.appendChild(card);

      }
    }
  });

  terrorLink.addEventListener('click', async (event) => {
    event.preventDefault();
    container.innerHTML = '';

    for (const movie of Object.values(Movies)) {
      if (movie.category && movie.category.toLowerCase().includes('terror')) {
        const card = await createMovieCard(movie);
        container.appendChild(card);
      }
    }
  });
  
});

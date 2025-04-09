export function createMovieCard(movie) {
  const col = document.createElement('div');
  col.className = 'col-md-4 mb-4';

  const card = document.createElement('div');
  card.className = 'card h-100 shadow';

  const img = document.createElement('img');
  img.src = `../../resources/img/${movie.image}`;
  img.className = 'card-img-top';
  img.alt = movie.name;

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
}

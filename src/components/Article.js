import React from 'react';

function Article({ title, date, preview, minutes }) {
  const minutesToRead = minutes || 0;
  const coffeeCups = Array.from({ length: Math.ceil(minutesToRead / 5) }, (_, i) => '☕️');
  const bentoBoxes = Array.from({ length: Math.ceil(minutesToRead / 10) }, (_, i) => '🍱');

  return (
    <article>
      <h3>{title}</h3>
      <small>{date || 'January 1, 1970'}</small>
      <p>{preview}</p>
      <p>
        {minutesToRead < 30 ? coffeeCups.join('') : bentoBoxes.join('')} {minutesToRead} min read
      </p>
    </article>
  );
}

export default Article;
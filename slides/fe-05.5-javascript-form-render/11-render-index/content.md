# Update DOM - Return HTML From Data

`index.js`
```
const renderOnePark = (park) => {
  // get the individual properties of the park
  const { name, location, description, established, area, rating } = park;

  const content = `
      <section class="park">
        <h2>${name}</h2>
        <div class="location">${location}</div>
        <div class="description">${description}</div>
        <button class="rateBtn" title="Add to Favourites">&#9734;</button>
        <div class="stats">
          <div class="established stat">
            <h3>Established</h3>
            <div class="value">${established}</div>
          </div>
          <div class="area stat">
            <h3>Area</h3>
            <div class="value">${area}</div>
          </div>
          <div class="rating stat">
            <h3>Rating</h3>
            <div class="value">${rating}</div>
          </div>
        </div>
      </section>
  `;
  return content;
};
```
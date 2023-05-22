import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="content container">
        <h2 class="content-heading">Favorite Restaurants</h2>
        <div id="restaurants" class="restaurants"></div>
      
        <div id="empty-content"></div>
      </div>
    `;
  },

  async afterRender() {
    // get fav restaurant
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#restaurants');
    const empty = document.getElementById('empty-content');

    // if data empty
    if (restaurants.length < 1) {
      empty.innerHTML += `
        <div id"message">
          <h2 tabindex="0" class="restaurant-item-not-found">Favorite Restaurant Not Found</h2>
          <p>Put one, by clicking heart button in the detail page.</p>
        </div>
      `;
      container.innerHTML = '';

      // display fav restaurant
    } else if (restaurants.length >= 1) {
      const restaurantsContainer = document.querySelector('#restaurants');
      restaurants.forEach((restaurant) => {
        restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
      });
      empty.innerHTML = '';
    }
  },
};

export default Favorite;

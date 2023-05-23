import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <img class="restaurant-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous"/>
  <h2 class="restaurant-information">Detail Restaurant</h2>

  <div class="restaurant-info">
    <ul class="detail-info">
      <li>
        <i title="name" class="fa fa-building icon-primary"></i>
        <h3 class="detail-name-address-rating">${restaurant.name}</h3>
      </li><hr>

      <li>
        <i title="address" class="fa fa-location-arrow icon-primary"></i>
        <h3 class="detail-name-address-rating">${restaurant.address}, ${restaurant.city}</h3>
      </li><hr>

      <li>
        <i title="rating" class="fa fa-star icon-primary"></i>
        <h3 class="detail-name-address-rating">${restaurant.rating}</h3>
      </li><hr>

      <li>
        <p class="detail-desc">${restaurant.description}</p>
      </li>
    </ul>

    <div class="info-detail">
      <h2>Categories</h2>
      <div>
        ${restaurant.categories.map((category) => `
          <span class="detail-item">${category.name}</span>
        `).join('')}
      </div>
    </div>

    <div class="info-detail">
      <h2>Food Menu</h2>
      <div>
        ${restaurant.menus.foods.map((food) => `
          <span class="detail-item">${food.name}</span>
        `).join('')}
      </div>
    </div>
      
    <div class="info-detail">
      <h2>Drink Menu</h2>
      <div>
        ${restaurant.menus.drinks.map((drink) => `
          <span class="detail-item">${drink.name}</span>
        `).join('')}
      </div>
    </div>

    <div class="info-detail">
      <h2>Customer Review</h2>
      <div class="detail-review">
      ${restaurant.customerReviews.map((review) => `
        <div class="detail-review-item">
          <div class="review-header">
            <p class="review-name">${review.name}</p>
            <p class="review-date">${review.date}</p>
          </div>

          <div class="review-body">
            ${review.review}
          </div>
        </div>
      `).join('')}
      </div>
    </div>
  </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
  <div class="restaurant-item">
    <div class="restaurant-item-header">
      <img class="restaurant-item-poster lazyload" data-src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" crossorigin="anonymous">
      <div class="restaurant-item-rating">
        <i title="ratings" class="fa fa-star"></i>
        <span class="restaurant-item-star">${restaurant.rating}</span>
      </div>
    </div>

    <div class="restaurant-item-card">
      <h2>
        <a href="#/detail/${restaurant.id}">${restaurant.name}</a>
      </h2>
      <p>${restaurant.description}</p>
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate,
  createLikedButtonTemplate,
};

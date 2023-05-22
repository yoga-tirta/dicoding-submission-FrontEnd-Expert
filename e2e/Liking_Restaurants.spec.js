/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#empty-content');
  I.see('Favorite Restaurant Not Found', '.restaurant-item-not-found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurant Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item-card h2 a');

  const firstRestaurant = locate('.restaurant-item-card h2 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item-card h2');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurant Not Found', '.restaurant-item-not-found');

  I.amOnPage('/');

  I.seeElement('.restaurant-item-card h2 a');

  const firstRestaurant = locate('.restaurant-item-card h2 a').first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const favoriteRestaurantTitle = await I.grabTextFrom('.restaurant-item-card h2');

  assert.strictEqual(firstRestaurantTitle, favoriteRestaurantTitle);

  I.click(locate('.restaurant-item-card h2 a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item-not-found');

  const noFavoriteRestaurant = await I.grabTextFrom('.restaurant-item-not-found');

  assert.strictEqual(noFavoriteRestaurant, 'Favorite Restaurant Not Found');
});

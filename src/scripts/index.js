/* eslint-disable no-unused-vars */
import 'regenerator-runtime';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import './views/templates/custom-footer';
import swRegister from './utils/sw-register';
// Lazysize
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const START = 10;
const NUMBER_OF_IMAGES = 100;

// init app
const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

const skipLink = document.querySelector('.skip-link');
// const mainContent = document.querySelector('mainContent');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  document.querySelector('#mainContent').focus();
  // mainContent.scrollIntoView({ behavior: 'smooth' });
  // skipLink.blur();
});

window.addEventListener('hashchange', () => {
  // document.querySelector('.container').scrollIntoView();
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

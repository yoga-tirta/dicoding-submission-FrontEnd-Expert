import 'regenerator-runtime';
// import { precacheAndRoute } from 'workbox-precaching';
import CacheHelper from './utils/cache-helper';

const assetsToCache = [
  './',
  './favicon.png',
  './images/heros/hero-image_4.jpg',
  './images/heros/hero-image_4-large.jpg',
  './images/heros/hero-image_4-small.jpg',
  './images/icons/icon-72x72.png',
  './images/icons/icon-96x96.png',
  './images/icons/icon-128x128.png',
  './images/icons/icon-144x144.png',
  './images/icons/icon-152x152.png',
  './images/icons/icon-192x192.png',
  './images/icons/icon-384x384.png',
  './images/icons/icon-512x512.png',
  './index.html',
  './app.bundle.js',
  './app.webmanifest',
  './sw.bundle.js',
];

// // Do precaching
// precacheAndRoute(self.__WB_MANIFEST);

// self.addEventListener('install', () => {
//   console.log('Service Worker: Installed');
//   self.skipWaiting();
// });

// self.addEventListener('push', () => {
//   console.log('Service Worker: Pushed');
// });

self.addEventListener('install', (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assetsToCache]));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(CacheHelper.revalidateCache(event.request));
});

const magicBtn = document.querySelector('.js-magic-btn');
/*
 * Інтерфейс classList
 * - add(клас)
 * - remove(клас)
 * - toggle(клас)
 * - replace(старийКлас, новийКлас)
 * - contains(клас)
 */

const currentPageUrl = '/contact';

const linkEl = document.querySelector(`.site-nav__link[href="${currentPageUrl}"]`);

console.log(linkEl);
linkEl.classList.add('site-nav__link--current');
// linkEl.classList.add('super-cool', 'super-link');
// linkEl.classList.remove('super-link');
// linkEl.classList.replace('super-cool', 'qwerty');
// console.log(`element.classList.contains('qwerty'):`, linkEl.classList.contains('qwerty'));

magicBtn.addEventListener('click', () => {
  linkEl.classList.toggle('site-nav__link--current');
});

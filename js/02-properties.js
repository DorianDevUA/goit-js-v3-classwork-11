const magicBtn = document.querySelector('.js-magic-btn');

/*
 * Властивості елемента (hero)
 * - Зображення
 * - Текст та textContent
 * https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480
 */

magicBtn.addEventListener('click', () => {
  const imageEl = document.querySelector('.hero__image');
  console.log('imageEl', imageEl);
  imageEl.src =
    'https://images.pexels.com/photos/1870376/pexels-photo-1870376.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=480';
  imageEl.alt = 'Це новий котик';

  const heroTitleEl = document.querySelector('.hero__title');
  // console.log('heroTitleEl', heroTitleEl);
  heroTitleEl.textContent = 'Я солоденький пиріжечок!';
});

/*
 * Атрибути
 * - get(ім'я-атрибута)
 * - set(ім'я-атрибута)
 * - remove(ім'я-атрибута)
 * - has(ім'я-атрибута)
 */

// console.log(imageEl.getAttribute('src'));
// console.log(imageEl.src);
// console.log(imageEl.hasAttribute('src'));

/*
 * Data-атрибути
 */
const actions = document.querySelectorAll('.js-actions button');
console.log('NodeList (actions):', actions);
console.log('actions[0].dataset:', actions[0].dataset);
console.log(actions[0].dataset.action);
console.log(actions[1].dataset.action);
console.log(actions[2].dataset.action);
console.log(actions[2].getAttribute('data-action'));

magicBtn.addEventListener('click', () => {
  const inputEl = document.querySelector('.js-input');
  console.log(inputEl.value);
  inputEl.value = 'This is Magic';
});

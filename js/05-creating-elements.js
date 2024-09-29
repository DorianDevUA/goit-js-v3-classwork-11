/*
 * - Створення елементів
 * - Вставка вузлів: appendChild(elem), insertBefore(elem, nextSibling), append(...elems), prepend(...elems)
 */

/*
 * Створюємо загаловок
 */
const titleEl = document.createElement('h1');
titleEl.classList.add('page-title');
titleEl.textContent = 'Це заголовок сторінки :)';
console.log('🚀 ~ titleEl:', titleEl);

// document.body.appendChild(titleEl);

/*
 * Створюємо зображення
 * https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg
 * valais-alpine-mountains-glacier
 */
const imageEl = document.createElement('img');
imageEl.src = 'https://cdn.pixabay.com/photo/2018/07/26/07/45/valais-3562988_1280.jpg';
imageEl.alt = 'valais-alpine-mountains-glacier';
// imageEl.setAttribute('width', 640);
imageEl.width = 320;
console.log('🚀 ~ imageEl:', imageEl);

// document.body.appendChild(imageEl);

/*
 * Створюємо та додаємо новий пункт меню
 */
const navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
console.log('🚀 ~ navItemEl:', navItemEl);

const navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Особистий кабінет';
navLinkEl.href = '/profile';
console.log('🚀 ~ navLinkEl:', navLinkEl);

navItemEl.appendChild(navLinkEl);

const navEl = document.querySelector('.site-nav');

// Додаємо створений елемент у кінець списку
// navEl.appendChild(navItemEl);
// navEl.insertBefore(navItemEl, null);

// Додаємо створений елемент у середину списку, після елементу-дитини з індексом[1].
// navEl.insertBefore(navItemEl, navEl.children[1]);

// Додаємо створений елемент на початок списку, перед елементом navEl.firstElementChild
navEl.insertBefore(navItemEl, navEl.firstElementChild);

// Метод .append()
// Одночасно додаємо декілька нових елементів у розмітку
const heroEl = document.querySelector('.hero');
// heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
heroEl.append(titleEl, imageEl);

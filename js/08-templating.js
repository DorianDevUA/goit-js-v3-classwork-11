/*
 * Властивість innerHTML
 * - читання
 * - запис
 */

const titleEl = document.querySelector('.title');
// console.log('🚀 ~ titleEl.textContent:', titleEl.textContent);
// console.log('🚀 ~ titleEl.innerHTML:', titleEl.innerHTML);
// titleEl.innerHTML = '<a href="">Це посилання)</a>';
// titleEl.innerHTML = '';

/*
 * Вставка размітки з insertAdjacentHTML()
 * http://fecore.net.ua/books/m5ph3r-javascript/module-07/dom-manipulation.html#%D0%BC%D0%B5%D1%82%D0%BE%D0%B4-insertadjacenthtml
 */

titleEl.insertAdjacentHTML('beforeend', '<a href="" class="title__link">Це посилання)</a>');

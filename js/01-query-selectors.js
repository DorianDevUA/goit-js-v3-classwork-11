const magicBtn = document.querySelector('.js-magic-btn');

/*
 * document.querySelector(selector) и document.querySelectorAll(selector)
 *   selector - будь-який валідний CSS-селектор
 *
 * Що повертають?
 */

magicBtn.addEventListener('click', () => {
  // element.querySelector('selector');
  // Повертає DOM елемент
  // Якщо нічого не знайшло, повертає null.
  const navEl = document.querySelector('.site-nav');
  console.log('navEl', navEl);

  // element.querySelectorAll('selector');
  // Повертає псевдомасив DOM елементів
  // Якщо нічого не знайшло, повертає пустий псевдомасив [].
  const navLinksEl = navEl.querySelectorAll('.site-nav__link');
  console.log('navLinksEl', navLinksEl);

  const testArr = [...navLinksEl];
  console.log('🚀 ~ testArr:', testArr);
});

/*
 * Document.querySelector* и Element.querySelector*
 */

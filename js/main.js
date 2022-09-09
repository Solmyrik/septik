function ibg() {
  let ibg = document.querySelectorAll('.ibg');
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector('img')) {
      ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
    }
  }
}
ibg();

const iconMenu = document.querySelector('.header__burger');
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body');
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

const nextBtn = document.querySelector('.test__btn_next');
const prewBtn = document.querySelector('.test__btn_prew');
const testItems = document.querySelectorAll('.test__item');
const percentItem = document.querySelector('.test__percent');
const titleTest = document.querySelector('.test__title');
let step = 0;
nextBtn.addEventListener('click', () => {
  if (step < testItems.length) {
    testItems[step].classList.remove('_active');
    step++;
    testItems[step].classList.add('_active');
    percent(step);
  }
  if (step + 1 === testItems.length) {
    nextBtn.textContent = 'Отправить';
    titleTest.textContent =
      'Заполните форму и наш менеджер позвонит вам для дальнейшей консультации!';
  }
});
prewBtn.addEventListener('click', () => {
  if (step > 0) {
    testItems[step].classList.remove('_active');
    step--;
    testItems[step].classList.add('_active');
    percent(step);
  }
});
function percent(step) {
  const heightItems = testItems.length;
  let current = parseInt((100 / heightItems) * (step + 1));
  percentItem.style.width = current + '%';
}

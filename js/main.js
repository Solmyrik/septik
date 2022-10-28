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

const objTest = {
  number: '',
  name: null,
  inputWhereData: '',
  inputHowData: '',
  inputInstallData: '',
  inputGroundData: '',
  inputLevelData: '',
  inputWantData: '',
};

function redioCheck(item) {
  let data;
  for (let i = 0; i < item.length; i++) {
    if (item[i].checked) {
      data = item[i].value;
      break;
    }
  }
  return data;
}

function sendMessage() {
  const testName = document.getElementById('test__name');
  const testNumber = document.getElementById('test__number');
  const inputWhere = document.querySelectorAll('.input-whare');
  const inputHow = document.querySelectorAll('.input-how');
  const inputInstall = document.querySelectorAll('.input-install');
  const inputGround = document.querySelectorAll('.input-ground');
  const inputLevel = document.querySelectorAll('.input-level');
  const inputWant = document.querySelectorAll('.input-want');

  objTest.number = testNumber.value;
  objTest.name = testName.value;
  objTest.inputWhereData = redioCheck(inputWhere);
  objTest.inputHowData = redioCheck(inputHow);
  objTest.inputInstallData = redioCheck(inputInstall);
  objTest.inputGroundData = redioCheck(inputGround);
  objTest.inputLevelData = redioCheck(inputLevel);
  objTest.inputWantData = redioCheck(inputWant);
}

sendMessage();
const nextBtn = document.querySelector('.test__btn_next');
const prewBtn = document.querySelector('.test__btn_prew');
const testItems = document.querySelectorAll('.test__item');
const percentItem = document.querySelector('.test__percent');
const titleTest = document.querySelector('.test__title');
let step = 0;
nextBtn.addEventListener('click', () => {
  console.log(step, testItems.length);
  if (step + 1 === testItems.length) {
    sendMessage();
    return;
  }
  if (step < testItems.length - 1) {
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

const installBtn = document.querySelector('.install__btn');
installBtn.addEventListener('click', feqHandler);
function feqHandler(e) {
  console.log(e);
  e.preventDefault();
  currentContent = e.target.previousElementSibling;
  e.target.classList.toggle('active');
  if (e.target.classList.contains('active')) {
    currentContent.style.maxHeight = currentContent.scrollHeight + 'px';
    installBtn.innerText = 'Свернуть';
  } else {
    currentContent.style.maxHeight = 160 + 'px';
    installBtn.innerText = 'Читать далее';
  }
}

const catalogBtns = document.querySelectorAll('.catalog__btn');
const popup = document.querySelector('.popup');
catalogBtns.forEach((element) => {
  element.addEventListener('click', () => {
    popup.classList.add('active');
    popup.addEventListener('click', (e) => {
      if (e.target.classList.value === 'popup__wrapper') {
        popup.classList.remove('active');
      }
    });
  });
});

const headerElement = document.querySelector('.header');
const callback = function (entries, observer) {
  if (entries[0].isIntersecting) {
    headerElement.classList.remove('_scroll');
  } else {
    headerElement.classList.add('_scroll');
  }
};
const headerObserver = new IntersectionObserver(callback);
headerObserver.observe(headerElement);

const inputBtns = document.querySelectorAll('.input__btn');
inputBtns.forEach((e) => {
  e.onclick = () => {
    alert(e.previousElementSibling.value);
  };
});
// mainBtn.onclick = () => {
//   return;
// };

// console.log(mainBtn.previousElementSibling.value);

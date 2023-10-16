window.addEventListener('scroll', () => {
  const aboutQuote = document.getElementById('aboutQuote')
  let aboutQuotetop = aboutQuote.getBoundingClientRect().top
  if (aboutQuotetop < 0) {
    document.getElementById('summaryHolder').classList.add('page-enter-to')
  } else {
    document.getElementById('summaryHolder').classList.remove('page-enter-to')
  }
  console.log(aboutQuotetop);
})
//adjhfkajhkajshdfkajhdkjhakdjhfakjsdhkajhdkahkjdhkjhlkfajshdlkfjashdlkfjhalskdjhfaldja
const info = document.getElementsByClassName('info')

function footAbout () {
  document.getElementById('summaryHolder').classList.toggle('page-enter-z')
}

for (var i = 0; i < 4; i++) {
  info[i].addEventListener('click', footAbout)
}
//fkjslkjfg;lksdf;lksjfdl;kjgs;lfkjgs;lfdkjgs;lfkjgs;ldfkjgl;skfjd;lskj;lfkjg;lfdkj;slfkjg
var myVar = setInterval(() => {
  const date = new Date()
  var month = date.getMonth()
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var enmonth = '';
  switch (month) {
    case 0:
      enmonth = 'ЯНВАРЬ'
      break
    case 1:
      enmonth = 'ФЕВРАЛЬ'
      break
    case 2:
      enmonth = 'МАРШИРОВАТЬ'
      break
    case 3:
      enmonth = 'АПРЕЛЬ'
      break
    case 4:
      enmonth = 'МОЖЕТ'
      break
    case 5:
      enmonth = 'ИЮНЬ'
      break
    case 6:
      enmonth = 'ИЮЛЬ'
      break
    case 7:
      enmonth = 'АВГУСТ'
      break
    case 8:
      enmonth = 'СЕНТЯБРЬ'
      break
    case 9:
      enmonth = 'ОКТЯБРЬ'
      break
    case 10:
      enmonth = 'НОЯБРЬ'
      break
    case 11:
      enmonth = 'ДЕКАБРЬ'
      break
    default:
    // code block
  }
  document.getElementById('jsdate').innerHTML = day + ' ' + enmonth;
  document.getElementById('jstime').innerHTML = hour + ': ' + minute;
}, 1000)
//alkdsuhfaudoixcknvliashfiajhifuahsoiuehlijhasdlkfuhwelijhalkfhaiutlajhfalkjhdlkjhdflkjhf
for(var i=0;i<7;i++){
  document.getElementsByClassName('contact')[i].addEventListener('click', ()=>{
    document.getElementById('buy').classList.toggle("left");
  });
}
//alkdsuhfaudoixcknvliashfiajhifuahsoiuehlijhasdlkfuhwelijhalkfhaiutlajhfalkjhdlkjhdflkjhf
var Swipes = new Swiper('.about-slides', {
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },
  pagination: {
      el: '.swiper-pagination',
  },
});

var swiper = new Swiper('.about-timeline', {
  pagination: '.swiper-pagination',
  slidesPerView: 'auto',
  paginationClickable: true,
  spaceBetween: 0,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  }
});

const navigation = document.getElementById('navigation')
const summary = document.getElementById('summary')
const start = document.getElementById('start')
const vineyards = document.getElementById('vineyards')
window.addEventListener('scroll', () => {
  var bodywidth = window.innerWidth

  //........................................................asdfasdfadf.........................//////////////
  const header = document.getElementById('header')
  const mainabout = document.getElementById('main-about')
  const navigationlink = document.getElementsByClassName('navigation-link')
  let navigationtop = navigation.getBoundingClientRect().top
  let summarytop = summary.getBoundingClientRect().top
  let starttop = start.getBoundingClientRect().top
  let vineyardstop = vineyards.getBoundingClientRect().top
  const winetop = document.getElementById('wine').getBoundingClientRect().top
  if (bodywidth < 1023) {
    if (starttop < -400) {
      // header.style.top = '-100px'
      document.getElementById('headerlogos').style.top = '30px'
      document.getElementById('top').style.top = '-200px'
      document.getElementById('menu').style.justifyContent = 'space-evenly'
    } else if (starttop < -100) {
      // header.style.top = '-50px';
      document.getElementById('top').style.top = '-100px'
      document.getElementById('menu').style.justifyContent = 'space-around'
      document.getElementById('headerlogos').style.top = '110px'
    } else {
      // header.style.top = '0px'
      document.getElementById('top').style.top = '0'
      document.getElementById('menu').style.justifyContent = 'space-between'
      document.getElementById('headerlogos').style.top = '220px'
    }
    if (winetop < 0) {
      header.style.display = 'none'
      summary.classList.add('opacity')
    } else {
      header.style.display = 'block'
      summary.classList.remove('opacity')
    }
    if (starttop < -400) {
      mainabout.style.opacity = '1'
      document.getElementById('start').style.filter = 'blur(30px)'
      document.getElementById('fooinfo').style.opacity = '0'
      document.getElementsByClassName('menu-main')[0].style.color = 'white'
      document.getElementsByClassName('menu-main')[1].style.color = 'white'
      document.getElementById('headerlogo').removeAttribute('style')
      document.getElementById('headinfo').classList.remove('head-info')
      document.getElementById('linea').removeAttribute('style')
      document.getElementById('lineb').removeAttribute('style')
      document.getElementById('linec').removeAttribute('style')
      if (vineyardstop < 20) {
        document.getElementsByClassName('menu-main')[0].style.color = 'black'
        document.getElementsByClassName('menu-main')[1].style.color = 'black'
        document.getElementById('headerlogo').style.fill = 'black'
        document.getElementById('linea').style.stroke = 'black'
        document.getElementById('lineb').style.stroke = 'black'
        document.getElementById('linec').style.stroke = 'black'
        document.getElementById('headinfo').classList.add('head-info')
      }
    } else {
      mainabout.style.opacity = '0'
      document.getElementById('start').style.filter = 'blur(0px)'
      document.getElementById('fooinfo').style.opacity = '1'
      document.getElementsByClassName('menu-main')[0].removeAttribute('style')
      document.getElementsByClassName('menu-main')[1].removeAttribute('style')
    }
  } else {
    if (starttop < -1000) {
      header.style.top = "-200px"
      document.getElementById('top').style.top = '-300px'
      document.getElementById('menu').style.justifyContent = 'space-evenly'
    } else if (starttop < -500) {
      header.style.top = "-100px"
      document.getElementById('top').style.top = '-150px'
      document.getElementById('menu').style.justifyContent = 'space-around'
    } else {
      header.style.top = "0px"
      document.getElementById('top').style.top = '0'
      document.getElementById('menu').style.justifyContent = 'space-between'
    }
    if (starttop < -1500) {
      mainabout.style.opacity = '1'
      document.getElementById('start').style.filter = 'blur(30px)'
      document.getElementById('fooinfo').style.opacity = '0'
      document.getElementById('headinfo').style.right = '10px'
      document.getElementsByClassName('menu-main')[0].style.color = 'white'
      document.getElementsByClassName('menu-main')[1].style.color = 'white'
      document.getElementById('headerlogo').removeAttribute('style')
      document.getElementById('headinfo').classList.remove('head-info')
      if (vineyardstop < 20) {
        document.getElementsByClassName('menu-main')[0].style.color = 'black'
        document.getElementsByClassName('menu-main')[1].style.color = 'black'
        document.getElementById('headerlogo').style.fill = 'black'
        document.getElementById('headinfo').classList.add('head-info')
      }
    } else {
      mainabout.style.opacity = '0'
      document.getElementById('start').style.filter = 'blur(0px)'
      document.getElementById('fooinfo').style.opacity = '1'
      document.getElementById('headinfo').style.right = '-100px'
      document.getElementsByClassName('menu-main')[0].removeAttribute('style')
      document.getElementsByClassName('menu-main')[1].removeAttribute('style')
    }
    if (winetop < 0) {
      summary.classList.add('opacity')
      summary.classList.add('notransition')
    } else {
      summary.classList.remove('opacity')
      summary.classList.remove('notransition')
    }
  }

  //sfdlkgsfdkjhalkjdhlafushdflkajshdfkajshdlkfjshdlkfjashdlkfjad

  //asdkfa;df;akjdhflkajsdhfl;kajsdf;laksd;fadf
  const vineyardstitle = document.getElementById('vineyardstitle')
  const vineyardstitlefixed = document.getElementById('vineyardstitlefixed')
  let vineyardstitletop = vineyardstitle.getBoundingClientRect().top
  if (vineyardstitletop < 500) {
    vineyardstitle.classList.remove('--static')
    vineyardstitlefixed.classList.remove('--fixed')
  } else {
    vineyardstitle.classList.add('--static')
    vineyardstitlefixed.classList.add('--fixed')
  }
  //alksdjfhlkajdshflkajhfdlkajsdhflaksjdhfl;kadf

  //sdgfgsfdkghslkfdjhgslkjfdhglskdjfhglksjflhgksfdg
  if (navigationtop < 500) {
    navigationlink[0].style.opacity = '1'
  } else {
    navigationlink[0].style.opacity = '0'
  }
  if (navigationtop < 420) {
    navigationlink[1].style.opacity = '1'
  } else {
    navigationlink[1].style.opacity = '0'
  }
  if (navigationtop < 340) {
    navigationlink[2].style.opacity = '1'
  } else {
    navigationlink[2].style.opacity = '0'
  }
  if (navigationtop < 260) {
    navigationlink[3].style.opacity = '1'
  } else {
    navigationlink[3].style.opacity = '0'
  }
  if (navigationtop < 180) {
    navigationlink[4].style.opacity = '1'
  } else {
    navigationlink[4].style.opacity = '0'
  }
})

function detail () {
  summary.classList.toggle('summary-add')
}
function displayblock () {
  document.getElementById('mobilemenu').classList.toggle('display')
}
document.getElementById('burger').addEventListener('click', displayblock)
document.getElementById('headinfo').addEventListener('click', detail)
document.getElementById('summaryclose').addEventListener('click', detail)

var myVar = setInterval(() => {
  const date = new Date()
  var month = date.getMonth()
  var day = date.getDate()
  var hour = date.getHours()
  var minute = date.getMinutes()
  var enmonth = ''
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
  document.getElementById('jsdate').innerHTML = day + ' ' + enmonth
  document.getElementById('jstime').innerHTML = hour + ': ' + minute
}, 1000)


const maptitle = document.getElementsByClassName('mapnumber');
const vineyardsmap = document.getElementById('vineyardsmap');
function mapview(n) {
  for(var i = 0;i < 4;i ++){
    maptitle[i].classList.add('noopacity');
  }
  maptitle[n].classList.remove('noopacity');
  vineyardsmap.classList.add('opacity');
}
function mapout(n) {
  for(var i = 0;i < 4;i ++){
    maptitle[i].classList.remove('noopacity');
  }
  vineyardsmap.classList.remove('opacity');
}

// for (var i = 0; i < 4; i++) {
//   document.getElementsByClassName('info')[i].addEventListener('click', () => {
//     document.getElementById('summary').style.position = 'fixed';
//     document.getElementById('summary').style.opacity = '1';
//   })
// }
//   function Utils() { }
// Utils.prototype = {
//     constructor: Utils,
//     isElementInView: function (element, fullyInView) {
//         var pageTop = $(window).scrollTop();
//         var pageBottom = pageTop + $(window).height();
//         var elementTop = $(element).offset().top;
//         var elementBottom = elementTop + $(element).height();

//         if (fullyInView === true) {
//             return ((pageTop < elementTop) && (pageBottom > elementBottom));
//         } else {
//             return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
//         }
//     }
// };

// var Utils = new Utils();
// $(window).on('load', addFadeIn());

// $(window).scroll(function () {
//     addFadeIn(true);
// });

// function addFadeIn(repeat) {
//     var classToFadeIn = ".will-fadeIn";

//     $(classToFadeIn).each(function (index) {
//         var isElementInView = Utils.isElementInView($(this), false);
//         if (isElementInView) {
//             if (!($(this).hasClass('fadeInRight')) && !($(this).hasClass('fadeInLeft'))) {
//                 if (index % 2 == 0) $(this).addClass('fadeInRight');
//                 else $(this).addClass('fadeInLeft');
//             }
//         } else if (repeat) {
//             $(this).removeClass('fadeInRight');
//             $(this).removeClass('fadeInLeft');
//         }
//     });
// }

// ScrollReveal({ reset: true });

// ScrollReveal().reveal(".show-once", {
//   reset: false
// });

// ScrollReveal().reveal(".main-about-text", {
//   duration: 5000,
//   move: 0
// });

// const step = document.querySelector('.step');
// const container = document.querySelector('.container');

// window.addEventListener('scroll', () => {
//   const containerTop = container.getBoundingClientRect().top;
//   const stepTop = step.getBoundingClientRect().top;
//   console.log(stepTop);

//   if (stepTop <= containerTop) {
//     step.classList.add('sticky');
//   } else {
//     step.classList.remove('sticky');
//   }
// });

// document.getElementsByTagName("body").onload = () => {
//     var progressBar = document.getElementById("onloadbar");
//     var onloadText = document.getElementById("onloadtext");
//     var percent = 0;
//     console.log(percent);
//     var interval = setInterval(function() {
//       percent += 1;
//       progressBar.style.width = percent + "%";
//       onloadText.innerHTML=percent + "%";
//       if (percent >= 100) {
//         clearInterval(interval);
//         document.getElementById("welcome").style.display="none";
//       }
//     }, 10);
//   };

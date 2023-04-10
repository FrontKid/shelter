import description from "./modules/indexPage/description.mjs";
import animScroll from "./modules/animation/smoothScroll.mjs";

//prealoder
window.onload = function () {
  const loader = document.querySelector('.mod')
  loader.classList.add('_close');
  document.body.classList.remove('_loading')
}

//when page is loaded
window.addEventListener('load', () => {

  //output pull request description to console
  description()

  //scrolling animation
  setTimeout(() => {
    animScroll()
  }, 100)
})



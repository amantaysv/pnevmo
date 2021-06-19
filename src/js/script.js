$('.parts-slider').slick({
  infinite: true,
  slidesToShow: 9,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  speed: 2500,
    responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      }
    }
  ]
});

var map;

DG.then(function () {
  map = DG.map('map', {
    center: [42.894974, 74.627809],
    zoom: 18
  });
  DG.marker([42.895058, 74.627812]).addTo(map).bindPopup('Мы находимся здесь');;
});

const modalBtn = document.querySelector('.modal__btn')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.btn-close')
const openModal = () => {
  modal.classList.add('active')
  document.body.classList.add('overflow-hidden')
}

const closeModal = () => {
  modal.classList.remove('active')
  document.body.classList.remove('overflow-hidden')
}
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal')) {
    closeModal()
  }
})

modalBtn.addEventListener('click', () => {
  openModal()
})

modalCloseBtn.addEventListener('click', () => {
  closeModal()
})
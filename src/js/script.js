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
      },
    },
  ],
})

$('.services-slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  // autoplay: true,
  autoplaySpeed: 3000,
  speed: 1500,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
})

var map

DG.then(function () {
  map = DG.map('map', {
    center: [42.894974, 74.627809],
    zoom: 13,
  })
  const marker = DG.marker([42.895058, 74.627812]).addTo(map)
  marker.bindLabel('<p>г.Бишкек, ул.Осмонкулова Бчк Древесная 70/3</p><p>0555-77-65-03, 0550-47-20-71</p><p>Eжедневно с 9:00 до 21:00</p>', { static: true, className: 'map-hint', offset: DG.point(-150, -170) })
})

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
document.addEventListener('click', (e) => {
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

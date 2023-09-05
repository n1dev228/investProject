const projectsSwiper = new Swiper(".inv-section-projects", {

  breakpoints: {
    320: {

      slidesPerView: 1,
      allowSlideNext: true,
      allowSlidePrev: true,
    },
    1024: {
      slidesPerView: 'auto',
      navigation: {
        nextEl: ".inv-button-next",
        prevEl: ".inv-button-prev",
      },
      allowSlideNext: false,
      allowSlidePrev: false,
    }
  }
});

/**
 * Mobile menus
 * @type {Element}
 */
const menuMobileTrigger = document.querySelector('.inv-menu-mobile')
const menuToOpen = document.querySelector('.inv-header-menu')
const menuMobileItems = document.querySelectorAll('.inv-menu-item')

menuMobileTrigger.addEventListener('click', (e) => {
  menuToOpen.classList.toggle('inv-header-menu-opened')
})

menuMobileItems.forEach((el) => {
  el.addEventListener('click', (e) => {
    menuToOpen.classList.remove('inv-header-menu-opened')
  })
})

/**
 * Tabs
 * @type {NodeListOf<Element>}
 */

const tabControls = document.querySelectorAll('.inv-tab-control')
const tabs = document.querySelectorAll('.inv-tab')

tabControls.forEach((el) => {
  el.addEventListener('click', (e) => {

    removeActiveClass(tabControls, 'inv-tab-control-active')
    removeActiveClass(tabs, 'inv-tab-active')
    e.target.classList.add('inv-tab-control-active')
    addActiveClass(tabs, 'inv-tab-active', e.target.dataset.tab, 'tab')
  })
})


function removeActiveClass(items, className) {
  const findActiveClass = Array.from(items).find((el) => el.classList.contains(className))
  if(findActiveClass) {
    findActiveClass.classList.remove(className)
  }
}

function addActiveClass(items, className, dataAttr ) {
  const findByDataAttr = Array.from(items).find((el) => el.dataset.tab === dataAttr )
  findByDataAttr.classList.add(className)
}


/**
 * Modal
 */
const modalOverlay = document.querySelector('.inv-modal-overlay')
const modalItself = document.querySelector('.inv-modal')
const btnCallModal = document.querySelectorAll('.inv-btn-callmodal')
const closeModalBtn = modalItself.querySelector('.inv-modal-close')

btnCallModal.forEach((el) => {
  el.addEventListener('click', (e) => {
    openModal(modalItself, modalOverlay, 'inv-modal-active')


  })
})
closeModalBtn.addEventListener('click', (e) => {
  closeModal(modalItself, modalOverlay, 'inv-modal-active')
})
modalOverlay.addEventListener('click', (e) => {
  closeModal(modalItself, modalOverlay, 'inv-modal-active')

})

const textAreaMessage = modalItself.querySelector('.inv-textarea')
const inputCounter = modalItself.querySelector('.inv-counter')
textAreaMessage.addEventListener('input', (e) => {
  const length = e.target.value.length
  inputCounter.innerText = length
})

function openModal(modal, modalOverlay, className) {
  modal.classList.add(className)
  modalOverlay.classList.add(className)
}

function closeModal(modal, modalOverlay, className) {
  modal.classList.remove(className)
  modalOverlay.classList.remove(className)
}
window.addEventListener('DOMContentLoaded', () => {

const menuContainer = document.querySelector('.menu-container')
const hamburgerContainer = document.querySelector('.hamburger-container')

hamburgerContainer.addEventListener('click', () => {
    if(hamburgerContainer.className.includes('bars')){
        // hamBurgerContainer
     hamburgerContainer.classList.remove('bars')
     hamburgerContainer.classList.add('close')
    // menuContainer
    menuContainer.classList.remove('hide')
    menuContainer.classList.add('show')
    // remove scroll
    document.body.style.overflow = 'hidden';
    }else{
        hamburgerContainer.classList.add('bars')
        hamburgerContainer.classList.remove('close')
    // menuContainer
    menuContainer.classList.add('hide')
    menuContainer.classList.remove('show')
        // remove scroll
        document.body.style.overflow = 'auto';
    }
})

menuContainer.addEventListener('click', e => {
    if(e.target.tagName === 'A'){
        menuContainer.classList.remove('show')
        menuContainer.classList.add('hide')
        hamburgerContainer.classList.remove('close')
        hamburgerContainer.classList.add('bars')
        document.body.style.overflow = 'auto'
    }
  })

window.addEventListener('resize', () => {
    if(window.innerWidth > 992){
      // menuContainer
      if(menuContainer.className.includes('show')){
          menuContainer.classList.remove('show')
          menuContainer.classList.add('hide')
          // hamburgerContainer
          hamburgerContainer.classList.remove('close')
          hamburgerContainer.classList.add('bars')
          // remove scroll
          document.body.style.overflow = 'auto';
      }
    }
  })

})


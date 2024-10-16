const openMenu = document.getElementById('openMenu')
const closeMenu = document.getElementById('closeMenu')
const menu = document.getElementById('menu')

openMenu.addEventListener('click', ()=>{
    menu.style.display = 'flex'
    menu.style.right = (menu.offsetWidth * -1) + '1px'
    openMenu.style.display = 'none'
    setTimeout(()=>{
        menu.style.opacity = '1'

        menu.style.right = '0'
    },10)
})

closeMenu.addEventListener('click', ()=>{
    menu.style.opacity = '0'
    menu.style.right = (menu.offsetWidth * -1) + '1px'
    setTimeout(()=>{
        menu.removeAttribute('style')
        openMenu.style.display = 'block'
    },200)
})

function scramOpenMenu() {
    openMenu.style.display = 'none'
}

window.addEventListener('resize', () => {
    if(window.innerWidth > 717) { scramOpenMenu() }
})
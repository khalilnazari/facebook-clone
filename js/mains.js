
// toggle search form and recent-search items 
const rs_back_btn = document.getElementById('rs-back-btn'); 
const logo_search_btn = document.getElementById('logo-search-btn'); 
const temp_input = document.getElementById('temp-input'); 
const recent_search = document.querySelector('.recent-search')

logo_search_btn.addEventListener('click', (e) => {
    recent_search.classList.add('show-rs')
})
temp_input.addEventListener('click', (e) => {
    recent_search.classList.add('show-rs')
})
rs_back_btn.addEventListener('click', (e) => {
    e.target.closest('.recent-search').classList.remove('show-rs')
})

// remove recent serach item 
const remove_rs_term = document.querySelectorAll('.remove-rs-term');  
Array.from(remove_rs_term).forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Travers to find the parent 
        let parent = e.target.closest('.search-terms'); 

        // Find clicked button's parent
        let child = [...parent.children].find(ele => ele === e.target.closest('.term'))
        parent.removeChild(child)
        
        // another way 
        // Array.from(parent.children).forEach(ele => {
        //     // if the clicked button's parent is the same as 
        //     if(ele == e.target.closest('.term')) {
        //         parent.removeChild(ele)
        //     }
        // }) 
    })
})


// mega-menu
const mega_menu_btn = document.getElementById('mega-menu-btn')
const mega_menu = document.querySelector('.mega-menu')
mega_menu_btn.addEventListener("click", (e) => {
    e.target.classList.toggle('active')
    mega_menu.classList.toggle('show-mega-menu')
})


// user-menu
const user_menu_btn = document.getElementById('user-menu-btn'); 
const user_menu = document.querySelector('.user-menu'); 
user_menu_btn.addEventListener('click', (e) => {
    user_menu.classList.toggle('show-um')
    e.target.classList.toggle('active')
})

// notification menu
const notification_menu_btn = document.getElementById('notification-menu-btn')
const notification_menu = document.querySelector('.notification-menu')
notification_menu_btn.addEventListener('click', (e) => {
    e.target.classList.toggle("active")
    notification_menu.classList.toggle('show-nm')
})

// messenger-menu
const messenger_menu_btn = document.getElementById('messenger_menu_btn')
const messenger_menu = document.querySelector('.messenger-menu')
messenger_menu_btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active')
    messenger_menu.classList.toggle('show-mm')
})


// create-menu
const create_menu_btn = document.getElementById('create_menu_btn')
const create_menu = document.querySelector('.create_menu')
create_menu_btn.addEventListener('click', (e) => {
    e.target.classList.toggle('active')
    create_menu.classList.toggle('show-cm')
})
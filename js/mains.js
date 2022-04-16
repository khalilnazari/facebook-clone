
// toggle search form and recent-search items 
const search_close_btn = document.getElementById('search-close-btn'); 
const search_input_field = document.querySelector('.search-input-feild'); 
const recent_search = document.querySelector('.recent-search')
const logo_wrapper = document.querySelector('.logo-wrapper')
const logo_icon = document.querySelector('.logo-icon') 

const logo_search_btn = document.getElementById('logo-search-btn'); 
const logo_search_btn_1 = document.getElementById('logo-search-btn-1'); 
const logo_search_btn_2 = document.getElementById('search-close-btn-2'); 


// click on input field
search_input_field.addEventListener('click', e => {
    logo_wrapper.classList.add('visible_lw')
    search_close_btn.classList.add('show_scb')
    recent_search.classList.add('show-rs')
    logo_icon.classList.add('hide_li')
})

// click on close button
search_close_btn.addEventListener('click', () => {
    logo_wrapper.classList.remove('visible_lw')
    search_close_btn.classList.remove('show_scb')
    recent_search.classList.remove('show-rs')
    logo_icon.classList.remove('hide_li')

    if(window.innerWidth < 1260) {
        search_input_field.classList.remove('show-sif')
    }
})

// click on search button
logo_search_btn.addEventListener('click', () => {
    if(window.innerWidth < 1260) {
        logo_wrapper.classList.add('visible_lw')
        search_close_btn.classList.add('show_scb')
        recent_search.classList.add('show-rs')
        logo_icon.classList.add('hide_li')
        search_input_field.classList.add('show-sif')
    }
})

logo_search_btn_1.addEventListener('click', () => {
    recent_search.classList.add('show-rs'); 
})
logo_search_btn_2.addEventListener('click', () => {
    recent_search.classList.remove('show-rs'); 
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
    })
})



/*######################### header Dropdowns ######################3*/
// mega-menu
const mega_menu_btn = document.getElementById('mega-menu-btn')
const mega_menu = document.querySelector('.mega-menu')

// user-menu
const user_menu_btn = document.getElementById('user-menu-btn'); 
const user_menu = document.querySelector('.user-menu'); 

// notification menu 
const notification_menu_btn = document.getElementById('notification-menu-btn')
const notification_menu = document.querySelector('.notification-menu')

// messenger-menu
const messenger_menu_btn = document.getElementById('messenger_menu_btn')
const messenger_menu = document.querySelector('.messenger-menu')

// create-menu
const create_menu_btn = document.getElementById('create_menu_btn')
const create_menu = document.querySelector('.create_menu')

// toggle menues
window.addEventListener('click', e => {
    // toggle mega-menu
    if(e.target == mega_menu_btn) {
        mega_menu_btn.classList.toggle('active')
        mega_menu.classList.toggle('show-mega-menu')
    } else {
        mega_menu_btn.classList.remove('active')
        mega_menu.classList.remove('show-mega-menu')
    }
    
    // toggle user-menu
    if (e.target == user_menu_btn){
        user_menu.classList.toggle('show-um')
        user_menu_btn.classList.toggle('active')
    } else {
        user_menu.classList.remove('show-um')
        user_menu_btn.classList.remove('active')
    }

    // toggle notification-menu
    if(e.target == notification_menu_btn) {
        notification_menu_btn.classList.toggle("active")
        notification_menu.classList.toggle('show-nm')
    } else {
        notification_menu_btn.classList.remove("active")
        notification_menu.classList.remove('show-nm')
    }

    // toggle messenger-menu
    if(e.target == messenger_menu_btn){
        messenger_menu_btn.classList.toggle('active')
        messenger_menu.classList.toggle('show-mm')
    } else {
        messenger_menu_btn.classList.remove('active')
        messenger_menu.classList.remove('show-mm')
    }

    // toggle create-menu 
    if(e.target == create_menu_btn) {
        e.target.classList.toggle('active')
        create_menu.classList.toggle('show-cm')
    } else  {
        create_menu_btn.classList.remove('active')
        create_menu.classList.remove('show-cm')
    }
})



/*############################# Watch Page  ################################*/
// hide-show header dropdown menu
const vdieo_menu_list = document.querySelectorAll('.post-header-dropdown-btn'); 
[...vdieo_menu_list].forEach(vmbtn => {
    vmbtn.addEventListener('click', (e) => {
        // e.target.parentNode.children[1].classList.toggle('show_video_post_menu');
        e.target.nextElementSibling.classList.toggle('show')
    })
})

// show-hide comment section
const show_comment_count = document.querySelectorAll('.comment-count'); 
const video_comment = document.querySelectorAll('.comment'); 
// click on comment 
video_comment.forEach(btn => {
    btn.addEventListener("click", e => {
        const parent = e.target.closest('.post').children[4]; 
        parent.classList.add('show') 
        const input = parent.querySelector('input')
        input.focus(); 
    })
})

// click on comment count
show_comment_count.forEach(btn => {
    btn.addEventListener('click', e => {
        e.target.closest('.post').children[4].classList.toggle('show') 
    })
})

// filter comments 
const comments_filter_btn = document.querySelectorAll('.comments-filter-btn'); 
comments_filter_btn.forEach(btn => {
    btn.addEventListener('click', e => {
        const nextSiblin = e.target.nextElementSibling; 
       nextSiblin.classList.toggle('show');
    })
})
/*############################# end of Watch Page  ################################*/



/*############################# Marketplace Page  ################################*/
const mp_see_fewer_btn = document.querySelectorAll('.mp_see_fewer_btn'); 
const mp_see_fewer_menu = document.querySelectorAll('.mp_see_fewer_menu'); 

mp_see_fewer_btn.forEach(btn => {
    // click on three dot menu button
    btn.addEventListener('click', e => {
        e.target.nextElementSibling.classList.toggle('show_mp_see_fewer_menu')
    })

    // click on the menu itselp
    btn.nextElementSibling.addEventListener('click', (e) => {
        e.target.classList.remove('show_mp_see_fewer_menu')
    })
})
/*############################# end of Marketplace Page  ################################*/


const see_more_bm_btn = document.querySelectorAll('.see_more_bm_btn');  

const scrollable_wrapper_left  =document.querySelector('.scrollable_wrapper_left'); 
see_more_bm_btn.forEach(btn => {
    btn.addEventListener('click', e => {
        let parentChild = e.target.closest('.left-col').children; 
        parentChild = [...parentChild].find(ele => [...ele.classList].includes("see_more_bm"))
        parentChild.classList.toggle('show_see_more_bm')

        // scroll top
        scrollable_wrapper_left.scrollTop = 0;
    }) 
})



// ################### Profile ######################
// profile-nav-menu toggle
const profile_dropdown_btn = document.getElementById('profile-dropdown-btn')
profile_dropdown_btn.addEventListener('click', e => {
    const parent = e.target.closest('.dropdown-nav'); 
    const menu = parent.querySelector('.dropdown-nav-menu')
    menu.classList.toggle('show')
})


// dropdown-page-nav toggle
const proflile_dropdown_page_btn = document.getElementById('proflile-dropdown-page-btn'); 
const dropdown_page_nav = document.querySelector('.dropdown-page-nav')
proflile_dropdown_page_btn.addEventListener('click', e => {
    console.log('navnnn')
    dropdown_page_nav.classList.toggle('show-page-nav')
})

// inline-page-nav


// inline-page-nav
const inline_page_nav = document.querySelector('.inline-page-nav')
const inline_page_nav_width = inline_page_nav.clientWidth; 
const inline_page_nav_children = inline_page_nav.children; 

const inline_page_nav_last_child = inline_page_nav.children[inline_page_nav_children.length-1]



let inline_nav_item_width =0; 
let inline_nav_item_remove = []; 
for(let i = 0; i<inline_page_nav_children.length; i++){
    inline_nav_item_width += inline_page_nav_children[i].clientWidth; 

    // if width of nav-items is bigger than their cotainer
    if(inline_nav_item_width > inline_page_nav_width) {
        dropdown_page_nav.insertBefore(inline_page_nav_children[i], dropdown_page_nav.firstChild)
        inline_page_nav_children[i].remove(); 
    }

}




// if((inline_nav_item_width * (inline_page_nav_length + 1)) > profile_nav_wrapper_width)
// console.log((inline_nav_item_width * (inline_page_nav_length + 1)), profile_nav_wrapper_width)



window.addEventListener('resize', () => {

    // inline-page-nav
    const inline_page_nav = profile_nav_wrapper.querySelector('.inline-page-nav')
    const inline_page_nav_length = inline_page_nav.children.length; 
    const inline_page_nav_width = inline_page_nav.clientWidth; 
    const inline_page_nav_last_child = inline_page_nav.children[inline_page_nav_length-1]
    const inline_page_nav_last_childClone = inline_page_nav_last_child.cloneNode(true); 

    // dropdown-page-nav
    const dropdown_page_nav = document.querySelector('.dropdown-page-nav')
    const dropdown_page_nav_firstChild = dropdown_page_nav.children[0]
    const dropdown_page_nav_firstChildClone = dropdown_page_nav_firstChild.cloneNode(true);

    // dropdown_page_nav_firstChild.remove(); 
    // console.log(dropdown_page_nav_firstChildClone)


    // total width of nav-items 
    let inline_nav_item_width = 0; 
    [...inline_page_nav.children].forEach(nav_item => {
        inline_nav_item_width += (nav_item.clientWidth); 
    })

    // if width of nav-items is bigger than their cotainer
    if(inline_nav_item_width > inline_page_nav_width) {
        dropdown_page_nav.insertBefore(inline_page_nav_last_childClone, dropdown_page_nav.firstChild)
        inline_page_nav_last_child.remove(); 
    }

    // console.log(inline_nav_item_width , inline_page_nav_width)
    inline_nav_item_width = 0; 
    [...inline_page_nav.children].forEach(nav_item => {
        inline_nav_item_width += (nav_item.clientWidth); 
    })

    if(inline_nav_item_width <= inline_page_nav_width) {
        if(dropdown_page_nav_firstChild.dataset.type != 'dropdown') {
            dropdown_page_nav_firstChild.remove(); 
            inline_page_nav.appendChild(dropdown_page_nav_firstChildClone)
        }
    }
    
})
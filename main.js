//NAVIGATION HANDLER
const navHandler = () => {
  const nav = { 
    container : document.querySelector('.nav') , 
    btn : document.querySelector('.nav__btn')  , 
    items : document.querySelector('.nav__items') , 
    icon : document.querySelector('.nav__icon')
  }

  
  
  nav.icon.addEventListener("click", () => {
    nav.items.classList.toggle("open");
    nav.icon.classList.toggle("open");
  });

  if (window.innerWidth > 800 ) {
      nav.container.classList.remove("mobile-nav");
      nav.icon.style.display = "none";
      nav.items.style.display = "flex";
      nav.btn.style.display = "flex";
  } else {
      nav.container.classList.add("mobile-nav");
      nav.icon.style.display = "block";
      nav.btn.style.display = "none";
      nav.items.style = 'none'
  }
};

//CAROUSEL HANDLER
let current = 1;
let scrollPerTimeout = undefined;
let oneVW = window.innerWidth / 100;

const moveCarousel = () => {
  scrollPerTimeout = window.innerWidth < 600 ? 80 * oneVW + 35 : 550;

  const carouselBlocksContainer = document.querySelector(".carousel__blocks");

  carouselBlocksContainer.scrollTo({
    top: 0,
    left: current * scrollPerTimeout,
    behavior: "smooth",
  });
  const currentCircle = document.querySelectorAll(".carousel__icons > .icon");
  currentCircle.forEach((item) => {
    item.classList.remove("active");
  });
  currentCircle[current].classList.add("active");

  current++;
  current = current % 4;
};

setInterval(moveCarousel ,  2500);


//CAROUSEL ICON HANDLER 
//checks if icon should be displayed depending on screen size 
const carouselIconHandler = (width )=> { 
    let carouselIconContainer = document.querySelector('.carousel__icons') ; 
    carouselIconContainer.style.display = (width > 600 ) ? 'none' : 'flex'
}


//FUNCTIONS TO RUN ON LOAD  
window.addEventListener('load' , ()=> { 
    carouselIconHandler(window.innerWidth ) ; 
    navHandler() ;
    footerEmailHandler()

})

//FUNCTIONS TO RUN ON RESIZE  
window.addEventListener('resize' , ()=> { 
    carouselIconHandler(window.innerWidth ) ; 
    navHandler() ;

})




//FOOTER EMAIL INPUT HANDLER 
const footerEmailHandler = ()=> { 
  let footer = { 
    inputArea : document.querySelector('#email') , 
    button : document.querySelector('.footer__btn'), 
    errorBox : document.querySelector('.footer__box--search') 

  }


  footer.button.addEventListener('click' ,()=> { 
    if (verifyEmail(footer.inputArea.value)) { 
      footer.errorBox.classList.add('error')
    }
    else {   
      footer.errorBox.classList.contains('error') ? footer.errorBox.classList.remove('error') : 0
    }
  
  })

} 


const verifyEmail = (email)=> { 
    
  if (email.length == 0 ) { 
    return  1
  }
  else {
    return 0
  }
}


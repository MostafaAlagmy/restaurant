(function(){ 
let li_items=$('.nav-bar >ul >li >a')
console.log(li_items);
let window_width=$(window).innerWidth()
console.log(window_width);
if(window_width <992){
  $('.nav-bar >ul >li >a').click(function(){
    $('.nav-bar >ul').fadeOut(400)
    $('nav >div:first-child').fadeOut(400)
    $('body').css({'overflow':'auto'})

  })

}
$('.open-nav ').click(function(){
    
    $('.nav-bar >ul').fadeIn(400)
    $('nav >div:first-child').fadeIn(400)
    $('body').css({'overflow':'hidden'})

   

    
})
$('nav >div:first-child i ').click(function(){
    
    $('.nav-bar >ul').fadeOut(400)
    $('nav >div:first-child').fadeOut(400)
    $('body').css({'overflow':'auto'})
    $('nav .ul_drop').slideUp(400)
    $('nav .ul_drop2').slideUp(400)

   
    

})
$('.dropdown1').click(()=>{
  $('nav .ul_drop').slideToggle(500)
  return false

})
$('.dropdown2').click(()=>{
    $('nav .ul_drop2').slideToggle(500)
    return false
})
$(window).scroll(function(){
  
    
  let x= $(window).scrollTop()
 
  

  
  
 if(x>50)
 {
 
      $('nav').css({'backgroundColor':'black','top':'0px','borderBottom': '1px solid #0c0b09' })
      $('.nav-bar >ul').css({' inset':'30px 30px 20px'})

 
  
 }
 else {
 
      $('nav').css({'backgroundColor':'rgba(0, 0, 0, .5)','top':'40px'  })
      $('.nav-bar >ul').css({'inset':'40px 30px 20px'})

 


 }

 for (let index = 0; index < li_items.length; index++) {
  let a= $($('.nav-bar >ul >li >a')).eq(index).attr('href')
  console.log(a);
  if(a.includes('#')){
  if((x-150)< $(a).offset().top){
    $($('.nav-bar >ul >li >a')).eq(index).css({'color':'#cda45e'})
    $($('.nav-bar >ul >li >a')).eq(index).parent().siblings().children().css({'color':'#ffffff'})

   

    break
    
  }
}
}

 
  

if(x>200){
  $('.arrowUp').fadeIn(500)

}else{
  $('.arrowUp').fadeOut(500)

}
  
})
let li_special=$('.ul-specila li')
for (let i = 0; i < li_special.length; i++) {
  $('.ul-specila li').eq(i).click(function(e){
    console.log(i);
    let element=e.target
    
    $('.ul-specila li').eq(i).siblings().removeClass('active-special-a')
    $('.ul-specila li').eq(i).addClass('active-special-a')
    
    $('.right-side-special >div').eq(i).siblings().addClass('special-chage-div')
    $('.right-side-special >div').eq(i).removeClass('special-chage-div')
    
    
   

   

  })
  
  
}

$('.arrowUp').click(function(){
  $('html,body').animate({scrollTop:0},200)
})
$('.nav-bar >ul >li >a').click(function(e){
  $(e.target).parent().siblings().children().css({'color':'#ffffff'})
  $(e.target).css({'color':'#cda45e'})
 

})



$(document).ready(function() {
    var $grid = $('.grid').isotope({
      // options
      itemSelector: '.element-item',
      layoutMode: 'masonry',
      getSortData: {
        name: '.name', // sorting by name
        category: '[data-category]', // sorting by category
      }
    });
  
    // filter items on button click
    $('.filter-button-group').on('click', 'button', function() {
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
    });
  });
})();

function initSwiper() {
  document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      new Swiper(swiperElement, config);
    }
  });
}

window.addEventListener("load", initSwiper);



const preloader = document.querySelector('#preloader');
if (preloader) {
  window.addEventListener('load', () => {
    preloader.remove();
  });
}


function aosInit() {
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
    once: true,
    mirror: false
  });
}
window.addEventListener('load', aosInit);








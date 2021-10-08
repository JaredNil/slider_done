function ibg(){

let ibg=document.querySelectorAll(".ibg");
for (var i = 0; i < ibg.length; i++) {
if(ibg[i].querySelector('img')){
ibg[i].style.backgroundImage = 'url('+ibg[i].querySelector('img').getAttribute('src')+')';
}
}
}

ibg();

let swipe = new Swiper('.swiper',{
   direction: 'vertical',
   centeredSlidesBounds:'false',
   pagination: {
    el: '.swiper-paginations',
    clickable: 'true',
    renderBullet:function(index, className){
      if(index==1) {return '<div class="white__bg ' + className + '"><span class="page_naming">about us</span><span class="page_number" >0'+ (index+1) + '</span></div>';}
      return '<div class="' + className + '">'+ word(index) +'<span class="page_number" >0'+ (index+1) + '</span></div>';
    },
  }, 

 });

function word(index){
  if (index==0){
    return '<span class="page_naming">home</span>';
  }
  if (index==2){
    return '<span class="page_naming">services</span>';
  }
  if (index==3){
    return '<span class="page_naming">portfolio</span>';
  }
  if (index==4){
    return '<span class="page_naming">contact</span>';
  }
};


animItems = document.getElementsByClassName('_t');
animItems[0].classList.remove('_t');
animItems = document.getElementsByClassName('_t');
animItems[0].classList.remove('_t');
animItems = document.getElementsByClassName('_r');
animItems[0].classList.remove('_r');
animItems = document.getElementsByClassName('_l' );
animItems[0].classList.remove('_l');

swipe.on('slideChange', function(){

  currentSlide = document.getElementById(swipe.activeIndex);

  animItems = currentSlide.getElementsByClassName('_t');
  
  rightAnimItems = currentSlide.getElementsByClassName('_r');
  for(let item of rightAnimItems){
    item.classList.remove('_r');
  }
  // console.log(rightAnimItems);
  leftAnimItems = currentSlide.getElementsByClassName('_l');
  for(let item of leftAnimItems){
    item.classList.remove('_l');
  }
  // console.log(leftAnimItems);
  photoAnimItems = currentSlide.getElementsByClassName('_p');
  for(let item of photoAnimItems){
    item.classList.remove('_p');
  }
  // console.log(photoAnimItems);
  photoAnimItems = currentSlide.getElementsByClassName('_p');
  for(let item of photoAnimItems){
    item.classList.remove('_p');
  }
  for (let i = 0; i< animItems.length; i++) {
   animItems[i].classList.remove('_t');
  }
  // console.log(animItems);
    for (let i = 0; i< animItems.length; i++) {
     animItems[i].classList.remove('_t');

  }
    
});

let btnItems = document.getElementsByClassName('service__spoiler-item');
console.log(btnItems);
for (let btn of btnItems) {
  btn.addEventListener('click', function(){
    clearBtn();
    btn.classList.add('_active');
    showSpoilerItem();
});
}

function clearBtn(){
  
  for (let btn of btnItems)
  {
    btn.classList.remove('_active');
  }

}


let blockItems = document.getElementsByClassName('service__block-item');

function showSpoilerItem(){
  let count = 0; let block_count = 0;

  for (let btn of btnItems) {
    if (btn.classList.contains('_active')) {
        for (let block of blockItems) { 
          console.log(count + ' ' + block_count);
          block.classList.remove('_open');
          block.classList.add('_close');
          if (count == block_count) {
            block.classList.remove('_close');
            block.classList.add('_open');
          }
          block_count++;
      }
    }
    count++;
  }
}




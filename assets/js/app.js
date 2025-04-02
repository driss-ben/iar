const tw=document.getElementById('typing-description');
const phrase="You dream it, we build it!";
let displayedFlexMenu=false;
let sleepTime=1200;
const writeLoop=async()=>{
    while(true){                
        for(let i=0; i<phrase.length;i++){
            tw.innerHTML=phrase.substring(0,i+1);
            await sleep(30);
        }
        await sleep(sleepTime);
        
        for(let i=phrase.length-1; i>=0;i--){
            tw.innerHTML=phrase.substring(0,i-1);
            await sleep(10);
        }
        await sleep(sleepTime);
    }
};

function sleep(ms){
    return new Promise((resolve) => setTimeout(resolve, ms));
}


function toggleResponse(num){

    for(i=0;i<3;i++){
        if(i!=num){
            const reply=document.getElementById('reply-'+i);
            const answer=document.getElementById('answer-'+i);
            answer.classList.remove('open');
            reply.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
        }
    }

    const reply=document.getElementById('reply-'+num);
    const answer=document.getElementById('answer-'+num);

    answer.classList.toggle('open');
    reply.style.transform = answer.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
}

const header_container=document.getElementById('header-container');
const humberg_button=document.getElementById('humberg-button');
const flex_menu=document.getElementById('flex-menu');
const black_layer=document.getElementById('black-layer');
window.onscroll = function () {
    if (window.scrollY >= 200) {
        header_container.classList.remove('on-top');
    }
    else{
        header_container.classList.add('on-top');
    }
};

function toggleFlexMenu(){
    flex_menu.classList.toggle('opened-menu');
    black_layer.classList.toggle("opened-black-layer");
    humberg_button.classList.toggle("displayed-menu");
    humberg_button.classList.toggle("close-menu-button");
    displayedFlexMenu=!displayedFlexMenu;
}

var swiperReviews = new Swiper(".swiperReviews", {
    slidesPerView: 1,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

function smoothScrollToSection(sectionId){
    var targetSection = document.getElementById(sectionId);
    if(displayedFlexMenu) toggleFlexMenu();
    targetSection.scrollIntoView({ behavior: 'smooth' , block: 'start', inline: 'start' });
}

function hideContainerWithOpacity(divId) {
    const div = document.getElementById(divId);
    let opacity = 1;
    function updateOpacity() {
        opacity -= 0.05;
        div.style.opacity = opacity;
            if(opacity > 0){
                requestAnimationFrame(updateOpacity);
            }
            else{
              div.style.display='none';
            }
    }
    requestAnimationFrame(updateOpacity);
  }

  document.addEventListener('DOMContentLoaded', async function() {
    await sleep(300);
    hideContainerWithOpacity('loading-layer');
    await sleep(300);
    writeLoop();
});
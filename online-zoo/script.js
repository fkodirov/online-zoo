//burger
const burger=document.getElementsByClassName("burger-lines")[0];
burger.addEventListener('click', ()=>{
    document.getElementsByTagName('header')[0].classList.add('active');
    document.querySelector('.pop-up-container').style.display='block';
});
const closemenu=document.getElementsByClassName("close-menu")[0];
closemenu.addEventListener('click', ()=>{
    document.getElementsByTagName('header')[0].classList.remove('active');
    document.querySelector('.pop-up-container').style.display='none';
});



//range
const selectElement=document.querySelector(".range");
const sec5blocks=document.querySelector(".sec5__blocks");
sec5blocks.style.setProperty('transition', '2s ease-in-out');
selectElement.addEventListener('change', (e)=>{
    let x;
if(document.documentElement.clientWidth> 1400){ x=-297;}
else if(document.documentElement.clientWidth<= 1400 && document.documentElement.clientWidth>=999){x=-323;}
sec5blocks.style.setProperty('transform', `translateX(${e.target.value*(x)}px)`);
});



//carousel
const left=document.getElementById('left');
const right=document.getElementById('right');
let x=0;
const sec3wrapperinner=document.getElementsByClassName('sec3__wrapper__inner')[0];
var slideleft = function (event) {
    if(left.disabled===false){
        left.disabled = true;
        right.disabled = true;
        if(document.documentElement.clientWidth> 1400){
            x+=1188;
        }
        else if(document.documentElement.clientWidth<= 1400 && document.documentElement.clientWidth>=999){
            x+=972;
        }
        else if(document.documentElement.clientWidth<999 && document.documentElement.clientWidth>=640){
            x+=630;
        }
        else if(document.documentElement.clientWidth<640){
            x+=0;
        }
        
        sec3wrapperinner.style.setProperty("transform", `translateX(${x}px)`);
        sec3wrapperinner.style.setProperty("transition", "2s ease-in-out");
        setTimeout(() => {
            if(document.documentElement.clientWidth> 1400){
                if(x==2376){
                    x=-1188;}
            }
            else if(document.documentElement.clientWidth<= 1400 && document.documentElement.clientWidth>=999){
                if(x==1944){
                    x=-972;}
            }
            else if(document.documentElement.clientWidth<999 && document.documentElement.clientWidth>=640){
                if(x==1260){
                    x=-630;}
            }
                sec3wrapperinner.style.setProperty("transition", "none");
                sec3wrapperinner.style.setProperty("transform", `translateX(${x}px)`);
            left.disabled = false;
            right.disabled = false;
        }, 2000);
        
    }
};
left.addEventListener('click', slideleft, false);
left.addEventListener('touchend', slideleft, false);

var slideright = function (event) {
    if(right.disabled===false){
        right.disabled = true;
        left.disabled = true;
        if(document.documentElement.clientWidth> 1400){
            x-=1188;
        }
        else if(document.documentElement.clientWidth<= 1400 && document.documentElement.clientWidth>=999){
            x-=972;
        }
        else if(document.documentElement.clientWidth<999 && document.documentElement.clientWidth>=640){
            x-=630;
        }
        else if(document.documentElement.clientWidth<640){
            x-=0;
        }
        sec3wrapperinner.style.setProperty("transform", `translateX(${x}px)`);
        sec3wrapperinner.style.setProperty("transition", "2s ease-in-out");
        setTimeout(() => {
            if(document.documentElement.clientWidth> 1400){
                if(x==-2376){
                    x=1188;}
            }
            else if(document.documentElement.clientWidth<= 1400 && document.documentElement.clientWidth>=999){
                if(x==-1944){
                    x=972;}
            }
            else if(document.documentElement.clientWidth< 999 && document.documentElement.clientWidth>=640){
                if(x==-1260){
                    x=630;}
            }
                sec3wrapperinner.style.setProperty("transition", "none");
                sec3wrapperinner.style.setProperty("transform", `translateX(${x}px)`);
            left.disabled = false;
            right.disabled = false;
        }, 2000);
        
    }
};
right.addEventListener('click', slideright, false);
right.addEventListener('touchend', slideright, false);

//pop up
const popupcontainer=document.querySelector('.pop-up-container');
const popupblock = document.getElementsByClassName('pop-up-block')[0];
const sec5block = document.querySelectorAll(".sec5__blocks>.sec5__block");
const close = document.getElementsByClassName('close')[0];

//const target = document.getElementsByClassName('sec5__block')[1];
//const clonedTarget = target.cloneNode(true);
//popupblock.appendChild((clonedTarget));

 for (let i = 0; i < sec5block.length; i++) {
    sec5block[i].addEventListener("click", function(e) {
        const target = e.target.closest(".sec5__block");
        console.log(target);
        const clonedTarget = target.cloneNode(true);
        popupblock.appendChild((clonedTarget));
        document.querySelector('.pop-up-block>.sec5__block').style.display='block';
        document.querySelector('.pop-up-block>.sec5__block').style.margin='20px 36px 17px 17px';
        document.querySelector('.pop-up-block>.sec5__block').style.width='267px';
        document.querySelector('.pop-up-block>.sec5__block').style.height='391px';
        document.querySelector('.pop-up-block .sec5__text').style.overflow='visible';
        popupcontainer.style.display='flex';
        popupblock.style.display='flex';
     });
 }
 //close
 popupcontainer.addEventListener("click", function() {
    if(document.getElementsByTagName('header')[0].className=='active'){
        document.getElementsByTagName('header')[0].classList.remove('active');
        document.querySelector('.pop-up-container').style.display='none';
    }
    else{
    popupcontainer.style.display='none';
    popupblock.style.display='none';
    document.querySelector('.pop-up-block .sec5__block').remove();}
 });
 close.addEventListener("click", function() {
    popupcontainer.style.display='none';
    popupblock.style.display='none';
    document.querySelector('.pop-up-block .sec5__block').remove();
 });




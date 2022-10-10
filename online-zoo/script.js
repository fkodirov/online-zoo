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
const target = document.getElementsByClassName('sec5__block')[0];
const clonedTarget = target.cloneNode(true);

document.getElementById("qwerty").appendChild((clonedTarget));
document.querySelector('.pop-up-block>.sec5__block').style.display='block';
document.querySelector('.pop-up-block>.sec5__block').style.margin='20px 36px 17px 17px';
document.querySelector('.pop-up-block>.sec5__block').style.width='267px';
document.querySelector('.pop-up-block>.sec5__block').style.height='391px';
document.querySelector('.pop-up-block .sec5__text').style.overflow='visible';

const sec5blocks = document.querySelectorAll(".sec5__blocks .sec5__block");

 for (let i = 0; i < sec5blocks.length; i++) {
    sec5blocks[i].addEventListener("click", function() {
        popupcontainer.style.display='flex';
     });
 }
 const popupblock = document.querySelector("pop-up-block");




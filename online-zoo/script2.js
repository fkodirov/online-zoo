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

 //close
 document.querySelector('.pop-up-container').addEventListener("click", function() {
        document.getElementsByTagName('header')[0].classList.remove('active');
        document.querySelector('.pop-up-container').style.display='none';
 });


//donate
const prices=document.getElementsByName('price');
const nodeList = document.querySelectorAll(".price-block");


for (let i = 0; i < prices.length; i++) {
    prices[i].addEventListener("click", function(e) {
        for (let j = 0; j < nodeList.length; j++) {
            nodeList[j].style.color = "#333B41";
          }
        nodeList[i].style.color = "#FE9013";
          document.getElementById("inputprice").value=e.target.value;

    });
}
document.getElementById("inputprice").addEventListener("input", function(e) {
    
    for (let i = 0; i < prices.length; i++) {
        if(prices[i].value==this.value){
            prices[i].click();
        }
        else{
            prices[i].checked = false;
            nodeList[i].style.color = "#333B41";
        }
    }

    if(e.target.value>9999){document.getElementById("inputprice").value=9999;}
});

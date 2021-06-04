const popup = document.querySelector(".popup-box");
const popupCloseBtn = popup.querySelector(".popup-close-btn");
const popupCloseIcon = popup.querySelector(".popup-close-icon");
function a(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Beaches";
   popup.querySelector(".popup-body").innerHTML = '<p>Imin Turga</p> <img src="img/Imin-Turga.jpg" alt="img"> <p>AFTASS</p> <img src="img/AFTASS.jpg" alt="img"> <p>Tibougraychin</p> <img src="img/Tibougraychin.jpg" alt="img"> <p>Tamhrouchte</p> <img src="img/Tamhrouchte.jpg" alt="img">';
   popupBox();  
}
function b(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Atmosphere";
   popup.querySelector(".popup-body").innerHTML = '<p>The atmosphere in mireft is worm, lovely and peaceful.</p> <img src="img/ATM.jpg" alt="img">';
   popupBox();  
}
function c(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Views";
   popup.querySelector(".popup-body").innerHTML = '<img src="img/View1.jpg" alt="img"> <img src="img/View2.jpg" alt="img"> <img src="img/View3.jpg" alt="img">';
   popupBox();  
}
function d(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Clothes";
   popup.querySelector(".popup-body").innerHTML = '<img src="img/Clothes1.jpg" alt="img"> <img src="img/Clothes2.jpg" alt="img"> <img src="img/Clothes4.jpg" alt="img">';
   popupBox();  
}
function e(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Museums";
   popup.querySelector(".popup-body").innerHTML = "<p>Mirleft is a Museum in it's self, good old thing</p>";
   popupBox();  
}
function f(){
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Food";
   popup.querySelector(".popup-body").innerHTML = '<p>Moroccain food in general is unique.. you have to taste to get it is experience</p><img src="img/Food.jpg" alt="img"><img src="img/Food1.jpg" alt="img"><img src="img/Food2.jpg" alt="img"><img src="img/Food3.jpg" alt="img"><img src="img/Food4.jpg" alt="img">';
   popupBox();  
}
function g() {
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Historic Monuments";
   popup.querySelector(".popup-body").innerHTML = '<p>Marabout Sidi Mohammed</p> <img src="img/hs1.jpg" alt="img"> <p>LKACHLA OFLA</p> <img src="img/hs2.jpg" alt="img">';
   popupBox(); 
}
function h() {
   const popup = document.querySelector(".popup-box");
   popup.querySelector(".poph3").innerHTML = "Activities";
   popup.querySelector(".popup-body").innerHTML = '<img src="img/act.jpg" alt="img"> <img src="img/act1.jpg" alt="img"> <img src="img/act2.jpg" alt="img">';
   popupBox(); 
}
popupCloseBtn.addEventListener("click", popupBox);
popupCloseIcon.addEventListener("click", popupBox);

popup.addEventListener("click", function(event){
     if(event.target == popup){
        popupBox();
     }
});

function popupBox(){
    popup.classList.toggle("open");
}


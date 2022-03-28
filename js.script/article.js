/*eslint-disable*/
// document.getElementById("button").addEventListener('click',function(){
//     document.getElementById(".share").style.display='flex';
//     // document.getElementById("buttonClose").style.display='inline-block';
//     document.getElementById("button").style.display='none';
//     });

//     function init(){
//         document.querySelector(".share").style.display='none';
//         document.getElementById("button").style.display='inline-block';
//         document.getElementById("buttonClose").style.display='none';
//     };

//     document.getElementById("buttonClose").addEventListener('click',init);
//     document.getElementById("buttonCloseone").addEventListener('click',init);

const popup = document.querySelector(".pop-up");
const btnOpenPop = document.querySelector(".share-btn");
const btnClosePop = document.querySelector(".close-popup");

const openPopUp = function () {
  popup.classList.toggle("hidden");
  console.log("this worked");
};

btnOpenPop.addEventListener("click", openPopUp);

/* eslint-disable semi */
/* eslint-disable no-undef */
/* eslint-disable indent */
/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
const buttonOpen = document.querySelectorAll('#button');
const answer = document.querySelectorAll('.answer');
const imgArrow = document.querySelectorAll('.img');
const boldText = document.querySelectorAll('.boldText');

function openClose (place) {
    if (buttonArray[place] == 1) {
        answer[place].classList.add('answer');
        imgArrow[place].classList.remove('imgArrow');
        boldText[place].classList.remove('bold');
        buttonArray[place] = 0;
    } else {
        newFunction();
    }

    function newFunction() {
        answer[place].classList.remove('answer');
        imgArrow[place].classList.add('imgArrow');
        boldText[place].classList.add('bold');
        buttonArray[place] = 1;
    }
}

for (Let i=0; i <buttonOpen.length; i++) {
    buttonArray[i] = 0;
    buttonOpen[i].addEventListener("click",function(){
        openClose(i);
    })
} 

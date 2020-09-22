const cards = document.querySelectorAll('.card');
let hasFlippedCard = false;
let fisrtCard, secondCard;
let lockBoard = false;

function flipCard(){

    if(lockBoard) return;
    if(this === fisrtCard) return;

    this.classList.add('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        fisrtCard = this;
        return;
    }

    secondCard = this;
    hasFlippedCard = false
    checkForMath();
}

function checkForMath(){
    if(fisrtCard.dataset.card === secondCard.dataset.card){
        disableCards();
        return;
    }
    unFlipCards();
}

function disableCards(){
    fisrtCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);

    resetBoard();
}
function unFlipCards(){
    lockBoard = true;
    setTimeout(() => {
        fisrtCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1500)
}

function resetBoard(){
    [hasFlippedCard, lockBoard] = [false,false];
    [fisrtCard, secondCard] = [null,null];
}

(function shuffle(){
    cards.forEach((card) => {
        let ramdomPosition = Math.floor(Math.random() * 12);
        card.getElementsByClassName.order = ramdomPosition;
    })
})();

cards.forEach((card) => {
    card.addEventListener('click',flipCard)
});


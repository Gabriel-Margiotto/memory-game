let flippedCards = []
let flippedCardsBack = []
let click = true;
let paresencontrados = []

let tempo = 0;
let intervalo;
let jogoiniciado = false;


function iniciarTimer() {
    tempo = 0;
    let visorTempo = document.querySelector(".timer").textContent = tempo;

    intervalo = setInterval(() => {
        tempo++;
        document.querySelector(".timer").textContent = tempo;

    }, 1000)
}

window.onload = () => {
    let divcards = document.querySelector(".grid")
    let arrayCards = Array.from(divcards.children)

    arrayCards.sort(() => Math.random() - 0.5)

    divcards.innerHTML = ""
    arrayCards.forEach(card => divcards.appendChild(card))

    iniciarTimer();

}

let cards = document.querySelectorAll(".card-front")

    function virar(cardback) {

        if (!click) return;

        let cardfront = cardback.previousElementSibling


        cardback.style.display = "none"
        cardfront.classList.add("virada")
        flippedCards.push(cardfront)
        flippedCardsBack.push(cardback)


        if(flippedCards.length == 2) {

            click = false;
            

            if(flippedCards[0].dataset.card === flippedCards[1].dataset.card) {
                

                setTimeout( () => {
    
                flippedCards[0].style.display = "none"
                flippedCards[1].style.display = "none"

                flippedCards = []
                flippedCardsBack = []
                paresencontrados++;
                
                if(paresencontrados == 8) {
                    window.alert("Parabéns, você ganhou! 🎉🎉🎉")
                    let reload = document.querySelector(".reload")
                    reload.style.display = "flex"
                    clearInterval(intervalo)
                }

                click = true;
                
                }, 1000)

            } else {

                setTimeout( () => {
                flippedCardsBack[0].style.display = "flex"
                flippedCardsBack[1].style.display = "flex"
                flippedCards[0].classList.remove("virada")
                flippedCards[1].classList.remove("virada")
                flippedCards = []
                flippedCardsBack = []
                click = true;

                
            }, 1000)
                
            }

        }
    }







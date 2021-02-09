const dino = document.querySelector('.dino');
const gameBackground = document.querySelector('.game-background');
let position = 0;


let isJumpingOrNot = false;

function jumpDino() {
    // pulo do dinosauro
    
    isJumpingOrNot = true;
    let upInterval = setInterval(() => {
        if(position >= 190){
            clearInterval(upInterval);
            let downInterval = setInterval(() => {
                if (position <= 0 ) {
                    clearInterval(downInterval);
                    isJumpingOrNot = false;
                }else {
                    position -= 10;
                    dino.style.bottom = position + 'px';
                }
            },20);
        } else {
            position +=10;
            dino.style.bottom= position + 'px';
        }
    }, 15);
}

function handleKeyUp(event) {
    if (event.keyCode ===32) {
        if(!isJumpingOrNot) {
            jumpDino();
        }
    }
}
function createCactus() {
    const cactus = document.createElement('div');
    let cactusPosition = 1000;
    let radomTime = Math.random() * 6000;


    cactus.classList.add('cactus');
    cactus.style.left = 1000 + 'px';
    gameBackground.appendChild(cactus);

    let leftInterval = setInterval(() => {
        if(cactusPosition < -60) {
            clearInterval(leftInterval);
            gameBackground.removeChild(cactus);
        }else if (cactusPosition > 0 && cactusPosition < 60 && position < 60){
            clearInterval(leftInterval);
            document.body.innerHTML = '<h1 class="game-over"> Fim de Jogo</h1>';
        }else{
            cactusPosition -= 10;
            cactus.style.left = cactusPosition + 'px';
        }

    }, 20);

    setTimeout(createCactus, radomTime);
}

createCactus();
document.addEventListener('keypress', handleKeyUp);
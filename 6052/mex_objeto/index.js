let largura_tela = window.innerWidth;  
let altura_tela = window.innerHeight;  
let tamanho_quadrado = 50;  
let posicao_x = (largura_tela - tamanho_quadrado) / 2;  
let posicao_y = (altura_tela - tamanho_quadrado) / 2;  
const velocidade = 5; 

const quadrado = document.getElementById('quadrado');  
quadrado.style.width = `${tamanho_quadrado}px`;  
quadrado.style.height = `${tamanho_quadrado}px`;  

function atualizarPosicao() {  
    quadrado.style.left = `${posicao_x}px`; 
    quadrado.style.top = `${posicao_y}px`; 
}

atualizarPosicao();  

const teclasPressionadas = {}; 

window.addEventListener('keydown', (e) => {  
    teclasPressionadas[e.key] = true;  
});

window.addEventListener('keyup', (e) => {  
    teclasPressionadas[e.key] = false;  
});

function loop() {  
    if (teclasPressionadas['ArrowUp']) {  
        posicao_y = Math.max(0, posicao_y - velocidade);  
    }
    if (teclasPressionadas['ArrowDown']) { 
        posicao_y = Math.min(altura_tela - tamanho_quadrado, posicao_y + velocidade);  
    }
    if (teclasPressionadas['ArrowLeft']) {        
         posicao_x = Math.max(0, posicao_x - velocidade);  
    }
    if (teclasPressionadas['ArrowRight']) {  
        posicao_x = Math.min(largura_tela - tamanho_quadrado, posicao_x + velocidade);  
    }

    atualizarPosicao();  

    requestAnimationFrame(loop);  
}

loop();  
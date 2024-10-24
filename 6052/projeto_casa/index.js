const rooms = {
    quarto1: { lightOn: false },
    quarto2: { lightOn: false },
    wc: { lightOn: false },
    cozinha: { lightOn: false },
    sala: { lightOn: false }
};

function showRoom(room) {
    const roomTitle = document.getElementById('roomTitle');
    const lightStatus = document.getElementById('lightStatus');
    const lightButton = document.getElementById('lightButton');
    const lampIcon = document.getElementById('lampIcon');
    const roomDiv = document.getElementById('room');

    roomTitle.textContent = room.charAt(0).toUpperCase() + room.slice(1);
    
    // Atualiza o estado da luz com base na divisão
    if (rooms[room].lightOn) {
        lightStatus.textContent = 'A luz está ligada.';
        lightButton.textContent = 'Desligar Luz';
        lampIcon.classList.remove('off');
        lampIcon.classList.add('on'); // Adiciona a classe 'on'
    } else {
        lightStatus.textContent = 'A luz está desligada.';
        lightButton.textContent = 'Ligar Luz';
        lampIcon.classList.add('off');
        lampIcon.classList.remove('on'); // Remove a classe 'on'
    }

    roomDiv.style.display = 'block';
}

function toggleLight() {
    const room = document.getElementById('roomTitle').textContent.toLowerCase();
    rooms[room].lightOn = !rooms[room].lightOn;

    const lightStatus = document.getElementById('lightStatus');
    const lightButton = document.getElementById('lightButton');
    const lampIcon = document.getElementById('lampIcon');

    if (rooms[room].lightOn) {
        lightStatus.textContent = 'A luz está ligada.';
        lightButton.textContent = 'Desligar Luz';
        lampIcon.classList.remove('off');
        lampIcon.classList.add('on'); // Adiciona a classe 'on'
    } else {
        lightStatus.textContent = 'A luz está desligada.';
        lightButton.textContent = 'Ligar Luz';
        lampIcon.classList.add('off');
        lampIcon.classList.remove('on'); // Remove a classe 'on'
    }
}

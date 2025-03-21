document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    let currentPlayer = 'PlayerOne';
    let playerOneCount = 0;
    let playerTwoCount = 0;

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if ((currentPlayer === 'PlayerOne' && playerOneCount < 9) || (currentPlayer === 'PlayerTwo' && playerTwoCount < 9)) {
                // Add active classes to the clicked button
                button.classList.add('BtnActive', currentPlayer);
                button.classList.forEach(cls => {
                    if (cls.startsWith('Btn') && cls !== 'BtnActive') {
                        button.classList.add(`${cls}Active`);
                    }
                });

                // Increment the counter for the current player
                if (currentPlayer === 'PlayerOne') {
                    playerOneCount++;
                } else {
                    playerTwoCount++;
                }

                // Toggle the current player
                currentPlayer = currentPlayer === 'PlayerOne' ? 'PlayerTwo' : 'PlayerOne';
            }
        });
    });
});

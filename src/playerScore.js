const playerScore = () => {
	// Player Score
	drawingArea.fillText(`Humano - ${playerScore1} pontos`, 100, 100);
	drawingArea.fillText(`Computador - ${playerScore2} pontos`, fieldWidth - 200, 100);
	
	// Player Score 2
	if (ballPositionX < 0) {
		if (ballPositionY > playerPosition1 && ballPositionY < playerPosition1 + racketHeight) {
			ballSpeedX = -ballSpeedX;
			// Racket effect
			differenceY = ballPositionY - (playerPosition1 + racketHeight / 2);
			ballSpeedY = differenceY * racketEffect;
		} else {
			playerScore2++;
			ballPositionX = fieldWidth / 2;
			ballPositionY = fieldHeight / 2;
			ballSpeedX = -ballSpeedX;
			ballSpeedY = -ballSpeedY;
		}
	}

	// Player Score 1
	if (ballPositionX > fieldWidth){
		if (ballPositionY > playerPosition2 && ballPositionY < playerPosition2 + racketHeight){
			ballSpeedX = -ballSpeedX;
			differenceY = ballPositionY - (playerPosition2 + racketHeight / 2);
			ballSpeedY = differenceY * racketEffect;
		} else {
			playerScore1++;
			ballPositionX = fieldWidth / 2;
			ballPositionY = fieldHeight / 2;
			ballSpeedX = -ballSpeedX;
			ballSpeedY = -ballSpeedY;
		}
	}

}
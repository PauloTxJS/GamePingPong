const run = () => {
	drawingArea.fillStyle = '#286047';
	drawingArea.fillRect(0, 0, fieldWidth, fieldHeight);

	// Network
	drawingArea.fillStyle = '#fff';
	drawingArea.fillRect(networkPositionX, networkPositionY, racketNetWidth, fieldHeight);

	// Rackets
	drawingArea.fillRect(0, playerPosition1, racketNetWidth, racketHeight);
	drawingArea.fillRect(fieldWidth - racketNetWidth, playerPosition2, racketNetWidth, racketHeight);

	// Ball
	drawingArea.fillRect(ballPositionX - ballSize / 2, ballPositionY - ballSize / 2, ballSize, ballSize);
	ballPositionX = ballPositionX + ballSpeedX;
	ballPositionY = ballPositionY + ballSpeedY;

	// Action if the ball hits the sides, top and bottom.
	if (ballPositionY < 0 || ballPositionY > fieldHeight) {
		ballSpeedY = -ballSpeedY;
	}

	playerScore();
	gamerTwo();        
}
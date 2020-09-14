const gamerTwo = () => {
	// Gamer 2
	if (playerPosition2 + racketHeight / 2 < ballPositionY) {
		playerPosition2 = playerPosition2 + speedPlayer2;
	} else {
		playerPosition2 = playerPosition2 - speedPlayer2;
	}
}
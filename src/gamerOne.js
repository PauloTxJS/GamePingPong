const gamerOne = () => {
	LeafDrawing.addEventListener('mousemove', (e) => {
		playerPosition1 = e.clientY - racketHeight / 2;
	})
}
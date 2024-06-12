const keys = document.querySelectorAll('.piano-keys');

// Creating a object of Audio with a default sound
const pianoSound = new Audio('./Sound/piano-mp3_C3.mp3');

keys.forEach((key) => {
	key.addEventListener('click', (e) => {
		const clickedKey = e.target.dataset.list;
		pianoSound.src = `./Sound/piano-mp3_${clickedKey}.mp3`;
		pianoSound.play();
	})
})

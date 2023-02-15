/* script.js */

// Get all the play buttons
const playButtons = document.querySelectorAll('.play');

// Get the stop button
const stopButton = document.querySelector('.stop');

// Get the now playing element
const nowPlaying = document.querySelector('.now-playing');

// Create an array to keep track of the currently playing audio elements
const playingAudios = [];

// Add click event listeners to all the play buttons
playButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // Stop any currently playing audio elements
    playingAudios.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0;
    });
    playingAudios.length = 0;
    // Get the audio element associated with the clicked button
    const audio = event.target.parentElement.querySelector('audio');
    // Play the audio
    audio.play();
    playingAudios.push(audio);
    // Update the now playing element
    nowPlaying.innerHTML = `Now playing: ${audio.dataset.title}`;
  });
});

// Add click event listener to the stop button
stopButton.addEventListener('click', () => {
  // Stop any currently playing audio elements
  playingAudios.forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
  playingAudios.length = 0;
  // Clear the now playing element
  nowPlaying.innerHTML = '';
});

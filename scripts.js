const soundMap = {
  A: "../components/low-fi-DRUM.mp3",
  S: "../components/Omemma.mp3",
  D: "../components/Omemma2.mp3",
  Q: "sounds/clap.wav",
  W: "sounds/ride.wav",
  E: "sounds/tom.wav",
  R: "sounds/cymbal.wav",
  T: "sounds/percussion.wav",
  Y: "sounds/crash.wav",
  U: "sounds/open_hat.wav",
  I: "sounds/shaker.wav",
  O: "sounds/low_tom.wav",
  P: "sounds/cowbell.wav",
  Z: "sounds/808.wav",
  X: "sounds/rimshot.wav",
  C: "sounds/snap.wav",
  V: "sounds/clave.wav",
  B: "sounds/woodblock.wav",
  N: "sounds/triangle.wav",
  M: "sounds/cabasa.wav",
};

const activeAudios = {}; // To track active sounds for simultaneous playback

// Display the current key pressed
const keyDisplay = document.getElementById("keyDisplay");

// Function to play the sound
function playSound(key) {
  const sound = soundMap[key.toUpperCase()];
  if (sound) {
    if (activeAudios[key]) {
      activeAudios[key].pause();
      delete activeAudios[key]; // Remove existing audio if it exists
    }
    const newAudio = new Audio(sound);
    newAudio.loop = true;
    newAudio.play().catch((error) => {
      console.error(`Error playing sound for key ${key}:`, error);
    });
    activeAudios[key] = newAudio; // Store the active audio
  }
}

// Function to stop the sound
function stopSound(key) {
  if (activeAudios[key]) {
    activeAudios[key].pause();
    activeAudios[key].currentTime = 0; // Reset the audio to start
    delete activeAudios[key];
  }
}

// Function to highlight the key on the screen
function highlightKey(key, addHighlight) {
  const keyElement = document.querySelector(
    `.key[data-key="${key.toUpperCase()}"]`
  );
  if (keyElement) {
    if (addHighlight) {
      keyElement.classList.add("active");
    } else {
      keyElement.classList.remove("active");
    }
  }
}

// Keydown event listener
document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();
  if (!activeAudios[key]) {
    // Prevent multiple plays for the same key
    playSound(key);
  }
  keyDisplay.textContent = key; // Display the key pressed
  highlightKey(key, true); // Highlight the key on the visual keyboard
});

// Keyup event listener
document.addEventListener("keyup", (event) => {
  const key = event.key.toUpperCase();
  stopSound(key);
  keyDisplay.textContent = "-"; // Reset display when no key is pressed
  highlightKey(key, false); // Remove highlight from the visual keyboard
});

// --------------------------------------

// // Sound map to link keys to sound file paths
// const soundMap = {
//   A: "../components/low-fi-DRUM.mp3",
//   S: "sounds/snare.wav",
//   D: "sounds/kick.wav",
//   Q: "sounds/clap.wav",
//   W: "sounds/ride.wav",
//   E: "sounds/tom.wav",
//   R: "sounds/cymbal.wav",
//   T: "sounds/percussion.wav",
//   Y: "sounds/crash.wav",
//   U: "sounds/open_hat.wav",
//   I: "sounds/shaker.wav",
//   O: "sounds/low_tom.wav",
//   P: "sounds/cowbell.wav",
//   Z: "sounds/808.wav",
//   X: "sounds/rimshot.wav",
//   C: "sounds/snap.wav",
//   V: "sounds/clave.wav",
//   B: "sounds/woodblock.wav",
//   N: "sounds/triangle.wav",
//   M: "sounds/cabasa.wav",
//   // Add more key-sound mappings here as needed
// };

// let audio = null;
// let isPlaying = false;

// // Display the current key pressed
// const keyDisplay = document.getElementById("keyDisplay");

// // Function to play the sound
// function playSound(key) {
//   const sound = soundMap[key.toUpperCase()]; // Find the sound by key
//   if (sound) {
//     if (audio) {
//       audio.pause(); // Pause any existing audio
//     }
//     audio = new Audio(sound);
//     audio.loop = true; // Loop the sound when key is held down
//     audio.play();
//   }
// }

// // Function to stop the sound
// function stopSound() {
//   if (audio) {
//     audio.pause();
//     audio.currentTime = 0; // Reset the audio to start
//   }
// }

// // Function to highlight the key on the screen
// function highlightKey(key, addHighlight) {
//   const keyElement = document.querySelector(
//     `.key[data-key="${key.toUpperCase()}"]`
//   );
//   if (keyElement) {
//     if (addHighlight) {
//       keyElement.classList.add("active");
//     } else {
//       keyElement.classList.remove("active");
//     }
//   }
// }

// // Keydown event listener
// document.addEventListener("keydown", (event) => {
//   const key = event.key.toUpperCase();
//   if (!isPlaying) {
//     // Prevent multiple sounds for the same key
//     playSound(key);
//     isPlaying = true;
//   }
//   keyDisplay.textContent = key; // Display the key pressed
//   highlightKey(key, true); // Highlight the key on the visual keyboard
// });

// // Keyup event listener
// document.addEventListener("keyup", (event) => {
//   const key = event.key.toUpperCase();
//   stopSound();
//   isPlaying = false;
//   keyDisplay.textContent = "-"; // Reset display when no key is pressed
//   highlightKey(key, false); // Remove highlight from the visual keyboard
// });

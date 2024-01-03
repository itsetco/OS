const card = document.querySelector(".card__inner");
const backCardContent = document.querySelector(".card__body p");



const texts = [
  "Abandon normal instruments",
  "Accept advice",
  "Accretion",
  "Always first steps",
  "Allow an easement (an easement is the abandonment of a stricture)",
  "Are there sections? Consider transitions",
  "Ask people to work against their better judgement",
  "Ask your body",
  "Is the style right?",
  "Use something nearby as a model",
  "Be dirty",
  "What is the simplest solution?",
  "Be extravagant",
  "Be less critical more often",
  "Breathe more deeply",
  "Remove ambiguities and convert to specifics",
  "Change nothing and continue with immaculate consistency",
  "Remove specifics and convert to ambiguities",
  "Courage!",
  "Cut a vital connection",
  "Decorate, decorate",
  "Define an area as 'safe' and use it as an anchor",
  "Destroy -nothing -the most important thing",
  "Discard an axiom",
  "Disciplined self-indulgence",
  "Disconnect from desire",
  "Discover the recipes you are using and abandon them",
  "Distorting time",
  "Do nothing for as long as possible",
  "Don't be afraid of things because they're easy to do",
  "Don't be frightened of cliches",
  "Don't be frightened to display your talents",
  "A line has two sides",
  "From nothing to more than nothing",
  "Don't break the silence",
  "Don't stress one thing more than another",
  "Bridges -build -burn",
  "Do something boring",
  "Idiot glee (?)",
  "It is quite possible (after all)",
  "Lost in useless territory",
  "Revaluation (a warm feeling)",
  "What are the sections sections of? Imagine a caterpillar moving",
  "Imagine the piece as a set of disconnected events",
  "Is the intonation correct?",
  "Lowest common denominator",
  "Children -speaking -singing",
  "Intentions -nobility of -humility of -credibility of",
  "Balance the consistency principle with the inconsistency principle",
  "Cascades",
  "Change instrument roles",
  "Cluster analysis",
  "Consider different fading systems",
  "Consult other sources -promising -unpromising",
  "Emphasise repetitions",
  "Fill every beat with something",
  "Ghost echoes",
  "Go slowly all the way round the outside",
  "Infinitesimal gradations",
  "Into the impossible",
  "Mechanicalise something idiosyncratic",
  "Mute and continue",
  "(Organic) machinery",
  "The tape is now the music",
  "Think of the radio",
  "Use fewer notes",
  "What is the reality of the situation?",
  "You can only make one dot at a time",
  "Always give yourself credit for having more than personality\n(given by Arto Lindsay)",
  "Convert a melodic element into a rhythmic element",
  "Do the washing up",
  "Get your neck massaged",
  "Left channel, right channel, centre channel",
  "Put in earplugs",
  "Spectrum analysis",
  "Tape your mouth\n(given by Ritva Saarikko)",
  "Twist the spine",
  "Make a sudden, destructive unpredictable action; incorporate",
  "Make an exhaustive list of everything you might do and do the last thing on the list",
  "Do the words need changing?",
  "Pae White's non-blank graphic 'metacard'",
  "Emphasize differences",
  "Emphasize the flaws",
  "Faced with a choice, do both\n(given by Dieter Rot)",
  "Gardening, not architecture",
  "Give the game away",
  "Give way to your worst impulse",
  "Go outside. Shut the door.",
  "Go to an extreme, move back to a more comfortable place",
  "Who should be doing this job? How would they do it?",
  "How would you have done it?",
  "In total darkness, or in a very large room, very quietly",
  "Is it finished?",
  "Is there something missing?",
  "Just carry on",
  "Listen to the quiet voice",
  "Look at the order in which you do things",
  "Look closely at the most embarrassing details and amplify them",
  "Make it more sensual",
  "Make something implied more definite (reinforce, duplicate)",
  "Humanise something free of error",
  "Not building a wall but making a brick",
  "Once the search is in progress, something will be found",
  "Only a part, not the whole",
  "Only one element of each kind",
  "Overtly resist change",
  "Question the heroic approach",
  "Remember .those quiet evenings",
  "Repetition is a form of change",
  "Retrace your steps",
  "Reverse",
  "Simple Subtraction",
  "Simply a matter of work",
  "Slow preparation, fast execution",
  "State the problem in words as clearly as possible",
  "Take a break",
  "Take away the elements in order of apparent non importance",
  "The inconsistency principle",
  "The most important thing is the thing most easily forgotten",
  "Think - inside the work -outside the work",
  "Tidy up",
  "Towards the insignificant",
  "Try faking it!\n(given by Stewart Brand)",
  "Turn it upside down",
  "Use an old idea",
  "Use filters",
  "Use 'unqualified' people",
  "You don't have to be ashamed of using your own ideas",
  "Voice nagging suspicions",
  "Water",
  "Which frame would make this look right?",
  "What are you really thinking about just now? Incorporate",
  "What mistakes did you make last time?",
  "What to increase? What to reduce? ",
  "What to maintain?",
  "What were you really thinking about just now?",
  "What wouldn't you do?",
  "What would your closest friend do?",
  "When is it for?",
  "Where is the edge? Where does the frame start?",
  "Which elements can be grouped?",
  "Work at a different speed",
  "Would anybody want it?",
  "Honor thy error as a hidden intention",
  // Add more flashcards as needed
];




// Function to set a random background image
function setRandomBackground() {
  // List of background images
  const backgroundImages = [
    'https://i.imgur.com/Ik1aWL3.jpg',
    'https://i.imgur.com/YjaymBC.jpg',
    'https://i.imgur.com/RlSNJpT.jpg',
    'https://i.imgur.com/AVwNOIx.jpg',
    'https://i.imgur.com/6qeVt8z.jpg',
    'https://i.imgur.com/c7iYb7R.jpg',
    'https://i.imgur.com/MkLNP8M.jpg',
    'https://i.imgur.com/AvbPEvR.jpg',
    'https://i.imgur.com/XzpWGvh.jpg',
    'https://i.imgur.com/EiHUcwR.jpg',
    // Add more image URLs as needed
  ];

  // Get a random index
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);

  // Set the background image
  document.body.style.background = "url('" + backgroundImages[randomIndex] + "') center/cover";
}

// Function to set a random texture for the card
function setRandomCardTexture() {
  // List of card textures
  const cardTextures = [
    'https://i.imgur.com/xZvi7dD.jpg',
    'https://i.imgur.com/01jhZ3r.jpg',
    'https://i.imgur.com/gH13rNp.jpg',
    'https://i.imgur.com/IWMwOpA.jpg',
    'https://i.imgur.com/SQVYeb4.jpg',
    'https://i.imgur.com/swzqQUo.jpg',
    'https://i.imgur.com/cbyhmq0.jpg',
    'https://i.imgur.com/BxNbahY.jpg',
    'https://i.imgur.com/iDsjWJr.jpg',
    'https://i.imgur.com/RwyZmGu.jpg',
    'https://i.imgur.com/qABKt8V.jpg',
    'https://i.imgur.com/dBpFZ2F.jpg',
    'https://i.imgur.com/nhj0DK4.jpg',
    'https://i.imgur.com/MIlhrYj.jpg',
    'https://i.imgur.com/AFzHNqh.jpg',
    'https://i.imgur.com/MnbCHaz.jpg',
    'https://i.imgur.com/VHPSN2r.jpg',
    'https://i.imgur.com/gAggmuc.jpg',
    'https://i.imgur.com/ADAalRG.jpg',
    'https://i.imgur.com/rS6L2lf.jpg',
    'https://i.imgur.com/yXXW6IT.jpg',
    'https://i.imgur.com/vx454c4.jpg',
    'https://i.imgur.com/tQmxwbJ.jpg',
    'https://i.imgur.com/P0d6dSu.jpg',
    'https://i.imgur.com/OVYd7ot.jpg',

    // Add more texture URLs as needed
  ];

  // Get a random index
  const randomIndex = Math.floor(Math.random() * cardTextures.length);

  // Set the card texture
  const card__face = document.querySelector(".card__inner");
  const imageUrl = cardTextures[randomIndex];

  // Set width and height values as needed
  const width = "18cm"; // Replace with your desired width
  const height = "14cm"; // Replace with your desired height

  card__face.style.background = `url('${imageUrl}') center/cover`;
  card__face.style.backgroundSize = "100% 100%"; // or 'cover' for maintaining aspect ratio
}

// Create an audio element
const backgroundMusic = new Audio('./sounds/drone.mp3');
backgroundMusic.loop = true;

// Function to play background music
function playBackgroundMusic() {
  // Play the background music
  backgroundMusic.play();
  
  // Remove the event listener to avoid multiple plays
  document.removeEventListener('click', playBackgroundMusic);
}

// Add an event listener to play the background music on the first click
document.addEventListener('click', playBackgroundMusic);

// Rest of your code...

// Call the functions to set random background and card texture when the program opens
setRandomBackground();
setRandomCardTexture();









// Define an array of sound file paths
const soundFiles = [
  './sounds/Audio 1.wav',
  './sounds/Audio 2.wav',
  './sounds/Audio 3.wav',
  './sounds/Audio 4.wav',
  './sounds/Audio 5.wav',
  './sounds/Audio 6.wav',
  './sounds/Audio 7.wav',
  './sounds/Audio 8.wav',
  './sounds/Audio 9.wav',
  './sounds/Audio 10.wav',
  './sounds/Audio 11.wav',
  './sounds/Audio 12.wav',
  './sounds/Audio 13.wav',
  // Add more sound file paths as needed
];

// Create an Audio object
const clickSound = new Audio();


let clickCount = 0;

card.addEventListener("click", function (e) {

  // Select a random sound file from the array
  const randomIndex = Math.floor(Math.random() * soundFiles.length);
  const randomSoundFile = soundFiles[randomIndex];

  // Set the source of the Audio object to the random sound file
  clickSound.src = randomSoundFile;

  // Play the random sound
  clickSound.play();

  card.classList.toggle('is-flipped'); // Flip the card on every click

  clickCount++;

  // Check if it's the second click
  if (clickCount % 2 === 0) {
    // Introduce a delay of 0.5s before updating the text
    setTimeout(() => {
      // Update the text content on the back of the card with a random text
      const randomIndex = Math.floor(Math.random() * texts.length);
      backCardContent.textContent = texts[randomIndex];
    }, 300);
  }
});

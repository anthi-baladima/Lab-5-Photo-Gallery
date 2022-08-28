// Στο εξωτερικό αρχείο vouna.js περιέχεται ένας πίνακας πινάκων δύο στοιχείων,
// το πρώτο από τα οποία είναι μια περιγραφή ενός προορισμού σε Ελλληνικό βουνό
// και το δεύτερο ένα σχετικό URL μιας φωτογραφίας αντίστοιχα στον φάκελο ./img.

// File vouna.js contains an array with 2 elements. The 1st is a description of
// a destination in a Greek mountain. The 2nd element is the URL of a photo of
// the destination.

const micrografies = document.querySelector(".mikrografies");
const vounaNew = shuffleArray(vouna);
const panel = document.querySelector(".panel-main");
const description = document.querySelector(".perigrafi");

for (i of vounaNew) {
  let current = document.createElement("img");
  current.src = i[1].slice(2);
  current.setAttribute("title", i[0]);
  micrografies.appendChild(current);
  if (i===vounaNew[0]) {
    let currentPanel = document.createElement("img");
    currentPanel.src = i[1].slice(2);
    currentPanel.setAttribute("title", i[0]);
    panel.appendChild(currentPanel);
    currentPanel.setAttribute("id", "selected");
    description.innerHTML = i[0];
    current.setAttribute("class", "activeThumb");
  }
}

const thumbs = document.querySelectorAll(".mikrografies img");

// Όταν φορτώνει η εφαρμογή, η επιλεγμένη μικρογραφία είναι η 1η στον πίνακα 
// thumbs.
// Κάθε μικρογραφία μπορεί να κλικαριστεί. Όταν γίνεται αυτό θα εκτελείται 
// η συνάρτηση imgActivate()
// Η συνάρτηση, που καλείται όταν γίνει κλικ σε μια από τις εικόνες του πίνακα
// thumbs, έχει σαν όρισμα ένα event object. Η συνάρτηση:
// - εμφανίζει στην περιοχή panel-main τη μικρογραφία που μόλις πατήθηκε
// - φροντίζει ώστε μόνο η μικρογραφία που μόλις πατήθηκε να έχει διαφάνεια 50%

// When the app loads, the selected thumbnail is the first one in the array
// thumbs.
// Each thumbnail can be clicked. If clicked, the function imgActivate() is 
// called which :
// - displays the just clicked image in the area panel-main 
// - makes sure that only the just clicked thumbnail has opacity 50%. 

function imgActivate(e) {
  let selectImg = document.getElementById("selected");
  selectImg.src = this.getAttribute("src");
  for (vouno of vounaNew) {
    if (this.getAttribute("src") === vouno[1].slice(2)) {
      description.innerHTML = vouno[0];
    }
  }
  for (im of thumbs) {
    if (im.getAttribute("class")) {
      im.removeAttribute("class");
    }
  }
  this.setAttribute("class", "activeThumb");
} 

thumbs.forEach( item => item.addEventListener("click", imgActivate) );

// Επιστρέφει τον πίνακα arr με τυχαία διάταξη στοιχείων
// Returns a shuffled copy of array arr
//shuffle array https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i)
    const temp = array[i]
    array[i] = array[j]
    array[j] = temp
  }
  return array
}

const newpicButton = document.querySelector("#new-pic");

function imgRandom() {
  let i = Math.floor(Math.random() * vounaNew.length);
  console.log(i);
  randomAddress = vounaNew[i][1].slice(2);

  let selectImg = document.getElementById("selected");
  selectImg.src = randomAddress;
  description.innerHTML = vounaNew[i][0];

  for (im of thumbs) {
    if (im.getAttribute("src") === randomAddress) {
      im.setAttribute("class", "activeThumb");
    }
    else {
      if (im.getAttribute("class")) {
        im.removeAttribute("class");
      }
    }
  }
}

newpicButton.addEventListener('click', imgRandom);

const previousButton = document.querySelector("#previous");

previousButton.addEventListener('click', function() {
  let active = document.querySelector(".activeThumb");
  if (active.previousElementSibling) {
    var address = active.previousElementSibling.getAttribute("src");
    for (vouno of vounaNew) {
      if (address === vouno[1].slice(2)) {
        desc = vouno[0];
      }
    }
  }
  else {
    var address = vounaNew[vounaNew.length-1][1].slice(2);
    var desc = vounaNew[vounaNew.length-1][0];
  }
  
  let selectImg = document.getElementById("selected");
  selectImg.src = address;
  description.innerHTML = desc;

  for (im of thumbs) {
    if (im.getAttribute("src") === address) {
      im.setAttribute("class", "activeThumb");
    }
    else {
      if (im.getAttribute("class")) {
        im.removeAttribute("class");
      }
    }
  }
});

const nextButton = document.querySelector("#next");

nextButton.addEventListener('click', function() {
  let active = document.querySelector(".activeThumb");
  if (active.nextElementSibling) {
    var address = active.nextElementSibling.getAttribute("src");
    for (vouno of vounaNew) {
      if (address === vouno[1].slice(2)) {
        desc = vouno[0];
      }
    }
  }
  else {
    var address = vounaNew[0][1].slice(2);
    var desc = vounaNew[0][0];
  }
  
  let selectImg = document.getElementById("selected");
  selectImg.src = address;
  description.innerHTML = desc;

  for (im of thumbs) {
    if (im.getAttribute("src") === address) {
      im.setAttribute("class", "activeThumb");
    }
    else {
      if (im.getAttribute("class")) {
        im.removeAttribute("class");
      }
    }
  }
});
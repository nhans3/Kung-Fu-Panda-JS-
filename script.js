// KF Panda Search

// Variables

let charIn = document.getElementById("char-in");
let charName = document.getElementById("char-name");
let charQuote = document.getElementById("char-quote");
let charImg = document.getElementById("char-img");

let themeIn = document.getElementById("theme-in");
let themeBtn = document.getElementById("theme-btn");

let body = document.getElementById("body");
let heading = document.getElementById("heading");

// Button Event Listner
document.getElementById("btn").addEventListener("click", btnClicked);
themeBtn.addEventListener("click", changeTheme);

function btnClicked() {
  //   INPUT
  let name = document.getElementById("char-in").value;

  //   If Statement - Test The INPUT

  if (name.toLowerCase() === "po") {
    charName.innerHTML = "Po";
    charQuote.innerHTML = "Buddy, I am the Dragon Warrior!";
    charImg.src = "img/po.png";
  } else if (name.toLowerCase() === "tigress") {
    charName.innerHTML = "Tigress";
    charQuote.innerHTML = "That was hardcore!";
    charImg.src = "img/tigress.png";
  } else if (name.toLowerCase() === "mantis") {
    charName.innerHTML = "Mantis";
    charQuote.innerHTML = "Fear the Bug!";
    charImg.src = "img/mantis.png";
  } else if (name.toLowerCase() === "monkey") {
    charName.innerHTML = "Monkey";
    charQuote.innerHTML = "We should hang out!";
    charImg.src = "img/monkey.png";
  } else if (name.toLowerCase() === "viper") {
    charName.innerHTML = "Viper";
    charQuote.innerHTML = "I don't need to bite to fight!";
    charImg.src = "img/viper.png";
  } else if (name.toLowerCase() === "crane") {
    charName.innerHTML = "Crane";
    charQuote.innerHTML = "Wings of Justice!";
    charImg.src = "img/crane.png";
  } else if (name.toLowerCase() === "boss wolf") {
    charName.innerHTML = "Boss Wolf";
    charQuote.innerHTML =
      "Guess nobody told you: If you mess with the wolf, you get the fangs.";
    charImg.src = "img/boss-wolf.png";
  } else if (name.toLowerCase() === "croc") {
    charName.innerHTML = "Master Croc";
    charQuote.innerHTML = "Vengence is served!";
    charImg.src = "img/croc.png";
  } else if (name.toLowerCase() === "kai") {
    charName.innerHTML = "Kai";
    charQuote.innerHTML =
      "I fought by his side. I loved him like a brother. And he... betrayed me. Well, now I will destroy everything he has created!";
    charImg.src = "img/kai.png";
  } else if (name.toLowerCase() === "mr ping") {
    charName.innerHTML = "Mr Ping";
    charQuote.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImg.src = "img/mr-ping.png";
  } else if (name.toLowerCase() === "mr ping") {
    charName.innerHTML = "Mr Ping";
    charQuote.innerHTML = "We are noodle folk. Broth runs through our veins!";
    charImg.src = "img/mr-ping.png";
  } else if (name.toLowerCase() === "oogway") {
    charName.innerHTML = "Oogway";
    charQuote.innerHTML =
      "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present.";
    charImg.src = "img/oogway.png";
  } else if (name.toLowerCase() === "shen") {
    charName.innerHTML = "Shen";
    charQuote.innerHTML = "Happiness... must be taken. And I will take mine.";
    charImg.src = "img/shen.png";
  } else if (name.toLowerCase() === "shifu") {
    charName.innerHTML = "Shifu";
    charQuote.innerHTML =
      "If you only do what you can do, you will never be more than you are now.";
    charImg.src = "img/shifu.png";
  } else if (name.toLowerCase() === "soothsayer") {
    charName.innerHTML = "Soothsayer";
    charQuote.innerHTML =
      "Well done. I see you found a battle worth fighting for.";
    charImg.src = "img/soothsayer.png";
  } else if (name.toLowerCase() === "storming ox") {
    charName.innerHTML = "Storming Ox";
    charQuote.innerHTML = "You insolent fool!";
    charImg.src = "img/storming-ox.png";
  } else if (name.toLowerCase() === "tai lung") {
    charName.innerHTML = "Tai Lung";
    charQuote.innerHTML =
      "Finally, A worthy opponent. Our battle will be legendary!";
    charImg.src = "img/tai-lung.png";
  } else {
    charName.innerHTML = "???????";
    charQuote.innerHTML = "--------";
    charImg.src = "img/question-mark.png";
  }
}

function changeTheme() {
  // INPUT
  let theme = themeIn.value;

  if (theme.toLowerCase() === "dark") {
    body.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    heading.style.color = "white";
    charName.style.color = "white";
  } else if (theme.toLowerCase() === "light") {
    body.style.backgroundColor = "rgba(255,255,255, 0.7)";
    heading.style.color = "black";
    charName.style.color = "black";
  } else if (theme.toLowerCase() === "random") {
    r = Math.random() * 255;
    r = Math.round(r);

    g = Math.random() * 255;
    g = Math.round(g);

    b = Math.random() * 255;
    b = Math.round(b);

    rgb = "rgb(" + r + "," + g + "," + b + ")";

    body.style.backgroundColor = rgb;
  } else {
  }
}

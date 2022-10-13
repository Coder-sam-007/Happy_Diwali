const yourName = document.querySelector("#yourName");
const msg = document.querySelector("#msg");
const nameTextBox = document.getElementById("nameTextBox");
const formBox = document.querySelector(".form-box");
const shareBTN = document.querySelector(".share-btn");
const goBTN = document.querySelector("#go-btn");
let sname = document.querySelector("#nameinput");
const wish = document.querySelector(".wish");
const audio = document.getElementById("my_audio");
const nameBox = document.querySelector(".name-box");

window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}

sname.addEventListener("click", () => {
  audio.play();
});

window.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    goBTN.click();
  }
});

const createSubURL = (sParam) => {
  let sPageURL = window.location.search.substring(1);
  let sURLletiables = sPageURL.split("&");
  for (let i = 0; i < sURLletiables.length; i++) {
    let sParameterName = sURLletiables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
};

window.jqs = createSubURL;
let Name = decodeURI(createSubURL("bl"));
if (typeof createSubURL("bl") === "undefined") {
  Name = "";
}

const checkName = () => {
  if (Name.length !== 0) {
    Name = Name.replace(/-/g, " ");
    yourName.textContent = Name;
    nameBox.style.display = "block";
    msg.textContent =
      sname.value + " is wishing you the best of your fortune this Diwali :)";
  
  }
};

checkName();

const createGreeting = () => {
  gtag("event", "click", {
    event_category: "interaction",
    event_label: "goButtonClicked",
  });

  sname = sname.value;

  sname = sname.replace(/@/g, "-");
  sname = sname.replace(/%40/g, "-");
  sname = sname.replace(/\./g, "-");
  if (sname.trim() != "") {
    shareBTN.classList.remove("hide");
    formBox.style.display = "none";
    yourName.textContent = sname;
    msg.textContent = " is wishing you the best of your fortune this Diwali :)";
    nameBox.style.display = "block";
    window.scrollTo(0, 0);
  } else {
    alert("Please Type Your Name First");
    nameTextBox.focus();
  }
};

goBTN.addEventListener("click", createGreeting);

const shareActionWA = () => {
  let shareString = "";
  let whatsappHref;
  shareString += "*" + sname.trim() + "*";

  shareString +=
    " has sent you a pleasant surprise, to know what's inside just hit the link \n👉";
  shareString += (window.location.href.split("?")[0] + "?bl=" + sname)
    .replace("#", "")
    .replace(/ /g, "-");

  whatsappHref = "whatsapp://send?text=" + shareString;
  window.location.href = whatsappHref;
};

shareBTN.addEventListener("click", shareActionWA);

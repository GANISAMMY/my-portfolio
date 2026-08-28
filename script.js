console.log("javascript is connected");

const cvbutton = document.getElementById("cvbutton");

cvbutton.addEventListener("click", function () {
    const cv = document.createElement("a");

    cv.href = "GANI SAMUEL YAVINI.CV.pdf";
    cv.download = "GANI SAMUEL YAVINI.CV.pdf";

    cv.click();
});

const typing = document.getElementById("typing");

const words = [
    "i'm Gani Samuel Yavini",
    "Web Developer",
    "Frontend Developer",
    "JavaScript Developer"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
    } else {
        typing.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex++;

            if (wordIndex === words.length) {
                wordIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 80 : 120);
}

typeEffect();
















console.log("javascript is connected");

const cvbutton = document.getElementById("cvbutton");

cvbutton.addEventListener("click", function () {

    const cv = document.createElement("a");

    cv.href = "GANI SAMUEL YAVINI-CV.pdf";
    cv.download = "GANI SAMUEL YAVINI-CV.pdf";

    cv.click();

});


// ================================
// CONTINUOUS TYPING EFFECT
// ================================

const text = "I'm Gani Samuel Yavini";
const typingElement = document.getElementById("typing");

let index = 0;
let deleting = false;

function typeEffect() {

    if (!deleting) {

        typingElement.textContent = text.slice(0, index);
        index++;

        if (index > text.length) {
            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent = text.slice(0, index);
        index--;

        if (index < 0) {
            index = 0;
            deleting = false;

            setTimeout(typeEffect, 500);
            return;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}

typeEffect();


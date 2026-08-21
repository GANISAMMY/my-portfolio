console.log("javascript is connected");

const cvbutton = document.getElementById("cvbutton");

cvbutton.addEventListener("click", function () {
    const cv = document.createElement("a");

    cv.href = "GANI SAMUEL YAVINI-CV.pdf";
    cv.download = "GANI SAMUEL YAVINI-CV.pdf";

    cv.click();
});


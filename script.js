document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro");
    const letterSection = document.getElementById("letterSection");
    const ending = document.getElementById("ending");

    const envelope = document.getElementById("envelope");
    const openButton = document.getElementById("openButton");
    const nextButton = document.getElementById("nextButton");

    let opened = false;

    function openLetter() {

        if (opened) return;

        opened = true;

        const flap = document.querySelector(".envelope-flap");
        const seal = document.querySelector(".wax-seal");

        if (flap) {
            flap.style.transform = "rotateX(180deg)";
        }

        if (seal) {
            seal.style.opacity = "0";
        }

        setTimeout(function () {

            intro.classList.add("hidden");

            letterSection.classList.remove("hidden");

            letterSection.style.display = "flex";

            window.scrollTo(0, 0);

        }, 1100);
    }

    openButton.addEventListener("click", openLetter);

    envelope.addEventListener("click", openLetter);

    nextButton.addEventListener("click", function () {

        letterSection.classList.add("hidden");

        ending.classList.remove("hidden");

        ending.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});
/* =====================================================
   BIRTHDAY GIFT — JAVASCRIPT
===================================================== */


/* =====================================================
   PASSWORD
===================================================== */

// GANTI PASSWORD DI SINI
const correctPassword = "affan080910";


/* =====================================================
   ELEMENTS
===================================================== */

const lockScreen =
    document.getElementById("lockScreen");

const mainContent =
    document.getElementById("mainContent");

const passwordInput =
    document.getElementById("passwordInput");

const unlockButton =
    document.getElementById("unlockButton");

const showPassword =
    document.getElementById("showPassword");

const errorMessage =
    document.getElementById("errorMessage");

const surpriseButton =
    document.getElementById("surpriseButton");

const celebrateButton =
    document.getElementById("celebrateButton");

const messageSection =
    document.getElementById("messageSection");

const starsContainer =
    document.getElementById("stars");

const confettiContainer =
    document.getElementById("confettiContainer");


/* =====================================================
   CREATE STARS
===================================================== */

function createStars() {

    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {

        const star =
            document.createElement("div");

        star.classList.add("star");

        // Posisi random
        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        // Ukuran random
        const size =
            Math.random() * 2.5 + 1;

        star.style.width =
            size + "px";

        star.style.height =
            size + "px";

        // Durasi animasi random
        star.style.animationDuration =
            Math.random() * 3 + 2 + "s";

        // Delay random
        star.style.animationDelay =
            Math.random() * 4 + "s";

        starsContainer.appendChild(star);
    }
}

createStars();


/* =====================================================
   SHOW / HIDE PASSWORD
===================================================== */

showPassword.addEventListener(
    "click",
    () => {

        if (
            passwordInput.type === "password"
        ) {

            passwordInput.type = "text";

            showPassword.textContent = "🙈";

        } else {

            passwordInput.type = "password";

            showPassword.textContent = "👁";

        }

    }
);


/* =====================================================
   CHECK PASSWORD
===================================================== */

function checkPassword() {

    const enteredPassword =
        passwordInput.value.trim();


    /* EMPTY PASSWORD */

    if (enteredPassword === "") {

        showError(
            "⚠️ Masukkan password terlebih dahulu."
        );

        shakeInput();

        return;
    }


    /* CORRECT PASSWORD */

    if (
        enteredPassword === correctPassword
    ) {

        unlockWebsite();

    }


    /* WRONG PASSWORD */

    else {

        showError(
            "❌ Password salah. Coba lagi."
        );

        shakeInput();

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* =====================================================
   UNLOCK WEBSITE
===================================================== */

function unlockWebsite() {

    errorMessage.classList.remove("show");

    // Ubah tombol
    unlockButton.innerHTML = `
        <span>Opening Gift...</span>
        <span class="arrow">✦</span>
    `;

    unlockButton.style.pointerEvents =
        "none";


    // Jalankan confetti awal
    createConfetti(35);


    // Tunggu sebentar agar terasa seperti unlock
    setTimeout(() => {

        lockScreen.classList.add("hide");

        mainContent.classList.add("show");

        document.body.style.overflow = "auto";

    }, 900);


    // Confetti tambahan
    setTimeout(() => {

        createConfetti(100);

    }, 1400);


    // Scroll ke atas
    window.scrollTo({
        top: 0,
        behavior: "instant"
    });

}


/* =====================================================
   SHOW ERROR
===================================================== */

function showError(message) {

    errorMessage.textContent =
        message;

    errorMessage.classList.add("show");

}


/* =====================================================
   SHAKE INPUT
===================================================== */

function shakeInput() {

    passwordInput.classList.remove(
        "shake"
    );

    // Force browser reflow
    void passwordInput.offsetWidth;

    passwordInput.classList.add(
        "shake"
    );

}


/* =====================================================
   ENTER KEY
===================================================== */

passwordInput.addEventListener(
    "keydown",
    (event) => {

        if (event.key === "Enter") {

            checkPassword();

        }

    }
);


/* =====================================================
   UNLOCK BUTTON
===================================================== */

unlockButton.addEventListener(
    "click",
    checkPassword
);


/* =====================================================
   SURPRISE BUTTON
===================================================== */

surpriseButton.addEventListener(
    "click",
    () => {

        // Scroll ke message
        messageSection.scrollIntoView({
            behavior: "smooth"
        });

        // Confetti
        setTimeout(() => {

            createConfetti(60);

        }, 500);

    }
);


/* =====================================================
   CELEBRATE BUTTON
===================================================== */

celebrateButton.addEventListener(
    "click",
    () => {

        // Confetti besar
        createConfetti(180);

        // Scroll sedikit ke atas
        window.scrollTo({
            top: window.scrollY - 100,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti(amount = 100) {

    const symbols = [
        "🎉",
        "🎊",
        "✨",
        "💖",
        "⭐",
        "🎈",
        "💫",
        "🥳",
        "🎂"
    ];


    for (
        let i = 0;
        i < amount;
        i++
    ) {

        const confetti =
            document.createElement("div");

        confetti.classList.add(
            "confetti"
        );


        // Random emoji
        confetti.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        // Posisi horizontal
        confetti.style.left =
            Math.random() * 100 + "vw";


        // Ukuran
        const size =
            Math.random() * 12 + 10;

        confetti.style.fontSize =
            size + "px";


        // Kecepatan
        const duration =
            Math.random() * 3 + 3;

        confetti.style.animationDuration =
            duration + "s";


        // Delay
        confetti.style.animationDelay =
            Math.random() * 0.8 + "s";


        // Tambahkan ke halaman
        confettiContainer.appendChild(
            confetti
        );


        // Hapus setelah selesai
        setTimeout(() => {

            confetti.remove();

        }, (duration + 1) * 1000);

    }

}


/* =====================================================
   PARALLAX EFFECT
===================================================== */

window.addEventListener(
    "mousemove",
    (event) => {

        const x =
            (event.clientX /
                window.innerWidth -
                0.5);

        const y =
            (event.clientY /
                window.innerHeight -
                0.5);


        const orbs =
            document.querySelectorAll(
                ".orb"
            );


        orbs.forEach(
            (orb, index) => {

                const strength =
                    (index + 1) * 10;

                orb.style.transform =
                    `
                    translate(
                        ${x * strength}px,
                        ${y * strength}px
                    )
                    `;

            }
        );

    }
);


/* =====================================================
   PREVENT RIGHT CLICK
===================================================== */

/*
   Bagian ini sengaja tidak diaktifkan.

   Website birthday gift sebaiknya tetap
   mudah digunakan dan tidak mengganggu
   browser developer tools.
*/


/* =====================================================
   INITIAL STATE
===================================================== */

document.body.style.overflow =
    "hidden";

passwordInput.focus();
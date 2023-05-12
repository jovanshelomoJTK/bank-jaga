const PIN = "123456";

let currentPin = "";
let trialsRemaining = 3;

[...document.getElementsByClassName("button-pin")].map((button) => {
  button.addEventListener("click", function (e) {
    if (e.target.classList.contains("button-pin")) {
      const pin = e.target.dataset.pin;
      if (pin === "fingerprint") {
        togglePopup("popup-fingerprint", true);
      } else if (pin === "backspace") {
        currentPin = currentPin.slice(0, -1);
      } else {
        currentPin += pin;
      }
    }
    if (currentPin.length === 6) {
      checkPin();
    } else {
      update();
    }
  });

});

document
  .getElementsByClassName("popup-wrapper")[0]
  .addEventListener("click", (e) => {
    if (e.target.classList.contains("popup-wrapper")) {
      togglePopup();
    }
  });

function checkPin() {
  if (currentPin === PIN) {
    console.log("Correct PIN");
    document.getElementsByClassName("warning-wrapper")[0].style.visibility =
    "hidden";
    update();
    window.location.href = "delvito-rincian-mutasi.html";
  } else {
    console.log("Incorrect PIN");
    document.getElementsByClassName("warning-wrapper")[0].style.visibility =
      "visible";
    update(true);
    trialsRemaining--;
    document.getElementsByClassName(
      "warning-text"
    )[0].innerHTML = `<span class="wrong-password-remaining">${trialsRemaining} kali</span> percobaan lagi sebelum akun kamu terblokir.`;
    currentPin = "";
    if (trialsRemaining === 0) {
      lockAccount();
    }
  }
}

function update(isFailed) {
  [...document.getElementsByClassName("pin-bullet")].map((bullet, index) => {
    bullet.classList.remove("pin-filled");
    bullet.classList.remove("pin-failed");

    if (isFailed) {
      bullet.classList.add("pin-failed");
    } else {
      if (index < currentPin.length) {
        bullet.classList.add("pin-filled");
      } else {
        bullet.classList.remove("pin-filled");
      }
    }
  });
}

function togglePopup(popupClassname, isShow = false) {
  document.getElementsByClassName("popup-wrapper")[0].style.display = isShow
    ? ""
    : "none";
  if (!popupClassname) {
    [...document.getElementsByClassName("popup")].map((popupElement) => {
      popupElement.style.display = "none";
    });
  } else {
    document.getElementsByClassName(popupClassname)[0].style.display = isShow
      ? ""
      : "none";
  }
}

function lockAccount() {
  console.log("account locked");
  [...document.getElementsByClassName("button-pin")].map((button) => {
    button.disabled = true;
  });

  let lockedDescriptionElement =
    document.getElementsByClassName("warning-text")[0];
  let timeRemaining = 3600;
  const timer = setInterval(() => {
    timeRemaining--;
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    lockedDescriptionElement.innerHTML = `Tunggu <span class="wrong-password-remaining">${minutes
      .toString()
      .padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}</span> hingga akun kamu terbuka kembali`;
    if (timeRemaining === 0) {
      clearInterval(timer);
      [...document.getElementsByClassName("button-pin")].map((button) => {
        button.disabled = false;
      });
      lockedDescriptionElement.innerHTML =
        "Kamu sudah bisa mencoba login kembali";
      trialsRemaining = 3;
    }
  }, 1000);
}

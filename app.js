// get 4 digit pin
function generetPin() {
  const get4digitPin = parseInt(Math.random() * 10000) + "";
  if (get4digitPin.length === 4) {
    return get4digitPin;
  } else {
    return generetPin();
  }
}

// click event and display pin
document.getElementById("generet-pin").addEventListener("click", function () {
  document.getElementById("pin-fild").value = generetPin();
});

document.getElementById("keypad").addEventListener("click", function (e) {
  const keys = e.target.innerText;
  if (isNaN(keys)) {
    document.getElementById("pin-matcher-fild").value = "";
  } else {
    const pinMatcherFild = document.getElementById("pin-matcher-fild");
    const concatinetKeys = pinMatcherFild.value + keys;
    pinMatcherFild.value = concatinetKeys;
  }
});

document.getElementById("submit-pin").addEventListener("click", function () {
  const numbers = document.getElementById("pin-fild").value;
  const display = document.getElementById("pin-matcher-fild").value;
  const getNotify = document.getElementById("pin-match");
  const getNotify1 = document.getElementById("pin-not-match");
  if (numbers === display) {
    getNotify.style.display = "block";
    getNotify1.style.display = "none";
  } else {
    getNotify1.style.display = "block";
    getNotify.style.display = "none";
  }
});

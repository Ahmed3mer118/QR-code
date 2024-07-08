let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let text = document.getElementById("Text");
let group = document.getElementById("Group");
let btn = document.getElementById("btn");


function generateQRCode() {
  if (text.value.length > 0) {
    (qrImage.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      text.value),
      imgBox.classList.add("show-img");
  } else {
    text.classList.add("error");
    setTimeout(() => {
      text.classList.remove("error");
    }, 1000);
  }
  console.log( text.value);
}

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {

  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    ctrlShiftKey(e, 'S') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

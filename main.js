function checkInput(event) {
    let myCanvas = document.querySelector("#myCanvas");
    let painter = myCanvas.getContext("2d");
    let widthBox = document.querySelector(`#widthBox`);
    let heightBox = document.querySelector(`#heightBox`);
    let posXBox = document.querySelector(`#posXBox`);
    let posYBox = document.querySelector(`#posYBox`);

    let width = +widthBox.value;
    let height = +heightBox.value;
    let posX = +posXBox.value;
    let posY = +posYBox.value;

    if (width === "") {
        alert("Missing width!");
        event.preventDefault();
        return;
    }

    if (height === "") {
        alert("Missing height!");
        event.preventDefault();
        return;
    }

    if (posX === "") {
        alert("Missing Position X!");
        event.preventDefault();
        return;
    }

    if (posY === "") {
        alert("Missing Position Y!");
        event.preventDefault();
        return;
    }

    if (width > 300 || width < 0) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }

    if (height > 300 || height < 0) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }

    if (posX > 300 || posX < 0) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }

    if (posY > 300 || posY < 0) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }

    if (((height + posY) >= 300) || ((width + posX) >= 300)) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }



    painter.fillStyle = "blue";
    painter.fillRect(posX, posY, width, height);

    localStorage.setItem("userWidth", width);
    localStorage.setItem("userHeight", height);
    localStorage.setItem("userPosX", posX);
    localStorage.setItem("userPosY", posY);

    loadLocalStorage();

}

function loadLocalStorage() {
    localStorage.getItem("userWidth", width);
    localStorage.getItserHeight("userHeight", height);
    localStorage.getItem("userPosX", posX);
    localStorage.getItem("userPosY", posY);

    checkInput();
}

function clearCanvas() {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
  
    painter.clearRect(0, 0, 300, 300);
}

function onWindowLoad() {
    let btn1 = document.querySelector(`#btn1`);
    btn1.onclick = checkInput;

    let btn2 = document.querySelector(`#btn2`);
    btn2.onclick = clearCanvas;
  }
  
  window.onload = onWindowLoad;
function checkInput(event) {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
    const widthBox = document.querySelector(`#widthBox`);
    const heightBox = document.querySelector(`#heightBox`);
    const posXBox = document.querySelector(`#posXBox`);
    const posYBox = document.querySelector(`#posYBox`);

    const width = +widthBox.value;
    const height = +heightBox.value;
    const posX = +posXBox.value;
    const posY = +posYBox.value;


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

    if ((width + posX) > 300) {
        alert("Invalid values!");
        event.preventDefault();
        return;
    }

    if ((height + posY) > 300) {
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
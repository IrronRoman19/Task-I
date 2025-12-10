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
    const width = localStorage.getItem("userWidth");
    const height = localStorage.getItem("userHeight");
    const posX = localStorage.getItem("userPosX");
    const posY = localStorage.getItem("userPosY");

    if (width && height && posX && posY) {
        document.querySelector("#widthBox").value = width;
        document.querySelector("#heightBox").value = height;
        document.querySelector("#posXBox").value = posX;
        document.querySelector("#posYBox").value = posY;
    }
}

function clearCanvas() {
    const myCanvas = document.querySelector("#myCanvas");
    const painter = myCanvas.getContext("2d");
  
    painter.clearRect(0, 0, 300, 300);

    // Clear input fields
    document.querySelector("#widthBox").value = "";
    document.querySelector("#heightBox").value = "";
    document.querySelector("#posXBox").value = "";
    document.querySelector("#posYBox").value = "";

    // Clear local storage
    localStorage.removeItem("userWidth");
    localStorage.removeItem("userHeight");
    localStorage.removeItem("userPosX");
    localStorage.removeItem("userPosY");
}

function onWindowLoad() {
    let btn1 = document.querySelector(`#btn1`);
    btn1.onclick = checkInput;

    let btn2 = document.querySelector(`#btn2`);
    btn2.onclick = clearCanvas;
  }
  
  window.onload = onWindowLoad;
function showScreenSize() {
    var screenWidth = window.innerWidth || document.documentElement.clientWidth;
    var screenHeight = window.innerHeight || document.documentElement.clientHeight;

    var message = "Размер экрана: " + screenWidth + " x " + screenHeight;
    alert(message);
}
// Track the state of the button
let flag = 0;

const clickMe = () => {
    const data = document.getElementById("bulb");
    if (flag === 0) {
        data.setAttribute("style", "background-image: linear-gradient(red, orange, yellow); border: 2px solid orange; box-shadow: 25px 25px 35px orange;");
        document.body.style.backgroundImage = "url('https://static.vecteezy.com/system/resources/thumbnails/006/908/304/small/space-background-with-particle-stars-backgroumd-free-photo.jpg')";
        flag = 1;
    }
}

const clickMe2 = () => {
    const data = document.getElementById("bulb");
    data.setAttribute("style", "border: 2px solid orange;");
        document.body.style.backgroundImage = "none";
        flag = 0;
}

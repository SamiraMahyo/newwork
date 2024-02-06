//Script that selects at number at random from 1 to 10
// and then displays the number in the console.
const num = Math.floor(Math.random() * 10) + 1;
console.log(num);

if (num < 8) {
    document.getElementById("status").innerHTML = "Nej, Mads er ikke på arbejde :(";
    console.log("Nej, Mads er ikke på arbejde :(");
    //make sad faces appear on the screen in random places
    setInterval(function () {
        const img = document.createElement("img");
        img.src = "sadface.png";
        img.style.position = "absolute";
        img.style.left = Math.random() * 100 + "%";
        img.style.top = Math.random() * 100 + "%";
        img.style.width = "100px";
        img.style.height = "100px";
        document.body.appendChild(img);
    }, 100);
} else {
    document.getElementById("status").innerHTML = "Ja, Mads er på arbejde!";
    console.log("Ja, Mads er på arbejde!");
    //Make the background color flash rainbow colours rapidly
    setInterval(function () {
        document.body.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 100);
    setInterval(function () {
        const img = document.createElement("img");
        img.src = "happyface.png";
        img.style.position = "absolute";
        img.style.left = Math.random() * 100 + "%";
        img.style.top = Math.random() * 100 + "%";
        img.style.width = "100px";
        img.style.height = "100px";
        document.body.appendChild(img);
    }, 100);
}



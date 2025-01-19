const ya = document.querySelector("button");
const img1 = "squad.png"
const img2 = "2.png"
const images = ["images/dumpling.jpg", "images/pecking.webp", "images/rattan.webp", "images/Hotpot.jpg", "images/Ramen.jpg"];
const there = document.getElementById('image');
const d = document.getElementById('des');

ya.addEventListener("click", test)

function test() {
    let a = (Math.floor(Math.random()*images.length));
    let y = images[a];
    there.style.backgroundImage = `url(${y})`;
    console.log(2);

    switch(a) {
        case 0:
            d.textContent = "Dumplings"
        break;
        
        case 1:
            d.textContent = "Pecking Roasted Duck"
        break;

        case 2: 
            d.textContent = "Rattan Pepper Fish Soup"
        break;

        case 3:
            d.textContent = "Hotpot"
        break;

        case 4:
            d.textContent = "Ramen"
        break;

        default:
            d.textContent = " "
    }

}




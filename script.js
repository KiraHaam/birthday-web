// ===============================
// MUSIC PLAYER
// ===============================

const music = document.getElementById("bgMusic");
const playPause = document.getElementById("playPause");

let playing = false;

playPause.addEventListener("click", () => {

    if (playing) {

        music.pause();
        playPause.innerHTML = "▶";
        playing = false;

    } else {

        music.play();
        playPause.innerHTML = "⏸";
        playing = true;

    }

});

// ===============================
// AUTO PLAY SETELAH USER KLIK
// ===============================

document.body.addEventListener("click", () => {

    if (!playing) {

        music.play();
        playPause.innerHTML = "⏸";
        playing = true;

    }

}, { once: true });


// ===============================
// AGE COUNTER
// ===============================

// Ganti tanggal ulang tahunnya
const birthday = new Date("2001-07-12T00:00:00");

function updateAge(){

    const now = new Date();

    let diff = now - birthday;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const years = Math.floor(diff / (day * 365.25));
    diff -= years * day * 365.25;

    const months = Math.floor(diff / (day * 30.44));
    diff -= months * day * 30.44;

    const days = Math.floor(diff / day);
    diff -= days * day;

    const hours = Math.floor(diff / hour);
    diff -= hours * hour;

    const minutes = Math.floor(diff / minute);
    diff -= minutes * minute;

    const seconds = Math.floor(diff / second);

    document.getElementById("years").innerText = years;
    document.getElementById("months").innerText = months;
    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

}

updateAge();
setInterval(updateAge,1000);


// ===============================
// REVEAL LOVE CARDS
// ===============================

const messages = [

    "Your Smile 😊",
    "Your Kindness ❤️",
    "Your Eyes 👀",
    "Your Voice 🎵",
    "Your Laugh 😂",
    "Everything About You 🌸"

];

const cards = document.querySelectorAll(".card");

cards.forEach((card,index)=>{

    card.addEventListener("click",()=>{

        card.innerHTML =
        `<h3>${messages[index]}</h3>`;

        card.style.background="#E2859B";
        card.style.color="white";

    });

});


// ===============================
// MAKE A WISH BUTTON
// ===============================

document.getElementById("wishButton").addEventListener("click",()=>{

    alert("✨ Happy Birthday!\nMay all your dreams come true ❤️");

});


// ===============================
// SCROLL ANIMATION
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll("section").forEach(section=>{

    section.classList.add("hidden");
    observer.observe(section);

});


// ===============================
// PARTICLE BACKGROUND
// ===============================

const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for(let i=0;i<80;i++){

    particles.push({

        x:Math.random()*canvas.width,
        y:Math.random()*canvas.height,

        r:Math.random()*2+1,

        dx:(Math.random()-0.5)*0.5,
        dy:(Math.random()-0.5)*0.5

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.fillStyle="rgba(226,133,155,.5)";

    particles.forEach(p=>{

        p.x += p.dx;
        p.y += p.dy;

        if(p.x<0 || p.x>canvas.width) p.dx*=-1;
        if(p.y<0 || p.y>canvas.height) p.dy*=-1;

        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();

window.addEventListener("resize",()=>{

    canvas.width=window.innerWidth;
    canvas.height=window.innerHeight;

});
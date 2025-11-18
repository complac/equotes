const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { text: "Whether you think you can or you think you can’t, you’re right.", author: "Henry Ford" },
    { text: "Not all storms come to disrupt your life; some come to clear your path.", author: "Unknown" },
    { text: "The wound is the place where the light enters you.", author: "Rumi" },
    { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
    { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
    { text: "Turn your face to the sun and the shadows fall behind you.", author: "Maori Proverb" },
    { text: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.", author: "Rumi" },
    { text: "Sometimes the smallest step in the right direction ends up being the biggest step of your life.", author: "Unknown" },
    { text: "Let yourself be silently drawn by the strange pull of what you really love. It will not lead you astray.", author: "Rumi" },
    { text: "Your heart knows the way. Run in that direction.", author: "Rumi" },
    { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
    { text: "Everything you’ve ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", author: "Oprah Winfrey" },
    { text: "What you think, you become. What you feel, you attract. What you imagine, you create.", author: "Buddha" },
    { text: "The obstacle is the path.", author: "Zen Proverb" },
    { text: "You are allowed to be both a masterpiece and a work in progress, simultaneously.", author: "Sophia Bush" },
    { text: "The darkest nights produce the brightest stars.", author: "Unknown" },
    { text: "Be the energy you want to attract.", author: "Unknown" },
    { text: "And still, like dust, I rise.", author: "Maya Angelou" },
    { text: "You were born with wings, why prefer to crawl through life?", author: "Rumi" },
    { text: "In a world where you can be anything, be kind.", author: "Unknown" },
    { text: "The sun will rise and set regardless. What we choose to do with the light while it’s here is up to us.", author: "Alexandra Elle" },
    { text: "She remembered who she was and the game changed.", author: "Lalah Delia" },
    { text: "The universe took its time on you.", author: "Unknown" },
    { text: "You carry entire galaxies inside you.", author: "Unknown" },
    { text: "Let the waters settle and you will see the moon and stars mirrored in your own being.", author: "Rumi" }
];

const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-quote");

function showQuote() {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    quoteEl.textContent = `"${q.text}"`;
    authorEl.textContent = `— ${q.author}`;
    quoteEl.classList.remove("show");
    authorEl.classList.remove("show");
    requestAnimationFrame(() => {
        quoteEl.classList.add("show");
        authorEl.classList.add("show");
    });
}

btn.addEventListener("click", showQuote);
showQuote();

// Disable right-click + common dev-tools shortcuts
document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
    if (e.key === "F12" || (e.ctrlKey && (e.key === "u" || e.key === "c" || e.key === "s" || (e.shiftKey && e.key === "I")))) {
        e.preventDefault();
    }
});

// ——— Particle Trail (unchanged) ———
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const particles = [];
const colors = ['#00ffff','#ff00ff','#ffff00','#00ff00','#ff0066'];
let mouse = { x: 0, y: 0 };

class Particle {
    constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 5 + 2;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }
    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
    }
    draw() {
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 20;
        ctx.shadowColor = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

window.addEventListener('mousemove', e => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    for (let i = 0; i < 5; i++) particles.push(new Particle());
});

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

(function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach((p, i) => {
        p.update();
        p.draw();
        if (p.size <= 0.3) particles.splice(i, 1);
    });
    requestAnimationFrame(animate);
})();

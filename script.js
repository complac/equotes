// === DISABLE FLOATING / BOUNCE ANIMATION VIA SCRIPT ===
document.addEventListener("DOMContentLoaded", () => {
    const content = document.querySelector(".content");
    if (content) {
        content.style.animation = "none";
        content.style.transform = "none";
    }
});

// === QUOTES ===
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
    { text: "You do not have to see the whole path to take the next step.", author: "Unknown" },
    { text: "Silence is not empty. It is full of answers.", author: "Unknown" },
    { text: "What you seek is already within you.", author: "Rumi" },
    { text: "Move quietly. The world is loud enough.", author: "Unknown" },
    { text: "Your life is happening now. Not later.", author: "Unknown" },
    { text: "Peace begins the moment you choose not to react.", author: "Unknown" },
    { text: "Growth often feels like loss before it feels like freedom.", author: "Unknown" },
    { text: "You are allowed to take up space without apology.", author: "Unknown" },
    { text: "The mind calms when the truth is faced.", author: "Unknown" },
    { text: "Not everything that weighs you down is yours to carry.", author: "Unknown" },
    { text: "Stillness is where clarity lives.", author: "Unknown" },
    { text: "You don’t need permission to become who you are.", author: "Unknown" },
    { text: "Sometimes doing nothing is the most powerful move.", author: "Unknown" },
    { text: "The moment you stop forcing is the moment things align.", author: "Unknown" },
    { text: "Softness is not weakness. It is control.", author: "Unknown" },
    { text: "Your presence is enough.", author: "Unknown" },
    { text: "Healing is not linear, but it is honest.", author: "Unknown" },
    { text: "You are not behind. You are unfolding.", author: "Unknown" },
    { text: "Clarity comes after you let go, not before.", author: "Unknown" },
    { text: "The quiet version of you is still powerful.", author: "Unknown" }
];

// === POEMS ===
const poems = [
    { text: "I am not a day, I am not a night\nI am the pause between heartbeats", author: "Atticus" },
    { text: "She was a storm\nnot the kind that destroys\nbut the kind that cleanses", author: "Unknown" },
    { text: "And still, like dust, I rise.", author: "Maya Angelou" },
    { text: "I carry your heart with me\n(i carry it in my heart)", author: "e.e. cummings" },
    { text: "Hope is the thing with feathers\nthat perches in the soul", author: "Emily Dickinson" }
];

// === DOM ELEMENTS ===
const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-btn");
const tabBtns = document.querySelectorAll(".tab-btn");

let currentMode = "quotes";
let currentData = quotes;

// === SHOW RANDOM ITEM ===
function showRandom() {
    const randomIndex = Math.floor(Math.random() * currentData.length);
    const item = currentData[randomIndex];

    textEl.textContent = item.text.includes("\n")
        ? item.text
        : `"${item.text}"`;

    authorEl.textContent = `— ${item.author}`;

    // Fade animation only (no movement)
    textEl.classList.remove("show");
    authorEl.classList.remove("show");

    requestAnimationFrame(() => {
        textEl.classList.add("show");
        authorEl.classList.add("show");
    });
}

// === TAB SWITCHING ===
tabBtns.forEach(tab => {
    tab.addEventListener("click", () => {
        tabBtns.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentMode = tab.dataset.tab;
        currentData = currentMode === "quotes" ? quotes : poems;

        showRandom();
    });
});

// === BUTTON ===
btn.addEventListener("click", showRandom);

// === INITIAL LOAD ===
showRandom();

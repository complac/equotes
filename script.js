// ============================================================
//  QUOTES — add or remove as many as you want
// ============================================================
const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "The wound is the place where the light enters you.", author: "Rumi" },
    { text: "You are the sky. Everything else is just the weather.", author: "Pema Chödrön" },
    { text: "Fall seven times, stand up eight.", author: "Japanese Proverb" },
    { text: "Not all storms come to disrupt your life; some come to clear your path.", author: "Unknown" },
    { text: "The quieter you become, the more you can hear.", author: "Ram Dass" },
    { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
    { text: "Silence is not empty. It is full of answers.", author: "Unknown" },
    { text: "What you seek is already within you.", author: "Rumi" },
    { text: "Move quietly. The world is loud enough.", author: "Unknown" },
    { text: "Peace begins the moment you choose not to react.", author: "Unknown" },
    { text: "Growth often feels like loss before it feels like freedom.", author: "Unknown" },
    { text: "Not everything that weighs you down is yours to carry.", author: "Unknown" },
    { text: "Stillness is where clarity lives.", author: "Unknown" },
    { text: "You don't need permission to become who you are.", author: "Unknown" },
    { text: "Softness is not weakness. It is control.", author: "Unknown" },
    { text: "Healing is not linear, but it is honest.", author: "Unknown" },
    { text: "You are not behind. You are unfolding.", author: "Unknown" },
    { text: "Clarity comes after you let go, not before.", author: "Unknown" },
    { text: "The quiet version of you is still powerful.", author: "Unknown" },
];

// ============================================================
//  POEMS — add or remove as many as you want
//  use \n to create line breaks inside a poem
// ============================================================
const poems = [
    { text: "I am not a day, I am not a night\nI am the pause between heartbeats", author: "Atticus" },
    { text: "She was a storm\nnot the kind that destroys\nbut the kind that cleanses", author: "Unknown" },
    { text: "And still, like dust, I rise.", author: "Maya Angelou" },
    { text: "I carry your heart with me\n(i carry it in my heart)", author: "e.e. cummings" },
    { text: "Hope is the thing with feathers\nthat perches in the soul", author: "Emily Dickinson" },
    { text: "Tell me, what is it you plan to do\nwith your one wild and precious life?", author: "Mary Oliver" },
    { text: "We are all just walking each other home.", author: "Ram Dass" },
    { text: "You do not have to be good.\nYou do not have to walk on your knees\nfor a hundred miles through the desert repenting.", author: "Mary Oliver" },
];

// ============================================================
//  APP LOGIC — no need to edit below this line
// ============================================================
(function () {
    let currentMode = "quotes";
    let currentData = quotes;
    let lastIndex   = -1;

    const textEl   = document.getElementById("text");
    const authorEl = document.getElementById("author");
    const newBtn   = document.getElementById("new-btn");
    const tabs     = document.querySelectorAll(".tab");

    function showRandom() {
        if (!currentData.length) return;

        let index;
        do {
            index = Math.floor(Math.random() * currentData.length);
        } while (index === lastIndex && currentData.length > 1);
        lastIndex = index;

        const item = currentData[index];

        textEl.classList.add("out");
        authorEl.classList.add("out");

        setTimeout(() => {
            textEl.textContent   = item.text;
            authorEl.textContent = item.author || "";

            textEl.classList.remove("out");
            authorEl.classList.remove("out");
        }, 300);
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            tabs.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            currentMode = tab.dataset.tab;
            currentData = currentMode === "quotes" ? quotes : poems;
            lastIndex   = -1;
            showRandom();
        });
    });

    newBtn.addEventListener("click", showRandom);
    showRandom();
})();

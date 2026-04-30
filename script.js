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
    { text: "Water keeps you hydrated, too much of it kills you.", author: "Unknown" },
    { text: "Everything but change itself is temporary.", author: "Unknown" },
    { text: "Chains are most effective when you convince the prisoner that they are jewellery.", author: "Unknown" },
    { text: "Walk on your broken foot and leave no marks of your hand on anyone’s shoulder.", author: "Fyodor Dostoevsky" },
    { text: "How can i blame the wind for the mess it made when I opened the window?", author: "Unknown" },
    { text: "I’m not upset you lied to me, I’m upset i can’t trust you again.", author: "Unknown" },
    { text: "The nature of the snake is to bite, even when no threat is present.", author: "Unknown" },
    { text: "For a flower to flourish, it must rain.", author: "Unknown" },
    { text: "A ship is safe when its in its port, but thats not what they are made for.", author: "Unknown" },
    { text: "You don’t learn to swim by looking at water.", author: "Unknown" },
    { text: "The snow goose needs not bathe to make itself white, neither need you do anything but be yourself.", author: "Chinese Proverb" },
    { text: "Don’t let your food get cold watching someone else’s plate.", author: "Unknown" },
    { text: "Never feed a horse you won't ride.", author: "Unknown" },
    { text: "Nothing changes if nothing changes.", author: "Unknown" },
    { text: "It always seems impossible until it's done.", author: "Unknown" },  
    { text: "A fish with its mouth closed never gets caught.", author: "Unknown" },
    { text: "If the road is easy, the destination is worthless.", author: "Unknown" },
    { text: "If you rush the brush you will spoil the paint.", author: "Kaden" },

];

const poems = [
    { text: "I am not a day, I am not a night\nI am the pause between heartbeats", author: "Atticus" },
    { text: "She was a storm\nnot the kind that destroys\nbut the kind that cleanses", author: "Unknown" },
    { text: "And still, like dust, I rise.", author: "Maya Angelou" },
    { text: "I carry your heart with me\n(i carry it in my heart)", author: "e.e. cummings" },
    { text: "Hope is the thing with feathers\nthat perches in the soul", author: "Emily Dickinson" },
    { text: "Tell me, what is it you plan to do\nwith your one wild and precious life?", author: "Mary Oliver" },
    { text: "We are all just walking each other home.", author: "Ram Dass" },
    { text: "You do not have to be good.\nYou do not have to walk on your knees\nfor a hundred miles through the desert repenting.", author: "Mary Oliver" },
    { text: "Do not go gentle into that good night.\nRage, rage against the dying of the light.", author: "Dylan Thomas" },
    { text: "I am not resigned:\nthe heart is more than the brain.", author: "Edna St. Vincent Millay" },
    { text: "Out of the night that covers me,\nblack as the pit from pole to pole,\nI thank whatever gods may be\nfor my unconquerable soul.", author: "William Ernest Henley" },
    { text: "It matters not how strait the gate,\nhow charged with punishments the scroll.\nI am the master of my fate,\nI am the captain of my soul.", author: "William Ernest Henley" },
    { text: "The world is too much with us; late and soon,\ngetting and spending, we lay waste our powers.", author: "William Wordsworth" },
    { text: "To strive, to seek, to find, and not to yield.", author: "Alfred Lord Tennyson" },
    { text: "I have measured out my life with coffee spoons.", author: "T.S. Eliot" },
    { text: "Do I dare\ndisturb the universe?", author: "T.S. Eliot" },
    { text: "What happens to a dream deferred?\nDoes it dry up like a raisin in the sun?", author: "Langston Hughes" },
    { text: "Two roads diverged in a wood, and I—\nI took the one less traveled by.", author: "Robert Frost" },
    { text: "The woods are lovely, dark and deep,\nbut I have promises to keep,\nand miles to go before I sleep.", author: "Robert Frost" },
    { text: "Nothing gold can stay.", author: "Robert Frost" },
    { text: "In the room the women come and go\ntalking of Michelangelo.", author: "T.S. Eliot" },
    { text: "We shall not cease from exploration\nand the end of all our exploring\nwill be to arrive where we started\nand know the place for the first time.", author: "T.S. Eliot" },
];

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

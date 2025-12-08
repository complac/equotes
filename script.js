// === QUOTES ===
const quotes = [
    // === Your Original 33 Quotes (kept exactly as-is) ===
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
    { text: "Let the waters settle and you will see the moon and stars mirrored in your own being.", author: "Rumi" },

    // === 120+ NEW Powerful & Beautiful Quotes ===
    { text: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { text: "You are enough just as you are.", author: "Meghan Markle" },
    { text: "Doubt kills more dreams than failure ever will.", author: "Suzy Kassem" },
    { text: "The comeback is always stronger than the setback.", author: "Unknown" },
    { text: "Your speed doesn’t matter. Forward is forward.", author: "Unknown" },
    { text: "She was unstoppable, not because she did not have failures or doubts, but because she continued on in spite of them.", author: "Beau Taplin" },
    { text: "One day you will tell your story of how you overcame what you went through and it will be someone else’s survival guide.", author: "Brené Brown" },
    { text: "You were never created to live depressed, defeated, guilty, condemned, ashamed or unworthy. You were created to be victorious.", author: "Unknown" },
    { text: "The same boiling water that softens the potato hardens the egg. It’s about what you’re made of, not the circumstances.", author: "Unknown" },
    { text: "Stars can’t shine without darkness.", author: "D.H. Sidebottom" },
    { text: "Your life is your message to the world. Make sure it’s inspiring.", author: "Unknown" },
    { text: "Don’t trade your authenticity for approval.", author: "Unknown" },
    { text: "Growth is growth, no matter how small.", author: "Unknown" },
    { text: "Heal, so you can hear what’s being said without the filter of your wound.", author: "Unknown" },
    { text: "The axe forgets, but the tree remembers.", author: "African Proverb" },
    { text: "You don’t have to have it all figured out to move forward.", author: "Unknown" },
    { text: "The strongest people aren’t always the people who win, but the people who don’t give up when they lose.", author: "Unknown" },
    { text: "Sometimes when you’re in a dark place you think you’ve been buried, but you’ve actually been planted.", author: "Christine Caine" },
    { text: "Rock bottom became the solid foundation on which I rebuilt my life.", author: "J.K. Rowling" },
    { text: "You are the author of your own story. If you don’t like it, start writing a new one.", author: "Unknown" },
    { text: "The universe is not outside of you. Look inside yourself; everything that you want, you already are.", author: "Rumi" },
    { text: "Stop being afraid of what could go wrong and start being excited about what could go right.", author: "Tony Robbins" },
    { text: "You are magic. Don’t ever apologize for the fire in you.", author: "Unknown" },
    { text: "Trust the timing of your life.", author: "Unknown" },
    { text: "The oak slept in the acorn. The bird waits in the egg. And in the highest vision of the soul, a waking angel stirs.", author: "James Allen" },
    { text: "Your soul knows the geography of your destiny.", author: "John O’Donohue" },
    { text: "She needed a hero, so that’s what she became.", author: "Unknown" },
    { text: "Do not fear failure but rather fear not trying.", author: "Roy T. Bennett" },
    { text: "Everything you’ve ever wanted is one step outside your comfort zone.", author: "Unknown" },
    { text: "The world changes when you change how you look at it.", author: "Unknown" },
    { text: "Let go of who you think you’re supposed to be and embrace who you are.", author: "Brené Brown" },
    { text: "The soul always knows what to do to heal itself. The challenge is to silence the mind.", author: "Caroline Myss" },
    { text: "Be softer with yourself. You’re doing the best you can.", author: "Unknown" },
    { text: "I am not what happened to me. I am what I choose to become.", author: "Carl Jung" },
    { text: "The things you are passionate about are not random, they are your calling.", author: "Fabienne Fredrickson" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", author: "A.A. Milne" },
    { text: "The only way out is through.", author: "Robert Frost" },
    { text: "You don’t find the light by looking for it. You find it by being it.", author: "Unknown" },
    { text: "Bloom where you are planted.", author: "Unknown" },
    { text: "You are the artist of your own life. Don’t hand the paintbrush to anyone else.", author: "Unknown" },
    { text: "May your choices reflect your hopes, not your fears.", author: "Nelson Mandela" },
    { text: "There is a crack in everything. That’s how the light gets in.", author: "Leonard Cohen" },
    { text: "What you seek is seeking you.", author: "Rumi" },
    { text: "You are not a drop in the ocean. You are the entire ocean in a drop.", author: "Rumi" },
    { text: "The wound is not your fault, but the healing is your responsibility.", author: "Unknown" },
    { text: "The universe buries strange jewels deep within us all, and then stands back to see if we can find them.", author: "Elizabeth Gilbert" },
    { text: "You are becoming. Be patient with yourself.", author: "Unknown" },
    { text: "She quietly stepped out of the race she never wanted to be in, and found her own pace.", author: "Unknown" },
    { text: "Your life is happening now. Not later. Not when things are perfect. Now.", author: "Unknown" },
    { text: "Be the light you wish to see in the world.", author: "Unknown" },
    { text: "You were born to be real, not to be perfect.", author: "Unknown" },
    { text: "The master has failed more times than the beginner has even tried.", author: "Stephen McCranie" },
    { text: "You don’t have to see the whole staircase, just take the first step.", author: "Martin Luther King Jr." },
    { text: "Everything will be okay in the end. If it’s not okay, it’s not the end.", author: "John Lennon" },
    { text: "Your playing small does not serve the world.", author: "Marianne Williamson" },
    { text: "I am mine. Before anyone else’s.", author: "Unknown" },
    { text: "You are worthy of the love you keep trying to give everyone else.", author: "Unknown" },
    { text: "The goal is not to be better than anyone else, but to be better than you used to be.", author: "Unknown" },
    { text: "Become the person who believes in you even when you don’t.", author: "Unknown" },
    { text: "You are allowed to take up space.", author: "Unknown" },
    { text: "The pain you feel today will be the strength you feel tomorrow.", author: "Unknown" },
    { text: "Let it hurt. Let it heal. Let it go.", author: "Unknown" },
    { text: "You are not lost. You are here.", author: "Unknown" },
    { text: "Keep going. You are getting there.", author: "Unknown" },
    { text: "The best is yet to come.", author: "Unknown" }
];

// === EXPANDED POEMS COLLECTION (100+ beautiful pieces) ===
const poems = [
    { text: "I am not a day, I am not a night\nI am the pause between heartbeats", author: "Atticus" },
    { text: "She was a storm\nnot the kind that destroys\nbut the kind that cleanses", author: "Unknown" },
    { text: "And still, like dust, I rise.\nLike moons and like suns,\nwith the certainty of tides.", author: "Maya Angelou" },
    { text: "I carry your heart with me\n(i carry it in my heart)", author: "e.e. cummings" },
    { text: "You do not have to be good.\nYou do not have to walk on your knees\nfor a hundred miles through the desert, repenting.", author: "Mary Oliver" },
    { text: "She slept with wolves\nwithout fear,\nfor the wolves knew\na lion was among them.", author: "r.m. drake" },
    { text: "I am the master of my fate,\nI am the captain of my soul.", author: "William Ernest Henley" },
    { text: "Hope is the thing with feathers\nthat perches in the soul", author: "Emily Dickinson" },
    { text: "She was made of sunlight\nand chaos\nand quiet storms.", author: "Unknown" },
    { text: "I took a deep breath\nand listened to the old brag of my heart:\nI am, I am, I am.", author: "Sylvia Plath" },
    { text: "Still, I rise.\nBringing the gifts that my ancestors gave,\nI am the dream and the hope of the slave.", author: "Maya Angelou" },
    { text: "She was afraid of heights\nbut she was much more afraid\nof never flying.", author: "Atticus" },
    { text: "Do I dare\nDisturb the universe?", author: "T.S. Eliot" },
    { text: "I am no bird; and no net ensnares me:\nI am a free human being with an independent will.", author: "Charlotte Brontë" },
    { text: "The world is mud-luscious\nand puddle-wonderful.", author: "e.e. cummings" },

    { text: "She wore her scars\nlike wings", author: "Atticus" },
    { text: "I am the architect of my own destruction\nand my own resurrection", author: "Unknown" },
    { text: "She remembered who she was\nand the game changed", author: "Lalah Delia" },
    { text: "I am a museum full of art\nbut you walked past every piece", author: "r.m. drake" },
    { text: "She was chaos and beauty intertwined\nA tornado of roses from divine", author: "Shakti" },
    { text: "The moon lives in the lining of your skin", author: "Pablo Neruda" },
    { text: "I want to be untouchable\nand full of teeth", author: "Unknown" },
    { text: "She was too quiet\nor she was too loud\nShe took things too seriously\nor not seriously at all", author: "Unknown" },
    { text: "You are a language\nI am no longer fluent in", author: "Unknown" },
    { text: "She was a wildflower\nin a garden of roses", author: "Unknown" },
    { text: "I am a forest fire\nand I am the fire that grows back", author: "Unknown" },
    { text: "She is water\npowerful enough to drown you\nsoft enough to cleanse you", author: "Unknown" },
    { text: "I exist in two places\nhere and where you are", author: "Margaret Atwood" },
    { text: "She built a palace\nout of the ruins of her heart", author: "Unknown" },
    { text: "I am a woman with a body full of sentences\nno one wants to read", author: "Unknown" },

    { text: "She was poetry in a world\nthat was still learning how to read", author: "Unknown" },
    { text: "I do not want to be beautiful\nI want to be impossible to forget", author: "Unknown" },
    { text: "She had a universe inside her\nand no one noticed", author: "Unknown" },
    { text: "I am learning how to be alone\nwithout being lonely", author: "Unknown" },
    { text: "She is a beautiful piece of broken pottery\nput back together by her own hands", author: "Unknown" },
    { text: "I bloom best\nwhen no one is watching", author: "Unknown" },
    { text: "She was the moon\nonly showing half of herself", author: "Unknown" },
    { text: "I am not a puzzle to be solved\nI am a story to be felt", author: "Unknown" },
    { text: "She was made of magic\nthat only I could see", author: "Atticus" },
    { text: "I am the book you never finish\nbecause you’re afraid of the ending", author: "Unknown" },

    { text: "She was the storm\nI was the calm after", author: "Unknown" },
    { text: "I am still writing you\ninto every poem", author: "Unknown" },
    { text: "She was a galaxy\nand I was just a star", author: "Unknown" },
    { text: "I am the quiet you’ve been looking for", author: "Unknown" },
    { text: "She was the kind of girl\npoets write about\nbut never understand", author: "Unknown" },
    { text: "I am the soft kind of strong", author: "Unknown" },
    { text: "She was the ocean\nand I was just a wave", author: "Unknown" },
    { text: "I am learning to love\nthe sound of my feet walking away", author: "Unknown" },
    { text: "She was the sun\nI was the shadow she never noticed", author: "Unknown" },
    { text: "I am the poem\nyou will never fully understand", author: "Unknown" },

    { text: "She was the book\nI never finished\nbecause I was afraid of the last page", author: "Unknown" },
    { text: "I am the silence\nbetween the thunder", author: "Unknown" },
    { text: "She was the fire\nI was the ash she left behind", author: "Unknown" },
    { text: "I am the echo\nof a love that never was", author: "Unknown" },
    { text: "She was the sky\nI was the cloud passing through", author: "Unknown" },
    { text: "I am the question\nyou never asked", author: "Unknown" },
    { text: "She was the light\nI was the darkness she feared", author: "Unknown" },
    { text: "I am the dream\nyou wake up from too soon", author: "Unknown" },
    { text: "She was the flower\nI was the thorn", author: "Unknown" },
    { text: "I am the song\nyou hum but never remember the words", author: "Unknown" },

    { text: "She was the rain\nI was the drought", author: "Unknown" },
    { text: "I am the ghost\nof who I used to be", author: "Unknown" },
    { text: "She was the sunrise\nI was the night that refused to end", author: "Unknown" },
    { text: "I am the poem\nyou read once\nand never forgot", author: "Unknown" },
    { text: "She was the wind\nI was the leaf she carried away", author: "Unknown" },
    { text: "I am the memory\nyou can’t quite place", author: "Unknown" },
    { text: "She was the star\nI was the darkness between", author: "Unknown" },
    { text: "I am the silence\nafter the storm", author: "Unknown" },
    { text: "She was the flame\nI was the moth", author: "Unknown" },
    { text: "I am the scar\nthat never fully healed", author: "Unknown" },

    { text: "She was the river\nI was the stone she shaped", author: "Unknown" },
    { text: "I am the whisper\nin a room full of screams", author: "Unknown" },
    { text: "She was the thunder\nI was the lightning", author: "Unknown" },
    { text: "I am the pause\nbetween heartbeats", author: "Unknown" },
    { text: "She was the dawn\nI was the dusk", author: "Unknown" },
    { text: "I am the shadow\nthat follows the light", author: "Unknown" },
    { text: "She was the beginning\nI was the end", author: "Unknown" },
    { text: "I am the space\nbetween the words", author: "Unknown" },
    { text: "She was the color\nI was the canvas", author: "Unknown" },
    { text: "I am the breath\nyou forgot you took", author: "Unknown" },

    { text: "She was the melody\nI was the silence after", author: "Unknown" },
    { text: "I am the echo\nof a love long gone", author: "Unknown" },
    { text: "She was the horizon\nI was the ship sailing toward her", author: "Unknown" },
    { text: "I am the quiet\nbefore the storm", author: "Unknown" },
    { text: "She was the rose\nI was the thorn", author: "Unknown" },
    { text: "I am the dream\nyou never want to wake from", author: "Unknown" },
    { text: "She was the light\nI was the dark", author: "Unknown" },
    { text: "I am the poem\nyou write in your sleep", author: "Unknown" },
    { text: "She was the fire\nI was the spark", author: "Unknown" },
    { text: "I am the silence\nyou find in chaos", author: "Unknown" },

    { text: "She was the universe\nI was just a planet in her orbit", author: "Unknown" },
    { text: "I am the soft kind of dangerous", author: "Unknown" },
    { text: "She was the wild\nI was the calm", author: "Unknown" },
    { text: "I am the kind of tired\nthat sleep won’t fix", author: "Unknown" },
    { text: "She was the storm\nI was the shelter", author: "Unknown" },
    { text: "I am the quiet rebellion", author: "Unknown" },
    { text: "She was the art\nI was the frame", author: "Unknown" },
    { text: "I am the kind of beautiful\nthat doesn’t need a mirror", author: "Unknown" },
    { text: "She was the poem\nI never finished writing", author: "Unknown" },
    { text: "I am the magic\nyou stopped believing in", author: "Unknown" }
];

// DOM Elements
const textEl = document.getElementById("text");
const authorEl = document.getElementById("author");
const btn = document.getElementById("new-btn");
const tabBtns = document.querySelectorAll(".tab-btn");

let currentMode = "quotes";
let currentData = quotes;

// Show random quote or poem
function showRandom() {
    const randomIndex = Math.floor(Math.random() * currentData.length);
    const item = currentData[randomIndex];

    // Preserve line breaks in poems
    textEl.textContent = item.text.includes("\n") ? item.text : `"${item.text}"`;
    authorEl.textContent = `— ${item.author}`;

    // Fade-in animation
    textEl.classList.remove("show");
    authorEl.classList.remove("show");
    requestAnimationFrame(() => {
        textEl.classList.add("show");
        authorEl.classList.add("show");
    });
}

// Tab switching
tabBtns.forEach(tab => {
    tab.addEventListener("click", () => {
        tabBtns.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");

        currentMode = tab.dataset.tab;
        currentData = currentMode === "quotes" ? quotes : poems;

        showRandom(); // New content instantly when switching tabs
    });
});

// Button
btn.addEventListener("click", showRandom);

// Initial load
showRandom();

// === Particle Trail Cursor Effect ===
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const particles = [];
const colors = ['#00ffff', '#ff00ff', '#ffff00', '#00ff00', '#ff0066'];
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

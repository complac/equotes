// Wait for Firebase to be ready
window.addEventListener('load', () => {
    initializeApp();
});

function initializeApp() {
    // Check if Firebase is loaded
    if (!window.firebaseAuth || !window.firebaseDb) {
        setTimeout(initializeApp, 100);
        return;
    }

    const auth = window.firebaseAuth;
    const db = window.firebaseDb;
    const {
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        onAuthStateChanged,
        collection,
        addDoc,
        getDocs,
        query,
        where,
        updateDoc,
        deleteDoc,
        doc,
        setDoc,
        getDoc,
        serverTimestamp,
        orderBy
    } = window.firebaseModules;

    // === DISABLE FLOATING / BOUNCE ANIMATION ===
    const content = document.querySelector(".content");
    if (content) {
        content.style.animation = "none";
        content.style.transform = "none";
    }

    // === DEFAULT QUOTES & POEMS ===
    const defaultQuotes = [
        { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
        { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
        { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
        { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
        { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
        { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
        { text: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
        { text: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
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
        { text: "Everything you've ever wanted is on the other side of fear.", author: "George Addair" },
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
        { text: "You don't need permission to become who you are.", author: "Unknown" },
        { text: "Sometimes doing nothing is the most powerful move.", author: "Unknown" },
        { text: "The moment you stop forcing is the moment things align.", author: "Unknown" },
        { text: "Softness is not weakness. It is control.", author: "Unknown" },
        { text: "Your presence is enough.", author: "Unknown" },
        { text: "Healing is not linear, but it is honest.", author: "Unknown" },
        { text: "You are not behind. You are unfolding.", author: "Unknown" },
        { text: "Clarity comes after you let go, not before.", author: "Unknown" },
        { text: "The quiet version of you is still powerful.", author: "Unknown" }
    ];

    const defaultPoems = [
        { text: "I am not a day, I am not a night\nI am the pause between heartbeats", author: "Atticus" },
        { text: "She was a storm\nnot the kind that destroys\nbut the kind that cleanses", author: "Unknown" },
        { text: "And still, like dust, I rise.", author: "Maya Angelou" },
        { text: "I carry your heart with me\n(i carry it in my heart)", author: "e.e. cummings" },
        { text: "Hope is the thing with feathers\nthat perches in the soul", author: "Emily Dickinson" }
    ];

    // In-memory storage for quotes/poems
    let quotes = [...defaultQuotes];
    let poems = [...defaultPoems];
    let currentUser = null;
    let currentUserData = null;

    // === DOM ELEMENTS ===
    const textEl = document.getElementById("text");
    const authorEl = document.getElementById("author");
    const btn = document.getElementById("new-btn");
    const tabBtns = document.querySelectorAll(".tab-btn");

    // Modal elements
    const modal = document.getElementById("auth-modal");
    const authLink = document.getElementById("auth-link");
    const closeModal = document.querySelector("#auth-modal .close");
    const authTabBtns = document.querySelectorAll(".auth-tab");
    const signinForm = document.getElementById("signin-form");
    const signupForm = document.getElementById("signup-form");

    // Submit elements
    const submitBtn = document.getElementById("submit-quote-btn");
    const submitType = document.getElementById("submit-type");
    const submitText = document.getElementById("submit-text");
    const submitAuthor = document.getElementById("submit-author");
    const submitStatus = document.getElementById("submit-status");

    // Profile elements
    const profileIcon = document.getElementById('profile-icon');
    const profileBtn = document.getElementById('profile-btn');
    const profileModal = document.getElementById('profile-modal');
    const profileClose = document.getElementById('profile-close');
    const signOutBtn = document.getElementById('sign-out-btn');

    let currentMode = "quotes";
    let currentData = quotes;

    // === LOAD APPROVED QUOTES FROM FIREBASE ===
    async function loadApprovedQuotes() {
        try {
            const q = query(collection(db, "quotes"), where("status", "==", "approved"));
            const querySnapshot = await getDocs(q);
            
            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const item = { text: data.text, author: data.author };
                
                if (data.type === 'quote') {
                    quotes.push(item);
                } else if (data.type === 'poem') {
                    poems.push(item);
                }
            });

            // Update current data based on active tab
            currentData = currentMode === "quotes" ? quotes : poems;
            
            // Show first quote
            if (currentData.length > 0) {
                showRandom();
            }
        } catch (error) {
            console.error("Error loading quotes:", error);
            // Still show default quotes if Firebase fails
            showRandom();
        }
    }

    // === SHOW RANDOM ITEM ===
    function showRandom() {
        if (currentData.length === 0) {
            textEl.textContent = "No quotes available yet";
            authorEl.textContent = "";
            return;
        }

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

            const tabName = tab.dataset.tab;

            // Hide all tab contents
            document.querySelectorAll(".tab-content").forEach(content => {
                content.classList.remove("active");
            });

            if (tabName === "submit") {
                document.getElementById("submit-content").classList.add("active");
                updateAuthUI();
            } else {
                document.getElementById("view-content").classList.add("active");
                currentMode = tabName;
                currentData = currentMode === "quotes" ? quotes : poems;
                showRandom();
            }
        });
    });

    // === BUTTON ===
    btn.addEventListener("click", showRandom);

    // === AUTH STATE OBSERVER ===
    onAuthStateChanged(auth, async (user) => {
        currentUser = user;
        
        if (user) {
            // Load user data
            const userDoc = await getDoc(doc(db, "users", user.uid));
            if (userDoc.exists()) {
                currentUserData = userDoc.data();
            }
        } else {
            currentUserData = null;
        }
        
        updateAuthUI();
        updateProfileIcon();
    });

    // === AUTH MODAL ===
    authLink.addEventListener("click", () => {
        profileModal.classList.remove("active"); // Close profile if open
        modal.classList.add("active");
    });

    closeModal.addEventListener("click", () => {
        modal.classList.remove("active");
        clearAuthForms();
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("active");
            clearAuthForms();
        }
        if (e.target === profileModal) {
            profileModal.classList.remove("active");
        }
    });

    // Auth tab switching
    authTabBtns.forEach(tab => {
        tab.addEventListener("click", () => {
            authTabBtns.forEach(t => t.classList.remove("active"));
            tab.classList.add("active");

            const authType = tab.dataset.auth;
            
            if (authType === "signin") {
                signinForm.classList.add("active");
                signupForm.classList.remove("active");
            } else {
                signupForm.classList.add("active");
                signinForm.classList.remove("active");
            }

            clearAuthForms();
        });
    });

    // === SIGN UP ===
    signupForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const username = document.getElementById("signup-username").value.trim();
        const password = document.getElementById("signup-password").value;
        const confirm = document.getElementById("signup-confirm").value;
        const status = document.getElementById("signup-status");

        if (password !== confirm) {
            status.textContent = 'passwords do not match';
            status.className = 'auth-status error';
            return;
        }

        if (username.length < 3) {
            status.textContent = 'username must be at least 3 characters';
            status.className = 'auth-status error';
            return;
        }

        if (password.length < 6) {
            status.textContent = 'password must be at least 6 characters';
            status.className = 'auth-status error';
            return;
        }

        try {
            // Check if username is taken
            const usernameDoc = await getDoc(doc(db, "usernames", username));
            if (usernameDoc.exists()) {
                status.textContent = 'username already exists';
                status.className = 'auth-status error';
                return;
            }

            // Create email from username
            const email = `${username}@equotes.app`;

            // Create auth account
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Save user data
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                createdAt: serverTimestamp()
            });

            // Reserve username
            await setDoc(doc(db, "usernames", username), {
                uid: user.uid
            });

            status.textContent = 'account created successfully';
            status.className = 'auth-status success';

            setTimeout(() => {
                modal.classList.remove("active");
                clearAuthForms();
            }, 1000);

        } catch (error) {
            console.error("Signup error:", error);
            status.textContent = error.message || 'signup failed';
            status.className = 'auth-status error';
        }
    });

    // === SIGN IN ===
    signinForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        
        const username = document.getElementById("signin-username").value.trim();
        const password = document.getElementById("signin-password").value;
        const status = document.getElementById("signin-status");

        try {
            // Convert username to email
            const email = `${username}@equotes.app`;

            // Sign in
            await signInWithEmailAndPassword(auth, email, password);

            status.textContent = 'signed in successfully';
            status.className = 'auth-status success';

            setTimeout(() => {
                modal.classList.remove("active");
                clearAuthForms();
            }, 1000);

        } catch (error) {
            console.error("Signin error:", error);
            if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
                status.textContent = 'invalid username or password';
            } else {
                status.textContent = error.message || 'signin failed';
            }
            status.className = 'auth-status error';
        }
    });

    // Clear auth forms
    function clearAuthForms() {
        signinForm.reset();
        signupForm.reset();
        document.getElementById("signin-status").textContent = '';
        document.getElementById("signup-status").textContent = '';
    }

    // Update auth UI
    function updateAuthUI() {
        if (currentUser && currentUserData) {
            authLink.textContent = `signed in as ${currentUserData.username} • sign out`;
            authLink.onclick = async () => {
                await signOut(auth);
                submitStatus.textContent = 'signed out successfully';
                submitStatus.className = 'submit-status success';
                setTimeout(() => {
                    submitStatus.textContent = '';
                }, 3000);
            };
        } else {
            authLink.textContent = 'sign in / sign up';
            authLink.onclick = () => {
                modal.classList.add("active");
            };
        }
    }

    // === SUBMIT QUOTE/POEM ===
    submitBtn.addEventListener("click", async () => {
        if (!currentUser) {
            submitStatus.textContent = 'please sign in to submit';
            submitStatus.className = 'submit-status error';
            setTimeout(() => {
                modal.classList.add("active");
            }, 1000);
            return;
        }

        const type = submitType.value;
        const text = submitText.value.trim();
        const author = submitAuthor.value.trim() || currentUserData.username;

        if (!text) {
            submitStatus.textContent = 'please enter some text';
            submitStatus.className = 'submit-status error';
            return;
        }

        if (text.length < 10) {
            submitStatus.textContent = 'text must be at least 10 characters';
            submitStatus.className = 'submit-status error';
            return;
        }

        try {
            // Add to Firebase
            await addDoc(collection(db, "quotes"), {
                type: type,
                text: text,
                author: author,
                submittedBy: currentUser.uid,
                submittedByUsername: currentUserData.username,
                status: 'pending',
                createdAt: serverTimestamp()
            });

            submitStatus.textContent = `${type} submitted! pending approval`;
            submitStatus.className = 'submit-status success';

            // Clear form
            submitText.value = '';
            submitAuthor.value = '';

            setTimeout(() => {
                submitStatus.textContent = '';
            }, 3000);

        } catch (error) {
            console.error("Submit error:", error);
            submitStatus.textContent = 'submission failed';
            submitStatus.className = 'submit-status error';
        }
    });

    // === PROFILE FUNCTIONALITY ===
    function updateProfileIcon() {
        if (currentUser) {
            profileIcon.style.display = 'block';
        } else {
            profileIcon.style.display = 'none';
        }
    }

    profileBtn.addEventListener('click', () => {
        loadProfileData();
        profileModal.classList.add('active');
    });

    profileClose.addEventListener('click', () => {
        profileModal.classList.remove('active');
    });

    signOutBtn.addEventListener('click', async () => {
        await signOut(auth);
        profileModal.classList.remove('active');
        
        if (document.getElementById('submit-content').classList.contains('active')) {
            submitStatus.textContent = 'signed out successfully';
            submitStatus.className = 'submit-status success';
            setTimeout(() => {
                submitStatus.textContent = '';
            }, 3000);
        }
    });

    async function loadProfileData() {
        if (!currentUser || !currentUserData) return;

        // Set username and join date
        document.getElementById('profile-username').textContent = currentUserData.username;
        
        const joinDate = currentUserData.createdAt ? 
            new Date(currentUserData.createdAt.toDate()).toLocaleDateString('en-US', { 
                month: 'long', 
                day: 'numeric', 
                year: 'numeric' 
            }) : 'recently';
        document.getElementById('profile-join-date').textContent = `joined ${joinDate}`;

        try {
            // Get user's submissions
            const userQuotesQuery = query(
                collection(db, "quotes"), 
                where("submittedBy", "==", currentUser.uid)
            );
            const querySnapshot = await getDocs(userQuotesQuery);

            let userApproved = [];
            let userPending = [];

            querySnapshot.forEach((doc) => {
                const data = doc.data();
                const item = { 
                    id: doc.id,
                    ...data 
                };
                
                if (data.status === 'approved') {
                    userApproved.push(item);
                } else if (data.status === 'pending') {
                    userPending.push(item);
                }
            });

            // Update stats
            document.getElementById('profile-approved-count').textContent = userApproved.length;
            document.getElementById('profile-pending-count').textContent = userPending.length;

            // Display quotes
            const quotesList = document.getElementById('profile-quotes-list');
            quotesList.innerHTML = '';

            const allUserSubmissions = [...userApproved, ...userPending];

            if (allUserSubmissions.length === 0) {
                quotesList.innerHTML = `
                    <div class="profile-empty">
                        <p>no submissions yet</p>
                        <small>head to the submit tab to share your wisdom</small>
                    </div>
                `;
                return;
            }

            allUserSubmissions.forEach(item => {
                const card = document.createElement('div');
                card.className = 'profile-quote-card';
                
                const deleteBtn = item.status === 'approved' 
                    ? `<button class="delete-quote-btn" data-quote-id="${item.id}">delete</button>`
                    : '';

                card.innerHTML = `
                    <span class="profile-quote-type">${item.type}</span>
                    <div class="profile-quote-text">${item.text}</div>
                    <div class="profile-quote-author">— ${item.author}</div>
                    <div class="profile-quote-status ${item.status}">${item.status}</div>
                    ${deleteBtn}
                `;
                
                quotesList.appendChild(card);
            });

            // Add delete listeners
            document.querySelectorAll('.delete-quote-btn').forEach(btn => {
                btn.addEventListener('click', () => deleteUserQuote(btn.dataset.quoteId));
            });

        } catch (error) {
            console.error("Error loading profile:", error);
        }
    }

    async function deleteUserQuote(quoteId) {
        if (!confirm('Are you sure you want to delete this? This cannot be undone.')) {
            return;
        }

        try {
            // Get the quote data before deleting
            const quoteDocRef = doc(db, "quotes", quoteId);
            const quoteSnap = await getDoc(quoteDocRef);
            
            if (quoteSnap.exists()) {
                const data = quoteSnap.data();
                
                // Delete from Firebase
                await deleteDoc(quoteDocRef);
                
                // Remove from local arrays if present
                if (data.type === 'quote') {
                    quotes = quotes.filter(q => !(q.text === data.text && q.author === data.author));
                } else {
                    poems = poems.filter(p => !(p.text === data.text && p.author === data.author));
                }
                currentData = currentMode === "quotes" ? quotes : poems;
            }
            
            // Reload profile
            loadProfileData();

        } catch (error) {
            console.error("Delete error:", error);
            alert('Failed to delete quote');
        }
    }

    // === INITIAL LOAD ===
    loadApprovedQuotes();
}

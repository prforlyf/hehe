// --- Global Content Data ---
const NICKNAMES = ["Hubby.", "Baby.", "Jiju.", "Pattu Kutti."];

// --- Qualities Data (Heart 1 Content) ---
const QUALITIES = {
    1: { title: "Your Heart to Help", 
    detail: "The depth of your compassion and how helpful you are to those in need. You don't just care; you act, and it makes me love you fiercely,Babe." },
    2: { title: "Your Humor", detail: "You always know how to make me genuinely laugh—our life is never dull because of you!" },
    3: { title: "Your Intelligence", detail: "Listening to you talk about things you love always inspires and fascinates me." },
    4: { title: "Your Drive", detail: "Watching you pursue your dreams with such focus and dedication fills me with pride." },
    5: { title: "Your Patience", detail: "Thank you for the endless patience you show me, especially when I'm being silly." },
    6: { title: "Your Strength", detail: "The way you handle pressure and adversity—you are my anchor, My Man." },
    7: { title: "Your Heart", detail: "The enormous, loving heart you save just for me. It is my favorite place to be." }
};

// Updated GIFTS data (Heart 3 Content) to recognize his care and effort
const GIFTS = {
    1: { name: "The Gift of Effort", text: "Recognition for the incredible **effort** you put into us every single day. It never goes unnoticed, My Man." },
    2: { name: "The Gift of Reliability", text: "Knowing you will **always be there** for me, no matter the situation. My foundation, Jiju." },
    3: { name: "The Gift of Care", text: "Acknowledging how well you **take care of me**, anticipating my needs and worries, Baby." },
    4: { name: "The Gift of Generosity", text: "The gratitude for your generosity—even when I run low on money, you share without hesitation, Babe." },
    5: { name: "The Gift of Growth", text: "Unending Curiosity about who you are and who you'll become. My Hubby." },
    6: { name: "The Gift of Trust", text: "My deepest belief in your strength and dreams, supporting you always, Pattu Kutti." },
    7: { name: "The Gift of Forever", text: "The Gift of **My Whole Future**, which is irrevocably tied to yours." }
};

// Simplified Timeline data (Heart 4 Content) for moments only
const TIMELINE_MOMENTS = [
    { 
        icon: "✨", 
        title: "The First Spark: Pizza Hut", 
        detail: "It all started at Pizza Hut with all our friends. We were both so shy we could barely talk, but that initial electricity and spark were everything." 
    },
    { 
        icon: "🏠", 
        title: "Our Secret Spot: My House", 
        detail: "My house quickly became our safe space. We had so many special meetups here, and it's where we shared our unforgettable first kiss." 
    },
    { 
        icon: "🕯️", 
        title: "Christmas at NLAG Church", 
        detail: "Going to NLAG Church on Christmas was a magical, beautiful memory. It's one of those moments that truly solidified our connection." 
    },
    { 
        icon: "☕", 
        title: "Casual Dates: Cafes & Malls", 
        detail: "Every single time we went to cafés, food spots, and malls, these special outings meant the world. The joy is in just being with you." 
    },
    { 
        icon: "🌟", 
        title: "Seven Years of Us", 
        detail: "Seven incredible years later, and every moment is still a blessing. I love you, My Man." 
    }
];

const FINAL_MESSAGE_TEXT = `My Hubby, My Baby, My Jiju, My Pattu Kutti...

❤️ Reason #7: You are My Forever. ❤️

Seven years of shared breaths, countless smiles, and a love that deepens with every single day. My heart chose you then, and it chooses you now, and it will choose you always. You are the beating rhythm of my life, my greatest adventure, and my truest home.

Forever yours, and with all my heart,
[Your Name Here]`; // *** REMEMBER TO PERSONALIZE THIS! ***


// --- Utility Functions ---

function typeText(element, text, speed) {
    element.innerHTML = '';
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }
    typing();
}

function fadeIn(element) {
    element.style.opacity = 0;
    element.classList.remove('hidden');
    setTimeout(() => { element.style.opacity = 1; }, 10);
}


// --- Home Page (index.html) Logic ---
if (document.getElementById('intro-screen')) {

    const introText = document.getElementById('intro-text');
    const introScreen = document.getElementById('intro-screen');
    const mainContent = document.getElementById('main-content');
    const nicknameGreeting = document.getElementById('nickname-greeting');
    const reasonButtons = document.querySelectorAll('.reason-heart');

    function typeIntroText() {
        typeText(introText, "My Man, My Heart.", 100);
        setTimeout(showMainContent, 2500);
    }

    function showMainContent() {
        introScreen.style.opacity = 0;
        setTimeout(() => {
            introScreen.style.display = 'none';
            mainContent.classList.remove('hidden');
            animateNicknameGreeting();
        }, 1000);
    }

    function animateNicknameGreeting() {
        let index = 0;
        function cycleNicknames() {
            nicknameGreeting.textContent = `To my ${NICKNAMES[index]}`;
            index = (index + 1) % NICKNAMES.length;
        }
        const interval = setInterval(cycleNicknames, 1500);
        // Stop cycling after a few seconds
        setTimeout(() => clearInterval(interval), 7500); 
    }

    reasonButtons.forEach(button => {
        button.addEventListener('click', () => {
            const reasonNum = button.dataset.reason;
            
            // --- MODIFIED LINK FOR HEART 1 TO GO TO QUALITIES.HTML ---
            if (reasonNum == 1) window.location.href = 'qualities.html'; 
            // --------------------------------------------------------
            else if (reasonNum == 2) window.location.href = 'nicknames.html'; 
            else if (reasonNum == 3) window.location.href = 'gifts.html';
            else if (reasonNum == 4) window.location.href = 'timeline.html';
            else if (reasonNum == 5) window.location.href = 'future.html';
            else if (reasonNum == 6) window.location.href = 'countdown.html'; 
            else if (reasonNum == 7) window.location.href = 'finale.html'; 
        });
    });

   
    // Start Home Page Sequence
    window.onload = typeIntroText;

} 


// --- Internal Page Logic ---

// Logic for Qualities Page (Heart 1)
if (document.getElementById('qualities-page')) {
    const qualityButtons = document.querySelectorAll('.quality-button');
    const revealBox = document.getElementById('quality-reveal-box');
    const qualityTitle = document.getElementById('quality-title');
    const qualityDetail = document.getElementById('quality-detail');

    qualityButtons.forEach(button => {
        button.addEventListener('click', () => {
            const qualityNum = button.dataset.quality;
            const content = QUALITIES[qualityNum];
            
            qualityTitle.textContent = content.title;
            qualityDetail.innerHTML = content.detail;
            
            fadeIn(revealBox); 
        });
    });
}

// Logic for Nicknames Page (Heart 2)
if (document.getElementById('nicknames-page')) {
    const nicknameButtons = document.querySelectorAll('.nickname-button');
    const revealBox = document.getElementById('nickname-reveal-box');
    const revealText = document.getElementById('nickname-reveal-text');
    
    const NICKNAME_STORIES = {
        'Hubby': 'The one I plan my entire future around. My greatest title for you.',
        'Jiju': 'Our silly, private joke that makes me laugh every time. It\'s just "us".',
        'Pattu Kutti': 'The sweetest, softest part of my heart. My term for my precious one.',
        'Babe': 'The original and still a favorite—it’s how you make me feel young and giddy.',
        'Baby': 'My term of endearment for the nurturing, caring soul that you are.'
    };

    nicknameButtons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.dataset.name;
            revealText.innerHTML = `**${name}:** ${NICKNAME_STORIES[name]}`;
            fadeIn(revealBox);
        });
    });
}

// Logic for Gifts Page (Heart 3)
if (document.getElementById('gifts-page')) {
    const giftButtons = document.querySelectorAll('.gift-button');
    const revealBox = document.getElementById('gift-reveal-box');
    const revealText = document.getElementById('gift-reveal-text');

    giftButtons.forEach(button => {
        button.addEventListener('click', () => {
            const giftNum = button.dataset.gift;
            const content = GIFTS[giftNum];
            
            revealText.innerHTML = `**${content.name}:** ${content.text}`;
            fadeIn(revealBox);
        });
    });
}

// Logic for Timeline Page (Heart 4)
if (document.getElementById('timeline-page')) {
    const timelineContainer = document.getElementById('timeline-container');

    function renderTimeline() {
        TIMELINE_MOMENTS.forEach((data, index) => {
            
            const item = document.createElement('div');
            item.classList.add('timeline-item');
            
            const positionClass = (index % 2 === 0) ? 'left' : 'right';
            item.classList.add(positionClass);

            item.innerHTML = `
                <div class="timeline-icon">${data.icon}</div>
                <div class="timeline-content">
                    <h3>${data.title}</h3>
                    <p>${data.detail}</p>
                </div>
            `;
            timelineContainer.appendChild(item);

            setTimeout(() => {
                item.style.opacity = 1;
                item.style.transform = 'translateY(0)';
            }, 300 * index); 
        });
    }

    window.onload = renderTimeline;
}

// Logic for Future Page (Heart 5)
if (document.getElementById('future-page')) {
    const futureTextContainer = document.getElementById('future-text-container');
    
    // FINALIZED FUTURE VISION TEXT
    const FUTURE_VISION = `
    I see us years from now,still giggling over our silly jokes in our little garden, surrounded by the warmth we built together. 
    I see us traveling to faraway places, chasing sunsets and collecting memories we’ll tell a thousand times. 
    I see our quiet Sundays, perfectly content in each other’s company. 
    
    You are my greatest adventure, my hubby — and every dream with you becomes a beautiful, endless reality.
    `;
    
    // Animate the future vision text on load
    window.onload = () => { typeText(futureTextContainer, FUTURE_VISION.trim(), 50); };
}

// --- Countdown Data (New Content for Heart 6) ---
const COUNTDOWN_STEPS = {
    1: { title: "Milestone 1: The Next Call", detail: "A reminder that every day ends with the sound of your voice—my favorite part of the 24-hour cycle, Babe." },
    2: { title: "Milestone 2: The Ticket Search", detail: "The quiet, exciting anticipation that begins when we start looking up dates for the next visit." },
    3: { title: "Milestone 3: The Packing List", detail: "This is about gathering things to take to you, but mostly, it’s about preparing to hold you again." },
    4: { title: "Milestone 4: The Take-Off", detail: "That moment the plane leaves the ground, and I know the distance is actively shrinking. Pure magic." },
    5: { title: "Milestone 5: The Arrival Hug", detail: "Worth every single moment of waiting, every tear, and every hard day. It’s my ultimate reward, Hubby." },
    6: { title: "Milestone 6: The Farewell", detail: "The hardest part, but proof that we can handle anything. It just makes the 'next time' even sweeter." },
    7: { title: "The Final Countdown: Forever", detail: "The moment we finally make the last move, ending the distance for good. That is the only countdown that truly matters." }
};
// --- FINAL MESSAGE (Heart 7 Content - LDR Adjusted) ---
// --- FINAL MESSAGE (Heart 7 Content - LDR Adjusted) ---

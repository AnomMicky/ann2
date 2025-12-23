function revealFuture() {
    const startScreen = document.getElementById('startScreen');
    const futureMessage = document.getElementById('futureMessage');
    const music = document.getElementById('futureMusic');
    const backBtn = document.getElementById('backBtn');

    const text1 = document.getElementById('text1');
    const text2 = document.getElementById('text2');
    const text3 = document.getElementById('text3');

    // 1. Play Music
    music.volume = 0.6;
    music.play().catch(e => console.log("Audio error:", e));

    // 2. Fade Out Button
    startScreen.style.opacity = '0';
    
    setTimeout(() => {
        startScreen.classList.add('hidden');
        futureMessage.classList.remove('hidden');

        // 3. Reveal Text Sequence
        
        // Show Line 1 immediately
        setTimeout(() => {
            text1.classList.add('visible');
        }, 500);

        // Show Line 2 after 3 seconds
        setTimeout(() => {
            text2.classList.add('visible');
        }, 3500);

        // Show Line 3 (Big text) after 6 seconds
        setTimeout(() => {
            text3.classList.add('visible');
        }, 6500);

        // Show Back Button after 9 seconds
        setTimeout(() => {
            backBtn.classList.remove('hidden');
        }, 9000);

    }, 1000);
}
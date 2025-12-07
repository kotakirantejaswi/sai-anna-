// Countdown to Feb 18
function updateCountdown() {
    const now = new Date();
    const birthday = new Date(now.getFullYear(), 1, 18); // Feb 18
    if (now > birthday) birthday.setFullYear(now.getFullYear() + 1);
    const diff = birthday - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    document.getElementById('countdown').innerHTML = `Sai Anna Birthday ki inka ${days} days ♡`;
}
setInterval(updateCountdown, 86400000); // Daily update
updateCountdown();

// Editable texts save (local storage)
document.querySelectorAll('.editable').forEach(textarea => {
    const saved = localStorage.getItem(textarea.id || textarea.className);
    if (saved) textarea.value = saved;
    textarea.addEventListener('input', () => {
        localStorage.setItem(textarea.id || textarea.className, textarea.value);
    });
});

// Birthday gift surprise
document.getElementById('carGift').addEventListener('click', () => {
    document.getElementById('carGift').style.display = 'none';
    document.getElementById('carAnim').classList.remove('hidden');
    // Add confetti or sound if you want (optional)
});

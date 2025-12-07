function updateCountdown() {
    const now = new Date();
    const bday = new Date(now.getFullYear(), 1, 18);
    if (now > bday) bday.setFullYear(now.getFullYear() + 1);
    const days = Math.floor((bday - now) / (1000*60*60*24));
    document.getElementById('countdown').innerHTML = `Sai Anna Birthday ki inka ${days} days ♡`;
}
updateCountdown();
setInterval(updateCountdown, 86400000);

function openPage(id) {
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}

// Save text automatically
document.addEventListener('input', e => {
    if (e.target.classList.contains('editable')) {
        localStorage.setItem(e.target.parentElement.id, e.target.value);
    }
});
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.editable').forEach(ta => {
        ta.value = localStorage.getItem(ta.parentElement.id) || '';
    });
});

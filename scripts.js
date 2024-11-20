function checkTimeAndEnableLinks() {
    const now = new Date();
    const day = now.getDay(); // 0 = Minggu, 1 = Senin, ..., 6 = Sabtu
    const hours = now.getHours();
    const minutes = now.getMinutes();

    const isMonday = day === 1;
    const isWithinTime = (hours === 7 && minutes >= 30) || (hours === 8 && minutes < 30);

    const links = document.querySelectorAll('.subject a');
    links.forEach(link => {
        if (isMonday && isWithinTime) {
            link.classList.remove('disabled');
        } else {
            link.classList.add('disabled');
        }
    });
}

// Panggil fungsi saat halaman dimuat
window.onload = checkTimeAndEnableLinks;

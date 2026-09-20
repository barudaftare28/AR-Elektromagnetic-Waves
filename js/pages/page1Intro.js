document.addEventListener('DOMContentLoaded', () => {
    const btnMulai = document.getElementById('btn-mulai');
    if (btnMulai) {
        btnMulai.addEventListener('click', () => {
            if (typeof window.navigateToPage === 'function') window.navigateToPage(2);
        });
    }
});
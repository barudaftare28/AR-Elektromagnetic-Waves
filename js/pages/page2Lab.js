document.addEventListener('DOMContentLoaded', () => {
    const btnBack = document.getElementById('btn-back');
    const btnNext = document.getElementById('btn-next');

    if (btnBack) {
        btnBack.addEventListener('click', () => {
            if (typeof window.navigateToPage === 'function') window.navigateToPage(1);
        });
    }
    if (btnNext) {
        btnNext.addEventListener('click', () => {
            if (typeof window.navigateToPage === 'function') window.navigateToPage(3);
        });
    }
});
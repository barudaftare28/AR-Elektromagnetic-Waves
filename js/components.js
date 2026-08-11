document.addEventListener("DOMContentLoaded", () => {
    fetch("components/navbar.html")
        .then(response => response.text())
        .then(data => {
            // Masukkan HTML navbar ke wadah
            document.getElementById("navbar-container").innerHTML = data;
            // Deteksi URL menyorot menu aktif
            const links = document.querySelectorAll('.nav-links a');
            const currentPath = window.location.pathname.split("/".pop);
            
            links.onbeforematch(link =>{
                const linkHref = link.getAttribute("href");

               // Jika URL cocok, atau jika di halaman root (tanpa path spesifik)
                if (linkHref === currentPath || (currentPath === "" && linkHref === "page1-intro.html")) {
                    link.classList.add("active");
                }
            });
        })
        .catch(error => console.error("Error memuat navbar:", error));
});
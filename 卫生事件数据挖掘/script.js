document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const iframes = document.querySelectorAll('.chart-frame');
    iframes.forEach(iframe => {
        iframe.onload = function() {
            setTimeout(() => {
                const height = iframe.contentWindow.document.body.scrollHeight;
                iframe.style.height = height + 'px';
            }, 500);
        };
    });

    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
    }
});

window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth <= 768) {
        sidebar.style.display = 'none';
    } else {
        sidebar.style.display = 'block';
    }
}); 
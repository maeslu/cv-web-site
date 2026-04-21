const items = document.querySelectorAll(".item");
const nameBlock = document.querySelector(".name-block");
const heroPhoto = document.querySelector(".hero-photo");

if (nameBlock && heroPhoto) {
    nameBlock.addEventListener("mouseenter", () => {
        heroPhoto.style.maxHeight = "300px";
    });
    nameBlock.addEventListener("mouseleave", () => {
        heroPhoto.style.maxHeight = "0";
    });
}

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const pos = item.getBoundingClientRect().top;
        if (pos < window.innerHeight - 100) {
            item.style.opacity = 1;
            item.style.transform = "translateY(0)";
        }
    });
    document.body.style.setProperty("--bg-offset", window.scrollY * 0.3 + "px");
});

window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".subtitle")?.classList.add("visible");
        document.querySelector(".divider")?.classList.add("visible");
    }, 400);
});

function scrollToGallery() {
    document.querySelector(".gallery-section").scrollIntoView({ behavior: "smooth" });
}

function openItemInfo(src, title, desc) {
    const modal = document.getElementById('modal');
    if (!modal) return;

    document.getElementById('modal-img').src = src;
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-desc').innerText = desc || '';

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
        document.getElementById('modal-bottom-panel')?.classList.add('visible');
    }, 100);
}

function closeItemInfo() {
    const modal = document.getElementById('modal');
    document.getElementById('modal-bottom-panel')?.classList.remove('visible');

    setTimeout(() => {
        modal?.classList.remove('active');
        document.body.style.overflow = '';
    }, 300);
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeItemInfo();
});
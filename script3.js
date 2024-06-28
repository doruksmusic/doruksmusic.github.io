const langToggle = document.getElementById('lang-toggle');
const elementsToTranslate = document.querySelectorAll('[data-lang]');
const inputsToTranslate = document.querySelectorAll('[data-placeholder-tr], [data-placeholder-en]');
let currentLang = 'tr';

const translations = {
    en: {
        'ANA SAYFA': 'HOME',
        'HAKKIMDA': 'ABOUT',
        'MÜZİK': 'MUSIC',
        'KİTAP': 'BOOK',
        'EĞİTİM/DANIŞMANLIK': 'EDUCATION/CONSULTING',
        'Eğitim/Danışmanlık': 'Education/Consulting',
        'İLETİŞİM': 'CONTACT',
        'Müzisyen, besteci ve eğitmen': 'Musician, composer, and educator',
        'Müzisyen, besteci ve eğitmen....': 'Musician, composer, and educator...',
        'Film ve dizi müzikleri, albüm ve single’lar.': 'Film and series music, albums, and singles.',
        'Hakkımda': 'About',
        'Müzik': 'Music',
        'Kitap': 'Book',
        'HABER BÜLTENİNE KAYIT OLUN': 'SUBSCRIBE TO NEWSLETTER',
        'Son haberlerden, eğitimlerden ve videolardan ilk önce sizin haberiniz olsun...': 'Be the first to know about the latest news, trainings, and videos...',
        'Kayıt Ol!': 'Sign Up!',
        'Şartlar ve Koşullar': 'Terms and Conditions',
        'İsim': 'Name',
        'Soyisim': 'Surname',
        'Email Adresi': 'Email Address',
        'FİLM/DİZİ MÜZİKLERİ': 'MOVİE/SERIES SOUNDTRACKS',
        'ALBÜMLER': 'ALBUMS'
    },
    tr: {
        'HOME': 'ANA SAYFA',
        'ABOUT': 'HAKKIMDA',
        'MUSIC': 'MÜZİK',
        'BOOK': 'KİTAP',
        'EDUCATION/CONSULTING': 'EĞİTİM/DANIŞMANLIK',
        'Education/Consulting': 'Eğitim/Danışmanlık',
        'CONTACT': 'İLETİŞİM',
        'Musician, composer, and educator': 'Müzisyen, besteci ve eğitmen',
        'Musician, composer, and educator...': 'Müzisyen, besteci ve eğitmen....',
        'Film and series music, albums, and singles.': 'Film ve dizi müzikleri, albüm ve single’lar.',
        'About': 'Hakkımda',
        'Music': 'Müzik',
        'Book': 'Kitap',
        'SUBSCRIBE TO NEWSLETTER': 'HABER BÜLTENİNE KAYIT OLUN',
        'Be the first to know about the latest news, trainings, and videos...': 'Son haberlerden, eğitimlerden ve videolardan ilk önce sizin haberiniz olsun...',
        'Sign Up!': 'Kayıt Ol!',
        'Terms and Conditions': 'Şartlar ve Koşullar',
        'Name': 'İsim',
        'Surname': 'Soyisim',
        'Email Address': 'Email Adresi',
        'MOVİE/SERIES SOUNDTRACKS': 'FİLM/DİZİ MÜZİKLERİ',
        'ALBUMS': 'ALBÜMLER'
    }
};

langToggle.addEventListener('click', function() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    langToggle.textContent = currentLang === 'tr' ? 'ENG' : 'TUR';
    translatePage(currentLang);
});

function translatePage(lang) {
    elementsToTranslate.forEach(el => {
        el.textContent = translations[lang][el.textContent.trim()] || el.textContent;
    });
}

function translatePage(lang) {
    elementsToTranslate.forEach(el => {
        el.textContent = translations[lang][el.textContent.trim()] || el.textContent;
    });
    inputsToTranslate.forEach(input => {
        input.placeholder = input.getAttribute(`data-placeholder-${lang}`);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    const header = document.getElementById("main-header");
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.getElementById('navbarNav');

    function checkScroll() {
        if (window.scrollY === 0) {
            header.classList.add("transparent");
            header.classList.remove("solid");
        } else {
            header.classList.remove("transparent");
            header.classList.add("solid");
        }
    }

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });

    window.addEventListener("scroll", checkScroll);

    // Sayfa yüklendiğinde scroll konumunu kontrol et
    checkScroll();
});

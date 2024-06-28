document.addEventListener('DOMContentLoaded', function() {
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
            'İLETİŞİM': 'CONTACT',
            'Şartlar ve Koşullar': 'Terms and Conditions',
            'İsim': 'Name',
            'Soyisim': 'Surname',
            'Email Adresi': 'Email Address',
            'DORUK SOMUNKIRAN (d. 1968, Ankara), Müzisyen, besteci ve eğitmen': 'DORUK SOMUNKIRAN (b. 1968, Ankara), Musician, composer, and educator',
            'Somunkıran, müziğe genç yaşlarda gitar çalarak başlamıştır. Ortaokul ve lise eğitimini T.E.D. Ankara Koleji\'nde tamamlamış ve ardından Orta Doğu Teknik Üniversitesi Uluslararası İlişkiler Bölümü\'ne gitmiştir. Üniversite yıllarında çeşitli müzik gruplarında yer almış ve müziğe olan ilgisini sürdürmüştür.': 'Somunkıran started playing guitar at a young age. He completed his secondary and high school education at T.E.D. Ankara College and then went to Middle East Technical University\'s Department of International Relations. During his university years, he participated in various music groups and maintained his interest in music.',
            'Mezuniyetinin ardından Dış Ticaret Müsteşarlığı’nda Dış Ticaret Uzmanı olarak çalışmış ve Türkiye Cumhuriyeti Budapeşte Büyükelçiliği’nde Ticaret Müşavir Yardımcısı olarak görev almıştır.': 'After graduation, he worked as a Foreign Trade Specialist at the Undersecretariat of Foreign Trade and served as Assistant Trade Attaché at the Turkish Embassy in Budapest.',
            'Eğitim ve çalışma hayatı boyunca çeşitli müzik gruplarında yer almış ve müziğe olan ilgisini sürdürmüştür. 20’li yaşların sonunda kariyer rotasını tamamen müziğe çevirmeye karar vermiştir.': 'Throughout his education and working life, he has been involved in various music groups and continued his interest in music. In his late 20s, he decided to completely shift his career path to music.',
            'Berklee College of Music\'ten burs kazanarak ABD\'ye gitmiş ve 2000 yılında yüksek şeref listesine girerek mezun olmuştur. Mezuniyet sonrası Pro Tools ve Cubase gibi yazılımlarda sertifikalar almıştır.': 'He won a scholarship from Berklee College of Music and went to the USA, graduating with high honors in 2000. After graduation, he received certifications in software like Pro Tools and Cubase.',
            '2006 yılından beri İstanbul\'da faaliyet gösteren Somunkıran, film, dizi ve reklam müziği alanında çok sayıda projede yer almıştır.': 'Somunkıran has been active in Istanbul since 2006, participating in numerous projects in film, TV series, and advertising music.',
            '2016 ve 2017 yıllarında TRT Belgesel ve TRT Müzik kanallarında belgesel programlarının metin yazarlığı ve sunuculuğunu yapmıştır.': 'In 2016 and 2017, he worked as a scriptwriter and presenter for documentary programs on TRT Documentary and TRT Music channels.',
            '2010 - 2023 yılları arasında Modern Müzik Akademisi\'nde eğitmen olarak görev almış olup, müzik teknolojisi ve film müziği dersleri vermiştir.': 'Between 2010 and 2023, he worked as an instructor at the Modern Music Academy, teaching music technology and film music courses.',
            'Sesten Müziğe (TRT Belgesel)': 'From Sound to Music (TRT Documentary)',
            'Metin Yazarı – Besteci – Sunucu': 'Scriptwriter – Composer – Presenter',
            'Sesten Müziğe adlı belgesel programda, sesin insanlar üzerindeki etkilerini ve meydana gelme koşullarını oluşturan özellikler yakından incelenmektedir.': 'In the documentary program called From Sound to Music, the effects of sound on people and the conditions that create these features are closely examined.',
            'Ses, frekans, desibel ve metronom gibi kavramlar, izleyicilerin kolayca anlayabilecekleri basit bir dille açıklanmaktadır.': 'Concepts such as sound, frequency, decibel, and metronome are explained in simple terms that viewers can easily understand.'
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
            'CONTACT': 'İLETİŞİM',
            'Terms and Conditions': 'Şartlar ve Koşullar',
            'Name': 'İsim',
            'Surname': 'Soyisim',
            'Email Address': 'Email Adresi',
            'DORUK SOMUNKIRAN (b. 1968, Ankara), Musician, composer, and educator': 'DORUK SOMUNKIRAN (d. 1968, Ankara), Müzisyen, besteci ve eğitmen',
            'Somunkıran started playing guitar at a young age. He completed his secondary and high school education at T.E.D. Ankara College and then went to Middle East Technical University\'s Department of International Relations. During his university years, he participated in various music groups and maintained his interest in music.': 'Somunkıran, müziğe genç yaşlarda gitar çalarak başlamıştır. Ortaokul ve lise eğitimini T.E.D. Ankara Koleji\'nde tamamlamış ve ardından Orta Doğu Teknik Üniversitesi Uluslararası İlişkiler Bölümü\'ne gitmiştir. Üniversite yıllarında çeşitli müzik gruplarında yer almış ve müziğe olan ilgisini sürdürmüştür.',
            'After graduation, he worked as a Foreign Trade Specialist at the Undersecretariat of Foreign Trade and served as Assistant Trade Attaché at the Turkish Embassy in Budapest.': 'Mezuniyetinin ardından Dış Ticaret Müsteşarlığı’nda Dış Ticaret Uzmanı olarak çalışmış ve Türkiye Cumhuriyeti Budapeşte Büyükelçiliği’nde Ticaret Müşavir Yardımcısı olarak görev almıştır.',
            'Throughout his education and working life, he has been involved in various music groups and continued his interest in music. In his late 20s, he decided to completely shift his career path to music.': 'Eğitim ve çalışma hayatı boyunca çeşitli müzik gruplarında yer almış ve müziğe olan ilgisini sürdürmüştür. 20’li yaşların sonunda kariyer rotasını tamamen müziğe çevirmeye karar vermiştir.',
            'He won a scholarship from Berklee College of Music and went to the USA, graduating with high honors in 2000. After graduation, he received certifications in software like Pro Tools and Cubase.': 'Berklee College of Music\'ten burs kazanarak ABD\'ye gitmiş ve 2000 yılında yüksek şeref listesine girerek mezun olmuştur. Mezuniyet sonrası Pro Tools ve Cubase gibi yazılımlarda sertifikalar almıştır.',
            'Somunkıran has been active in Istanbul since 2006, participating in numerous projects in film, TV series, and advertising music.': '2006 yılından beri İstanbul\'da faaliyet gösteren Somunkıran, film, dizi ve reklam müziği alanında çok sayıda projede yer almıştır.',
            'In 2016 and 2017, he worked as a scriptwriter and presenter for documentary programs on TRT Documentary and TRT Music channels.': '2016 ve 2017 yıllarında TRT Belgesel ve TRT Müzik kanallarında belgesel programlarının metin yazarlığı ve sunuculuğunu yapmıştır.',
            'Between 2010 and 2023, he worked as an instructor at the Modern Music Academy, teaching music technology and film music courses.': '2010 - 2023 yılları arasında Modern Müzik Akademisi\'nde eğitmen olarak görev almış olup, müzik teknolojisi ve film müziği dersleri vermiştir.',
            'From Sound to Music (TRT Documentary)': 'Sesten Müziğe (TRT Belgesel)',
            'Scriptwriter – Composer – Presenter': 'Metin Yazarı – Besteci – Sunucu',
            'In the documentary program called From Sound to Music, the effects of sound on people and the conditions that create these features are closely examined.': 'Sesten Müziğe adlı belgesel programda, sesin insanlar üzerindeki etkilerini ve meydana gelme koşullarını oluşturan özellikler yakından incelenmektedir.',
            'Concepts such as sound, frequency, decibel, and metronome are explained in simple terms that viewers can easily understand.': 'Ses, frekans, desibel ve metronom gibi kavramlar, izleyicilerin kolayca anlayabilecekleri basit bir dille açıklanmaktadır.'
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

    function checkScroll() {
        if (window.scrollY === 0) {
            header.classList.add('transparent');
            header.classList.remove('solid');
        } else {
            header.classList.remove('transparent');
            header.classList.add('solid');
        }
    }

    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });

    window.addEventListener('scroll', checkScroll);

    // Sayfa yüklendiğinde scroll konumunu kontrol et
    checkScroll();
});

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
        'İLETİŞİM': 'CONTACT',
        'The Ultimate Studio One Pro Book – 2023': 'The Ultimate Studio One Pro Book – 2023',
        'Kitap, Presonus Studio One yazılımını profesyonel düzeyde kullanarak kendi müziklerini oluşturmayı öğrenmek isteyen müzisyenler ve müzik grupları içindir.': 'The book is for musicians and bands who want to learn to create their own music using the Presonus Studio One software at a professional level.',
        'Kitap aynı zamanda başka dijital ses iş istasyonlarında (DAW) deneyimi olan ancak şimdi Studio One\'a geçmek veya iş akışlarına dahil etmek isteyen yapımcılar ve ses profesyonelleri için de uygun bir kaynaktır. Müzik yapım sürecine dair temel bilgiye ve deneyimine sahip olanları hedeflemektedir, ancak Studio One\'da bu süreçleri daha etkili bir şekilde gerçekleştirmeyi öğretecek şekilde tasarlanmıştır.': 'The book is also a suitable resource for producers and audio professionals who have experience with other digital audio workstations (DAWs) but now want to transition to or incorporate Studio One into their workflows. It targets those who have basic knowledge and experience in the music production process but is designed to teach how to carry out these processes more effectively in Studio One.',
        'AMAZON': 'AMAZON',
        'YORUMLAR': 'REVIEWS',
        'Daha Fazlası...': 'More...',
        'HABER BÜLTENİNE KAYIT OLUN': 'SUBSCRIBE TO NEWSLETTER',
        'Son haberlerden, eğitimlerden ve videolardan ilk önce sizin haberiniz olsun...': 'Be the first to know about the latest news, trainings, and videos...',
        'Kayıt Ol!': 'Sign Up!',
        'İLETİŞİM': 'CONTACT',
        'Şartlar ve Koşullar': 'Terms and Conditions',
        'Daha Fazlası...': 'More...',
        'İsim': 'Name',
        'Soyisim': 'Surname',
        'Email Adresi': 'Email Address',
        'I was actually a sales rep for Presonus several years ago. I spent years preaching the virtues of Studio One at many Guitar Centers, Sam Ash stores, churches, hobbyists and more. This is by far the most easily understandable manual that I\'ve ever encountered. This teaches you from step one. From launching the app, to learning about dynamics, FX, compression etc, all the way to mixing and mastering. A step by step guide that anyone from a novice, to a pro or from someone coming from another DAW. I believe that this is a go to. I\'d especially encourage anyone who\'s ever taken even a slight interest in music production and techniques to take this book and utilize it to the max . What makes this stand out as well are the screenshots and diagrams. You can literally have the manual one screen while duplicating the process on another (with Studio One running). This manual really emphasizes the powerful simplicity of drag and drop. One does not need to be afraid to launch the software after learning about it\'s ease of use. In a day and age of having AI and apps do the work for you , it\'s refreshing to see some authentic and legit techniques that can actually be used in any DAW. That being said, I do believe the more you read this manual and apply it\'s lessons the more likely that you will stick with Studio One as your DAW of choice, regardless of the iteration you choose. Presonus Audio is a fantastic brand to work with, this only emphasizes it. Great work, wish I could give 6 stars!!': 'I was actually a sales rep for Presonus several years ago. I spent years preaching the virtues of Studio One at many Guitar Centers, Sam Ash stores, churches, hobbyists and more. This is by far the most easily understandable manual that I\'ve ever encountered. This teaches you from step one. From launching the app, to learning about dynamics, FX, compression etc, all the way to mixing and mastering. A step by step guide that anyone from a novice, to a pro or from someone coming from another DAW. I believe that this is a go to. I\'d especially encourage anyone who\'s ever taken even a slight interest in music production and techniques to take this book and utilize it to the max . What makes this stand out as well are the screenshots and diagrams. You can literally have the manual one screen while duplicating the process on another (with Studio One running). This manual really emphasizes the powerful simplicity of drag and drop. One does not need to be afraid to launch the software after learning about it\'s ease of use. In a day and age of having AI and apps do the work for you , it\'s refreshing to see some authentic and legit techniques that can actually be used in any DAW. That being said, I do believe the more you read this manual and apply it\'s lessons the more likely that you will stick with Studio One as your DAW of choice, regardless of the iteration you choose. Presonus Audio is a fantastic brand to work with, this only emphasizes it. Great work, wish I could give 6 stars!!',
        '— JJ Abrams, Writer / Producer / Director': '— JJ Abrams, Writer / Producer / Director',
        'This 360 page tutorial takes a person through the beginning steps of never using a DAW before to recording, producing and creating imaginative song structure and then the full mix and master process. Or, if you are like me, and have used multiple DAW platforms like Pro Tools, Ableton, and Logic Pro, you can use this book as a guide to familiarize yourself with the tools and workflows of this highly intuitive software. I have had Studio One as a stand by DAW for a long time, but before this book I had only used it once or twice; after I took this book and implemented some of its workflows and really gave the DAW a chance, I found that Studio One is a great tool that was made understandable on a simple and searchable level by the genius of Doruk\'s explanations. Presonus should include this book with the purchase of any equipment that include Studio One, or at least provide a link for access to purchase. It is an amazing resource, and even if you don\'t get into Studio One, It can become a great introductory teaching tool for beginning audio production students on microphone technique and best studio practices.': 'This 360 page tutorial takes a person through the beginning steps of never using a DAW before to recording, producing and creating imaginative song structure and then the full mix and master process. Or, if you are like me, and have used multiple DAW platforms like Pro Tools, Ableton, and Logic Pro, you can use this book as a guide to familiarize yourself with the tools and workflows of this highly intuitive software. I have had Studio One as a stand by DAW for a long time, but before this book I had only used it once or twice; after I took this book and implemented some of its workflows and really gave the DAW a chance, I found that Studio One is a great tool that was made understandable on a simple and searchable level by the genius of Doruk\'s explanations. Presonus should include this book with the purchase of any equipment that include Studio One, or at least provide a link for access to purchase. It is an amazing resource, and even if you don\'t get into Studio One, It can become a great introductory teaching tool for beginning audio production students on microphone technique and best studio practices.',
        'As a former Director of Engineering at Presonus, I\'ve been on the cutting edge of Studio One use and developing since version 2.0 of the product. I\'ve been through the upgrades and first hand seen the product blossom into the industry-leading product it is today. I wouldn\'t call myself an expert on the DAW by any means, but I know it well. That said, I\'m an avid reader, and one of the measurements that I apply to a book when reading it is if I learned something by reading it. Even with "inside" information and 8 years of experience with Studio One, I still learned several new things while reading this book - so I consider it a great read, indeed. It\'s a well-written guide, with a friendly style, well-measured pacing and depth on sometimes highly technical topics. I strongly recommend this book for any user of Studio One, whether you will keep it in your lap as you proceed step-by-step through the DAW, or make mental notes to "try that later" - it\'s a fantastic guide. Thanks, Doruk for your work.': 'As a former Director of Engineering at Presonus, I\'ve been on the cutting edge of Studio One use and developing since version 2.0 of the product. I\'ve been through the upgrades and first hand seen the product blossom into the industry-leading product it is today. I wouldn\'t call myself an expert on the DAW by any means, but I know it well. That said, I\'m an avid reader, and one of the measurements that I apply to a book when reading it is if I learned something by reading it. Even with "inside" information and 8 years of experience with Studio One, I still learned several new things while reading this book - so I consider it a great read, indeed. It\'s a well-written guide, with a friendly style, well-measured pacing and depth on sometimes highly technical topics. I strongly recommend this book for any user of Studio One, whether you will keep it in your lap as you proceed step-by-step through the DAW, or make mental notes to "try that later" - it\'s a fantastic guide. Thanks, Doruk for your work.'
    },
    tr: {
        'HOME': 'ANA SAYFA',
        'ABOUT': 'HAKKIMDA',
        'MUSIC': 'MÜZİK',
        'BOOK': 'KİTAP',
        'EDUCATION/CONSULTING': 'EĞİTİM/DANIŞMANLIK',
        'CONTACT': 'İLETİŞİM',
        'The Ultimate Studio One Pro Book – 2023': 'The Ultimate Studio One Pro Book – 2023',
        'The book is for musicians and bands who want to learn to create their own music using the Presonus Studio One software at a professional level.': 'Kitap, Presonus Studio One yazılımını profesyonel düzeyde kullanarak kendi müziklerini oluşturmayı öğrenmek isteyen müzisyenler ve müzik grupları içindir.',
        'The book is also a suitable resource for producers and audio professionals who have experience with other digital audio workstations (DAWs) but now want to transition to or incorporate Studio One into their workflows. It targets those who have basic knowledge and experience in the music production process but is designed to teach how to carry out these processes more effectively in Studio One.': 'Kitap aynı zamanda başka dijital ses iş istasyonlarında (DAW) deneyimi olan ancak şimdi Studio One\'a geçmek veya iş akışlarına dahil etmek isteyen yapımcılar ve ses profesyonelleri için de uygun bir kaynaktır. Müzik yapım sürecine dair temel bilgiye ve deneyimine sahip olanları hedeflemektedir, ancak Studio One\'da bu süreçleri daha etkili bir şekilde gerçekleştirmeyi öğretecek şekilde tasarlanmıştır.',
        'AMAZON': 'AMAZON',
        'REVIEWS': 'YORUMLAR',
        'More...': 'Daha Fazlası...',
        'SUBSCRIBE TO NEWSLETTER': 'HABER BÜLTENİNE KAYIT OLUN',
        'Be the first to know about the latest news, trainings, and videos...': 'Son haberlerden, eğitimlerden ve videolardan ilk önce sizin haberiniz olsun...',
        'Sign Up!': 'Kayıt Ol!',
        'CONTACT': 'İLETİŞİM',
        'Terms and Conditions': 'Şartlar ve Koşullar',
        'More...': 'Daha Fazlası...',
        'Name': 'İsim',
        'Surname': 'Soyisim',
        'Email Address': 'Email Adresi',
        'I was actually a sales rep for Presonus several years ago. I spent years preaching the virtues of Studio One at many Guitar Centers, Sam Ash stores, churches, hobbyists and more. This is by far the most easily understandable manual that I\'ve ever encountered. This teaches you from step one. From launching the app, to learning about dynamics, FX, compression etc, all the way to mixing and mastering. A step by step guide that anyone from a novice, to a pro or from someone coming from another DAW. I believe that this is a go to. I\'d especially encourage anyone who\'s ever taken even a slight interest in music production and techniques to take this book and utilize it to the max . What makes this stand out as well are the screenshots and diagrams. You can literally have the manual one screen while duplicating the process on another (with Studio One running). This manual really emphasizes the powerful simplicity of drag and drop. One does not need to be afraid to launch the software after learning about it\'s ease of use. In a day and age of having AI and apps do the work for you , it\'s refreshing to see some authentic and legit techniques that can actually be used in any DAW. That being said, I do believe the more you read this manual and apply it\'s lessons the more likely that you will stick with Studio One as your DAW of choice, regardless of the iteration you choose. Presonus Audio is a fantastic brand to work with, this only emphasizes it. Great work, wish I could give 6 stars!!': 'Aslında birkaç yıl önce Presonus için bir satış temsilcisiydim. Yıllarca birçok Guitar Center, Sam Ash mağazası, kilise, hobi ve daha fazlasında Studio One\'ın erdemlerini vaaz ettim. Bu, şimdiye kadar karşılaştığım en kolay anlaşılabilir kılavuz. Bu size birinci adımdan itibaren öğretir. Uygulamayı başlatmaktan, dinamikleri, FX\'i, kompresyonu vb. öğrenmekten, miksaj ve mastering\'e kadar. Yeni başlayan birinden, bir uzmana veya başka bir DAW\'dan gelen birinden adım adım bir kılavuz. Bunun bir tercih olduğunu düşünüyorum. Müzik prodüksiyonu ve tekniklerine biraz ilgi duymuş herkese bu kitabı alıp sonuna kadar kullanmalarını özellikle tavsiye ederim. Bu kitabı öne çıkaran şey ekran görüntüleri ve diyagramlardır. El kitabını bir ekranda açabilir ve başka bir ekranda (Studio One çalışırken) işlemi çoğaltabilirsiniz. Bu el kitabı, sürükle ve bırak işleminin güçlü sadeliğini gerçekten vurgular. Kullanım kolaylığını öğrendikten sonra yazılımı başlatmaktan korkmanıza gerek yoktur. Yapay zekanın ve uygulamaların sizin için işi yaptığı bir çağda, her DAW\'da gerçekten kullanılabilecek bazı otantik ve meşru teknikler görmek ferahlatıcı. Bununla birlikte, bu el kitabını ne kadar çok okur ve derslerini uygularsanız, Studio One\'ı tercih ettiğiniz DAW olarak kullanma olasılığınız o kadar artar. Seçtiğiniz yinelemeden bağımsız olarak. Presonus Audio ile çalışmak harika bir markadır, bu sadece onu vurgular. Harika iş, keşke 6 yıldız verebilseydim!!',
        '— JJ Abrams, Writer / Producer / Director': '— JJ Abrams, Yazar / Yapımcı / Yönetmen',
        'This 360 page tutorial takes a person through the beginning steps of never using a DAW before to recording, producing and creating imaginative song structure and then the full mix and master process. Or, if you are like me, and have used multiple DAW platforms like Pro Tools, Ableton, and Logic Pro, you can use this book as a guide to familiarize yourself with the tools and workflows of this highly intuitive software. I have had Studio One as a stand by DAW for a long time, but before this book I had only used it once or twice; after I took this book and implemented some of its workflows and really gave the DAW a chance, I found that Studio One is a great tool that was made understandable on a simple and searchable level by the genius of Doruk\'s explanations. Presonus should include this book with the purchase of any equipment that include Studio One, or at least provide a link for access to purchase. It is an amazing resource, and even if you don\'t get into Studio One, It can become a great introductory teaching tool for beginning audio production students on microphone technique and best studio practices.': 'Bu 360 sayfalık öğretici, daha önce hiç DAW kullanmamış bir kişiyi, kayıt, prodüksiyon ve yaratıcı şarkı yapısı oluşturma ve ardından tam miksaj ve mastering sürecine götürür. Ya da benim gibiyseniz ve Pro Tools, Ableton ve Logic Pro gibi birden fazla DAW platformu kullandıysanız, bu kitabı bu son derece sezgisel yazılımın araçları ve iş akışlarıyla tanışmak için bir rehber olarak kullanabilirsiniz. Studio One\'ı uzun süredir bekleyen bir DAW olarak gördüm, ancak bu kitaptan önce onu bir veya iki kez kullanmıştım; Bu kitabı alıp bazı iş akışlarını uygulayıp DAW\'a gerçekten bir şans verdikten sonra, Studio One\'ın Doruk\'un açıklamaları sayesinde basit ve aranabilir bir düzeyde anlaşılabilir hale gelen harika bir araç olduğunu gördüm. Presonus, Studio One\'ı içeren herhangi bir ekipmanın satın alınmasıyla bu kitabı eklemelidir veya satın alma bağlantısına erişim sağlamalıdır. Bu harika bir kaynaktır ve Studio One\'a girmeseniz bile, başlangıçta ses prodüksiyonu öğrencileri için mikrofon tekniği ve en iyi stüdyo uygulamaları konusunda harika bir başlangıç öğretim aracı haline gelebilir.',
        'As a former Director of Engineering at Presonus, I\'ve been on the cutting edge of Studio One use and developing since version 2.0 of the product. I\'ve been through the upgrades and first hand seen the product blossom into the industry-leading product it is today. I wouldn\'t call myself an expert on the DAW by any means, but I know it well. That said, I\'m an avid reader, and one of the measurements that I apply to a book when reading it is if I learned something by reading it. Even with "inside" information and 8 years of experience with Studio One, I still learned several new things while reading this book - so I consider it a great read, indeed. It\'s a well-written guide, with a friendly style, well-measured pacing and depth on sometimes highly technical topics. I strongly recommend this book for any user of Studio One, whether you will keep it in your lap as you proceed step-by-step through the DAW, or make mental notes to "try that later" - it\'s a fantastic guide. Thanks, Doruk for your work.': 'Presonus\'ta eski Mühendislik Direktörü olarak, ürünün 2.0 sürümünden bu yana Studio One kullanımında ve geliştirilmesinde ön saflarda yer aldım. Yükseltmeleri yaşadım ve ürünün bugün endüstri lideri bir ürüne dönüşmesini birinci elden gördüm. DAW\'da kendimi kesinlikle bir uzman olarak adlandırmazdım ama onu iyi tanıyorum. Bununla birlikte, hevesli bir okuyucuyum ve bir kitabı okurken uyguladığım ölçütlerden biri, onu okuyarak bir şey öğrenip öğrenmediğimdir. Studio One ile ilgili "içeriden" bilgi ve 8 yıllık deneyime sahip olmama rağmen, bu kitabı okurken birkaç yeni şey öğrendim - bu yüzden gerçekten harika bir kitap olarak görüyorum. Bazen son derece teknik konularda arkadaşça bir üsluba, iyi ölçülmüş tempoya ve derinliğe sahip, iyi yazılmış bir rehberdir. DAW boyunca adım adım ilerlerken dizlerinizin üzerinde tutacak olsanız da veya "daha sonra dene" notları almak için zihinsel notlar oluşturacak olsanız da, Studio One\'ın herhangi bir kullanıcısı için bu kitabı şiddetle tavsiye ediyorum - bu harika bir rehber. Çalışmanız için teşekkürler Doruk.'
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


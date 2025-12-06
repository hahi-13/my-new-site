
const martyrsData = [
  {
    id: 1,
    name: "شهید مهدی توسنگ",
    date: "تاریخ شهادت: 1400/8/28",
    bio: `
        شهید مهدی توسنگ از جوانان مؤمن، آرام و مسئولیت‌پذیر کشورمان بود که در خانواده‌ای زحمتکش رشد کرد و از کودکی روحیه کمک‌کردن و خدمت به مردم داشت. او بعدها در مسیر تأمین امنیت جامعه فعالیت کرد و همکارانش او را فردی منظم، مهربان و قابل‌اعتماد می‌دانستند.

مهدی در درگیری مسلحانه با اشرار و هنگام انجام مأموریت رسمی برای حفظ امنیت مردم، به شهادت رسید و نامش در کنار جوانان فداکار این سرزمین ثبت شد.
    `,
    image: "img/InShot_20251203_115523366.jpg",
  },
  {
    id: 2,
    name: "شهید علیرضا سعادت",
    date: "تاریخ شهادت: 1402/10/13",
    bio: `
        زندگی‌نامه : شهید علیرضا سعادت ماهانی، متولد ۲۷ فروردین ۱۳۸۴ و اهل ماهان کرمان، یکی از امدادگران حادثه تروریستی گلزار شهدای کرمان بود  او هنگام کمک به مجروحان، بر اثر انفجار به شهادت رسید.

        علیرضا جوانی مؤدب، مهربان و دوست‌داشتنی بود که احترام ویژه‌ای برای پدر و مادرش قائل بود و رابطه گرم و صمیمانه‌ای با خواهرش داشت. عشق او به شهدا و خدمت به مردم، سرانجام او را به مقام شهادت رساند.
    `,
    image: "img/Gemini_Generated_Image_weim7cweim7cweim.png",
  },
  {
    id: 3,
    name: "شهید علی ماهانی",
    date: "تاریخ شهادت: 1361//۱۰",
    bio: `
        شهید علی ماهانی، متولد ۱ آذر ۱۳۳۶ در کرمان، از همان نوجوانی روحیه‌ای پرسؤال و عدالت‌خواه داشت. او در مدرسه به‌جای سکوت، با نوشته‌ها و اعتراض‌هایش به نابرابری‌ها معروف بود؛ تا جایی که بارها نوشته‌هایش درباره ظلم رژیم پهلوی از دفترش ضبط شد و او را به دفتر مدرسه می‌بردند.

علی بعد از پیروزی انقلاب، مسیرش را در دفاع از کشور ادامه داد و با ایمان و اراده‌ای قوی وارد جبهه شد. او سرانجام در عملیات والفجر، در خط مقدم نبرد و در حالی که برای پیشروی نیروها تلاش می‌کرد، به شهادت رسید.
    `,
    image: "img/Picsart_25-12-03_12-11-40-258.jpg",
  },
  {
    id: 4,
    name: "شهید علی برزگرپور",
    date: "تاریخ شهادت: ۱۳۶۰/۰۴/۰۳",
    bio: `
        شهید برزگرپور، نمونه بارز ایثار و فداکاری بود. عشق به میهن و دین، او را به جبهه‌ها کشاند و نامش برای همیشه جاودانه شد.

        از او نقل است که همیشه می‌گفت: «بهترین مرگ، شهادت در راه خداست.» و سرانجام به آرزوی خود رسید.
    `,
    image: "img/Gemini_Generated_Image_c2f9bqc2f9bqc2f9.png",
  },
];
// -------------------- داده‌های شهدا --------------------


// HERO slider (auto play + bullets) - (این قسمت کد قبلی شماست و فعال نیست)
// (function(){
//   const slides = Array.from(document.querySelectorAll('.slide'));
//   const bullets = Array.from(document.querySelectorAll('.bullet'));
//   let idx = 0; let timer = null;

//   function show(i){
//     slides.forEach((s,si)=>s.classList.toggle('active', si===i));
//     bullets.forEach((b,bi)=>b.classList.toggle('active', bi===i));
//     idx=i;
//   }
//   function next(){ show((idx+1)%slides.length); }
//   bullets.forEach(b=>b.addEventListener('click', ()=>{ stop(); show(Number(b.dataset.i)); start(); }));

//   function start(){ timer = setInterval(next, 3500); }
//   function stop(){ if(timer) clearInterval(timer); }

//   start();

//   // pause on hover
//   document.querySelector('.hero-card').addEventListener('mouseenter', stop);
//   document.querySelector('.hero-card').addEventListener('mouseleave', start);
// })();


/* -------------------------------------------------------------------------- */
/* تابع کمکی برای مدیریت پاراگراف‌های طولانی (اضافه شد) */
/* -------------------------------------------------------------------------- */
function formatBio(text) {
    if (!text) return '<p>زندگی‌نامه موجود نیست.</p>';
    
    // متون را بر اساس دو خط جدید جدا می‌کند و هر بخش را در تگ <p> می‌گذارد.
    const paragraphs = text.split(/\n\s*\n/); 
    
    return paragraphs
           .filter(p => p.trim() !== '')
           .map(p => `<p>${p.trim()}</p>`)
           .join('');
}


// Click on circle -> open detail panel (بخش اصلی شما)
(function(){
    const panel = document.getElementById('detailPanel');
    const detailCard = document.querySelector('.detail-card');
    const cards = Array.from(document.querySelectorAll('.card-circle'));

    // تابع کمکی برای گرفتن سه شهید تصادفی به جز شهید فعلی
    function getRandomMartyrs(currentId) {
        const others = martyrsData.filter(m => m.id !== currentId);
        const shuffled = others.sort(() => 0.5 - Math.random());
        // همیشه 3 شهید را برمی‌گرداند، اگر کم بود، همان تعداد موجود.
        return shuffled.slice(0, 3); 
    }
    
    // تابع اصلی برای رندر کردن محتوای مدال بر اساس ID شهید
    function renderDetailPanel(id) {
        const martyr = martyrsData.find(m => m.id === id);
        
        if (!martyr) return;

        // 1. اطلاعات شهید اصلی (اینجا متغیر details اصلاح شد)
        const mainImage = `<div class="main-martyr-image" style="background-image:url('${martyr.image}')"></div>`;
        const details = `
            <div class="detail-content-wrapper">
                <div class="detail-text-info">
                    <div class="martyr-name-date">
                        <h2 class="martyr-name">${martyr.name}</h2>
                        <p class="martyr-date">${martyr.date}</p>
                    </div>
                    <div class="bio-box">
                        <h3>زندگی‌نامه</h3>
                        ${formatBio(martyr.bio)}  
                        </div>
                </div>
                ${mainImage}
            </div>
        `;

        // 2. عکس‌های سه شهید دیگر (با قابلیت کلیک)
        const randomMartyrs = getRandomMartyrs(id);
        const otherPhotos = randomMartyrs.map(m => `
            <div 
                class="mini-avatar clickable" 
                title="${m.name}" 
                data-target-id="${m.id}" 
                style="background-image:url('${m.image}')"
            ></div>
        `).join('');

        const footer = `
            <div class="other-martyrs-footer">
                <p>عکس‌های دیگر شهدا</p>
                <div class="mini-photos-container">${otherPhotos}</div>
            </div>
        `;

        // 3. مونتاژ نهایی پنل و باز کردن
        detailCard.innerHTML = `
            <button class="close-btn" id="closeDetailInner">بستن ✕</button>
            ${details}
            ${footer}
        `;
        
        panel.classList.add('open');
        
        // 4. اضافه کردن رویدادهای کلیک (جدید)
        
        // بستن مدال
        document.getElementById('closeDetailInner').addEventListener('click', () => panel.classList.remove('open'));
        
        // کلیک روی عکس‌های کوچک برای تعویض محتوا
        document.querySelectorAll('.mini-avatar.clickable').forEach(miniCard => {
            miniCard.addEventListener('click', (e) => {
                const newId = Number(e.currentTarget.dataset.targetId);
                // فراخوانی مجدد تابع با ID جدید برای به‌روزرسانی محتوا
                renderDetailPanel(newId);
            });
        });
        
        // مطمئن می‌شویم که مدال به بالای صفحه اسکرول شود
        detailCard.scrollTo({ top: 0, behavior: 'smooth' });
    }
    
    // رویداد کلیک اولیه از صفحه گالری (دایره‌های بزرگ)
    cards.forEach(c => c.addEventListener('click', () => {
        const id = Number(c.dataset.id);
        renderDetailPanel(id);
    }));

    // بستن با کلیک روی پس‌زمینه
    panel.addEventListener('click', (e) => { 
        if (e.target === panel) panel.classList.remove('open'); 
    });
})();


// Horizontal auto-scroll (loop) - (این قسمت کد قبلی شماست)
(function(){
  const track = document.getElementById('htrack');
  let speed = 0.5;
  let pos = 0;

  function step(){
    pos += speed;
    if(pos > track.scrollWidth/2) pos = 0;
    track.scrollLeft = pos;
    requestAnimationFrame(step);
  }
  
  // این کد باعث می‌شود محتوا تکرار شود تا اسکرول حلقوی ایجاد شود.
  const trackElement = document.getElementById('htrack');
  if (trackElement) {
    const children = Array.from(trackElement.children).map(n => n.cloneNode(true));
    children.forEach(c=>trackElement.appendChild(c));
    requestAnimationFrame(step);
  }
})();
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
/* گالری شهدا */
document.addEventListener('DOMContentLoaded', () => {
    
    // === آرایه تصاویر با مسیردهی و نام‌های کامل شما ===
    const BASE_PATH = 'img/archive/'; 

    const images = [
        { url: BASE_PATH + '5872894236120779754.jpg', name: 'یدالله هژبری ماهانی' },
        { url: BASE_PATH + '5872894236120779755.jpg', name: 'احمد خالقی' },
        { url: BASE_PATH + '5872894236120779756.jpg', name: 'محمد شفیع علی آبادی' },
        { url: BASE_PATH + '5872894236120779793.jpg', name: 'محمود مامانی زاده سامانی' },
        { url: BASE_PATH + '5872894236120779791.jpg', name: 'محمد حسین رضایی' },
        { url: BASE_PATH + '5872894236120779792.jpg', name: 'احمد قاسم زاده' },
        { url: BASE_PATH + '5872894236120779757.jpg', name: 'علی اکبر یزدان شناسی' },
        { url: BASE_PATH + '5872894236120779794.jpg', name: 'احمد سلیمانی سامانی' },
        { url: BASE_PATH + '5872894236120779839.jpg', name: 'حسین معصومی سامانی' },
        { url: BASE_PATH + '5872894236120779840.jpg', name: 'محمود گرگیجی ممی آبادی' },
        { url: BASE_PATH + '5877335116340726650.jpg', name: 'ابراهیم علیرضایی سامانی' },
        { url: BASE_PATH + '5877335116340726651 (1).jpg', name: 'امیر رضا ساروقی' },
        { url: BASE_PATH + '5877335116340726656.jpg', name: 'اکبر قاسم زاده' },
        { url: BASE_PATH + '5877335116340726657.jpg', name: 'داود خالقی' }
    ];

    const wrapper = document.querySelector('.carousel-wrapper');
    const captionDisplay = document.querySelector('.caption-display');
    
    // شروع از عکس شماره ۷ (شاخص ۶)
    let currentIndex = 6; 

    function createCarouselItems() {
        if (!wrapper) return;
        
        wrapper.innerHTML = '';
        images.forEach((image, index) => {
            const item = document.createElement('div');
            item.classList.add('carousel-item');
            item.style.backgroundImage = `url('${image.url}')`; 
            item.dataset.index = index;
            
            // اینجا نام واقعی از آرایه به عنوان title آیتم تنظیم می شود
            item.title = image.name; 
            
            item.onclick = () => {
                currentIndex = index;
                updateCarousel();
            };
            wrapper.appendChild(item);
        });
        updateCarousel();
    }

    // تابع اصلی برای به روز رسانی موقعیت و کلاس های اسلایدها
    function updateCarousel() {
        const items = document.querySelectorAll('.carousel-item');
        if (items.length === 0) return;

        const slideSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--slide-size'));
        const gap = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--gap'));
        const itemWidth = slideSize + gap;

        const offset = (currentIndex - 2) * itemWidth;
        wrapper.style.transform = `translateX(${offset}px)`;

        items.forEach((item, index) => {
            item.className = 'carousel-item'; 
            const distance = index - currentIndex;

            if (distance === 0) {
                item.classList.add('active'); 
                
                // === اصلاح: استفاده از نام واقعی برای نمایش کپشن ===
                if (captionDisplay) { 
                    captionDisplay.textContent = images[index].name; 
                }
                // ===============================================
                
            } else if (distance === 1) {
                item.classList.add('next-1'); 
            } else if (distance === 2) {
                item.classList.add('next-2'); 
            } else if (distance > 2) {
                item.classList.add('next-3'); 
            } else if (distance === -1) {
                item.classList.add('prev-1'); 
            } else if (distance === -2) {
                item.classList.add('prev-2'); 
            } else if (distance < -2) {
                item.classList.add('prev-3'); 
            }
        });
    }

    window.moveCarousel = function(direction) {
        const newIndex = currentIndex + direction;

        if (newIndex >= 0 && newIndex < images.length) {
            currentIndex = newIndex;
        } else if (newIndex < 0) {
            currentIndex = images.length - 1;
        } else if (newIndex >= images.length) {
            currentIndex = 0;
        }
        updateCarousel();
    }

    createCarouselItems();
});
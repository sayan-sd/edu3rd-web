// change navebar style when scroll
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
})


// Navbar show in small device
const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');

menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

//Navbar close in small device
const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}
closeBtn.addEventListener('click', closeNav)


// script for carousel
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}


// ============== carousel ===========
const galleryData = [
    {
        imgSrc: "./assets/glry1.png",
        author: "LEARN WELL",
        title: "HIGH TECH",
        topic: "LABS",
        description: "Experience cutting-edge innovation in our High Tech Labs. Equipped with state-of-the-art technology, our labs provide hands-on learning experiences, fostering creativity and mastery in science, engineering, and beyond."
    },
    {
        imgSrc: "./assets/glry2.png",
        author: "LEARN WELL",
        title: "ELITE LEARNING",
        topic: "FEEL",
        description: "Embark on a journey of excellence with Elite Learning. Our tailored curriculum and expert guidance cultivate an atmosphere of academic achievement, fostering growth and success for every student."
    },
    {
        imgSrc: "./assets/glry3.png",
        author: "LEARN WELL",
        title: "REMOTE STUDY",
        topic: "OPTION",
        description: "Embrace flexibility with our Remote Study Option. Access quality education from anywhere, anytime. Stay connected with expert instructors and peers while achieving your academic goals on your schedule."
    },
    {
        imgSrc: "./assets/glry4.png",
        author: "LEARN WELL",
        title: "HIGH QUALITY",
        topic: "MENTOR",
        description: "Elevate your learning journey with our High-Quality Mentorship. Experience personalized guidance from seasoned experts dedicated to nurturing your skills and maximizing your potential for success."
    }
];

// Function to create gallery items dynamically
function createGalleryItem(item) {
    const itemHTML = `
        <div class="item">
            <img src="${item.imgSrc}">
            <div class="content">
                <div class="author">${item.author}</div>
                <div class="title">${item.title}</div>
                <div class="topic">${item.topic}</div>
                <div class="des">${item.description}</div>
                <div class="buttons">
                    <button onclick="window.location.href = './pages/about.html#subscribe-us'">SUBSCRIBE</button>
                    <button onclick="window.location.href = './pages/courses.html'">COURSES</button>
                </div>
            </div>
        </div>
    `;
    return itemHTML;
}

// Function to initialize the gallery
function initializeGallery() {
    const galleryContainer = document.getElementById('gallery');
    galleryData.forEach(item => {
        galleryContainer.innerHTML += createGalleryItem(item);
    });
}

// Initialize the gallery
initializeGallery();


// ============================ FAQS ============================
const faqs = [
    {
        question: 'How can I contact support if I encounter issues with the website?',
        answer: 'If you encounter any issues with the website or have any questions, you can contact our support team via email at support@eduspot.com or by filling out the contact form on the website.'
    },
    {
        question: 'How do I place an order on the website?',
        answer: 'To place an order, simply browse our products, select the items you want to purchase, and proceed to checkout. Follow the prompts to complete your order.'
    },
    {
        question: 'Is there a return policy for products purchased on the website?',
        answer: 'Yes, we have a hassle-free return policy. If youre not satisfied with your purchase, you can return it within 30 days for a full refund or exchange.'
    },
    {
        question: 'Are there any discounts or promotions available?',
        answer: 'Yes, we frequently offer discounts and promotions on our products. Keep an eye on our website or subscribe to our newsletter to stay updated on the latest deals.'
    }
];

// Function to generate HTML for each FAQ
function generateFAQHTML(faq) {
    return `
        <article class="faq faq_question">
            <div class="faq-icon"><i class="fa-solid fa-chevron-down"></i></div>
            <div class="qna">
                <h4>${faq.question}</h4>
                <p>${faq.answer}</p>
            </div>
        </article>
    `;
}

// Function to dynamically generate FAQs
function displayFAQs() {
    const container = document.querySelector('.faqs-container');
    faqs.forEach(faq => {
        const faqHTML = generateFAQHTML(faq);
        container.innerHTML += faqHTML;
    });
}
displayFAQs();

const faqQuestions = document.querySelectorAll('.faq_question');
faqQuestions.forEach(faq_question => {
    faq_question.addEventListener('click', () => {
        faq_question.classList.toggle('open');

        //change icon
        const icon = faq_question.querySelector('.faq-icon i');
        if (icon.className === 'fa-solid fa-chevron-down') {
            icon.className = 'fa-solid fa-chevron-up';
        }
        else {
            icon.className = 'fa-solid fa-chevron-down';
        }
    })
})


// ==================== TESTIMONIALS ===================
const testimonials = [
    {
        name: 'Sayan Das',
        role: 'Developer',
        avatar: './assets/user1.png',
        content: 'Learn Well has been a game-changer for me. The courses are comprehensive, the instructors are knowledgeable and supportive, and the platform is incredibly user-friendly. It has truly transformed my learning journey.',
        rating: 4
    },
    {
        name: 'Emma Johnson',
        role: 'Student',
        avatar: './assets/user2.png',
        content: 'Learn Well has truly transformed my learning experience. The interactive courses, knowledgeable instructors, and supportive community have helped me grasp complex concepts with ease. And the teachers are really helpful.',
        rating: 5
    },
    {
        name: 'Michael Brown',
        role: 'Teacher',
        avatar: './assets/user3.png',
        content: 'Learn Well provides a seamless platform for educators to create and share engaging content with their students. The intuitive interface and robust features make it easy to deliver high-quality instruction and facilitate student learning.',
        rating: 3
    },
    {
        name: 'Sophia Lee',
        role: 'Student',
        avatar: './assets/user4.png',
        content: 'I am incredibly grateful for the opportunity to learn on Learn Well. The courses are well-structured, the instructors are knowledgeable and supportive, and the platform is user-friendly. It has truly exceeded my expectations.',
        rating: 4
    },
    {
        name: 'David Miller',
        role: 'Student',
        avatar: './assets/user5.png',
        content: 'Learn Well has revolutionized the way I teach. The platforms interactive features, comprehensive resources, and collaborative tools have allowed me to create dynamic and engaging lessons that resonate with my students.',
        rating: 5
    }
];

// Function to generate HTML for each testimonial
function generateTestimonialHTML(testimonial) {
    // Generate star icons based on rating
    const starsHTML = Array.from({ length: 5 }, (_, index) => {
        if (index < testimonial.rating) {
            return '<i class="fa-solid fa-star" style="color:var(--color-warning)"></i>';
        } else {
            return '<i class="fa-solid fa-star" style="color:var(--color-gray)"></i>';
        }
    }).join('');

    return `
        <article class="testimonial swiper-slide">
            <div class="testimonial-person">
                <div class="avatar">
                    <img src="${testimonial.avatar}" alt="">
                </div>
                <div class="testimonial-info">
                    <h5>${testimonial.name}</h5>
                    <small>${testimonial.role}</small>
                </div>
            </div>
            <div class="testimonial-body">
                <p>${testimonial.content}</p>
            </div>
            <div class="testimonial-rating">
                ${starsHTML}
                <p>${testimonial.rating}/5</p>
            </div>
        </article>
    `;
}


// Function to dynamically generate testimonial HTML and append to container
function displayTestimonials() {
    const container = document.querySelector('.swiper-wrapper');
    testimonials.forEach(testimonial => {
        const testimonialHTML = generateTestimonialHTML(testimonial);
        container.innerHTML += testimonialHTML;
    });
}
displayTestimonials();
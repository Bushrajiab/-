document.addEventListener('DOMContentLoaded', function() {
    // Slideshow logic
    const images = document.querySelectorAll('.slideshow-image');
    let currentIndex = 0;

    const changeImage = () => {
        images.forEach((img, index) => {
            img.classList.remove('active');
            if (index === currentIndex) {
                img.classList.add('active');
            }
        });
        currentIndex = (currentIndex + 1) % images.length;
    };

    if (images.length > 0) {
        setInterval(changeImage, 3000);
    }

    // Change image after scrolling past second paragraph
    const paragraphContainer = document.getElementById('second-paragraph');
    const paragraphImage = document.getElementById('paragraph-image');

    if (paragraphContainer && paragraphImage) {
        window.addEventListener('scroll', () => {
            const rect = paragraphContainer.getBoundingClientRect();
            const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

            const linesScrolled = Math.ceil((viewportHeight - rect.top) / (rect.height / 4));

            if (linesScrolled >= 3) {
                paragraphImage.src = 'photo_2024-09-27_17-58-50.jpg';
            }
        });
    }

    // Scrollable content visibility logic
    const scrollableContent = document.querySelector('.scrollable-content');
    const scrollableSection = document.querySelector('.scrollable-section');
    const scrollableContent1 = document.querySelector('.scrollable-content1');
    const scrollableSection1 = document.querySelector('.scrollable-section1');

    function handleScroll(content, section) {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        console.log('Scroll event fired:', sectionTop <= viewportHeight); // Debugging

        if (sectionTop <= viewportHeight) {
            content.style.opacity = 1;
        } else {
            content.style.opacity = 0;
        }
    }

    // Scroll event listeners
    if (scrollableContent && scrollableSection) {
        window.addEventListener('scroll', () => {
            handleScroll(scrollableContent, scrollableSection);
        });
    }

    if (scrollableContent1 && scrollableSection1) {
        window.addEventListener('scroll', () => {
            handleScroll(scrollableContent1, scrollableSection1);
        });
    }
});
document.addEventListener('DOMContentLoaded', function() {
    // Previous JS logic...

    // Scrollable content visibility logic for new paragraph
    const scrollableContent3 = document.querySelector('#third-content');
    const scrollableSection3 = document.querySelector('#third-section');

    function handleScroll(content, section) {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;

        console.log('Scroll event fired:', sectionTop <= viewportHeight);

        if (sectionTop <= viewportHeight) {
            content.style.opacity = 1;
        } else {
            content.style.opacity = 0;
        }
    }

    // Scroll event listeners
    if (scrollableContent3 && scrollableSection3) {
        window.addEventListener('scroll', () => {
            handleScroll(scrollableContent3, scrollableSection3);
        });
    }
});

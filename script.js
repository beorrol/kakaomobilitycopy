$(document).ready(function() {
    $('.todayRidekm').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-count');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },

        {
            duration: 3000,
            easing: 'linear',
            step: function() {
                $this.text(formatNumber(Math.floor(this.countNum)));
            },
            complete: function() {
                $this.text(formatNumber(this.countNum));
            }
        });

        // 숫자를 형식화하는 함수
        function formatNumber(num) {
            return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const videoElement = document.querySelector('.sec2-1RightVideo');

    function checkVisibility() {
        const rect = videoElement.getBoundingClientRect();
        const section = document.querySelector('.sec2').getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && section.top < window.innerHeight && section.bottom > 0) {
            videoElement.classList.add('visible');
        }
    }

    function handleScroll() {
        if (window.scrollY > 0) {
            header.classList.add('header-white');
        } else {
            header.classList.remove('header-white');
        }
        checkVisibility();
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 상태 체크
});

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.querySelector('.sec2-2LeftVideo');

    function checkVisibility() {
        const rect = videoElement.getBoundingClientRect();
        const section = document.querySelector('.sec2').getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && section.top < window.innerHeight && section.bottom > 0) {
            videoElement.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 초기 상태 체크
});

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.querySelector('.sec2-3RightImg');

    function checkVisibility() {
        const rect = videoElement.getBoundingClientRect();
        const section = document.querySelector('.sec2').getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight && section.top < window.innerHeight && section.bottom > 0) {
            videoElement.classList.add('visible');
        }
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // 초기 상태 체크
});
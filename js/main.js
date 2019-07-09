$(document).ready(function () {

    $(window).scroll(function () { isElementVisible("works") });
    $(window).scroll(function () { isElementVisible("team") });
    $('.nav-item').click(function (event) { scrollToSection(event); return; });

    function scrollToSection(event) {
        let navHeight = document.getElementsByTagName("nav")[0].offsetHeight;

        let targetId = event.target.title;
        let targetElement = document.getElementById(targetId);

        let targetElementTop = targetElement.offsetTop - navHeight;

        window.scrollTo({
            top: targetElementTop,
            behavior: 'smooth'
        });

        return;
    }

    $(window).scroll(function () {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
    });

    $("#slide").on('slide.bs.carousel', function (event) {
        let to = event.to;
        let from = event.from;
        let quote = document.getElementById("quote");
        let author = document.getElementById("author");

        let carouselIndicators = document.getElementsByClassName("carousel-indicators")[1];

        let caption = document.getElementsByClassName("carousel-caption")[to];

        carouselIndicators.children[from].classList.remove("active");
        carouselIndicators.children[to].classList.add("active");

        quote.innerText = caption.children[0].innerText;
        author.innerText = caption.children[1].innerText;
    });

    function isElementVisible(eleId) {

        let windowHeight = window.innerHeight;
        let element = document.getElementById(eleId);
        let eleOffsetTop = element.offsetTop;

        let eleVisibleYOffset = eleOffsetTop - windowHeight;

        if (window.pageYOffset > eleVisibleYOffset + windowHeight / 3) {
            // $(window).off("scroll"); // removed the previosly attached event listener
            showElementsRandomly();
        }
    }

    // fade-in each .work elements
    function showElementsRandomly() {
        let elements = $(".work");

        let delay = 0;

        for (let i = 0; i < elements.length; i++) {
            $(".work:eq(" + i + ")").fadeIn(delay);
            delay += 200;
        }

    }
});

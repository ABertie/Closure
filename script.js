const ABertieSlider = (function (carosel__slide, carosel__forwardButton, carosel__backButton, carosel__spots, carosel__spot, highlight) {
     /* var carosel__slide, carosel__forwardButton, carosel__backButton, carosel__spots, carosel__spot, highlight; */
    
    function init(containerThatWillSlide, forwardButton, backButton, navContainer, navContainer__buttons, navContainer__highlightButton) {
        carosel__slide = containerThatWillSlide;
        carosel__forwardButton = forwardButton;
        carosel__backButton = backButton; 
        carosel__spots = navContainer;
        carosel__spot = navContainer__buttons;
        highlight = navContainer__highlightButton;
    };
    
    // link animatonsiden til head her
    
    const CAROSEL_SLIDE = document.getElementsByClassName(carosel__slide);
    CAROSEL_SLIDE.classList.add('animate__animated');
    const CAROSEL_FORWARD = document.getElementsByClassName(carosel__forwardButton);
    const CAROSEL_BACK = document.getElementsByClassName(carosel__backButton);
    const SPOTS = document.getElementsByClassName(carosel__spots);
    const SLIDE = [
        '<img src="img/pexels-karolina-grabowska-4041122.jpg">',
        '<section class="full-width"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam et, quae ab vitae labore rem veritatis libero repudiandae ullam quaerat sed autem earum fugiat odit similique aliquid aliquam dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam et, quae ab vitae labore rem veritatis libero repudiandae ullam quaerat sed autem earum fugiat odit similique aliquid aliquam dignissimos?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium perferendis suscipit ducimus cumque, debitis labore aut unde ab sit voluptatum error, ea dignissimos voluptatem necessitatibus blanditiis dolore culpa, doloribus quas!</p><button>læs mere</button></section>',
        '<img src="img/pexels-jonathan-borba-15560669.jpg"><article><h3>Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repellendus temporibus reiciendis voluptatibus dolorum dolore adipisci, recusandae nostrum. Repellat cupiditate sed molestias laborum sit ipsa ullam neque sapiente numquam perspiciatis.Quae rerum iusto autem. Aliquam nam consequatur facilis esse excepturi quam tempore nulla laborum recusandae rem ad culpa, quo possimus nobis commodi quia ratione dolores minus totam nemo corrupti ut?Magnam neque dignissimos excepturi, earum unde, non nam soluta rerum reiciendis dolor deserunt autem temporibus quas quo, cumque fugit blanditiis pariatur consequuntur! Delectus, dolorum! Consectetur a officiis expedita nobis nisi!</p></article>',
        '<img src="img/pexels-mikhail-nilov-6957667.jpg" alt=""><img src="img/pexels-mikhail-nilov-6957926.jpg" alt="">',
        '<article><h3>Lorem ipsum dolor sit amet</h3><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus repellendus temporibus reiciendis voluptatibus dolorum dolore adipisci, recusandae nostrum. Repellat cupiditate sed molestias laborum sit ipsa ullam neque sapiente numquam perspiciatis.Quae rerum iusto autem. Aliquam nam consequatur facilis esse excepturi quam tempore nulla laborum recusandae rem ad culpa, quo possimus nobis commodi quia ratione dolores minus totam nemo corrupti ut?Magnam neque dignissimos excepturi, earum unde, non nam soluta rerum reiciendis dolor deserunt autem temporibus quas quo, cumque fugit blanditiis pariatur consequuntur! Delectus, dolorum! Consectetur a officiis expedita nobis nisi!</p></article><img src="img/pexels-nati-16233384.jpg">'
    ];

    var index = 0;
    CAROSEL_SLIDE.innerHTML = (SLIDE[index]);
    
    SLIDE.forEach(function () {
        const CREATESPOT = document.createElement("button");
        CREATESPOT.classList.add(carosel__spot);
        SPOTS.appendChild(CREATESPOT);
    });
    const BUTTONS = SPOTS.querySelectorAll("button");
    
    CAROSEL_FORWARD.addEventListener("click", shuffleForward);
    CAROSEL_BACK.addEventListener("click", shuffleBack);
    CAROSEL_SLIDE.addEventListener("animationend", disabelAnimation);
    
    function highlightButton() {
        BUTTONS.forEach(function (button, i) {
            if (index === i) {
                button.classList.add(highlight);
            } else {
                button.classList.remove(highlight);
            };
            button.addEventListener("click", function () {
                if (index < i) {
                    CAROSEL_SLIDE.classList.add('animate__fadeOutLeftBig');
                } else {
                    CAROSEL_SLIDE.classList.add('animate__fadeOutRightBig');
                }
                index = i;
                highlightButton();
            });
        });
    };
    highlightButton();
    
    function shuffleForward() {
        index++;
        if (SLIDE.length === index) {
            index = 0;
        };
        CAROSEL_SLIDE.classList.add('animate__fadeOutLeftBig');
    };
    
    function shuffleBack() {
        if (index === 0) {
            index = SLIDE.length;
        }
        index--;
        CAROSEL_SLIDE.classList.add('animate__fadeOutRightBig');
    };
    
    function disabelAnimation() {
        if (CAROSEL_SLIDE.classList.contains('animate__fadeOutRightBig')) {
            CAROSEL_SLIDE.classList.remove('animate__fadeOutRightBig');
            CAROSEL_SLIDE.innerHTML = (SLIDE[index]);
            CAROSEL_SLIDE.classList.add('animate__fadeInLeftBig');
        } else {
            CAROSEL_SLIDE.classList.remove('animate__fadeInLeftBig');
        };
        
        if (CAROSEL_SLIDE.classList.contains('animate__fadeOutLeftBig')) {
            CAROSEL_SLIDE.classList.remove('animate__fadeOutLeftBig');
            CAROSEL_SLIDE.innerHTML = (SLIDE[index]);
            CAROSEL_SLIDE.classList.add('animate__fadeInRightBig');
        } else {
            CAROSEL_SLIDE.classList.remove('animate__fadeInRightBig');
        };
    };
    
    return {
        init
    }

})('carosel__slide','carosel__forwardButton','carosel__backButton','carosel__spots','carosel4__spot','highlight')

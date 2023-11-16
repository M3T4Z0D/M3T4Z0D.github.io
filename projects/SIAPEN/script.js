const background = document.querySelector('body').style.backgroundImage;

let sliders = [
    {number: 1, current: true}, 
    {number: 2, current: false},
    {number: 6, current: false},
    {number: 9, current: false}, 
    {number: 11, current: false}
];

const slidersSize = sliders.length - 1

const getCurrent = () => {
    let current = null;
    
    sliders.forEach((slide, index) => {
        if (slide.current) {
            current = index
        }
    })

    return current;
}

const nextSlider = (current) => {
    
    let left = slidersSize - current;

    sliders[current].current = false;

    if (left !== 0) {
        sliders[current + 1].current = true;
    }
    else {
        sliders[left].current = true;
    }
}

setInterval(() => {

    let current = getCurrent();

    let image = sliders[current].number.toString();

    let bgSlide = `url("./images/background/bgslide${image}.jpg")`;

    document.body.style.backgroundImage = bgSlide;

    nextSlider(current);

}, 10000);
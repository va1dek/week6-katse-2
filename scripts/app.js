console.log("tere")
const slides = document. getElementsByClassName('carousel__item');
const slidesTotal = slides.length;
const nextButton = document. querySelector('#carousel__button--next');
const prevButton = document. querySelector('#carousel__button--prev');

let slidePosition = 0; 

nextButton.addEventListener('click', ()=>{
    console.log('click from next')

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible')
    }
    if(slidePosition === slidesTotal - 1){
       slidePosition = 0; 
    } else{
        slidePosition++;
    }

    slides[slidePosition].classList.add('carousel__item--visible');
});





prevButton.addEventListener('click', ()=>{
    console.log('click from prev')

    for(let slide of slides){
        slide.classList.remove('carousel__item--visible')
    }
    if(slidePosition === 0){
       slidePosition = slidesTotal - 1; 
    } else{
        slidePosition--;
    }

    slides[slidePosition].classList.add('carousel__item--visible');

})







//select movie poster original image
let moviePoster = document.querySelector('.movie-poster');
//select model windov layer
let modal = document.querySelector('#myModal');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalImage = document.querySelector('.modal-content img');


moviePoster.addEventListener('click',()=> {
console.log('image cliced');
modal.style.display = 'block';
modalImage.src = moviePoster.src;
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';   
} );

window.addEventListener('click', (event) => {
if(event.target === modal){
    modal.style.display = 'none'  
}
} );



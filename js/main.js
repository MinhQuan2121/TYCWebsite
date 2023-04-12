const toggler = document.querySelector('.toggler');
const menu_toggler = document.querySelector('.menu-toggler');

toggler.onclick = function(){
    menu_toggler.classList.toggle('open');
    toggler.classList.toggle('active');
}

const modalViews = document.querySelectorAll('.modal-content'),
    modalBtns = document.querySelectorAll('.modalBtns'),
    modalCloses = document.querySelectorAll('.modalCloses')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active-modal')
        })
    })
})

const carousel = document.querySelector(".carousel"),
    firstImg = carousel.querySelectorAll('img')[0];
    arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth * 14;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
});



const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carousel.classList.add('dragging')
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = e.prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mouseup', dragStop);



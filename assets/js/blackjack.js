// Add style to big card container
const cardContainers = document.querySelectorAll(".blackjack-card-container");
cardContainers.forEach(container => {
    const cards = container.querySelectorAll(".card-sprite");
    const addLeft = 100 / (cards.length + 1);
    const rotate = 8 / (cards.length - 1);
    let rotateStyle = -4;
    let classLeft = addLeft;

    cards.forEach(card => {
        card.style.left = `${classLeft}%`;
        card.style.transform = `translate(-50%, 0) rotate(${rotateStyle}deg)`;
        classLeft += addLeft;
        rotateStyle += rotate;
    })  
})

// Add style to small card container
const cardContainersMini = document.querySelectorAll(".blackjack-card-container-mini");
let miniBottomStyle = 10;

cardContainersMini.forEach(container => {
    const cards = container.querySelectorAll(".card-sprite");
    const addLeft = 100 / (cards.length + 1);
    const rotate = 12 / (cards.length - 1);
    let rotateStyle = cards.length > 1 ? -6 : 0;
    let classLeft = addLeft;

    container.style.bottom = `${miniBottomStyle}%`;
    miniBottomStyle += 20;
    cards.forEach(card => {
        card.style.left = `${classLeft}%`;
        card.style.transform = `translate(-50%, 0) rotate(${rotateStyle}deg)`;
        classLeft += addLeft;
        rotateStyle += rotate;
    }) 
})
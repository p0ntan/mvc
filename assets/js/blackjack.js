const cardContainers = document.querySelectorAll(".blackjack-card-container");
cardContainers.forEach(container => {
    const cards = container.querySelectorAll(".card-sprite");
    const addLeft = 100 / (cards.length + 1);
    const rotate = 8 / (cards.length - 1);
    console.log(rotate);
    let rotateStyle = -4;
    let classLeft = addLeft;
    cards.forEach(card => {
        card.style.left = `${classLeft}%`;
        card.style.transform = `translate(-50%, 0) rotate(${rotateStyle}deg)`;
        classLeft += addLeft;
        rotateStyle += rotate;
    })  
})
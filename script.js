//creating variable
const starsEl = document.querySelectorAll(".fa-star");

const emojisEl = document.querySelectorAll(".fa-regular");

const colorsEl = ["red", "orange", "lightblue", "lightgreen", "green"]

updateRating(0);

//creating function
starsEl.forEach((starsEl, index) => {

    //adding event listener
    starsEl.addEventListener("click", () => {

        updateRating(index);
    });

});


function updateRating(index) {
    starsEl.forEach((starsEl, idx) => {
        if (idx < index + 1) {
            starsEl.classList.add("active");

        }
        else {
            starsEl.classList.remove("active");
        }
    });

    emojisEl.forEach((emojiEl) => {
        emojiEl.style.transform = `translateX(-${index * 56}px)`

        emojiEl.style.color = colorsEl[index]
    })


}








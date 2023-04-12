
// Attach reviewData to the global window Object
// so other scripts can access it at runtime.

window.reviewData = [
    {
        name: "Phena",
        date: "04/09/2013",
        rating: 4.5,
        review: "This game was pretty great. I am the competitive type so imagine how many new words I learned because I wanted to win. Would definitely recommend "
    },
    {
        name: "Jochebed",
        date: "23/12/2015",
        rating: 3.8,
        review: "Good game, nothing too special but I great for family game night"
    },
    {
        name: "David",
        date: "20/02/2022",
        rating: 4,
        review: "Super fun game. Played it for the first time today and I regret never knowing about it all these years. It is not my typical type of game but I absolutely cannot wait to introduce it to my family "
    },
    {
        name: "Nicholas",
        date: "01/05/2010",
        rating: 5,
        review: "Phenomenal game. A Great learning tool for the kids"
    },
    {
        name: "Elvis",
        date: "22/04/2020",
        rating: 3,
        review: "Okay game, chess is better."
    }
	/* Your Review Data Goes Here… */
];

const {reviewData} = window;
function createCard(review){
    const card = document.createElement("div");
    card.classList.add("card");

    let reviewer = document.createElement("h3");
    reviewer.innerText = review.name;
    card.appendChild(reviewer);
   
    let date = document.createElement("time");
    date.innerText= review.date;
    card.appendChild(date);

    let message = document.createElement("blockquote");
    message.innerText = review.review;
    card.appendChild(message);

    return card;
}
console.log({reviewData}, "Data");
window.onload = function(){
    const form = document.querySelector("form");
    var cards = document.getElementById("review-cards");
    reviewData.forEach((data) => {
        let result = createCard(data);
        console.log(result);
        cards.appendChild(result);
    });
   // const createButton = document.getElementById("create");
    form.addEventListener("submit", function(e){
        e.preventDefault();
        cards.innerHTML ="";

        let name = document.getElementById("name").value;
        let date = document.getElementById("date").value;
        let rating = document.getElementById("rating").value;
        let review = document.getElementById("review").value;

        const newReview = {name, date, rating, review};
        console.log(newReview);
        reviewData.push(newReview);
        form.reset();
        reviewData.forEach((data) => {
            let result = createCard(data);
            console.log(result);
            cards.appendChild(result);
        });
       
    });
    console.log(reviewData);
     //var container = document.querySelector("card-container");
     
     return cards;
}

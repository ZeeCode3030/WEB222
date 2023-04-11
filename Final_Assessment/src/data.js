
// Attach reviewData to the global window Object
// so other scripts can access it at runtime.
window.reviewData = [
    {
        id: "phena",
        name: "Phena",
        date: "04/09/2013",
        rating: 4.5,
        review: ""
    },
    {
        id: "Jochy",
        name: "Jochebed",
        date: "23/12/2015",
        rating: 3.8,
        review: ""
    },
    {
        id: "david",
        name: "David",
        date: "20/02/2022",
        rating: 4,
        review: ""
    },
    {
        id: "nick",
        name: "Nicholas",
        date: "01/05/2010",
        rating: 5,
        review: ""
    },
    {
        id: "elvis",
        name: "Elvis",
        date: "22/04/2020",
        rating: 4.5,
        review: ""
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
    //var container = document.querySelector("card-container");
    var cards = document.getElementById("review-cards");
    reviewData.forEach((data) => {
        let result = createCard(data);
        console.log(result);
        cards.appendChild(result);
    });

    return cards;
}
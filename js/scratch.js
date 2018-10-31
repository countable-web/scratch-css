class FeedbackUI {

    static openAndClose(feedbackElement) {
        //opening and closing animation

        let feedback = feedbackElement;

        if (feedback.classList.contains("feedback-open")) {
            feedback.classList.remove("feedback-open");
            feedback.classList.add("feedback-close");
        } else {
            feedback.classList.remove("feedback-close");
            feedback.classList.add("feedback-open");
        }
    }

}


class StarUI {
     static clickToRating() {
         let stars = document.querySelectorAll(".star-review");
         let outlineStarPath = "../images/widgets/components/rating-star-outline.svg";
         let filledStarPath = "../images/widgets/components/rating-star.svg";

         stars.forEach((star) => {
             star.addEventListener('click', function (e) {
                 let _this = e.target;
                 let starId = _this.getAttribute("data-star-id"); //lets get the star number

                 //set everyone to outline
                 stars.forEach((star) => {
                     if (star.getAttribute("data-star-id") > starId) {
                         star.setAttribute("src", outlineStarPath);
                     } else {
                         star.setAttribute("src", filledStarPath)
                     }

                 })


             });
         })
     }
}


/*#############################################################|
|                        SCRATCH CSS
*##############################################################*/

document.addEventListener('DOMContentLoaded', function () {


    /*#############################################################|
    |                        FEEDBACK WIDGET
    *##############################################################*/

    document.querySelector(".feedback-title").addEventListener('click', function (e) {
        FeedbackUI.openAndClose(e.target.parentElement);
    });

    StarUI.clickToRating();




}, false);
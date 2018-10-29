$(function () {

    let options = ["Forms", "Buttons", "Inputs"]

    //add dinamically generated options to menu

    for (let option of options) {
        let decorator = `<li>
                <a href="views/${option.toLowerCase()}.html">${option}</a>
            </li>`;
        $(".components-list").append(decorator);

    }


});
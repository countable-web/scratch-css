$(function () {


    let path = "";
    if(window.location.href.indexOf("documentation") > -1) {
        path = "views/";
    }


    let decorator = `
                <li>
                    <a href="${path}forms.html">Forms</a>
                 </li>
                
                <li>
                    <a href="${path}buttons.html">Buttons</a>
                </li>
                <li>
                    <a href="${path}inputs.html">Inputs</a>
                </li>
           `;
    $(".components-list").append(decorator);


});
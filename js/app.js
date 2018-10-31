$(function () {

    /*#############################################################|
    |                        SCRATCH CSS
    *##############################################################*/


    let path = "";
    if (window.location.href.indexOf("documentation") > -1) {
        path = "views/";
    }

    $(".components-list").html("");

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
                <li>
                    <a href="${path}feedback.html">Feedback</a>
                </li>
           `;
    $(".components-list").append(decorator);


    /*#############################################################|
    |                   COPY TO CLIPBOARD PLUGIN
    *##############################################################*/

    $('button[data-toggle="tooltip"]').tooltip({
        animated: 'fade',
        placement: 'bottom',
        trigger: 'click',
        delay: { "show": 10, "hide": 100 }
    });

    $('button[data-toggle="tooltip"]').on("click", function() {

        setTimeout(() => {

            $(this).click(); //click to hide


        },2000)


    });


    let clipboard = new ClipboardJS('.btn-copy-clipboard');



});
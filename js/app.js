$(function () {

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
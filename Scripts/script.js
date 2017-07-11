$(document).ready(function () {
    $(".flip:first").next(".panel").slideDown("slow");
    $(".flip").click(function () {
        $(".panel").slideUp('slow');
        if ($(this).next(".panel").is(':visible')) {
            $(this).next(".panel").slideUp("slow");
        }
        else {
            $(this).next(".panel").slideDown("slow");
        }
    });
});
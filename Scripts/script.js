/*
*When updating the javascript, don't forget to change the v value to refresh
*/
$(document).ready(function () {
    //$("#headshotDiv").fadeIn('slow');
    $(".panel").slideDown('slow');
    //$(".flip:first").next(".panel").slideDown("slow");
    //$(".flip").click(function () {
    //    $(".panel").slideUp('slow');
    //    if ($(this).next(".panel").is(':visible')) {
    //        $(this).next(".panel").slideUp("slow");
    //    }
    //    else {
    //        $(this).next(".panel").slideDown("slow");
    //    }
    //});
    $('ul.nav').find('a').click(function () {
        var $href = $(this).attr('href');
        var $anchor = $('#' + $href).offset();
        $('body').animate({ scrollTop: $anchor.top - 10 }, "slow");
        return false;
    });
});


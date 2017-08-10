$(document).ready(function () {
    $(".flip:first").next(".panel").slideDown("slow");
    $(".flip").click(openflip($(this)));
    var skillNav = document.getElementById("skillLink");
    skillNav.addEventListener("click", tellMe, false);
    /*skillNav.click(function () {
        console.log("Running open skills");
        openFlip(document.getElementById("skillPanel"));
    });*/
    var storyNav = document.getElementById("storyLink");
    storyNav.click(function () {
        console.log("Running open story");
        openFlip(document.getElementById("storyPanel"));
    });
    /*<li class="navbar-brand" id="skillLink">Skills</li>
        <li class="navbar-brand" id="storyLink">My Story</li>
        <li class="navbar-brand" id="expLink">Experience</li>
        <li class="navbar-brand" id="contactLink">Links and Contact</li>*/
    function openSkills() {
        console.log("Running open skills");
        openFlip(document.getElementById("skillPanel"));
    };

    function tellMe() {
        alert("Hey");
    }

    function openFlip(flipObject) {
        //Slide up all panels
        $(".panel").slideUp('slow');

        if (flipObject.next(".panel").is(':visible')) {
            flipObject.next(".panel").slideUp("slow");
        }
        else {
            flipObject.next(".panel").slideDown("slow");
        }
    }
});
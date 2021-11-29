var modalShowing = false;
var modal;


$(document).click(function(e) {

    //shows a modal for a person
    if(e.target.className == "face" || e.target.className == "personName") {
        $(e.target).parent().find('.modal').css("display", "flex");
        modal = $(e.target).parent().find('.modal');
        setTimeout( function() {
            modalShowing = true;
        }, 500);
    }

    //hides a modal if clicked on close modal button

    if(e.target.className == "closeModal") {
        $(e.target).parents('.modal').css("display", "none");
        setTimeout( function() {
            modalShowing = false;
        }, 500);
    }

    //hides modal if clicked outside modal
    if (!$(e.target).closest('.modal-content').length == 1 && modalShowing) { //clicked off the modal
        modal.css("display", "none");
            setTimeout( function() {
                modalShowing = false;
        }, 500);
    }
});

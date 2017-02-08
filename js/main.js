// The page that runs the script...wait...

// Calling Jake Wearey
$(function() {
    // Variables
    var button = $("#generate");
    var input = $("#input");

    button.click(function() {
        acronymize(input);
    });

});

// TODO: Check for length of input

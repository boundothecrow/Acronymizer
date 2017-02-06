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


/*
    For my own reference: I found this on StackOverflow

    for (var i = 0, len = str.length; i < len; i++) {
        alert(str[i]);
    }

    So I can take each letter and split the strings
*/

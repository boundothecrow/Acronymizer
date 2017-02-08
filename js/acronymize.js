//TODO: Make up mind if it's going to be called "explicit", "sailor mouth", or "dirty words"

// Get the elements
var container = $("#cont");
var topCont = $("#letters");
var bottomCont = $("#words");
var checkbox = $("#nsfw");

var dirty = false; // By default, have the option to include explicit words be false


// Attributes
var attrNormal = "container-fluid text-center";
var attrAlert = "container-fluid text-center bg-warning";

var acrobet;  // Acronym Alphabet
$.getJSON('/js/acrobet.json', function(d) {
    acrobet = d;
});

/**
  * Take the input, and turn it into an acronym, and associate a word to each letter
  */
function acronymize(inp) {
    var len = inp.val().length; // Length of input
    var chars = inp.val().toLowerCase().split(''); // Take each character from the input, and put into an array
    var i = 0; // Used in for loop

    topCont.html('');    // Empty out
    bottomCont.html(''); // everything

    // If there's only two characters or less, let them know they're wrong
    if (inp.val().length < 2) {
        container.attr('class', attrAlert);
        topCont.append("Not enough characters!");
    }

    // If there's up to 35 characters or more, then scream and slap the user pn the hand
    else if (inp.val().length > 35) {
        container.attr('class', attrAlert);
        topCont.append("Too long, too long!!");
    }

    // Use RegEx to check for any symbols, and spaces.  Only characters allowed!
    else if (/^[a-zA-Z]*$/.test(inp.val()) == false) {
        container.attr('class', attrAlert);
        topCont.append("Sorry, symbols and numbers are not allowed");
    }

    // ...is...is it gone?  Good, proceed like nothing happened
    else {
        container.attr('class', attrNormal);
        topCont.html('<h1>' + inp.val() + '</h1>');
        for (i; i < len; i++) {
            bottomCont.append(letterCheck(chars[i]) + " ");
        }
    }
}

/**
  * Ranom number
  */
function randomNum(num) {
    return Math.floor(Math.random() * num);
}

/**
  * Based on which option is checked, include or
  * don't include the "dirty" words
  */
function cleanOrDirty() {
    if (checkbox.prop('checked')) {
        dirty = true;
    } else {
        dirty = false;
    }
}

/**
  * They say in order to get a job, you need experience.
  * But in order to get experience, you need a job.
  * Or just learn from your mistakes.
  * If this is a terrible method to achieve what I need, then please don't let this reflect me overall.
  * I know there's a better way, I just don't know what yet.
  */
function letterCheck(char) {

    var acroMild = acrobet.mild;
    var acroExplicit = acrobet.explicit;
    var acro = acroMild; // By default, only use the mild words

    var ran = randomNum(4); // Chosing a random number between 0 and 3

    cleanOrDirty();

    // If checkmarked, then run this
    if (dirty == true) {
        if (ran == 3) { // If the number rolled is 3, then it's sailor mouth time
            acro = acroExplicit;
        }
    }

    switch (char) {
        case 'a': return acro.a[randomNum(acro.a.length)];
        case 'b': return acro.b[randomNum(acro.b.length)];
        case 'c': return acro.c[randomNum(acro.c.length)];
        case 'd': return acro.d[randomNum(acro.d.length)];
        case 'e': return acro.e[randomNum(acro.e.length)];
        case 'f': return acro.f[randomNum(acro.f.length)];
        case 'g': return acro.g[randomNum(acro.g.length)];
        case 'h': return acro.h[randomNum(acro.h.length)];
        case 'i': return acro.i[randomNum(acro.i.length)];
        case 'j': return acro.j[randomNum(acro.j.length)];
        case 'k': return acro.k[randomNum(acro.j.length)];
        case 'l': return acro.l[randomNum(acro.l.length)];
        case 'm': return acro.m[randomNum(acro.m.length)];
        case 'n': return acro.n[randomNum(acro.n.length)];
        case 'o': return acro.o[randomNum(acro.o.length)];
        case 'p': return acro.p[randomNum(acro.p.length)];
        case 'q': return acro.q[randomNum(acro.q.length)];
        case 'r': return acro.r[randomNum(acro.r.length)];
        case 's': return acro.s[randomNum(acro.s.length)];
        case 't': return acro.t[randomNum(acro.t.length)];
        case 'u': return acro.u[randomNum(acro.u.length)];
        case 'v': return acro.v[randomNum(acro.v.length)];
        case 'w': return acro.w[randomNum(acro.w.length)];
        case 'x': return acro.x[randomNum(acro.x.length)];
        case 'y': return acro.y[randomNum(acro.y.length)];
        case 'z': return acro.z[randomNum(acro.z.length)];
        default: break;

    }
}

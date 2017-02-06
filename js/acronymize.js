//TODO: Check if there's a lot of words (less than 5 maybe).  If no words are detected, do a character count (can't have it too big)

// Get the elements
var topCont = $("#letters");
var bottomCont = $("#words");

var acrobet;  // Acronym Alphabet
$.getJSON('/js/acrobet.json', function(d) {
    acrobet = d;
});



/**
  * Take the input, and turn it into an acronym
  */
function acronymize(inp) {
    var len = inp.val().length;
    var chars = inp.val().toLowerCase().split('');
    var i = 0;

    bottomCont.html('');

    topCont.html('<h1>' + inp.val() + '</h1>');
    for (i; i < len; i++) {
        if (chars[i] !== ' ') {
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
  * They say in order to get a job, you need experience.
  * But in order to get experience, you need a job.
  * Or just learn from your mistakes.
  * I hope one day I can figure out a better way to do this than...this...
  */
function letterCheck(char) {
    switch (char) {
        case 'a':
            return acrobet.mild.a[randomNum(acrobet.mild.a.length)];

        case 'b':
            return acrobet.mild.b[randomNum(acrobet.mild.b.length)];

        case 'c':
            return acrobet.mild.c[randomNum(acrobet.mild.c.length)];

        case 'd':
            return acrobet.mild.d[randomNum(acrobet.mild.d.length)];

        case 'e':
            return acrobet.mild.e[randomNum(acrobet.mild.e.length)];

        case 'f':
            return acrobet.mild.f[randomNum(acrobet.mild.f.length)];

        case 'g':
            return acrobet.mild.g[randomNum(acrobet.mild.g.length)];

        case 'h':
            return acrobet.mild.h[randomNum(acrobet.mild.h.length)];

        case 'i':
            return acrobet.mild.i[randomNum(acrobet.mild.i.length)];

        case 'j':
            return acrobet.mild.j[randomNum(acrobet.mild.j.length)];

        case 'k':
            return acrobet.mild.k[randomNum(acrobet.mild.j.length)];

        case 'l':
            return acrobet.mild.l[randomNum(acrobet.mild.l.length)];

        case 'm':
            return acrobet.mild.m[randomNum(acrobet.mild.m.length)];

        case 'n':
            return acrobet.mild.n[randomNum(acrobet.mild.n.length)];

        case 'o':
            return acrobet.mild.o[randomNum(acrobet.mild.o.length)];

        case 'p':
            return acrobet.mild.p[randomNum(acrobet.mild.p.length)];

        case 'q':
            return acrobet.mild.q[randomNum(acrobet.mild.q.length)];


        case 'r':
            return acrobet.mild.r[randomNum(acrobet.mild.r.length)];


        case 's':
            return acrobet.mild.s[randomNum(acrobet.mild.s.length)];


        case 't':
            return acrobet.mild.t[randomNum(acrobet.mild.t.length)];


        case 'u':
            return acrobet.mild.u[randomNum(acrobet.mild.u.length)];


        case 'v':
            return acrobet.mild.v[randomNum(acrobet.mild.v.length)];


        case 'w':
            return acrobet.mild.w[randomNum(acrobet.mild.w.length)];


        case 'x':
            return acrobet.mild.x[randomNum(acrobet.mild.x.length)];


        case 'y':
            return acrobet.mild.y[randomNum(acrobet.mild.y.length)];


        case 'z':
            return acrobet.mild.z[randomNum(acrobet.mild.z.length)];

        default:
            break;

    }
}

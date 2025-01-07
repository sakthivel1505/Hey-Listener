const c10 = document.getElementsByClassName("c10");
const tit=document.getElementsByClassName("tit");

const r1 = document.getElementsByClassName("r1");
const r2 = document.getElementsByClassName("r2");
const r3 = document.getElementsByClassName("r3");
const r4 = document.getElementsByClassName("r4");
const r5 = document.getElementsByClassName("r5");
const r6 = document.getElementsByClassName("r6");
const r7 = document.getElementsByClassName("r7");
const r8 = document.getElementsByClassName("r8");
const r9 = document.getElementsByClassName("r9");
const r10 = document.getElementsByClassName("r10");

// Text content to display on mouseover for each element in r1-r10
const textContent0 = ["Nai Form",	"Te Form",	"Ta Form"	,"Masu Form","Tai Form"];
const textContent1 = ["でない",	"でつ"	,"でった"	,"でます",	"でたい"];
const textContent2 = ["でんわしない",	"でんわして",	"でんわした",	"でんわします"	,"でんわしたい"];
const textContent3 = ["とまりない",	"とまって",	"とまった"	,"とまります"	,"とまりたい"];
const textContent4 = ["とめない",	"とめて", "とめた"	,"とめます",	"とめたい"];
const textContent5 = ["とりない",	"とって",	"とった",	"とります",	"とりたい"];
const textContent6 = ["とらない",	"とって",	"とった",	"とります",	"とりたい"];
const textContent7 = ["とりない",	"とって",	"とった",	"とります",	"とりたい"];
const textContent8 = ["なおしない",	"なおして",	"なおした",	"なおします",	"なおしたい"];
const textContent9 = ["なくさない","なくして",	"なくした",	"なくします",	"なくしたい"];
const textContent10 = ["なわない",	"ならって",	"ならった",	"ならいます",	"ならたい"];

// Loop through the r1 elements and add mouseover event listeners

Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[0].innerHTML = "でる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[1].innerHTML = "でんわする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"

    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[2].innerHTML = "とまる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[3].innerHTML = "とめる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[4].innerHTML = "とる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[5].innerHTML = "とる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[6].innerHTML = "とる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[7].innerHTML = "なおす"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[8].innerHTML = "なくす"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c10[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c10[9].innerHTML = "ならう"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});
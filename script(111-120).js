const c12 = document.getElementsByClassName("c12");
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
const textContent1 = ["はいらない","はいつて",	"はいつた",	"はいります",	"はいりたい"];
const textContent2 = ["はきない",	"はいて",	"はいた",	"はきます",	"はきたい"];
const textContent3 = ["はじめない",	"はじめて",	"はじめた",	"はじめます",	"はじめたい"];
const textContent4 = ["はたらかない",	"はたらいて",	"はたらいた",	"はたらきます",	"はたらきたい"];
const textContent5 = ["はなしない",	"はなして",	"はなした",	"はなします",	"はなしたい"];
const textContent6 = ["ひきない",	"ひいて",	"ひいた",	"ひきます",	"ひきたい"];
const textContent7 = ["ひかない",	"ひくいて","ひくいた","	ひきます",	"ひきたい"];
const textContent8 = ["ひっこししない",	"ひっこしして",	"ひっこしした",	"ひっこしします",	"ひっこししたい"];
const textContent9 = ["ふらない",	"ふって",	"ふった",	"ふります",	"ふりたい"];
const textContent10 = ["べんきようしない",	"べんきようして",	"べんきようした",	"べんきようします",	"べんきようしたい"];

// Loop through the r1 elements and add mouseover event listeners

Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[0].innerHTML = "はいる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[1].innerHTML = "はく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"

    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[2].innerHTML = "はじめる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[3].innerHTML = "はたらく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[4].innerHTML = "はなす"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[5].innerHTML = "ひく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[6].innerHTML = "ひく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[7].innerHTML = "ひっこしする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[8].innerHTML = "ふる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[9].innerHTML = "べんきようする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});
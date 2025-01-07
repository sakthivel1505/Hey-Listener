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
const textContent1 = ["もらわない",	"もらって",	"もらった",	"もらいます",	"もらいたい"];
const textContent2 = ["やくにたちない",	"やくにたって","やくにたった",	"やくにたちます",	"やくにたちたい"];
const textContent3 = ["やすまない",	"やすんて"	,"やすんた",	"やすみます",	"やみたい"];
const textContent4 = ["やめない",	"やめつて",	"やめつた",	"やめます",	"やめたい"];
const textContent5 = ["よびない",	"よぶ", 	"よやくした",	"よびます",	"よびたい"];
const textContent6 = ["よまない",	"よんて",	"よんた",	"よみます",	"よみたい"];
const textContent7 = ["よやくしない",	"よやくして",	"よやくした",	"よやくします",	"よやくしたい"];
const textContent8 = ["りゅうがくしない",	"りゅうがくして",	"りゅうがくした",	"りゅうがくします",	"りゅうがくしたい"];
const textContent9 = ["れんしゅうしない",	"れんしゅうして",	"れんしゅうした",	"れんしゅうします",	"れんしゅうしたい"];
const textContent10 = ["わからない",	"わかって",	"わかった",	"わかります",	"わかりたい"];

// Loop through the r1 elements and add mouseover event listeners

Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[0].innerHTML = "もらう"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[1].innerHTML = "やくにたつ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"

    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[2].innerHTML = "やすむ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[3].innerHTML = "やめる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[4].innerHTML = "よぶ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[5].innerHTML = "よむ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[6].innerHTML = "よやくする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[7].innerHTML = "りゅうがくする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[8].innerHTML = "れんしゅうする"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c12[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c12[9].innerHTML = "わかる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});
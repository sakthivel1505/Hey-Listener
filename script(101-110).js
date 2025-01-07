const c11 = document.getElementsByClassName("c11");
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
const textContent1 = ["なりない",	"なって",	"なった",	"なります",	"なりたい"];
const textContent2 = ["ぬがない",	"ぬぐいで","	ぬぐいだ",	"ぬぎます",	"ぬぎたい"];
const textContent3 = ["ねない",	"ねて","ねた",	"ねます",	"ねたい"];
const textContent4 = ["のぼりない",	"のぼって","	のぼった",	"のぼります ",	"のぼりたい"];
const textContent5 = ["のみまない","	のんて",	"のんた",	"のみます",	"のみたい"];
const textContent6 = ["のまない",	"のんて",	"のんた",	"のみます",	"のみたい"];
const textContent7 = ["のりかえない",	"のりかつて",	"のりかつて",	"のりかえます",	"のりかえたい"];
const textContent8 = ["のらない",	"のつて",	"のつた",	"のります"	,"のりたい"];
const textContent9 = ["はいらない",	"はいって",	"はいった",	"はいります",	"はいりたい"];
const textContent10 = ["はいらない",	"はいつて",	"はいつた",	"はいります",	"はいりたい"];

// Loop through the r1 elements and add mouseover event listeners

Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[0].innerHTML = "なる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[1].innerHTML = "ぬぐ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[2].innerHTML = "ねる "; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[3].innerHTML = "のぼる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[4].innerHTML = "のむ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[5].innerHTML = "のむ"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[6].innerHTML = "のりかえる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[7].innerHTML = "のる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[8].innerHTML = "はいる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c11[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c11[9].innerHTML = "はいる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});
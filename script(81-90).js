const c9 = document.getElementsByClassName("c9");
const tit=document.getElementsByClassName("tit");
// const heading = document.getElementsByClassName("heading");

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
const textContent1 = ["つきない",	"ついて",	"ついた"	,"つきます	","つきたい"];
const textContent2 = ["つくらない",	"つくつて","つくつた"	,"つくります",	"つくりたい"];
const textContent3 = ["つけない	","つけって	","つけった",	"つけます","つけたい"];
const textContent4 = ["つれていきない",	"つれていいて",	"つれていいた",	"つれていきます","つれていきたい"];
const textContent5 = ["つれてきない",	"つれてくって","つれてくった",	"つれてきます","つれてきたい"];
const textContent6 = ["でかけない",	"でかけて","でかけた",	"でかけます"	,"でかけたい"];
const textContent7 = ["できない",	"できって",	"できった",	"できます",	"できたい"];
const textContent8 = ["てつだいない",	"てつだって",	"てつだた"	,"てつだいます"	,"てつだいたい"];
const textContent9 = ["でない",	"でて"	,"でた"	,"でます",	"でたい"];
const textContent10 = ["でない",	"でつて","でつた","でます",	"でたい"];



// Loop through the r1 elements and add mouseover event listeners


Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[0].innerHTML = "つく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[1].innerHTML = "つくる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[2].innerHTML = "つける"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[3].innerHTML = "つれていく"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[4].innerHTML = "つれてくる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[5].innerHTML = "でかける"; // Reset text on mouseout
        tit[0].innerHTML=textContent0[index];
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[6].innerHTML = "できる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[7].innerHTML = "てつだう"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[8].innerHTML = "でる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c9[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
        tit[0].innerHTML=textContent0[index];
    });

    element.addEventListener('mouseout', function() {
        c9[9].innerHTML = "でる"; // Reset text on mouseout
        tit[0].innerHTML="Dictionary Form"
    });
});
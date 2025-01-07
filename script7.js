const c3 = document.getElementsByClassName("c3");

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

// Text content to display on mouseover for each element in r1

const textContent1 = ["しょうかいしない", "しょうかいして", "しょうかいた", "しょうかいします", "しょうかいしたい"];
const textContent2 = ["しょくじしない" ,"しょくじして","しょくじした","しょくじします","しょくじしたい"];
const textContent3 = ["しらべない","しらべて","しらべた","しらべます","しらべたい"];
const textContent4 = ["しらない","しつて","しつた","しります","しりたい"];
const textContent5 = ["しんぱいしない","しんぱいして","しんぱいした","しんぱいします","しんぱいしたい"];
const textContent6 = ["すわない","すって","すった","すいます","すいたい"];
const textContent7 = ["すてない","すてて","すてた","すてます","すてたい"];
const textContent8 = ["すまない","すんて","すんた","すみます","すみたい"];
const textContent9 = ["しない","して","した","します","したい"];
const textContent10 = ["すわらない","すわって","すわった","すわります","すわりたい"];


// Loop through the r1 elements and add mouseover event listeners

Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[0].innerHTML = "しょうかいする"; // Reset text on mouseout
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[1].innerHTML = "しょくじする"; // Reset text on mouseout

    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[2].innerHTML = "しらべる"; // Reset text on mouseout
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[3].innerHTML = "しる"; // Reset text on mouseout
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[4].innerHTML = "しんぱいする"; // Reset text on mouseout
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[5].innerHTML = "すう"; // Reset text on mouseout
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[6].innerHTML = "すてる"; // Reset text on mouseout
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[7].innerHTML = "すむ"; // Reset text on mouseout
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[8].innerHTML = "する"; // Reset text on mouseout
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[9].innerHTML = "すわる"; // Reset text on mouseout
    });
});
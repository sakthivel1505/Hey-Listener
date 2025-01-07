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
const textContent1 = ["かわない","かて","かた","かいます","かいたい"];
const textContent2 = ["かえない","かえして","かえした","かえます","かえたい"];
const textContent3 = ["かえしない","かえして","かえした","かえします","かえしたい"];
const textContent4 = ["かえない","かえつて","かえつた","かえます","かえたい"];
const textContent5 = ["かからない","かかって","かかった","かかります","かかりたい"];
const textContent6 = ["かかない","かいて","かいた","かきます","かきたい"];
const textContent7= ["かけない","かけて","かけた","かけます","かけたい"];
const textContent8 = ["かさない","かして","かした","かします","かしたい"];
const textContent9 = ["かちない","かって","かった","かちます","かちたい"];
const textContent10 =["かぶりない","かぶって","かぶった","かぶります","かぶりたい"];

// Loop through the r1 elements and add mouseover event listeners
Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[0].innerHTML = "かう"; // Reset text on mouseout
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[1].innerHTML = "かえして"; // Reset text on mouseout
    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[2].innerHTML = "かえす"; // Reset text on mouseout
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[3].innerHTML = "かえる"; // Reset text on mouseout
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[4].innerHTML = "かかる"; // Reset text on mouseout
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[5].innerHTML = "かく"; // Reset text on mouseout
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[6].innerHTML = "かける"; // Reset text on mouseout
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[7].innerHTML = "かす"; // Reset text on mouseout
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[8].innerHTML = "かつ"; // Reset text on mouseout
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[9].innerHTML = "かぶる"; // Reset text on mouseout
    });
});
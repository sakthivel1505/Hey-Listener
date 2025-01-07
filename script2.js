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
const textContent1 = ["いいない","いって","いった","いいます","いいたい"];
const textContent2 = ["いかない","いいて","いいた","いきます","いきたい"];
const textContent3 = ["いそがない","いそいで","いそいだ","いそぎます","いそぎたい"];
const textContent4 = ["いりない","いって","いった","いります","いりたい"];
const textContent5 = ["いれない","いれつて","いれつた","いれます","いれたい"];
const textContent6 = ["うごきない","うごいて","うごいた","うごきます","うごきたい"];
const textContent7 = ["うたわない","うたって","うたった","うたいます","うたいたい"];
const textContent8 = ["うまれない","うまれて","うまれた","うまれます","うまれたい"];
const textContent9 = ["うらない","うって","うった","うります","うりたい"];
const textContent10 = ["うんてんしない","うんてんして","うんてんした","うんてんします","うんてんしたい"];

// Loop through the r1 elements and add mouseover event listeners
Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[0].innerHTML = "いう"; // Reset text on mouseout
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[1].innerHTML = "いく"; // Reset text on mouseout
    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[2].innerHTML = "いそぐ"; // Reset text on mouseout
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[3].innerHTML = "いる"; // Reset text on mouseout
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[4].innerHTML = "いれる"; // Reset text on mouseout
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[5].innerHTML = "うごく"; // Reset text on mouseout
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[6].innerHTML = "うたう"; // Reset text on mouseout
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[7].innerHTML = "うまれろ"; // Reset text on mouseout
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[8].innerHTML = "うる"; // Reset text on mouseout
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[9].innerHTML = "うんてんする"; // Reset text on mouseout
    });
});
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
const textContent1 = ["あわない", "あって", "あった", "あいます", "あいたい"];
const textContent2 = ["あけない","あけって","あけった","あけます","あけたい"];
const textContent3 = ["あかない","あげて","あげた","あげます","あげたい"];
const textContent4 = ["あそばない","あそんて","あぞぶんた","あそびます","あそびたい"];
const textContent5 = ["あつめない","あつめた","あつめた","あつめます","あつめたい"];
const textContent6 = ["あばない","あびて","あびた","あびます","あびたい"];
const textContent7 = ["あらわない","あらって","あらった","あらいます","あらいたい"];
const textContent8 = ["あらない","あって","あった","あります","ありたい"];
const textContent9 = ["あるかない","あるいて","あるいた","あるきます","あるきたい"];
const textContent10 = ["あんないしない","あんないして","あんないした","あんないします","あんないしたい"];

// Loop through the r1 elements and add mouseover event listeners
Array.from(r1).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[0].innerHTML = textContent1[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[0].innerHTML = "あう"; // Reset text on mouseout
    });
});

Array.from(r2).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[1].innerHTML = textContent2[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[1].innerHTML = "あける"; // Reset text on mouseout
    });
});

Array.from(r3).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[2].innerHTML = textContent3[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[2].innerHTML = "あげる"; // Reset text on mouseout
    });
});

Array.from(r4).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[3].innerHTML = textContent4[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[3].innerHTML = "あそぶ"; // Reset text on mouseout
    });
});

Array.from(r5).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[4].innerHTML = textContent5[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[4].innerHTML = "あつめる"; // Reset text on mouseout
    });
});

Array.from(r6).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[5].innerHTML = textContent6[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[5].innerHTML = "あびる"; // Reset text on mouseout
    });
});

Array.from(r7).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[6].innerHTML = textContent7[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[6].innerHTML = "あらう"; // Reset text on mouseout
    });
});

Array.from(r8).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[7].innerHTML = textContent8[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[7].innerHTML = "ある"; // Reset text on mouseout
    });
});

Array.from(r9).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[8].innerHTML = textContent9[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[8].innerHTML = "あるく"; // Reset text on mouseout
    });
});

Array.from(r10).forEach((element, index) => {
    element.addEventListener('mouseover', function() {
        c3[9].innerHTML = textContent10[index]; // Set the corresponding text on mouseover
    });

    element.addEventListener('mouseout', function() {
        c3[9].innerHTML = "あんないする"; // Reset text on mouseout
    });
});
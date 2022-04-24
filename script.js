const pft = document.querySelector("#profile-type");
//list of divs
const divPublic = document.querySelector("#public");
const divSemi = document.querySelector("#semi");
const divPrivate = document.querySelector("#private");
//list of imgs
const img01 = document.querySelector("#img_01");
const img02 = document.querySelector("#img_02");
const img03 = document.querySelector("#img_03");
const img04 = document.querySelector("#img_04");
const img05 = document.querySelector("#img_05");
const img06 = document.querySelector("#img_06");
//list of checkbox
const semiLoc = document.querySelector("#semi-loc");
const semiEdu = document.querySelector("#semi-edu");
const semiExp = document.querySelector("#semi-exp");
const photoId = document.querySelector("#prof-info");
const prvLoc = document.querySelector("#loc");
const prvEdu = document.querySelector("#edu");
const prvExp = document.querySelector("#exp");

pft.addEventListener("change", setProfile);
//addActivityItem
function setProfile() {
    console.log(pft.value);
    switch (pft.value) {
        case "01":
            divPublic.style.display = "initial";
            divSemi.style.display = "none";
            divPrivate.style.display = "none";

            img01.style.display = "initial";
            img02.style.display = "none";
            img03.style.display = "none";
            img04.style.display = "initial";
            img05.style.display = "initial";
            img06.style.display = "none";
            break;
        case "02":
            divPublic.style.display = "none";
            divSemi.style.display = "initial";
            divPrivate.style.display = "none";

            img01.style.display = "none";
            img02.style.display = "initial";
            img03.style.display = "none";
            img04.style.display = "none";
            img05.style.display = "none";
            img06.style.display = "initial";
            break;
        case "03":
            divPublic.style.display = "none";
            divSemi.style.display = "none";
            divPrivate.style.display = "initial";

            img01.style.display = "none";
            img02.style.display = "none";
            img03.style.display = "initial";
            img04.style.display = "none";
            img05.style.display = "none";
            img06.style.display = "initial";
            break;
        default: console.log("Something got wrong!");
            window.alert("Something got wrong!");
    }
}

semiLoc.addEventListener("change", () => {    
    if (semiLoc.checked) {
        img01.style.display = "initial";
        img02.style.display = "none";
        img03.style.display = "none";
    } else {
        img01.style.display = "none";
        img02.style.display = "initial";
        img03.style.display = "none";
    } 
});

semiEdu.addEventListener("change", () => {
    if (semiEdu.checked) {
        img05.style.display = "initial";
        img06.style.display = "none";
    } else {
        img05.style.display = "none";
        img06.style.display = "initial";
    }
});

semiExp.addEventListener("change", () => {
    if (semiExp.checked) {
        img04.style.display = "initial";
        img06.style.display = "none";
    } else {
        img04.style.display = "none";
        img06.style.display = "initial";
    }
});



photoId.addEventListener("change", () => {    
    if (photoId.checked) {
        img01.style.display = "none";
        img02.style.display = "initial";
        img03.style.display = "none";
    } else {
        img01.style.display = "none";
        img02.style.display = "none";
        img03.style.display = "initial";
        prvLoc.checked = false;
    } 
});


prvLoc.addEventListener("change", () => {    
    if (prvLoc.checked) {
        img01.style.display = "initial";
        img02.style.display = "none";
        img03.style.display = "none";
    } else {
        img01.style.display = "none";
        img02.style.display = "initial";
        img03.style.display = "none";
    } 
});

prvEdu.addEventListener("change", () => {
    if (prvEdu.checked) {
        img05.style.display = "initial";
        img06.style.display = "none";
    } else {
        img05.style.display = "none";
        img06.style.display = "initial";
    }
});

prvExp.addEventListener("change", () => {
    if (prvExp.checked) {
        img04.style.display = "initial";
        img06.style.display = "none";
    } else {
        img04.style.display = "none";
        img06.style.display = "initial";
    }
});

setProfile();
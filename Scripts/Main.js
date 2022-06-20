
let id_myHardSkills="id_myHardSkills"
let id_mySoftSkills="id_mySoftSkills"
let id_myContacts = "id_myContacts"
let id_myWork = "id_myWork"
let id_myEducation = "id_myEducation"
let id_AboutMe = "id_AboutMe"

let element=document.getElementById(id_AboutMe);

function removeClass(id_name) {
    element.classList.add("Displayable-section_none");
    element=document.getElementById(id_name);
    element.classList.remove("Displayable-section_none");
    console.log(element)
    return element;
}

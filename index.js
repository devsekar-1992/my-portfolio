var tablinks=document.getElementsByClassName("tab-links");
var sidemenu=document.getElementById("sidemenu");
var tab_contents=document.getElementsByClassName("tab-contents");
function openTab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tab_content of tab_contents){
        tab_content.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}
function openmenue(){
    sidemenu.style.right="0";
}
function closemenue(){
    sidemenu.style.right="-200px";
}
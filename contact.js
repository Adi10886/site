/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

/*chat-box*/

  
document .querySelector(".openChatBtn") .addEventListener("click", openForm);
document.querySelector(".close").addEventListener("click", closeForm);
function openForm() {
   document.querySelector(".openChat").style.display = "block";
}
function closeForm() {
   document.querySelector(".openChat").style.display = "none";
}

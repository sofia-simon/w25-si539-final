// lines 3-20 adapted from https://www.w3schools.com/howto/howto_js_accordion.asp

// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// was working
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}


// test
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//     acc[i].addEventListener("click", function() {
//         this.classList.toggle("active");  // Toggle the accordion button's "active" class
//         var panel = this.nextElementSibling;  // Get the associated panel
        
//         // If the panel is already open, close it
//         if (panel.style.maxHeight) {
//             panel.style.maxHeight = null;  // Close the panel
//             // Disable links inside the panel
//             var links = panel.getElementsByTagName('a');
//             for (var j = 0; j < links.length; j++) {
//                 links[j].setAttribute("tabindex", "-1");  // Remove focus from links
//             }
//         } else {
//             // Open the panel and allow smooth animation
//             panel.style.maxHeight = panel.scrollHeight + "px";  // Set maxHeight to content height
//             // Enable links inside the panel
//             var links = panel.getElementsByTagName('a');
//             for (var j = 0; j < links.length; j++) {
//                 links[j].setAttribute("tabindex", "0");  // Allow focus on links
//             }
//         }
//     });
// }


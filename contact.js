const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnicon= menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isopen = navLinks.classList.contains("open");
    menuBtnicon.setAttribute("class", isopen ? "ri-close-line" : "ri-menu-search-line");
});

navLinks.addEventListener("click", (e) =>{
    navLinks.classList.remove("open");
    menuBtnicon.setAttribute("class", "ri-menu-search-line");
});

document.addEventListener("DOMContentLoaded", function() {
    const line1 = "This is just a test website.";
    const line2 = "If you are interested, I can bring your vision into reality.";
  
    const element1 = document.querySelector('.message-line1');
    const element2 = document.querySelector('.message-line2');
  
    let i = 0, j = 0;
  
    function typeLine1() {
      if (i < line1.length) {
        element1.textContent += line1.charAt(i);
        i++;
        setTimeout(typeLine1, 40);
      } else {
        element1.style.borderRight = "none"; // Remove cursor from line 1
        setTimeout(typeLine2, 500); // Start line 2 after delay
      }
    }
  
    function typeLine2() {
      if (j < line2.length) {
        element2.textContent += line2.charAt(j);
        j++;
        setTimeout(typeLine2, 40);
      } else {
        element2.style.borderRight = "none"; // Remove cursor from line 2
      }
    }
  
    typeLine1();
  });
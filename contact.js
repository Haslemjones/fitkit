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
  const line2 = "If you are interested, I can bring your vision into.";
  const line3 = "Reality.";

  const element1 = document.querySelector('.message-line1');
  const element2 = document.querySelector('.message-line2');
  const element3 = document.querySelector('.message-line3'); // ✅ Fixed selector

  let i = 0, j = 0, h = 0;

  function typeLine1() {
      if (i < line1.length) {
          element1.textContent += line1.charAt(i);
          i++;
          setTimeout(typeLine1, 40);
      } else {
          element1.style.borderRight = "none"; 
          setTimeout(typeLine2, 500);
      }
  }

  function typeLine2() {
      if (j < line2.length) {
          element2.textContent += line2.charAt(j);
          j++;
          setTimeout(typeLine2, 40);
      } else {
          element2.style.borderRight = "none";
          setTimeout(typeLine3, 500);
      }
  }

  function typeLine3() {
      if (h < line3.length) {
          element3.textContent += line3.charAt(h); // ✅ Fixed element reference
          h++;
          setTimeout(typeLine3, 40);
      } else {
          element3.style.borderRight = "none"; 
      }
  }

  typeLine1(); // ✅ Start the typing animation
});

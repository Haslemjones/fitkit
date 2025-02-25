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

function toggleDropdown(event, dropdownId){
    event.stopPropagation();
    const dropdownContent = document.getElementById(dropdownId);
    document.querySelectorAll('.dropdown__content').forEach((dropdown) => {
        if (dropdown.id !==dropdownId){
            dropdown.classList.remove('show');
        }
    });
    dropdownContent.classList.toggle('show');
    document.addEventListener("click", function handleOutsideClick(){
        dropdownContent.classList.remove("show");
        document.removeEventListener("click", handleOutsideClick);
    });
}



 const dropdownMenuBtn = document.getElementById("dropdown-toggle-btn");
const dropdownContent = document.getElementById("dropdown-lagos");
const menuIcon = document.getElementById("menu-icon");

dropdownMenuBtn.addEventListener("click", (e) => {

dropdownContent.classList.toggle("show");
    
    const isOpen = dropdownContent.classList.contains("show");

menuIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");

if (isOpen) {
        dropdownMenuBtn.classList.add('show');
    } else {
        dropdownMenuBtn.classList.remove('show');
    }
});

document.addEventListener('DOMContentLoaded', () =>{
    const content= document.querySelectorAll('why-fit-kit');

    const onScroll = () => {
        const contentPosition = content.getBoundingClientRect().top;
        const screenPosition= window.innerHeight /1.3;

        if (contentPosition < screenPosition) {
            content.classList.add('visible');
            window.removeEventListener('scroll', onScroll);
        }
    };

    window.addEventListener('scroll', onScroll);
}); 

document.addEventListener("DOMContentLoaded", () => {
    const boxes = document.querySelectorAll(".category-box");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) =>{
            if (entry.isIntersecting){
                entry.target.style.animationPlaystate ="running";
            }
        });
    });

    boxes.forEach((box) =>{
        observer.observe(box);
    });
});

function resetPage() {
    window.scrollTo({top: 0, behavior:"smooth"});
    console.log("page reset!");
}
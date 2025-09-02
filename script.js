//turning the palette
const colorIcon = document.getElementById("colorIcon");
const colorPicker = document.getElementById("colorPicker");

colorIcon.addEventListener("click", () => {
    colorPicker.click();  // يفتح نافذة اختيار اللون
});

colorPicker.addEventListener("input", (e) => {
    const selectedColor = e.target.value;
    document.documentElement.style.setProperty('--primary', selectedColor);
});

//turnning the switching mode icon
const darkModeIcone = document.getElementById('darkModeIcone');
darkModeIcone.addEventListener('click',()=>{
    document.body.classList.toggle('dark-mode');
    document.querySelector('.header').classList.toggle('dark-mode');
    
});

//the burger menu for iphone XR
const openMenu = document.querySelector('.fa-bars');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');

// فتح القائمة
openMenu.addEventListener("click", () => {
  mobileMenu.classList.add("active");
});

// إغلاق القائمة بزر ×
closeMenu.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

// إغلاق القائمة بعد الضغط على أي رابط
document.querySelectorAll(".mobile_menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("active");
  });
});





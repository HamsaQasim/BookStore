
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

//adding search properity
document.getElementById("search_icon").addEventListener("click", function() {
  let bar = document.getElementById("search_bar");

  bar.style.display = (bar.style.display === "none" ) 
    ? "inline-block" 
    : "none";
});

// Remove all existing highlights
function removeHighlights() {
    document.querySelectorAll(".highlight").forEach(el => {
      el.replaceWith(el.textContent); // replace span with plain text
    });
  }

  
  function highlightWord(word) {
    if (!word) return;

    removeHighlights(); // remove previous highlights

    // Geting the elements we want to search throw
    //const paragraphs = document.querySelectorAll("p");
    const elements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, button, span, li, a");
    elements.forEach(el => {
      // split elements into words
      const words = el.innerHTML.split(" "); //splitting by spaces
      
      const newContent = words.map(
        w=> {
            if(w.toLowerCase()== word.toLowerCase()){
                return `<span class="highlight">${w}</span>`;  //HTML string
            }
            return w;
        }
      ).join(" "); // join words back into a string

      el.innerHTML = newContent; // replace the content by the span
    });
  }

  // Calling and using the functions
  document.getElementById("search_icon").addEventListener("click", function() {
    const word = document.getElementById("search_input").value.trim(); 
    //trim: removes the extra spaces from the input field
    if (!word) {
      removeHighlights(); // remove if input empty
      return;
    }
    highlightWord(word);
  });

  // Enter key
  document.getElementById("search_input").addEventListener("keyup", function(e) {
    const word = this.value.trim();
    if (!word) {
      removeHighlights();
      return;
    }
    if (e.key === "Enter") {
      highlightWord(word);
    }
  });


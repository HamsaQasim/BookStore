
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


  //to remove duplicates from featured books html code
  const container = document.getElementById("featured_container");
  const cardTemplete = document.getElementById("book_templete");

  for(let i=2; i<=15; i++){

    const card= cardTemplete.cloneNode(true);  // makes a copy of the card
    card.id = ""; // remove duplicate ID(not allowed)

    const img= card.querySelector("img"); //gets the img element to modify it 
    img.src= `images/book_${i}.jpg`;
    img.alt= `Book ${i}`;

    //the only updated thing in our case is the image 

    container.appendChild(card);

  }

  //to remove duplicates from arrivals html code
  const arrContainer= document.getElementById("arrivals_container");
  const arrTemplete= document.getElementById("arrivals_templete");

  for(let i=2; i<=10; i++){
    const arrCard= arrTemplete.cloneNode(true);
    arrCard.id="";

    const arrImg= arrTemplete.querySelector("img");
    arrImg.src=`images/arrival_${i}.jpg`;
    arrImg.alt=`book${i}`;

    arrContainer.appendChild(arrCard);
  }





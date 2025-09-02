

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
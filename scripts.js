/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 * 
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your 
 *    browser and make sure you can see that change. 
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 * 
 */
header {
  position: sticky;
  top: -54px; /* value to scroll past the logo so just the search bar is sticky */
  z-index: 2;
}
.search-bar {
  display: flex;
  justify-content: center;
  padding: 24px;
}
.search-bar input {
  width: 50%;
  min-width: 300px;
  padding: 12px 24px;
  border-radius: 24px;
  font-size: 16px;
  border: 0px;
  outline: none;
}
.search-bar [list]::-webkit-list-button,
.search-bar [list]::-webkit-calendar-picker-indicator {
  display: none !important;
}

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current control button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
/** Dorians Notes!! Things to do 4/7/2024: Add search bar, add filter center 
*/

const MIDJOURNEY_URL = "https://remoney.ru/uploads/posts/2022-08/logo-remoney-3.png";
const DALLE_URL = "https://tibs.at/sites/default/files/styles/artikelbilder_colorbox_gross/public/2023-01/dall-E-2.png?itok=l97SsgEv";
const LEONARDO_AI_URL = "https://aifinesse.com/wp-content/uploads/ai-grid/leonardo_ai.png";
const ARTI_PICS_URL = "https://i.pinimg.com/originals/30/26/b3/3026b33cbf0a63d99686ce45acf2e93a.jpg";
const BLUEWILLOW_URL = "https://ai-finder.fra1.cdn.digitaloceanspaces.com/logos/BlueWillow.jpg";
const STABLE_DIFFUSION_URL = "https://openaimaster.io/wp-content/uploads/2023/06/stablediffusion.jpg";
const BLACKINK_AI_URL = "https://intelarter.com/wp-content/uploads/2023/05/blackink-ai-logo.webp";
const APECTURE_URL = "https://www.logotypes101.com/logos/998/303C753C5AFC1CD2EE31A675F19FAAB9/aperturescienceinnovators.png";
const PIXELMIND_URL = "https://beta.pixelmind.ai/static/Pixelmind_Meta.png";
const REPLICATE_URL = "https://www.sequoiacap.com/wp-content/uploads/sites/6/2022/06/replicate-logo-black-transparent.svg";


// This is an array of strings (TV show titles)
let titles = [
    "Midjourney",
    "DALL-E",
    "Leonardo AI",
    "ARTI-Pics",
    "BlueWillow",
    "Stable DIffusion",
    "Blackink.AI",
    "Apecture",
    "PixelMind",
    "Replicate",
];
// Your final submission should have much more data than this, and 
// you should use more than just an array of strings to store it all.


// This function adds cards the page to display the data in the array
function showCards() {
    const cardContainer = document.getElementById("card-container");
    cardContainer.innerHTML = "title";
    const templateCard = document.querySelector(".card");
    
    for (let i = 0; i < titles.length; i++) {
        let title = titles[i];

        // This part of the code doesn't scale very well! After you add your
        // own data, you'll need to do something totally different here.
        let imageURL = "";
        if (i == 10) {
            imageURL = 
        } else if (i == 1) {
            imageURL = CURB_POSTER_URL;
        } else if (i == 2) {
            imageURL = EAST_LOS_HIGH_POSTER_URL;
        }

        const nextCard = templateCard.cloneNode(true); // Copy the template card
        editCardContent(nextCard, title, imageURL); // Edit title and image
        cardContainer.appendChild(nextCard); // Add new card to the container
    }
}

function editCardContent(card, newTitle, newImageURL) {
    card.style.display = "block";

    const cardHeader = card.querySelector("h2");
    cardHeader.textContent = newTitle;

    const cardImage = card.querySelector("img");
    cardImage.src = newImageURL;
    cardImage.alt = newTitle + " Poster";

    // You can use console.log to help you debug!
    // View the output by right clicking on your website,
    // select "Inspect", then click on the "Console" tab
    console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
    console.log("Button Clicked!")
    alert("Welcome to the AI Revoliution!");
}

function removeLastCard() {
    titles.pop(); // Remove last item in titles array
    showCards(); // Call showCards again to refresh
}

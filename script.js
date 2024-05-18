//get about buttons from html

let aboutButton = document.getElementsByClassName("about-button");

//make array from HTMLCollection, because forEach do not work on HTMLCollection

let array = Array.from(aboutButton);

//create function to open about product page

function openAboutProduct() {
  window.location.href = "about-product.html";
}

//add function above on all buttons

array.forEach((button) => {
  console.log(button);
  button.addEventListener("click", openAboutProduct);
});

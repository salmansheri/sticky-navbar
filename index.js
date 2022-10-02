// return the nav bar in javascript using queryselector method
const navBarEl = document.querySelector(".navbar");

// to get the position of the bottom container use <bottomContainerEl.offsetTop>
const bottomContainerEl = document.querySelector(".bottom-container");
console.log(bottomContainerEl.offsetTop);

// to get the height of the height of the navigation bar use <navBarEl.offsetHeight>
// console.log(navBarEl.offsetHeight);

// print the navbar element

// adding event listener for the scroll event
window.addEventListener("scroll", function () {
  // targetting the scroll dimenension "y" by window.scrollY
  //   check the condition if this.window.scrollY is greater than the bottomContainerEl.offsetTop -
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navBarEl.offsetHeight - 50
  ) {
    // setting navbar "classList to active" can make the navbar color change
    navBarEl.classList.add("active");
  } else {
    navBarEl.classList.remove("active");
  }
});

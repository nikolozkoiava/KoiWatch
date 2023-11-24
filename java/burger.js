let burger = document.querySelector(".fa-bars");
let close_burger = document.querySelector(".fa-xmark");
let navigation = document.querySelector(".navigation_container");


burger.addEventListener("click", () => {
    burger.style.display = "none";
    close_burger.style.display = "block";
    navigation.classList.add("see");


});


close_burger.addEventListener("click", () => {
  burger.style.display = "block";
  close_burger.style.display = "none";
  navigation.classList.remove("see");
});
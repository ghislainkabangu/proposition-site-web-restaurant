/** @format */
let section = document.querySelector("section");
let titrePlan = document.querySelectorAll(".titrePlan");
/************************************* */
let article = document.querySelectorAll("article");
for (let i = 0; i < article.length; i++) {
  article[i].addEventListener("mouseover", () => {
    article[i].classList.add("articleInjs");

    for (let j = 0; j < titrePlan.length; j++) {
      titrePlan[j].classList.add("titreInjs")
      
    }
  });

  article[i].addEventListener("mouseout", () => {
    article[i].classList.remove("articleInjs");

    for (let j = 0; j < titrePlan.length; j++) {
      titrePlan[j].classList.remove("titreInjs")
      
    }
  });
}

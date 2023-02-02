let MenuOp = document.querySelector(".menu-open");
let MenuCl = document.querySelector(".menu-close");
let MenuEl = document.querySelector(".menu");

MenuOp.addEventListener('click', function () {
  MenuCl.classList.remove('hidden');
  MenuEl.classList.remove('max-lg:hidden');
  MenuOp.classList.add('hidden');

});

MenuCl.addEventListener('click', function () {
  MenuCl.classList.add('hidden');
  MenuEl.classList.add('max-lg:hidden');
  MenuOp.classList.remove('hidden');
});

const questions = document.querySelectorAll("dt");
const answers = document.querySelectorAll("dd");
const arrows = document.querySelectorAll(".arrow");

questions.forEach((question, index) => {
  question.addEventListener("click", () => {

    answers.forEach((answer) => {
      answer.classList.add("hidden");
      answer.classList.remove("grid");
    });
    
    answers[index].classList.remove("hidden");
    answers[index].classList.add("grid");

    arrows.forEach((arrow) => {
      arrow.classList.remove("active");
    });

      arrows[index].classList.toggle("active");
    
  });
});
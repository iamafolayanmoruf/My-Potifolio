const tag1 = document.querySelector(".tag-1");
const about = document.querySelector("#about");

const tag2 = document.querySelector(".tag-2");
const work = document.querySelector("#work");

const tag3 = document.querySelector(".tag-3");
const contact = document.querySelector("#contact");

tag1.onmouseover = function () {
  tag1.innerHTML = `${about.textContent}`;

  tag1.addEventListener("click", () => {
    location.href = "/about.html";
  });
};
tag1.onmouseout = function () {
  tag1.innerHTML = `Hello.`;
};

tag2.onmouseover = function () {
  tag2.innerHTML = `${work.textContent}`;

  tag2.addEventListener("click", () => {
    location.href = "/works.html";
  });
};
tag2.onmouseout = function () {
  tag2.innerHTML = `I am`;
};

tag3.onmouseover = function () {
  tag3.innerHTML = `${contact.textContent}`;

  tag3.addEventListener("click", () => {
    location.href = "/contact.html";
  });
};
tag3.onmouseout = function () {
  tag3.innerHTML = "Moruf";
};

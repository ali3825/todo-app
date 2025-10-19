let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delbtn");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";

  // Add delete functionality to this button
  delBtn.addEventListener("click", function () {
    item.remove();
  });
});

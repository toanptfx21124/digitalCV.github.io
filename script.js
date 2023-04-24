"use strict";
const form = document.querySelector(".form");
const personal = document.querySelector(".personal");
const btnsubmit = document.querySelector(".btnsubmit");
btnsubmit.addEventListener("click", function () {
  const input = document.getElementById("InputEmail1");
  const disVar = input.value;
  // console.log(disVar); trả về string input
  function isValidEmail(disVar) {
    const emailRegEx =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegEx.test(disVar);
  }
  // console.log(isValidEmail(disVar)); trả về true ỏ fault
  if (isValidEmail(disVar)) {
    personal.classList.remove("hidden");
    form.classList.add("hidden");
  } else {
    document.getElementById("emailHelp").classList.add("warning");
    document.getElementById("emailHelp").textContent = "vui lòng nhập emai!👏";
  }
});
// ----------------------------------------------------------------------------------------------

const inforTitle = document.querySelectorAll(".infor-title");
console.log(inforTitle);
console.log(inforTitle.length);
const viewMore = document.querySelectorAll(".viewmore");
const inforHidden = document.querySelectorAll(".infor-hidden");
console.log(viewMore);

for (let i = 0; i < inforTitle.length; i++) {
  // ---- di chuột
  // const XYZ = function (i) { viewMore[i].classList.toggle("viewmore-hidden");};

  inforTitle[i].addEventListener("mouseover", function () {
    viewMore[i].classList.toggle("viewmore-hidden");
  });

  inforTitle[i].addEventListener("mouseout", function () {
    viewMore[i].classList.toggle("viewmore-hidden");
  });
  // -----kích chuột
  viewMore[i].addEventListener("click", function () {
    inforHidden[i].classList.toggle("infor-hidden");
    console.log(viewMore[i].textContent);
    if (viewMore[i].textContent === "view less") {
      viewMore[i].textContent = "View more";
    } else {
      viewMore[i].textContent = "view less";
    }
  });
}

"use strict";
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let getEmailInput = function () {
  return document.querySelector(".email-input").value;
};

let invalidEmail = function () {
  document.querySelector(".email-check-button").style.backgroundColor = "red";
  document.querySelector(".email-check-button").style.color = "white";
  document.querySelector(".email-check-button").textContent =
    "Email không hợp lệ!";
  setTimeout(function () {
    document.querySelector(".email-check-button").style.backgroundColor =
      "#017cff";
    document.querySelector(".email-check-button").style.color = "white";
    document.querySelector(".email-check-button").textContent = "Submit";
  }, 1500); // Chờ 1,5 giây để nút trở lại trạng thái ban đầu
}; // Email không hợp lệ
document
  .querySelector(".email-check-button")
  .addEventListener("click", function () {
    if (getEmailInput() == "") {
      document.querySelector(".email-check-button").style.backgroundColor =
        "red";
      document.querySelector(".email-check-button").style.color = "white";
      document.querySelector(".email-check-button").textContent =
        "Chưa điền email!";
      setTimeout(function () {
        document.querySelector(".email-check-button").style.backgroundColor =
          "#017cff";
        document.querySelector(".email-check-button").style.color = "white";
        document.querySelector(".email-check-button").textContent = "Submit";
      }, 1500);
    }
    if (getEmailInput() != "") {
      if (getEmailInput().match(regex) != null) {
        document.querySelector(".personal-info-content").style.display =
          "block";
        document.querySelector(".email-check").style.display = "none";
      }
      if (getEmailInput().match(regex) == null) {
        invalidEmail();
      }
    }
  });

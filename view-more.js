let viewMoreButton = document.querySelectorAll(".view-more");
let bgBox = document.querySelectorAll(".bg-box");
//console.log(viewMoreButton);
// Phần hiển thị nút view more khi hover chuột
for (let i = 0; i < viewMoreButton.length; i++) {
  bgBox[i].addEventListener("mouseover", function () {
    document.querySelector(`.bg-${i} button`).style.opacity = "1";
    document.querySelector(`.bg-${i}`).style.boxShadow = "0px 0px 20px grey";
  });
  bgBox[i].addEventListener("mouseout", function () {
    document.querySelector(`.bg-${i}`).style.boxShadow = "none";
    document.querySelector(`.bg-${i} button`).style.opacity = "0";
  });
}
// Phần ẩn và hiện nội dung
// Thêm event listener cho các nút
for (let i = 0; i < viewMoreButton.length; i++) {
  viewMoreButton[i].addEventListener("click", function () {
    let currentButtonText = document // Text của nút
      .querySelector(`.bg-${i} button`)
      .textContent.replace(/\s/g, "");
    let icon = document.querySelector(`.bg-${i} button i`); // Icon mũi tên lên xuống của nút
    // Nếu nội dung của nút là VIEWMORE (đã bỏ khoảng trống) thì sẽ hiển thị nội dung
    if (currentButtonText == "VIEWMORE") {
      document.querySelector(`.vm-content-${i}`).style.display = "block"; // Hiển thị nội dung
      document.querySelector(`.bg-${i} button p`).textContent = "VIEW LESS"; // Chỉnh text của nút thành view less
      icon.classList.remove("icon-down-dir");
      icon.classList.add("icon-up-dir"); // Chỉnh icon thành mũi tên hướng lên
      // Nếu nội dung của nút là view less thì sẽ ẩn nội dung
    } else if (currentButtonText == "VIEWLESS") {
      document.querySelector(`.vm-content-${i}`).style.display = "none"; // Ẩn phần nội dung
      document.querySelector(`.bg-${i} button p`).textContent = "VIEW MORE"; // Chỉnh text của nút trở lại thành View more
      icon.classList.add("icon-down-dir"); // Chỉnh icon thành icon mũi tên hướng xuống
      icon.classList.remove("icon-up-dir");
    }
    //console.log(currentButtonText);
    //console.log(`button clicked ${i}`);
  });
}

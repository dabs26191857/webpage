
// 取得所有 dropdown 按鈕
let dropdowns = document.querySelectorAll(".dropdown-btn");

dropdowns.forEach(function(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    let dropdownContent = this.nextElementSibling;
    dropdownContent.classList.toggle("show");
  });
});

// ==================== 大圖輪播 ====================
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // 🧩 防呆：若本頁沒有輪播圖片，直接跳出
  if (slides.length === 0) return;

  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  if (dots[slideIndex - 1]) dots[slideIndex - 1].className += " active";
}

// ✅ 只有在頁面有 mySlides 時才啟動自動輪播
if (document.getElementsByClassName("mySlides").length > 0) {
  setInterval(() => { plusSlides(1); }, 5000); // 每5秒自動切換
}

// ==================== 滾動動畫 ====================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// ==================== 回到頂端按鈕 ====================
let topBtn = document.getElementById("topBtn");

window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

function topFunction() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

// ==================== 收合區塊 (collapse) ====================
let btn = document.getElementsByClassName("my-collapse");
for (let i = 0; i < btn.length; i++) {
  btn[i].addEventListener("click", function() {

    this.nextElementSibling.classList.toggle("show");//🔸 控制內容展開
  });
}
function toggleMenu() {
  const navList = document.querySelector("nav ul");
  navList.classList.toggle("show");
}
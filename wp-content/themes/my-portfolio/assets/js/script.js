"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector("#main-menu");
  const navLinks = navMenu.querySelectorAll("a");

  // 1. ハンバーガーボタンのクリックでメニューを開閉
  hamburger.addEventListener("click", () => {
    const isExpanded =
      hamburger.getAttribute("aria-expanded") === "true" || false;

    // 状態を反転させる
    hamburger.setAttribute("aria-expanded", !isExpanded);
    navMenu.setAttribute("aria-expanded", !isExpanded);
  });

  // 2. メニュー内のリンクをクリックしたとき、メニューを閉じる
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (hamburger.getAttribute("aria-expanded") === "true") {
        hamburger.setAttribute("aria-expanded", "false");
        navMenu.setAttribute("aria-expanded", "false");
      }
    });
  });
});

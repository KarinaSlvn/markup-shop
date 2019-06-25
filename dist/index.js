"use strict";


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var slideIndex = 1;
var bannerDots = document.querySelectorAll(".banner .dots .dot");
var sliderDots = document.querySelectorAll(".slider .dots .dot");
var bannerSlides = document.querySelectorAll(".banner .slide");
var sliderSlides = document.querySelectorAll(".slider .slide");

var currentSlide = function currentSlide(slideIndex, dots, slides) {
  showSlides(slideIndex, dots, slides);
};

var showSlides = function showSlides(slideIndex, dots, slides) {
  if (slideIndex > slides.length) slideIndex = 1;
  if (slideIndex < 1) slideIndex = slides.length;

  _toConsumableArray(slides).map(function (slide) {
    return slide.style.display = 'none';
  });

  _toConsumableArray(dots).map(function (dot) {
    return dot.className = dot.className.replace(" active", "");
  });

  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";

  _toConsumableArray(dots).map(function (dot, index) {
    return dot.addEventListener('click', function () {
      return currentSlide(index + 1, dots, slides);
    });
  });
};

showSlides(slideIndex, bannerDots, bannerSlides);
showSlides(slideIndex, sliderDots, sliderSlides);
var carousel = document.querySelector("[data-target='carousel']");
var card = carousel.querySelector("[data-target='card']");
var leftButton = document.querySelector("[data-action='slideLeft']");
var rightButton = document.querySelector("[data-action='slideRight']");
var carouselWidth = carousel.offsetWidth;
var cardStyle = card.currentStyle || window.getComputedStyle(card);
var cardMarginRight = Number(cardStyle.marginRight.match(/\d+/g)[0]);
var cardCount = carousel.querySelectorAll("[data-target='card']").length;
var offset = 0;
var maxX = -(cardCount / 3 * carouselWidth + cardMarginRight * (cardCount / 3) - carouselWidth - cardMarginRight);
leftButton.addEventListener("click", function () {
  if (offset !== 0) {
    offset += carouselWidth + cardMarginRight;
    carousel.style.transform = "translateX(".concat(offset, "px)");
  }
});
rightButton.addEventListener("click", function () {
  if (offset !== maxX) {
    offset -= carouselWidth + cardMarginRight;
    carousel.style.transform = "translateX(".concat(offset, "px)");
  }
});
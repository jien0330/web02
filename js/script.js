// window.addEventListener('keydown', function(e) {
//     // Ctrl + +, Ctrl + -, Ctrl + 0
//     if ((e.ctrlKey || e.metaKey) && 
//         (e.key === '+' || e.key === '-' || e.key === '0' || e.key === '=')) {
//       e.preventDefault();
//     }
//   });
  
//   window.addEventListener('wheel', function(e) {
//     if (e.ctrlKey) {
//       e.preventDefault();
//     }
//   }, { passive: false });

jQuery(document).ready(function(){
        $('nav>ul>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $('.submenu').stop().slideUp(500);
    });
})

  $(function(){
    const $boxes = $('#image .box');
    $boxes.each(function(idx){
      $(this).css({
        left: (40 * idx) + 'px',
        top: (20 * idx) + 'px',
        zIndex: idx + 1
      });
    });
  
    $boxes.on('mouseenter', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
      $(this).css('z-index', 99).addClass('is-top');
    });
  
    $boxes.on('mouseleave', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
    });
  });
  ////////////////////////////////////////////////////////////
  $(function(){
    const $boxes = $('#shopp .box');
    $boxes.each(function(idx){
      $(this).css({
        left: (40 * idx) + 'px',
        top: (20 * idx) + 'px',
        zIndex: idx + 1
      });
    });
  
    $boxes.on('mouseenter', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
      $(this).css('z-index', 99).addClass('is-top');
    });
  
    $boxes.on('mouseleave', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
    });
  });
  ////////////////////////////////////////////////////////////
  $(function(){
    const $boxes = $('#UXUI .box');
    $boxes.each(function(idx){
      $(this).css({
        left: (40 * idx) + 'px',
        top: (20 * idx) + 'px',
        zIndex: idx + 1
      });
    });
  
    $boxes.on('mouseenter', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
      $(this).css('z-index', 99).addClass('is-top');
    });
  
    $boxes.on('mouseleave', function(){
      $boxes.each(function(idx){
        $(this).css('z-index', idx + 1).removeClass('is-top');
      });
    });
  });


  function create3DCarousel(containerId, totalItems) {
    const container = document.getElementById(containerId);
    const boxes = container.children;
    let current = 0;
  
    setInterval(() => {
      // 3D 변환 계산
      Array.from(boxes).forEach((box, index) => {
        const angle = (360 / totalItems) * (index - current) % 360;
        const zOffset = -Math.cos((angle * Math.PI) / 180) * 400;
        const xOffset = Math.sin((angle * Math.PI) / 180) * 400;
  
        box.style.transform = `
          rotateY(${angle}deg)
          translateZ(${zOffset}px)
          translateX(${xOffset}px)
        `;
        box.style.opacity = 1 - Math.abs(angle/180);
      });
      
      current = (current + 1) % totalItems;
    }, 2500);
  }

const box = document.getElementById("about");

    box.addEventListener("mouseenter", () => {
      box.classList.add("active");
    });

const portfolio = document.getElementById("portfolio");

    portfolio.addEventListener("mouseenter", () => {
      portfolio.classList.add("active");
    });

const webdesign = document.getElementById("webdesign");

    webdesign.addEventListener("mouseenter", () => {
      webdesign.classList.add("active");
    });

const contact = document.getElementById("contact");

    contact.addEventListener("mouseenter", () => {
      contact.classList.add("active");
    });

document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    const about = document.getElementById('about');
    about.scrollIntoView({ behavior: 'smooth' });
  });
});
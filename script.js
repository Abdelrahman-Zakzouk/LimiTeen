const themeToggle = document.querySelector(".theme-switch__checkbox");
const currentTheme = localStorage.getItem('theme');
i = 0;
const touch = isTouchDevice();


document.addEventListener('DOMContentLoaded', function ()
{
  document.body.className = localStorage.getItem('theme');
  if (document.body.className === 'dark-mode') {
    document.getElementById('theme-switch').setAttribute('checked', true);
  };
  document.body.style.transition = "none"
  
  var typingEffect = new Typed(".site-name",
  {
    strings: ["Limiteen","&#76;imitee&#110;","&#108;imiteen"],
    loop: true,
    typeSpeed: 100,
    backDelay: 2000,
    backSpeed: 80,
  })
  
});

function navtoggle()
{
  if (i === 0)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.visibility="visible";
    nav.style.transform="translateX(200.5vw)";
    pg.style.filter="blur(3px)";
    body.style.height="97vh";
    body.style.overflowY="hidden";
    i++;
  }
  else if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    body.style.height="auto";
    body.style.overflowY="auto";
    i--;
    
  }
  
}
// close nav on page click
function unnavpageclk()
{
  if (i === 1)
  {
    var nav = document.getElementById('nav');
    var pg = document.getElementById('page');
    var body = document.getElementById('body');
    nav.style.transform="translateX(-200vw)";
    nav.style.visibility="hidden";
    pg.style.filter="unset";
    body.style.height="auto";
    body.style.overflowY="auto";
    i--;
  }
  
}

function isTouchDevice() {
  return (('ontouchstart' in window) ||
  (navigator.maxTouchPoints > 0) ||
  (navigator.msMaxTouchPoints > 0));
}


if (touch)
{
  function anim()
  {
    var bartop = document.getElementById("bartop");
    var barbottom = document.getElementById("barbottom");
    bartop.style.transform="scaleX(1)";
    barbottom.style.transform="scaleX(1)";
  }
  
  function unanim()
  {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }
  else
  {
    function anim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1.7)";
      barbottom.style.transform="scaleX(1.99)";
    }
    
    function unanim()
    {
      var bartop = document.getElementById("bartop");
      var barbottom = document.getElementById("barbottom");
      bartop.style.transform="scaleX(1)";
      barbottom.style.transform="scaleX(1)";
    }
  }
  
  function back() {
    window.scrollTo(0,0);
  }
  
  
  
  function theme(){
    document.body.style.transition = "all 0.5s"
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('theme', 'dark-mode');    
    } else {
      localStorage.removeItem('theme');
    }
  };

  
  function scrollSmoothTo(sectionId) {
    var section = document.getElementById(sectionId);
    section.scrollIntoView(true);

  }
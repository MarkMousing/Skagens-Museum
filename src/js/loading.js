// ACTUAL LOADING (WITHOUT FADING)
// window.onload = function() {
//   document.querySelector('.loading').style.display = "none";
// }


// REMOVE LOAD AFTER 2 SECONDS (WITHOUT FADING)
// setTimeout(function() {
//   document.querySelector('.loading').style.display = "none";
// }, 2000);

// REMOVE LOAD AFTER 2 SECONDS (WITH FADING)
window.onload = function() {
  window.setTimeout(fadeOut, 1000);

  sessionStorage.setItem('key', 'loaded');
    }

  if(sessionStorage.getItem('key') ===   'loaded') {
    console.log(11);
    document.querySelector('.loading').style.display = "none";
  }


function fadeOut() {
  document.querySelector('.loading').style.opacity = '0';
  setTimeout(function() {
    document.querySelector('.loading').style.display = "none";
  }, 800);
}
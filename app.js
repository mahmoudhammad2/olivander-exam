const navbar = document.querySelector('.navbar');
const topArrow = document.querySelector('.top-arrow');
const drop = document.querySelector('.drop');
const dropDown = document.querySelector('.drop-down');
const deepDrop =document.querySelector('.deep-drop');
const nestedDrop = document.querySelector('.nested-drop')

window.onscroll = function() {
let topForNavbar = window.scrollY;
let topForArrow = window.scrollY;
if(topForNavbar >= 100) {
  navbar.classList.add('active-navbar');
} else {
  navbar.classList.remove('active-navbar');
  
}

if (topForArrow >= 300) {
  topArrow.style.display = "block";
} else{
  topArrow.style.display = "none";
}
};

drop.addEventListener('click', (e) => {
  dropDown.classList.toggle('active-drop-down');
  e.preventDefault()
});

deepDrop.addEventListener('click',(e) => {
  nestedDrop.classList.toggle('active-nested-drop');
  e.preventDefault()
console.log('cliked')
})

// Initialize and add the map
function initMap() {
  // The location of Uluru
  const uluru = { lat: -25.344, lng: 131.036 };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: uluru,
  });
  // The marker, positioned at Uluru
  const marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
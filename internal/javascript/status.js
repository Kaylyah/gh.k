var desc = "Système de statuts contrôlé par Freshworks pour avoir connaissance de la sûreté des services par Kayliah.Net(work)";
var ttle = "Status des services – Kayliah";
var fav = "https://gh.kayliah.net/favicon/favicon-32x32.png";

const changeFavicon = link => {
  let $favicon = document.querySelector('link[rel="icon"]')
  // If a <link rel="icon"> element already exists,
  // change its href to the given link.
  if ($favicon !== null) {
    $favicon.href = link
  // Otherwise, create a new element and append it to <head>.
  } else {
    $favicon = document.createElement("link")
    $favicon.rel = "icon"
    $favicon.href = link
    document.head.appendChild($favicon)
  }
}
var allMetaElements = document.getElementsByTagName('meta');
//loop through and find the element you want
for (var i=0; i<allMetaElements.length; i++) { 
  if (allMetaElements[i].getAttribute("name") == "description") { 
     //make necessary changes
     allMetaElements[i].setAttribute('content', desc); 
     //no need to continue loop after making changes.
     break;
  } 
} 

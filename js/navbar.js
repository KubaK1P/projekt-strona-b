const navPlace = document.getElementById("menu-add-span");

function showList() {
  console.log("Call");
  if (navPlace.className == "menu-add-span") {
    navPlace.className += " activated";
    navPlace.innerHTML = `<ul class="list"><li><a href="./html/choroby.html">Choroby</a></li><li><a href="./html/omnie.html">O mnie</a></li><li><a href="./html/oprojekcie.html">O projekcie?</a></li></ul>`;
  } else {
    navPlace.className = "menu-add-span";
    navPlace.innerHTML = "";
  }
}

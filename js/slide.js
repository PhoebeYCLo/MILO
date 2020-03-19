var sbox = document.getElementsByClassName("productmaterial");
var i;

for (i = 0; i < sbox.length; i++) {
  sbox[i].addEventListener("click", function() {
    this.classList.toggle("material-active");
    var pmaterial = this.nextElementSibling;
    if (pmaterial.style.maxHeight){
      pmaterial.style.maxHeight = null;
    } else {
      pmaterial.style.maxHeight = pmaterial.scrollHeight + "px";
    }
  });
}


var sbox = document.getElementsByClassName("productdimensions");
var i;

for (i = 0; i < sbox.length; i++) {
  sbox[i].addEventListener("click", function() {
    this.classList.toggle("dimensions-active");
    var pdimensions = this.nextElementSibling;
    if (pdimensions.style.maxHeight){
      pdimensions.style.maxHeight = null;
    } else {
      pdimensions.style.maxHeight = pdimensions.scrollHeight + "px";
    }
  });
}


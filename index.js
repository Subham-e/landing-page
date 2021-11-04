var toggleButton = document.querySelector(".toggle-div");
var listItems = document.querySelector(".list-items");
 function buttonClick(){
  listItems.classList.toggle("list-items-toggle");
 }
 toggleButton.addEventListener("click",buttonClick,false);

// changing images from mobile to desktop


var img = document.querySelector(".transform-img");
var img2 = document.querySelector(".stand-out-img");
var img3 = document.querySelector(".graphic-design-img");
var img4 = document.querySelector(".photography-img");
var img5 = document.querySelector(".milkbottles")
var img6 = document.querySelector(".orange")
var img7 = document.querySelector(".cone")
var img8 = document.querySelector(".cubes")


  if(screen.width<650){
    img.src = "images/mobile/image-transform.jpg";
    img2.src = "images/mobile/image-stand-out.jpg";
    img3.src = "images/mobile/image-graphic-design.jpg";
    img4.src = "images/mobile/image-photography.jpg";
    img5.src = "images/mobile/image-gallery-milkbottles.jpg";
    img6.src = "images/mobile/image-gallery-orange.jpg";
    img7.src = "images/mobile/image-gallery-cone.jpg";
    img8.src = "images/mobile/image-gallery-sugarcubes.jpg";
  }
  else{
    img.src = "images/desktop/image-transform.jpg";
    img2.src = "images/desktop/image-stand-out.jpg";
    img3.src = "images/desktop/image-graphic-design.jpg";
    img4.src = "images/desktop/image-photography.jpg";
    img5.src = "images/desktop/image-gallery-milkbottles.jpg";
    img6.src = "images/desktop/image-gallery-orange.jpg";
    img7.src = "images/desktop/image-gallery-cone.jpg";
    img8.src = "images/desktop/image-gallery-sugarcubes.jpg";
  }

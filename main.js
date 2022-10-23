let addcart = document.querySelectorAll(".add-cart");

let cartimg = document.querySelectorAll(".add-cart img");

let carth = document.querySelectorAll(".add-cart h4");

let cartp = document.querySelectorAll(".add-cart p").innerHTML;

let add = document.querySelectorAll(".add");

add.forEach((e) => {
  e.addEventListener("click", function () {
    let di = document.createElement("div");

    di.classList.add("cart");

    let im = document.createElement("img");
    im.setAttribute("src", "");
    di.appendChild(im);

    let di2 = document.createElement("div");
    di.appendChild(di2);
    let hh4 = document.createElement("h4");
    di2.appendChild(hh4);

    let sspan = document.createElement("span");
    di2.appendChild(sspan);

    let i1 = document.createElement("i");

    di.appendChild(i1);

    i1.setAttribute("class", "fa-solid fa-xmark close");

    cartitem.prepend(di);

    im.src = `${e.parentElement.firstElementChild.src}`;

    hh4.innerHTML = "Cart Item 01";

    sspan.innerHTML = "$15.99/-";
   
    rload()
  });
});

function rload(){

  let clos = document.querySelectorAll(".close");
  clos.forEach((e) => {
    e.onclick=function(){
      e.parentElement.remove();
  
    }
   
  });
}
rload()

let cartitem = document.querySelector("#cartitem");

let iconshop = document.querySelector(".icon-shop");

iconshop.onclick = function () {
  cartitem.classList.toggle("active");
  showsearch.classList.remove("active");
  navbar.classList.remove("active");
 
};

let search = document.querySelector(".icon-search");
let showsearch = document.querySelector("#search");

search.onclick = function () {
  showsearch.classList.toggle("active");
  cartitem.classList.remove("active");
  navbar.classList.remove("active");
  
};

window.onscroll = function () {
  showsearch.classList.remove("active");
  cartitem.classList.remove("active");
  navbar.classList.remove("active");
};

let bar = document.querySelector(".bar");
let navbar = document.querySelector(".nav-bar");

bar.onclick = function () {
  navbar.classList.toggle("active");
  showsearch.classList.remove("active");
  cartitem.classList.remove("active");
};




 












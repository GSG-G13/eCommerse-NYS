// data To page
// let poductsInfo = [
//   {
//     name: "logo1",
//     photoSrs: "image/22.jpg",
//     price: "20$",
//     catagory: "food",
//   },
//   {
//     name: "logo2",
//     photoSrs: "image/33.jpg",
//     price: "20$",
//     catagory: "food",
//   },
//   {
//     name: "logo3",
//     photoSrs: "image/55.jpg",
//     price: "450$",
//     catagory: "food",
//   },
//   {
//     name: "logo4",
//     photoSrs: "image/33.jpg",
//     price: "50$",
//     catagory: "food",
//   },
// ];

if (localStorage.getItem("customer")) {
  let doArray = localStorage.getItem("customer");
  ctArray = JSON.parse(doArray);
  addProductToPage(ctArray);
}
//  Add product to Page User
function addProductToPage(poductsInfo) {
  let mainele = document.getElementsByTagName("main")[0];
  for (let i = 0; i < poductsInfo.length; i++) {
    let divBox = document.createElement("div");
    divBox.className = "box";

    let imgEle = document.createElement("img");
    // console.log(poductsInfo[i].name);
    imgEle.src = poductsInfo[i].img;

    let divImgDisc = document.createElement("div");
    divImgDisc.className = "img-discription";

    let addIcon = document.createElement("i");
    addIcon.className = "fa-regular fa-heart";
    addIcon.textContent = "add to cart";

    let h4Ele = document.createElement("h4");
    h4Ele.textContent = poductsInfo[i].name;

    let priceDiv = document.createElement("div");
    priceDiv.className = "price";
    priceDiv.textContent = poductsInfo[i].price;

    divBox.appendChild(imgEle);
    divImgDisc.appendChild(addIcon);
    divImgDisc.appendChild(h4Ele);
    divImgDisc.appendChild(priceDiv);
    divBox.appendChild(divImgDisc);
    mainele.appendChild(divBox);
  }
}

document.addEventListener("click", (alpha) => {
  //to delete the element
  if (alpha.target.classList.contains("delBtn")) {
    console.log("this for delete element");
    alpha.target.parentElement.remove();
  }

  //to add
  if (alpha.target.classList.contains("plus")) {
    console.log(alpha.target);
    console.log(alpha.target.classList);
    alpha.target.parentElement.children[1].value =
      parseInt(alpha.target.parentElement.children[1].value) + 1;
  }

  // to minus
  if (alpha.target.classList.contains("minus")) {
    alpha.target.parentElement.children[1].value =
      parseInt(alpha.target.parentElement.children[1].value) - 1;
  }

  //   to update the counter in every time you click
  countUpdate();
});

//for right side bar to open and close
let shopingIcon = document.querySelector("i.fa-cart-shopping.count");
let shopingBox = document.querySelector("aside");
shopingIcon.addEventListener("click", () => {
  console.log("this is shoping card");
  shopingBox.classList.toggle("open");
});

let spanPriceTotal = document.querySelector(".total .totalAll");

//when we click (add To Card) button

let addToCard = document.querySelectorAll(".fa-heart");
addToCard.forEach((heart) => {
  heart.addEventListener("click", (e) => {
    priceTotalFunc(e.target.parentElement.children[2].textContent);
    addProductToCard(
      e.target.parentElement.children[1].textContent,
      e.target.parentElement.parentElement.children[0].src,
      e.target.parentElement.children[2].textContent
    );
  });
});
//  control of Total Price
let priceTotal = 0;
function priceTotalFunc(price) {
  priceTotal += parseInt(price);
  spanPriceTotal.textContent = `$ ${priceTotal}`;
}

//  Add Product to Card

let containerOfBoxes = document.querySelector(".content");
function addProductToCard(namePro, imgSrc, price) {
  let boxCard = document.createElement("div");
  boxCard.className = "box-cart";

  let imgOfCard = document.createElement("img");
  // imgOfCard.src = imgSrc;
  imgOfCard.src = imgSrc;

  let nameCard = document.createElement("h4");
  nameCard.textContent = namePro;

  let containerPlusMinus = document.createElement("div");
  containerPlusMinus.className = "plus-minus";

  let minusBtn = document.createElement("span");
  minusBtn.className = "minus";
  minusBtn.textContent = "-";

  let inputSpecialCount = document.createElement("input");
  inputSpecialCount.className = "special-count";
  inputSpecialCount.type = "text";
  inputSpecialCount.setAttribute("readonly", true);
  inputSpecialCount.value = 1;

  let plusBtn = document.createElement("span");
  plusBtn.className = "plus";
  plusBtn.textContent = "+";

  let priceOfProducr = document.createElement("div");
  priceOfProducr.className = "price";
  priceOfProducr.textContent = price;

  let delBtn = document.createElement("i");
  delBtn.className = "fa-solid fa-trash-can delBtn";
  delBtn.addEventListener("click", () => {
    priceTotal -= parseInt(price);
    spanPriceTotal.textContent = `$ ${priceTotal}`;
  });
  containerPlusMinus.appendChild(minusBtn);
  containerPlusMinus.appendChild(inputSpecialCount);
  containerPlusMinus.appendChild(plusBtn);
  boxCard.appendChild(imgOfCard);
  boxCard.appendChild(nameCard);
  boxCard.appendChild(containerPlusMinus);
  boxCard.appendChild(priceOfProducr);
  boxCard.appendChild(delBtn);
  containerOfBoxes.prepend(boxCard);
}

// Update count
function countUpdate() {
  document.querySelectorAll("i.count").forEach((coun) => {
    coun.textContent = Array.from(
      document.querySelectorAll(".content .box-cart")
    ).length;
  });
}
countUpdate();

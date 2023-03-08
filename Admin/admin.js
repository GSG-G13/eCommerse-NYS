// grt from local storage
if (localStorage.getItem("customer")) {
  let doArray = localStorage.getItem("customer");
  ctArray = JSON.parse(doArray);
  console.log(ctArray);
  ctArray.forEach((b) => {
    // console.log(b.name);
    // console.log(b.img);
    // console.log(b.price);
    // console.log(b.category);
    namePro = b.name;
    imgSrc = b.img;
    price = b.price;
    category = b.category;
    addProductToPage(namePro, imgSrc, price, category);
  });
}
document.addEventListener("click", (alpha) => {
  // declare some elmenets
  namePro = document.querySelector(".nameProduct").value;
  imgSrc = document.querySelector(".photoProduct").value;
  price = document.querySelector(".priceProduct").value;
  category = document.querySelector(".category").value;

  //to delete the element
  if (alpha.target.classList.contains("delBtn")) {
    console.log("this for delete element");
    alpha.target.parentElement.remove();
  }

  // if inputs not empty will add product by values
  if (
    alpha.target.className == "add" &&
    namePro.trim() != "" &&
    imgSrc.trim() != "" &&
    price.trim() != ""
  ) {
    addProductToPage(namePro, imgSrc, price, category);

    //for pop eveything from inputs
    document.querySelector(".nameProduct").value = "";
    document.querySelector(".photoProduct").value = "";
    document.querySelector(".priceProduct").value = "";
    document.querySelector(".category").value = "";
  }

  if (alpha.target.classList.contains("fa-pen-to-square")) {
    if (alpha.target.classList.contains("fa-check")) {
      // will make content non-editable
      document.querySelectorAll("h4").forEach((name) => {
        name.setAttribute("contenteditable", false);
      });
      document.querySelectorAll(".price").forEach((name) => {
        name.setAttribute("contenteditable", false);
      });
    } else {
      // will make content editable
      //the name
      document.querySelectorAll("h4").forEach((name) => {
        name.setAttribute("contenteditable", true);
      });
      //the price
      document.querySelectorAll(".price").forEach((name) => {
        name.setAttribute("contenteditable", true);
      });
    }

    //anyway you will change this shap of iconnnnnnnnnnnnnnnnnnnnnnnnns
    alpha.target.classList.toggle("fa-check");
  }

  //   to update the counter in every time you click
  checkToLocal();
});

// functionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnssssssss

// add Product To Paged
function addProductToPage(namePro, imgSrc, price, category) {
  let main = document.querySelector("main");
  let divBox = document.createElement("div");
  divBox.className = "box";

  let imgEle = document.createElement("img");
  imgEle.src = imgSrc;

  let divImgDisc = document.createElement("div");
  divImgDisc.className = "img-discription";

  let h4Ele = document.createElement("h4");
  h4Ele.setAttribute("contenteditable", false);
  h4Ele.textContent = namePro;

  let priceDiv = document.createElement("div");
  priceDiv.className = "price";
  priceDiv.setAttribute("contenteditable", false);
  priceDiv.textContent = price;

  //delete content
  let deletBtn = document.createElement("i");
  deletBtn.className = "fa-solid fa-trash-can delBtn";

  divBox.appendChild(imgEle);
  divImgDisc.appendChild(h4Ele);
  divImgDisc.appendChild(priceDiv);
  divBox.appendChild(divImgDisc);
  divBox.appendChild(deletBtn);
  main.appendChild(divBox);
}
//set local boxes
function checkToLocal() {
  let boxes = Array.from(document.querySelectorAll(".box"));
  let boxesArray = [];
  boxes.forEach((box) => {
    boxesArray.push({
      name: box.children[1].children[0].textContent,
      img: box.firstChild.src,
      price: box.children[1].children[1].textContent,
      category: "unknown",
    });
  });
  localStorage.setItem("customer", JSON.stringify(boxesArray));
}

// if (
//     alpha.target.classList.contains("fa-plus") &&
//     alpha.target.parentElement.classList.contains("box")
//   ) {
//     countUpdate();
//   }

// ask Menetor

// //Handel minus button
// let minus = document.querySelectorAll(".plus-minus .minus");
// minus.forEach((minusElement) => {
//   minusElement.addEventListener("click", (element) => {
//     //.childNodes[2] will not access input element
//     console.log(element.target);
//     console.log(element.target.parentElement.children[1].value); //for testing
//     element.target.parentElement.children[1].value =
//       parseInt(element.target.parentElement.children[1].value) - 1;
//   });
// });

// //Handel plus button
// let plus = document.querySelectorAll(".plus-minus .plus");
// plus.forEach((plusElement) => {
//   plusElement.addEventListener("click", (element) => {
//     console.log(element.target);
//     element.target.parentElement.children[1].value =
//       parseInt(element.target.parentElement.children[1].value) + 1;
//   });
// });

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
  
  document.addEventListener("click", (e) => {});
  //when we click (add To Card) button
  let addToCard = document.querySelectorAll(".fa-heart");
  addToCard.forEach((heart) => {
    heart.addEventListener("click", (e) => {
      addProductToCard("smookesmookesmookesmooke", "image/22.jpg", "60$");
      addProductToCard("a", "image/44.jpg", "120$");
    });
  });
  
  function addProductToCard(namePro, imgSrc, price) {
    let containerOfBoxes = document.querySelector(".content");
    let boxCard = document.createElement("div");
    boxCard.className = "box-cart";
  
    let imgOfCard = document.createElement("img");
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
  
  /*           <div class="box-cart">
                  <img src="image/22.jpg" alt="title-logo" />
                  <h4>title-logo2</h4>
                  <div class="plus-minus">
                      <span class="minus">-</span>
                      <input class="special-count" type="text" value="1" readonly />
                      <span class="plus">+</span>
                  </div>
                  <div class="price">60$</div>
                  <i class="fa-solid fa-trash-can delBtn"></i>
              </div> */
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
  let arr = "helloWorld";
  newArr = arr.split("");
  stack = [];
  for (let i = 0; i < newArr.length; i++) {
    stack[newArr.length - i] = newArr[i];
  }
  console.log(stack.join(""));
  
  1;
  
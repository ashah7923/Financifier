



///THIS IS FOR THE GOALS SECTION////
let checkBtn = document.getElementById("submit-btn_2");

let n1Elem = document.getElementById("price_stuff");
let totalCost = document.getElementById("total_cost");

let submit = document.getElementById("submit-btn_3");
submit.addEventListener("click", submitForm);

n1Elem.addEventListener('change', updateValue);

function updateValue(e) {
    totalCost.textContent = e.target.value;
}

function submitForm(event) {
    event.preventDefault();

    let n1 = n1Elem.value;

    if(checkBtn.onclick) {
        cdresult = n1 * 2
    }
}


checkBtn.onclick = (event) => {
    event.preventDefault();

    let stuffElem = document.querySelector("#stuff");
    let priceStuffElem = document.querySelector("#price_stuff");

    let formData = {
        stuff: stuffElem.value,
        priceStuff: priceStuffElem.value,

       // debug: function() {
         //   alert(`Item: ${this.stuff}, Price: ${this.priceStuff}`);
       // }
    }

    let addedUser = new User(formData.stuff, formData.priceStuff);
    let userElem = addedUser.makeHTML();

    let userContainer = document.getElementById("user-container");
    userContainer.append(userElem);
}


class User {
    constructor(stuff, priceStuff) {
        this.stuff = stuff;
        this.priceStuff = priceStuff;
    }

    makeHTML() {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("user-item");

        let h2Elem = document.createElement("h2");
        h2Elem.innerHTML = this.stuff;

        parentDiv.append(h2Elem);

        let h2Elem2 = document.createElement("h2");
        h2Elem2.innerHTML = "Price: $" + this.priceStuff;

        parentDiv.append(h2Elem2);


        return parentDiv;
    }
}



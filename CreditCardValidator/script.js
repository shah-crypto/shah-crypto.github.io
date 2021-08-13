let inpEl = document.querySelector("#inp-txt");
let resElTrue = document.querySelector("#res-el-true");
let resElFalse = document.querySelector("#res-el-false");

function checkCard() {
    let inpElCopy = inpEl.value;
    let inpElWithoutSpaces = "";
    let card = "";
    let total = 0;
    let ccno_list = [];
    let trueMessage = "";
    let falseMessage = "";

    for (let i = 0; i < inpElCopy.length; i++) {
        if (inpElCopy[i] != " " && inpElCopy[i] != "-" && !isNaN(inpElCopy[i])) {
            // inpEl[i].replace(inpEl[i], "");
            inpElWithoutSpaces += inpElCopy[i];
        }
    }

    // console.log(inpElWithoutSpaces);
    // console.log(typeof inpElWithoutSpaces);

    if (inpElWithoutSpaces.length < 13 || inpElWithoutSpaces.length > 16) {
        // console.log("Enter a valid card number");
        falseMessage = "Enter a valid Credit Card number";
    }
    else {
        if (inpElWithoutSpaces[0] == '4') {
            card = "Visa";
        }
        else if (inpElWithoutSpaces[0] == '5') {
            card = "Master";
        }
        else if (inpElWithoutSpaces[0] == '6') {
            card = "Discover";
        }
        else if (inpElWithoutSpaces[0] == '3' && inpElWithoutSpaces[1] == '7') {
            card = "American Express";
        }
        // console.log(card);

        for (let i = 0; i < inpElWithoutSpaces.length; i++) {
            ccno_list.push(parseInt(inpElWithoutSpaces[i]));
        }
        // console.log(ccno_list);

        ccno_list.reverse();
        // console.log(ccno_list);

        for (let i = 1; i < ccno_list.length; i += 2) {
            ccno_list[i] *= 2;
        }
        // console.log(ccno_list);

        for (let i = 0; i < ccno_list.length; i++) {
            if (ccno_list[i] > 9) {
                while (ccno_list[i] != 0) {
                    total += (ccno_list[i] % 10);
                    ccno_list[i] = parseInt(ccno_list[i] / 10);
                }
            }
            else {
                total += ccno_list[i];
            }
        }

        // console.log("Total: " + total);
        if (total % 10 == 0) {
            // console.log("Valid " + card + " type");
            trueMessage = "The Card number " + inpElCopy + " is a valid " + card + " type of Credit Card";
        }
        else {
            // console.log("Invalid");
            falseMessage = "The Card number " + inpElCopy + " is an invalid Credit Card number";
        }
    }

    inpEl.value = "";
    resElTrue.textContent = trueMessage;
    resElFalse.textContent = falseMessage;
    // location.reload();
}
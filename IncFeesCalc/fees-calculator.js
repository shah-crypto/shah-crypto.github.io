const companyDeets = document.querySelector("#company-deets");
const state = document.querySelector("#state");
const directors = document.querySelector("#directors");
const capital = document.querySelector("#capital");
let totalIncCost = document.querySelector("#totalIncCost");
let totalIncCost2 = document.querySelector("#totalIncCost2");
let stampDutyFeesEl = document.querySelector("#stampDutyFees");

function calc() {
  if (companyDeets.value && state.value && directors.value && capital.value) {
    companyType = companyDeets.value;
    stateName = state.value;
    noOfDirectors = directors.value;
    capitalPrice = capital.value;

    companyDeets.classList.remove("error");
    state.classList.remove("error");
    directors.classList.remove("error");
    capital.classList.remove("error");

    let normal =
      (moa =
      aoa =
      stampDuty =
      stampDutyAOA =
      stampDutyFees =
      total =
      stampDutyMOA =
        0);
    const proFees = 10000;
    const gst = 1800;
    const spiceA = 1000;

    if (stateName === "Haryana") {
      stampDutyMOA = 60;
      if (capitalPrice <= 1500000) {
        stampDuty = 15;
        stampDutyAOA = 60;
      } else if (capitalPrice > 1500000 && capitalPrice <= 5000000) {
        normal = 500;
        stampDutyAOA = 120;
        moa = 6000 + 0.03 * capitalPrice;
        aoa = 400;
        stampDuty = 15;
      } else {
        normal = 500;
        stampDutyAOA = 120;
        moa = 156000 + 0.01 * (capitalPrice - 5000000);
        aoa = 500;
        stampDuty = 15;
      }
    }

    if (stateName === "Delhi") {
      stampDutyMOA = 200;
      stampDutyAOA = 0.0015 * capitalPrice;
      if (capitalPrice <= 1500000) {
        stampDuty = 10;
      } else if (capitalPrice > 1500000 && capitalPrice <= 5000000) {
        normal = 500;
        moa = 6000 + 0.03 * capitalPrice;
        aoa = 400;
        stampDuty = 10;
      } else {
        normal = 500;
        moa = 156000 + 0.01 * (capitalPrice - 5000000);
        aoa = 500;
        stampDuty = 10;
      }
    }

    stampDutyFees =
      normal +
      moa +
      aoa +
      stampDuty +
      stampDutyAOA +
      stampDutyMOA +
      spiceA +
      1000;
    stampDutyFees1 = stampDutyFees.toFixed(2);
    // console.log(total);
    total = stampDutyFees + proFees + gst;
    total1 = total.toFixed(2);
    totalIncCost.textContent = total1;
    totalIncCost2.textContent = total1;
    stampDutyFeesEl.textContent = stampDutyFees1;
  }
  if (companyDeets.value === "") {
    companyDeets.classList.add("error");
  }
  if (state.value === "") {
    state.classList.add("error");
  }
  if (directors.value === "") {
    directors.classList.add("error");
  }
  if (capital.value === "") {
    capital.classList.add("error");
  }
}

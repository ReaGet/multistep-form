const ui = {
  form: document.querySelector(".form"),
  title: document.querySelector(".content__title"),
  subtitle: document.querySelector(".content__subtitle"),
}

let currentStep = +ui.form.dataset.currentStep || 0;
const steps = {
  1: {
    title: "Personal info",
    subtitle: "Please provide your name, email address, and phone number.",
  },
  2: {
    title: "Select your plan",
    subtitle: "You have the option of monthly or yearly billing.",
  },
  3: {
    title: "Pick add-ons",
    subtitle: "Add-ons help enhance your gaming experience.",
  },
  4: {
    title: "Finishing up",
    subtitle: "Double-check everything looks OK before confirming.",
  },
  5: {
    title: "",
    subtitle: "",
  }
};

document.body.onload = changeContent;

document.addEventListener("click", ({ target }) => {
  const action = (target.closest("[data-action]") || target)?.dataset.action;
  if (!action) {
    return;
  }

  switch(action) {
    case "back":
      currentStep--;
      changeContent();
      break;
    case "next":
      currentStep++;
      changeContent();
      break;
  }
});

function changeContent() {
  currentStep = Math.max(1, Math.min(currentStep, Object.keys(steps).length));
  ui.form.dataset.currentStep = currentStep;
  ui.title.innerHTML = steps[currentStep].title;
  ui.subtitle.innerHTML = steps[currentStep].subtitle;
}
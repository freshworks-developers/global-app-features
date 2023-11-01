var subscribed_modules = getSubscribedModules();
var fields = {
  hide(classNameOfField) {
    let field = document.querySelector(`.${classNameOfField}`);
    field.style.display = "none";
  },
  show(classNameOfField) {
    let field = document.querySelector(`.${classNameOfField}`);
    field.style.display = "block";
  },
};

init();

async function init() {
  let modules = await subscribed_modules;
  if (modules.includes("support_ticket") || modules.includes("deal")) {
    fields.hide("email-field");
  }

  if (modules.includes("service_ticket")) {
    fields.hide("group-field");
  }
}

async function getSubscribedModules() {
  let client = await app.initialized();
  let data = await client.data.get("currentHost");
  subscribed_modules = await data.currentHost.subscribed_modules;
  return subscribed_modules;
}

let groupField = document.querySelector(".group-field");
let emailField = document.querySelector(".email-field");
let darkModeField = document.querySelector(".dark-mode-field");

function getConfigs(configs) {
  groupField.value = configs.groups;
  emailField.value = configs.email;
  darkModeField.value = configs.dark_mode;
}

function validate() {
  let isValid = true;
  // Add any validation, if you throw false, the installation for user will fail
  return isValid;
}

function postConfigs() {
  return {
    __meta: {
      secure: ["dark_mode"],
      modules: {
        support_ticket: ["groups"],
        deal: ["deal"],
        service_ticket: ["email"],
      },
    },
    groups: groupField.value,
    email: emailField.value,
    dark_mode: darkModeField.checked,
  };
}

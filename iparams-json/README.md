# iparams json

# Simulation Setup Page

The users of global apps are can be either of:

- Freshdesk users
- Freshservice users
- Freshsales users
- Another Host product offered by Freshworks

# Frequently Asked Questions

## Who will interact with installation page?

The installation page is the page which an admin user will interact with before installing the app.

## A single installation page for global app. How does it work?

The installation pages are rendered to the admin users, platform gives developer a way to choose what fields are renders to which users. For example, the app will need `email` field only for app users of `service_ticket` -> Freshservice.

## How does my app ensure relevant fields render to relevant users?

The app developers can declare the `modules` for an parameter as follows:

```json
  "email": {
    "display_name": "email",
    "description": "Please enter your email",
    "type": "email",
    "required": true,
    "modules": [
      "contact",
      "service_ticket"
    ]
  },
```

> **Note:** If you choose to not declare `modules` property for an installation parameter, the platform will default in rendering the parameter to all the modules.

## How do I access the user inputs programatically?

- If you want to access the user input to perform validations before the inputs are stored (or user successfully installs), you can write javascript in `iparams.js`
- Once the inputs are stored as iparams with the platform, you can access them at runtime at the declared modules using data method or serverless payloads.

## Isn't it tricky to locally test as a user, when I can have user might be using any Freshworks Host product?

Yes.

We are introducing a new feature in local simulation called app setup page that will let you assume the user and continue testing you app.

In short, as a developer you can select the modules (hence, host freshworks' product) that a user might be subscribed. The continuation will be an simulation as per prior selections. This will let you try different selection combinations to test your app for any potential user of your global app.

## What does this App Setup Page look like?

Like this:

![App Setup Page](../images/app-setup-page.png)

## Why should I enter product URLs in App Setup Page?

We empower apps to grab the URL at runtime of their customer's instance without customer/users giving it to the app.

This means platform will provide APIs to the app developers so that developer can use them, for example to make REST API calls.

During simulation the app is still in development time and not installed on a account yet. To facilitate seamless simulation, this setup page will ask you for the URL. You can give URL of your developer subscription since you will continue simulation in those accounts.

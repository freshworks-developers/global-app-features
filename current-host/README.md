## currentHost

This a API provided to the developers to help their apps understand what modules and product APIs an customer/business/account has subscribed to.

The code interface:

```js
await client.data.get("currentHost");
```

```json
"currentHost": {
    "endpoint_urls": {
        "freshdesk": "https://name.example.com",
        "freshsales": "https://name.example.com",
        "freshservice": "https://name.example.com",
        "freshworks_crm": "https://name.example.com"
    },
    "subscribed_modules": [
        "support_ticket",
        "service_ticket",
        "deal"
    ]
}
```

### What do I need `currentHost` runtime API for?

This modular approach will automatically render your app's UI for the products such as Freshdesk, Freshservice or Freshsales based on the subscribed modules.

- As a developer, you want to control, UI behave differently (eg. Make API calls different). For example, a placholder in Freshdesk vs. placeholder in Freshservice.
- At runtime you can invoke `client.data.get("currentHost")` to get this information realtime and deduce from `endpoint_urls`.

### Local Simulation

A business using Freshworks might have subscribed to one or more products. If you were to simulate, platform will provides to this selection at `http://localhost:10001/system_settings` (we call it setup page) after `fdk run` comman is issued.

## Debugging

Open `.fdk/localstore` after your inputs are configured at set up page. It has the configuration that FDK will help you test your apps.

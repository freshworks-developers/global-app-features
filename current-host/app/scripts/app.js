var client;

init();

async function init() {
  client = await app.initialized();
  client.events.on("app.activated", renderText);
}

async function renderText() {
  const textElement = document.getElementById("apptext");
  /**
   * Setup the subscribed modules: http://localhost:10001/system_settings
   */
  const contactData = await client.data.get("currentHost");

  textElement.innerHTML = `
  <code>
    <pre>
      ${JSON.stringify(contactData, null, 2)}
    </pre>
  </code>
  `;
}

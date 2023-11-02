exports = {
  onTicketCreateHandler: function (payload) {
    console.log(
      "This is invoked both when Freshservice ticket is invoked or Freshdesk ticket is created",
      payload
    );
  },
  onAppInstallHandler: function (payload) {
    console.log("onAppInstallHandler invoked with following data: \n", payload);
    renderData();
  },
  onAppUninstallHandler: function (payload) {
    console.log(
      "onAppUninstalHandler invoked with following data: \n",
      payload
    );
    renderData();
  },
  onDealCreateHandler: function (payload) {
    console.log("onDealCreateHandler invoked and passed", payload);
  },
  onTicketUpdateHandler: function (payload) {
    console.log("Should be invoked onTicketUpdate in Freshservice");
    console.log("payload", payload);
  },
  onTicketUpdateHandlerFreshdesk: function (payload) {
    console.log("Should be invoked onTicketUpdate in Freshdesk");
    console.log("payload", payload);
  },
};

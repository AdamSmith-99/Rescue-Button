/* Create listener for icon click on load */
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "closeTabsAndOpenNewTab") {
    chrome.tabs.query({}, (tabs) => {
		tabs.forEach((tab) => {
			chrome.tabs.remove(tab.id);
		});
		/* New tab address here */
		chrome.tabs.create({ url: "page/rescuepage.html" });
    });
  }
});

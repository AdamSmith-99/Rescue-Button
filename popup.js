/* When icon is clicked, send message to background.js to close tabs and open rescuepage. */
chrome.runtime.sendMessage({ action: "closeTabsAndOpenNewTab" });

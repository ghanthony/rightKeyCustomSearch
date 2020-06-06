function addOptionsToMenus() {

  chrome.storage.sync.get('searchOptions', function(result) {
    if (chrome.runtime.lastError) {
      alert(chrome.runtime.lastError.message);
      return;
    }
    let searchOptions = result['searchOptions'];
    refreshMenus(searchOptions);
  });
}

function refreshMenus(searchOptions) {

  if (searchOptions) {
    chrome.contextMenus.removeAll();
    for (let searchItem of searchOptions) {
      chrome.contextMenus.create(
        {"title": searchItem.name, "contexts":["selection"], "id": searchItem.url});
    }
  }
}

chrome.contextMenus.onClicked.addListener(function(info, tab) {
  let urlStr = info.menuItemId.replace(/%s/, info.selectionText);
  chrome.tabs.create({active:true, index:tab.index+1, url:urlStr});
});

chrome.runtime.onStartup.addListener(addOptionsToMenus);

chrome.runtime.onInstalled.addListener(addOptionsToMenus);

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.runtime.openOptionsPage();
})

chrome.storage.onChanged.addListener(function(changes, areaName) {
  if (areaName == "sync") {
    let searchOptions = changes['searchOptions'].newValue;
    refreshMenus(searchOptions);
  }
})


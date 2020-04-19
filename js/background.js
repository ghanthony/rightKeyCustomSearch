function onClickHandler(info, tab) {
  if (info.menuItemId == "googleSearch") {
    chrome.tabs.create({active:true,index:tab.index+1,url:"http://www.google.com#q="+info.selectionText});
  } else if (info.menuItemId == "weiboSearch") {
    chrome.tabs.create({active:true,index:tab.index+1,url:"http://s.weibo.com/user/"+ info.selectionText +"&Refer=SUer_box"});
  } else if (info.menuItemId == "xiamiSearch") {
    chrome.tabs.create({active:true,index:tab.index+1,url:"http://www.xiami.com/search/song?key="+info.selectionText});
  } else if (info.menuItemId == "doubanMovieSearch") {
    chrome.tabs.create({active:true,index:tab.index+1,url:"http://movie.douban.com/subject_search?search_text="+info.selectionText+"&cat=1002"});
  } else if (info.menuItemId == "taobaoSearch"){
    chrome.tabs.create({active:true,index:tab.index+1,url:"http://s.taobao.com/search?q="+info.selectionText});
  }else {
    alert("error in background.js");
  }
};

var googleSearch = chrome.contextMenus.create({"title": "谷歌","contexts":["selection"],"id":"googleSearch"});
var googleSearch = chrome.contextMenus.create({"title": "虾米音乐","contexts":["selection"],"id":"xiamiSearch"});
var googleSearch = chrome.contextMenus.create({"title": "豆瓣电影","contexts":["selection"],"id":"doubanMovieSearch"});
var googleSearch = chrome.contextMenus.create({"title": "淘宝找货","contexts":["selection"],"id":"taobaoSearch"});
var googleSearch = chrome.contextMenus.create({"title": "微博找人","contexts":["selection"],"id":"weiboSearch"});

chrome.contextMenus.onClicked.addListener(onClickHandler);

chrome.browserAction.onClicked.addListener(
  function(tab) {
    chrome.tabs.create({url:'options.html'});
});


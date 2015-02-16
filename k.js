/**
 * Created by ccheng on 2/16/15.
 */
"use strict";

console.log("content script is loaded.")
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        console.log(sender.tab ?
        "from a content script:" + sender.tab.url :
            "from the extension");
        if (request.greeting == "hello")
            sendResponse({ farewell: document.body.innerHTML });
    });


chrome.webRequest.onBeforeRequest.addListener(
    function(details) { return {cancel: true}; },
    {urls: ["*://www.evil.com/*"]},
    ["blocking"]);


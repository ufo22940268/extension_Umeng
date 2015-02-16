// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.
//
var url;

function send() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { greeting: "hello" }, function (response) {
            console.log(response.farewell);
        });
    });
}

document.getElementById("ok").addEventListener("click", send)


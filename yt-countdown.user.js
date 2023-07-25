// ==UserScript==
// @name         YouTube Countdown Timer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Adds a countdown timer to YouTube before you can use the page.
// @author       YourName
// @include          https://youtube.com/*
// @include          https://*.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const countdownDurationSeconds = 10; // Change this value to set the countdown duration in seconds

    function showCountdownAlert() {
        let timeLeft = countdownDurationSeconds;
        const interval = setInterval(() => {
            alert(`You need to wait ${timeLeft} seconds before using YouTube.`);
            timeLeft--;
            if (timeLeft < 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    showCountdownAlert();
})();
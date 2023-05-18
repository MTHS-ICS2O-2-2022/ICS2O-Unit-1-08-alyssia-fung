// Copyright (c) 2023 Alyssiafung All rights reserved
//
// Created by: Alyssia Fung
// Created on: march 2023
// This file contains the JS functions for index.html
"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-1-08-alyssia-fung/sw.js", {
    scope: "/ICS2O-Unit-1-08-alyssia-fung/",
  })
}
function myButtonClicked() {
  alert("Hello, Wordl!")
}

/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"UGB/UI5_Git_Basics1/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
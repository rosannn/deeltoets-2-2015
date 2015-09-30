window.onload = function () {
	"use strict";

	var project = document.querySelector('fieldset:nth-of-type(3)');
	var stage = document.querySelector('fieldset:nth-of-type(4)');
	var projecttoggle = document.querySelector('input[name="radio1"]');
	var stagetoggle = document.querySelector('input[name="radio2"]');

	var projectweergeef = function () {
		console.log("project click");
		project.classList.add('visible');
		stage.classList.remove('visible');
		stagetoggle.checked = false;
	};

	var stageweergeef = function () {
		console.log("stage click");
		stage.classList.add('visible');
		project.classList.remove('visible');
		projecttoggle.checked = false;
	};

	projecttoggle.addEventListener("click", projectweergeef, false);
	stagetoggle.addEventListener("click", stageweergeef, false);

};

(function function_name (argument) {
	"use strict";
	console.log("file connected");
// single line comment
/*
multi line comment
 */
	var string="This is string of variable";
	var num=1;
	console.log(string);
	console.log("Number  of times of visited"+num);
	var array = ["Knigts","Caps","Leafs"];
	console.log(array);
	function i_am_funtion (argument) {
		console.log("from i am function");
	}
	window.addEventListener("load",i_am_funtion, false);
})();


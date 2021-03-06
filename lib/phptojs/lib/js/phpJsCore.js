/**
 * Created by PhpStorm.
 * User: Jozef Môstka
 * Date: 5/13/2017
 * Time: 22:58
 */

call_user_func_array = function(callback, paramArr) {
	var ret;
	paramArr=__convertObjectToArray(paramArr);
	if (callback instanceof Array || callback instanceof Object){
		callback=__convertObjectToArray(callback);
		ret = callback[0][callback[1]].apply(callback[0],paramArr)
	}else{
		ret = window[callback].apply(callback,paramArr)
	}
	if (typeof ret==="undefined"){
		return null;
	}
	return ret;
};

function isBool(value) {
	return typeof value === "boolean";
}
function isString(value) {
	return typeof value === "string";
}
function isInt(value) {
	if (typeof value === "number"){
		return true;
	}
	if (typeof value === "string"){
		return value==parseInt(value);
	}
	return false;
}
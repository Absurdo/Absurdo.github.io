export const handleArrays = function (x) {
	let helperArray = [];
	if (Array.isArray(x) == false) {
		helperArray.push(x);
      	return helperArray;
	}else{
      	return x
  	}
}
function reverseArray(arr) {
	if (typeof arr!="object" || arr==null) console.log("Error!");
	else {
		var arrRev = [];
		for (var i = arr.length-1; i>=0; i--) {
		arrRev.push(arr[i]);
		}
		return arrRev;
	}
	return false;
}
console.log("reverseArray_test:")
console.log(reverseArray([1,2,3,4,5]));
console.log(reverseArray([1,2,3,4,5,6]));
console.log(reverseArray([1]));
console.log(reverseArray(1));
console.log(reverseArray('1'));
console.log(reverseArray(null));
console.log(reverseArray(undefined));
console.log(reverseArray([-1,'2',"33", -4, 55]));

function reverseArray2(arr) {
	if (typeof arr!="object" || arr==null) console.log("Error!");
	else {
		var c;
		for (var i = 0; i<Math.ceil(arr.length/2); i++) {
		c = arr[i];
		arr[i] = arr[arr.length-1-i];
		arr[arr.length-1-i] = c;
		}
		return arr;
	}
	return false;
}

console.log("reverseArray2_test:")
console.log(reverseArray2([1,2,3,4,5]));
console.log(reverseArray([1,2,3,4,5,6]));
console.log(reverseArray2([1]));
console.log(reverseArray2(1));
console.log(reverseArray2('1'));
console.log(reverseArray2(null));
console.log(reverseArray2(undefined));
console.log(reverseArray2([-1,'2',"33", -4, 55]));
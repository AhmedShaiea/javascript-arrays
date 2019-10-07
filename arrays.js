// TODO 1 : define chocolate bars
var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

// TODO 2 : create functions add Element to start of array
var addElementToBeginningOfArray = (arr, elem) => {
	return [elem, ...arr];
};

var destructivelyAddElementToBeginningOfArray = (arr, elem) => {
	arr.unshift(elem);
	return arr;
};

// TODO 3 : create functions add Element to end of array
var addElementToEndOfArray = (arr, elem) => {
	return [...arr, elem];
};

var destructivelyAddElementToEndOfArray = (arr, elem) => {
	arr.push(elem);
	return arr;
};

// TODO 4 : create a function that accesses an an array
var accessElementInArray = (arr, idx) => {
	return arr[idx];
};

// TODO 5 : create a function that removes first element in an array
var destructivelyRemoveElementFromBeginningOfArray = (arr) => {
	arr.shift();
	return arr;
};

// TODO 6 : create a function that slices first element in an array
var removeElementFromBeginningOfArray = (arr) => {
	return arr.slice(1);	
};

// TODO 7 : create a function that removes last element in an array
var destructivelyRemoveElementFromEndOfArray = (arr) => {
	arr.pop();
	return arr;
};

// TODO 8 : create a function that slices last element in an array
var removeElementFromEndOfArray = (arr) => {
	return arr.slice(0, arr.length -1);
};

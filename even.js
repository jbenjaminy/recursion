'use strict';

let isEven = (int) => {
	if (int === 0) {
		return true;
	} else if (int === 1) {
		return false;
	}

	int = int - 2;

	return isEven(int);
}

console.log(isEven(0));
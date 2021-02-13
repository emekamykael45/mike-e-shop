export const formatAmount = (n) => {
	return n
		? "IDR " +
				Number(n * 1000000)
					.toFixed(0)
					.replace(/./g, function (c, i, a) {
						return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
					})
		: "IDR 0";
};

// Local storage operations
export const useLocalStorage = {
	set: (key, data) => {
		let stringifiedData = JSON.stringify(data);
		localStorage.setItem(key, stringifiedData);
	},

	get: (key) => {
		const data = JSON.parse(localStorage.getItem(key));

		if (!data) {
			return null;
		}
		return data;
	},

	remove: (key) => {
		localStorage.removeItem(key);
	},

	clear: () => {
		localStorage.clear();
	},
};

export const sumOfObjectKeys = (array, key) => {
	return array.reduce((a, b) => a + (b[key] || 0), 0);
};

export const ObjIsEmpty = (obj) => {
	if (Object.keys(obj).length === 0 && obj.constructor === Object) {
		return true;
	} else {
		return false;
	}
};

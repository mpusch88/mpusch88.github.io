export const getTaxAmount = (pricing, location) => {
	let taxRate = 0; //Tax rate for province
	if (location === "BC") {
		//BC
		taxRate = 0.12;
	} else if (location === "AB") {
		//Alberta
		taxRate = 0.05;
	} else if (location === "SK") {
		//Sask
		taxRate = 0.11;
	} else if (location === "MN") {
		//Manitoba
		taxRate = 0.13;
	} else if (location === "ON") {
		//Ontario
		taxRate = 0.13;
	} else if (location === "QC") {
		//Quebec
		taxRate = 0.1498;
	} else if (location === "NB") {
		//New Brunswick
		taxRate = 0.15;
	} else if (location === "NL") {
		//Newfoundland
		taxRate = 0.15;
	} else if (location === "PE") {
		//P.E.I
		taxRate = 0.15;
	} else if (location === "NS") {
		//Nova Scotia
		taxRate = 0.15;
	}

	let price = pricing.reduce((sum, priceItem) => {
		if (priceItem.isTaxable) {
			return sum + parseFloat(priceItem.price);
		} else {
			return sum;
		}
	}, 0);

	let taxSum = (price * taxRate);
	return getMoneyRound(taxSum);
};

export const getServiceAmount = (pricing) => {
	let serviceRate = 0.10;
	let price = pricing.reduce((sum, priceItem) => {
		return sum + parseFloat(priceItem.price);
	}, 0);

	let serviceSum = (price * serviceRate);
	return getMoneyRound(serviceSum);
};

export const getMoneyRound = (num) => {
	//return Math.round(num * 100) / 100;
	return Number(Math.round(num + 'e2') + 'e-2').toFixed(2);
	//return new Intl.NumberFormat('en',{ style:'currency',currency:'CAD' }).format(num);
};

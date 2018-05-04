// Write a JavaScript program to validate that a credit card number:

// It must have 16 digits, unless it starts with 37 or 34. Then, and only then, it MUST have 15 digits
// It must start with one of the folliowing. Print off "valid" and the type of card
// 6011 = Discover Card
// 37 or 34 = American Express
// 4 = Visa
// 50-55 = MasterCard

function validateCard(cardNumber){
	let cardNumStr = cardNumber.toFixed(0);
	let digits = cardNumStr.length;
	let validCard = true;
	let cardType = "";
	if(digits === 16){
		validCard = true;
		if(cardNumStr.slice(0,4) == 6011){
			cardType = "Discover Card";
		}else if(cardNumStr[0] == 4){
			cardType = "Visa";
		}else if(cardNumStr.slice(0,2) >= 50 && cardNumStr.slice(0,2) <= 55){
			cardType = "MasterCard";
		}else{
			validCard = false;
		}

	} else if(digits === 15){
		if(cardNumStr.slice(0,2) == 34 || cardNumStr.slice(0,2) == 37){
			validCard = true;
			cardType = "American Express"
		}else{
			validCard = false;
		}
	}else{
		validCard = false;
	}

	
if(validCard){
	console.log("Valid");
	console.log(cardType);
}else{
	console.log("Invalid");
}
	
}
validateCard(4911245678902341);



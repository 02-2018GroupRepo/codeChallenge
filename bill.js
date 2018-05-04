levelOfService =  "fail";
billAmount = 20;
numberOfPeople = 5;

if(levelOfService == "good"){
	tip = billAmount*0.2;
}else if(levelOfService == "fail"){
	tip = billAmount*0.15;
} else if(levelOfService =="bad"){
	tip = billAmount*0.10;
}

total = billAmount + tip;
console.log(`total is ${total}`);
totalPerPerson = total / numberOfPeople;
console.log(`total per person is ${totalPerPerson}`);
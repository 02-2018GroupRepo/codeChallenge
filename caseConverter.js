
function caseConvert(str, conversionType){

// take in the str --> array of string
// const characters = str.split('');
// console.log(characters);

// if(it has _)


let words =str.split(" ");
let convertedStr = "";
if(conversionType === "snakecase"){
	convertedStr = words.join("_");
} else if(conversionType === "camelcase"){
	for(let i = 1; i< words.length; i++){
		characters = words[i].split('');
		characters[0] = characters[0].toUpperCase();
		words[i] = characters.join("");

	}
	convertedStr = words.join("");
} else {
	console.log("wrong conversion type!")
}

console.log(convertedStr);
 return convertedStr;

} 

caseConvert("hello world","camelcase");
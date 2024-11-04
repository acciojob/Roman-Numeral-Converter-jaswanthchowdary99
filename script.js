function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1]
    };
if(num >= 900){
	result = result + "CM";
	num = num - 900;
}
	if(num >= 400){
	result = result + "CD";
	num = num - 400;
}
	if(num >= 40){
	result = result + "XL";
	num = num - 40;
}
	if(num >= 90){
	result = result + "XC";
	num = num - 90;
}
	if(num >= 9){
	result = result + "IX";
	num = num - 9;
}
	if(num >= 4){
	result = result + "IV";
	num = num - 4;
}
	
  //your code here
	let result = '';
Object.values(obj).forEach(([symbol, value])=>{
	let count = Math.floor(num / value);
	result = result + symbol.repeat(count);
	num = num - value * count;
})
	return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

console.log(convertToRoman(36));
console.log(convertToRoman(67894));   
console.log(convertToRoman(49879));   
console.log(convertToRoman(12345)); 



// do not edit below this line
module.exports = convertToRoman

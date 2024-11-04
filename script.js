function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
      1:['D', 500], 
      2:['C', 100], 
      3:['L', 50], 
      4:['X', 10], 
      5:['V', 5], 
      6:['I', 1],
	  7:['CM', 900],
      8:['CD', 400],
	  9:['XC', 90],	
	  10:['XL', 40],
	  11:['IX', 9], 
	  12:['IV', 4]	
    };

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

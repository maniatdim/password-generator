const resultElementOne = document.getElementById('first-password');
const resultElementSecond = document.getElementById('second-password');
const resultElementThird = document.getElementById('third-password');
const resultElementFourth = document.getElementById('fourth-password');
const lengthElement = document.getElementById('length');
const generateElement = document.getElementById('generate');

function getRandomLower() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	return +String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '#$!-_()%^'
	return symbols[Math.floor(Math.random() * symbols.length)];
}

const randomGenerate = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol
}

const filterFinalPasswords = {
	filterFirstPassword: resultElementOne,
	filterSecondPassword: resultElementSecond,
	filterThirdPassword: resultElementThird,
	filterFourthPassword: resultElementFourth
}

generate.addEventListener('click', () => {
	const length = +lengthElement.value;
	const hasLower = getRandomLower;
	const hasUpper = getRandomUpper;
	const hasNumber = getRandomNumber;
	const hasSymbol = getRandomSymbol;
	
	resultElementOne.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	resultElementSecond.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	resultElementThird.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
	resultElementFourth.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
});


function generatePassword(lower, upper, number, symbol, length) {
	let generatedPassword = '';
	const arrayItem = [{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0]);

	for(let i = 0; i < length; i++) {
		arrayItem.forEach(type => {
			const functionName = Object.keys(type)[0];
			generatedPassword += randomGenerate[functionName]();
		});
	}
	
	const finalPassword = generatedPassword.slice(0, length);
	
	return finalPassword;
}
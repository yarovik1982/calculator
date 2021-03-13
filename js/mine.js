'Use strict'
// let result1, result2, result3;
let firstElectric = document.querySelector('#first-data-eltctric'),
	 lastElectric = document.querySelector('#last-data-electric'),
	 tariphElectric = document.querySelector('#tariph-electric'),
	 sumElectric = document.querySelector('#sum-electric'),

	 firstGas = document.querySelector('#first-data-gas'),
	 lastGas = document.querySelector('#last-data-gas'),
	 tariphGas = document.querySelector('#tariph-gas'),
	 sumGas = document.querySelector('#sum-gas'),

	 firstWater = document.querySelector('#first-data-water'),
	 lastWater = document.querySelector('#last-data-water'),
	 tariphWater = document.querySelector('#tariph-water'),
	 sumWater = document.querySelector('#sum-water'),

	 sumInternet = document.getElementById('sum-internet').value,
	 sumRent = document.getElementById('sum-rent').value,
	 sumTV = document.getElementById('sum-tv').value,
	 sumRepairs = document.getElementById('sum-repairs').value,
	 sumTrash = document.getElementById('sum-trash').value,

	 sumTotal = document.querySelector('#sum-total');

	 buttonAmountTotal = document.querySelector('.amount-total');

// function calcElectric() {
// 	sumElectric.value = (lastElectric.value - firstElectric.value) * tariphElectric.value;
// 	return;
// }
// calcElectric()
// function calcGas() {
// 	sumGas.value = (lastGas.value - firstGas.value) * tariphGas.value;
// 	return;
// }
// calcGas()
// function calcWater() {
// 	sumWater.value = (lastWater.value - firstWater.value) * tariphWater.value;
// 	return;
// }
// calcWater();
buttonAmountTotal.onclick = () => {

	function calcWater() {
	sumWater.value = (lastWater.value - firstWater.value) * tariphWater.value;
	return;
}
calcWater();

	function calcElectric() {
	sumElectric.value = (lastElectric.value - firstElectric.value) * tariphElectric.value;
	return;
}
calcElectric();

function calcGas() {
	sumGas.value = (lastGas.value - firstGas.value) * tariphGas.value;
	return;
}
calcGas();
	sumTotal.value = parseFloat(+sumElectric.value + +sumGas.value + +sumWater.value + +sumInternet + +sumRent + +sumTV + +sumRepairs + +sumTrash).toFixed(2);
}

console.log(sumTotal.value);
// function calcElectric() {
// 	let numElectricLast, numElectricFirst, numElectricPlan, result1;
// 	numElectricLast = document.getElementById('a1').value;
// 	numElectricFirst = document.getElementById('a2').value;
// 	numElectricPlan = document.getElementById('a3').value;
// 	result1 = (numElectricLast - numElectricFirst) * numElectricPlan;
// 	// return result1;
// 	document.getElementById('a4').value = result1;
	
// }
// calcElectric();

// function calcGas() {
// 	let numGasLast, numGasFirst, numGasPlan, result2;
// 	numGasLast = document.getElementById('b1').value;
// 	numGasFirst = document.getElementById('b2').value;
// 	numGasPlan = document.getElementById('b3').value;
// 	result2 = (numGasLast - numGasFirst) * numGasPlan;
// 	document.getElementById('b4').value = result2;
// 	// return result2;
// }
// // calcGas();

// function calcWater() {
// 	let numWaterLast, numWaterFirst, numWaterPlan, result3;
// 	numWaterLast = document.getElementById('c1').value;
// 	numWaterFirst = document.getElementById('c2').value;
// 	numWaterPlan = document.getElementById('c3').value;
// 	result3 = (numWaterLast - numWaterFirst) * numWaterPlan;
// 	document.getElementById('c4').value = result3;
// 	// return result3;
// }
// // calcWater();

// function calc() {
// 	let result1, result2, result3, num4, num5, num6, num7, num8, num9;
// 	result1 = getElementById('a4').value;
// 	result2 = getElementById('b4').value;
// 	result3 = getElementById('c4').value;
// 	num4 = getElementById('d4').value;
// 	num5 = getElementById('e4').value;
// 	num6 = getElementById('f4').value;
// 	num7 = getElementById('g4').value;
// 	num8 = getElementById('h4').value;
// 	num9 = result1 + result2 + result3 + num4 + num5 + num6 + num7 + num8;
// 	document.getElementById('i4').value = num9;
// };
// calc();

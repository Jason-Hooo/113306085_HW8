let button = document.getElementById("button");
document.getElementById("operator").addEventListener("change", function() {
	let operator = document.getElementById("operator").value;
	if (operator == "+") {
		button.textContent = "Add";
	} else if (operator == "-") {
		button.textContent = "Subtract";
	} else if (operator == "*") {
		button.textContent = "Multiply";
	} else {
		button.textContent = "Divide";
	}
});

function caculate() {
	let num1 = parseFloat(document.getElementById("number1").value);
	let num2 = parseFloat(document.getElementById("number2").value);
	if (isNaN(num1) || isNaN(num2)) {
		alert("不可為空值或是非數字");
		return;
	}

	let result = "Result = ";
	let operator = document.getElementById("operator").value;
	if (operator == "+") {
		result += (num1 + num2).toFixed(2);
	} else if (operator == "-") {
		result += (num1 - num2).toFixed(2);
	} else if (operator == "*") {
		result += (num1 * num2).toFixed(2);
	} else {
		if (num2 == 0) {
			alert("除法分母不可為0");
			return;
		}
		result += (num1 / num2).toFixed(2);
	}

	document.getElementById("result").innerHTML = result;
}
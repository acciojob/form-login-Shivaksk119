function getFormvalue() {
    //Write your code here
	let form = document.getElementById('form1')
	let fName = form.elements['fname'];
	let lName = form.elements['lname'];

	alert(`${fName.value} ${lName.value}`);
}

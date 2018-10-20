var cartBody = document.querySelector('.cart-body');

cartBody.addEventListener('click', function(evt){
	var element = evt.target.classList[0];
	var productQuantity = event.target.parentNode.parentNode.previousElementSibling;

	if(element == "increment"){
		var incrementInput = event.target.previousElementSibling;
		currentValue = ++incrementInput.value;

		productQuantity.querySelector('.product-quantity').textContent = currentValue;
		
	} else if(element == "decrement"){
		var decrementInput = event.target.nextElementSibling;
		currentValue = --decrementInput.value;
		
		productQuantity.querySelector('.product-quantity').textContent = currentValue;
	}
})
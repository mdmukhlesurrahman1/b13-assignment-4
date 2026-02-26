## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

	Ans: We use getElementById to select a specific Element, use getElementsByClassName to select a type of html collections, and use querySelector / querySelectorAll to get node list type data.

### 2. How do you create and insert a new element into the DOM?

	Ans: To create an element use => document.createElement() method.

			ex: const newElement = document.createElement("p");

		 then set text into p tag,

		 	ex: newElement.innerText = "This is my content.";

		 then find a html section to set the element, suppose i have a div section with id = div1 to set this element, and set the element there.

			ex: document.getElementById("div1").appendChild(newElement);


### 3. What is Event Bubbling? And how does it work?

	Ans: Event bubbling is a dom event propagation mechanism.

		 It works 3 Phases:

		 1. Capturing Phase: the event capture from root to target.
		 2. Target Phase: the event hits the target.
		 3. Bubbling Phase: the event bubbling from the target to root.

### 4. What is Event Delegation in JavaScript? Why is it useful?

	Ans: Event delegation is a JavaScript method that attaching a single event listener to a common parent element to manage events for all of its child elements.

### 5. What is the difference between preventDefault() and stopPropagation() methods?

	Ans: 	  preventDefault() use for cancels browser default behavior.
		 and, stopPropagation() use for stops event bubbling.

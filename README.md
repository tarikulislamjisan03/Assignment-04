1. Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll
getElementById: Targets a single element with a specific ID. It is highly efficient and returns only one element.

getElementsByClassName: Returns a live HTMLCollection containing all elements that have a specific class name.

querySelector: Uses CSS selectors to return the first matching element in the DOM (e.g., .class, #id, or tag).

querySelectorAll: Returns a static NodeList containing all elements that match the specified CSS selector.

2. How to Create and Insert a New Element into the DOM
To create and insert an element, follow these steps:

Creation: Use document.createElement('tagName') to create the element.

Configuration: Set attributes or content using innerText, innerHTML, or classList.add().

Insertion: Use appendChild() to add it at the end of a parent, or prepend() to add it at the beginning.

3. What is Event Bubbling?
Event Bubbling is a phenomenon in the DOM where an event triggered on a child element "bubbles up" to its ancestors (parents, grandparents, etc.) until it reaches the window object. If listeners are attached to those parents, they will also be triggered.

4. What is Event Delegation and Why is it Useful?
Event Delegation is a technique where instead of adding event listeners to multiple child elements, you add a single listener to a common parent.

Benefits: It significantly improves performance by reducing memory usage and ensures that dynamically added children automatically inherit the event behavior.

5. Difference between preventDefault() and stopPropagation()
preventDefault(): This method prevents the default action associated with an event (e.g., preventing a form from refreshing the page or a link from navigating).

stopPropagation(): This method prevents the event from bubbling up the DOM tree, ensuring that parent event handlers are not executed when the child is triggered.

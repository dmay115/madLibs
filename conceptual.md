### Conceptual Exercise

Answer the following questions below:

-   What is React? When and why would you use it?
    React is a JS library. It is very useful for single page applications and is useful when you want to build with reusable components.

-   What is Babel?
    Babel is a compiler that converts new JS to be compatible with older browers

-   What is JSX?
    JSX is a language you can use in React that is similar to HTML. You can use it to write the HTML section of a component.

-   How is a Component created in React?
    Components are written in a separate file and can be reused inside of other components or projects.

-   What are some difference between state and props?
    The major difference between state and props is that state is mutable while props are not. State is used by it's own component and is used to store data that may change. Props are generally passed from a different component and remain static.

-   What does "downward data flow" refer to in React?
    It refers to the transfer of data between components. Data has a one way direction, coming from a parent component to a child component

-   What is a controlled component?
    A controlled component is a component that gets it's data from a piece of state that changes as the user inputs information. These are used for form data and allows the input data to be validated in real time.

-   What is an uncontrolled component?
    An uncontrolled component is a component that retrieves it's data after it is submitted to the DOM.

-   What is the purpose of the `key` prop when rendering a list of components?
    It helps React keep track of the list and keeps it organized.

-   Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    An array is a poor choice because it is mutable and can get React off track when items are removed or added to the array

-   Describe useEffect. What use cases is it used for in React components?
    useEffect is used to make changes within the component, but only when a specific segment of state is changed instead of every time state is changed. One use case is for timers as they will reset and get off track if they update every time state updates.

-   What does useRef do? Does a change to a ref value cause a rerender of a component?
    useRef creates persistent data that can be stored between rerenders. A change of ref does not cause a rerender

-   When would you use a ref? When wouldn't you use one?
    It is useful for storing a reference to a DOM element or storing values between renders. You wouldn't want to use one if you need the component to trigger a rerender.

-   What is a custom hook in React? When would you want to write one?
    A custom hook is like a reusable function. You would use it when you have different components doing a similar task. They are useful for

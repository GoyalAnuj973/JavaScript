document.querySelector("#grandparent")
    .addEventListener('click', () => {
        console.log("Grandparent Clicked!");
    }, true); //true is passed so that means useCapture is true that means
    //event calling eith be in capturing or trickling down manner

    document.querySelector("#parent")
    .addEventListener('click', (e) => {
        console.log("Parent Clicked!");
        e.stopPropagation();
    }, false); //bubbling

    document.querySelector("#child")
    .addEventListener('click', () => {
        console.log("Child Clicked!");
    }, true); //capturing / trickling

    //Net output i.e. the order in which the events will be called are:
    // if clicked on Child : (if stopPropagation is not used)
    // Grandparent -> Child -> Parent

    // if stopPropagation() is used in Parent:
    // Child clicked with useCapture as false in both child and parent:
    // Child -> Parent -> stop (GrandChild not called)

    //if stopPropagation() is used only in child:
    // useCapture is true for child and grandparent but false for parent:
    // childclicked:
    // GrandParent -> Child -> stop (now bubbling will not initiate because  of stopPropagation and thats by parent will not be invoked )
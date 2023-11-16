const heading = React.createElement("h1", {}, "Hello React");
const root = ReactDOM.createRoot(document.getElementById("root"));


//Nested structure
const parent = React.createElement("div",
    { id: "parent" },
    React.createElement("div", { id: "child" },
        React.createElement("h1", {}, "I'm h1"))
);

//sibling structure
const sibling = React.createElement("div",
    { id: "parent1" },
    React.createElement("div", { id: "child" },
        [React.createElement("h1", {}, "I'm h1"), React.createElement("h2", {}, "I'm h2")])
);

root.render(parent);
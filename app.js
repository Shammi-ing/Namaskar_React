// const heading = React.createElement(
//   "h5",
//   { id: "heading" },
//   "Hello World from React!, This is the begining of the react!"
// );

// console.log("heading"); //object to you
const basictable = React.createElement("Div", { id: "Container" }, [
  React.createElement("h1", { id: "head/ing" }, [
    React.createElement("h1", {}, "I am an H1"),
    React.createElement("h1", {}, "I am an H1"),
  ]),
]);

// mula ahau tmi
// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child1" }, [
//     React.createElement("h1", {}, "I am an H1"),
//     React.createElement("h2", {}, "I am an H2"),
//     React.createElement("h3", {}, "I am an H3"),
//     React.createElement("h4", {}, "I am an H4"),
//     React.createElement("h5", {}, "I am an H5"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am an H1"),
//     React.createElement("h2", {}, "I am an H2"),
//     React.createElement("h3", {}, "I am an H3"),
//     React.createElement("h4", {}, "I am an H4"),
//     React.createElement("h5", {}, "I am an H5"),
//   ]),
// ]);

// const Boot = ReactDOM.createRoot(document.getElementById("Boot"));
// Boot.render(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(basictable);

// const Element = <h1>"HEllo ladies"</h1>;

// root.render(Element);

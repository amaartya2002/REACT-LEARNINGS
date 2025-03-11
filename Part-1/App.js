const heading = React.createElement(
  "h1",
  { id: "heading", abc: "xyz" },
  "This is a h1 heading through Recat.createElement()"
)

console.log(heading); // It is an object which has props as the attributes i passed in

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(heading); // When it renders it converts the JS object into a html element
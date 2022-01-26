import React from "react";
import reactDom from "react-dom";
// import "./index.css";
function Books() {
  return (
    <section className="books">
      <p>my content is going to be here</p>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};
const Image = () => {
  return (
    <img
      width="100"
      src="https://images-na.ssl-images-amazon.com/images/I/71N4oeWwYlL._AC_UL200_SR200,200_.jpg"
      alt="Harry Potter"
    />
  );
};

const Title = () => (
  <h1 style={{ fontSize: "2rem", color: "red" }}>The Harry Potter</h1>
);
const authorStyle = {
  letterSpacing: "5px",
  color: "green",
};
const Author = () => <p style={authorStyle}>by Anne Frank</p>;
// Same using Java-Script instead JSX.
/*
function Greeting() {
  return React.createElement("h1", {}, "harshit sachdeva");
}
*/

reactDom.render(<Books />, document.getElementById("root"));

import { useState } from "react";
import "./app.css";
import TableRow from "./components/TableRow";
import TableTitle from "./components/TableTitle";

const attributes = [
  "password",
  "email",
  "Phone Number",
  "class",
  "name",
  "Phone Number",
  "class",
  "name",
];
const methods = [
  "study()",
  "can enroll()",
  "remove student()",
  "read()",
  "can enroll()",
  "remove student()",
  "read()",
];

function App() {
  const [page, setPage] = useState(1);

  const nextPage = (e) => {
    e.preventDefault();
    console.log("BeFORE", page);
    setPage(page + 1);
    if (page === 3) setPage(0);
    console.log(page);
  };

  const prevPage = (e) => {
    e.preventDefault();
    console.log("BeFORE", page);
    setPage(page - 1);
    if (page === 0) setPage(3);
    console.log(page);
  };

  const reset = (e) => {
    setPage(1);
  };

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Case {page}</h1>
        <div className="mini-header">
          <h3>Page {page} of 3</h3>
          <div className="radios">
            <input type="radio" checked />
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="leftBlock">
          <div className="image">
            <img src={`/img/${page}.png`} alt="first" />
          </div>
          <div className="description">
            <h3>Information</h3>
            <br />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
              quam est accusantium minus explicabo modi eaque voluptatum
              molestiae! Dolores numquam tempore nam mollitia
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
              quisquam illo odio similique
            </p>
            <ul>
              <li>
                <b>Relevant:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </li>
              <li>
                <b>Obvious:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </li>
              <li>
                <b>Redundant:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </li>
              <li>
                <b>Context:</b> Lorem ipsum dolor sit amet consectetur
                adipisicing elit.
              </li>
            </ul>
          </div>
        </div>
        <div className="rightBlock">
          <div>
            <h3>Recommended items</h3>
            <br />
            <TableTitle title="Attributes" />
            <div className="tableRow">
              {attributes.map((attribute, i) => (
                <TableRow item={attribute} key={i} />
              ))}
            </div>

            <br />
            <TableTitle title="Methods" />
            <div className="tableRow">
              {methods.map((attribute, i) => (
                <TableRow item={attribute} key={i} />
              ))}
            </div>
            <div className="submi">
              <input
                type="text"
                name=""
                id=""
                placeholder="Your recommendation"
              />
              {page !== 0 && <button onClick={prevPage}>Previous</button>}
              {page !== 3 && <button onClick={nextPage}>Next</button>}
              {page === 3 && <button onClick={reset}>Submit</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

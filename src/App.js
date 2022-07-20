import { useState } from "react";
import "./app.css";
import TableRow from "./components/TableRow";
import TableTitle from "./components/TableTitle";
// import Hola from "./components/Hola";

const attributes = [
  "password",
  "email",
  "Phonenumber",
  "class",
  "id",
  "email",
  "classes",
  "color",
];
const methods = [
  "study()",
  "can enroll()",
  "remove student()",
  "add activity()",
  "write()",
  "get student()",
  "log out()",
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
              The figure shows a class diagram with a class in blue. This class is the target class subject to the recommendations. 
              The target class is the class subject to the recommendations. The other classes of the class diagram, 
              shown in grey, are the context information of the target class.
            </p>
            <br />
            <p>
              Evaluate the recommended items presented in the list to the right using the following criteria:
            </p>
            <ul>
              <li>
                <b>Correct:</b> The recommended item is correct for the target class
              </li>
              <li>
                <b>Obvious:</b> The recommended item is an item you could have easily come up with yourself
              </li>
              <li>
                <b>Redundant:</b> The recommended item exists or is similar to an existing one
              </li>
              <li>
                <b>Contextualized:</b> The recommended item belongs to the diagram domain
              </li>
              <li>
                <b>Generalizable:</b> The recommended item is also applicable to other classes of the diagram
              </li>
            </ul>
          </div>
          {/* <Hola name={"liss"}/> */}
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
              <h4> Provide here your recommendation</h4>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your recommendation"
              />
              {page !== 0 && <button conClick={prevPage}>Previous</button>}
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

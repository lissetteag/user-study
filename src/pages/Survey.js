import { useState } from "react";
import "../app.css";
import TableRow from "../components/TableRow";
import TableTitle from "../components/TableTitle";
import participants from "../data/ParticipantsWithCaseIDs.json";
import data from "../data/JSSUserStudyCases_311Education.json";
import { useAppContext } from "../context/AppContext";

// const attributes = [
//   "password",
//   "email",
//   "Phonenumber",
//   "class",
//   "id",
//   "email",
//   "classes",
//   "color",
// ];
// const methods = [
//   "study()",
//   "can enroll()",
//   "remove student()",
//   "add activity()",
//   "write()",
//   "get student()",
//   "log out()",
// ];

function getPageData(case_id) {
  const caseIds = participants[case_id ? case_id : 0]["caseID"];

  let caseIDdataArray = [];

  for (const caseId of caseIds) {
    let extArr = data.filter((d) => d.caseID === caseId);
    caseIDdataArray.push(extArr);
  }

  return caseIDdataArray;
}

function Survey() {
  const { state } = useAppContext();
  const [page, setPage] = useState(1);
  let imgs = [74, 266, 476];
  console.log("****************", page);

  /* Function definition */
  const nextPage = (e) => {
    e.preventDefault();

    if (page === 3) setPage(0);
    else setPage(page + 1);
  };

  const prevPage = (e) => {
    e.preventDefault();

    if (page === 0) setPage(3);
    else setPage(page - 1);
  };

  const reset = (e) => {
    setPage(1);
  };

  /* Function calls */
  let data = getPageData(state.id);
  // console.log(state);

  let currentData = data[page - 1 < 0 ? setPage(1) : page - 1];
  // console.log(currentData);

  let methods = currentData.filter((curr) => curr.type === "Operation");
  let attributes = currentData.filter((curr) => curr.type === "Property");

  return (
    <div className="app">
      <div className="header">
        <h1 className="title">Case {page}</h1>
        <div className="mini-header">
          <h3>Page {page} of 3</h3>
          <div className="radios">
            <input type="radio" />
            <input type="radio" />
            <input type="radio" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="leftBlock">
          <div className="image">
            <img
              src={`/img/${imgs[page - 1 < 0 ? setPage(1) : page - 1]}.png`}
              alt="first"
            />
          </div>
          <div className="description">
            <h3>Information</h3>
            <br />
            <p>
              The figure shows a class diagram with a class in blue. This class
              is the target class subject to the recommendations. The target
              class is the class subject to the recommendations. The other
              classes of the class diagram, shown in grey, are the context
              information of the target class.
            </p>
            <br />
            <p>
              Evaluate the recommended items presented in the list to the right
              using the following criteria:
            </p>
            <ul>
              <li>
                <b>Correct:</b> The recommended item is correct for the target
                class
              </li>
              <li>
                <b>Obvious:</b> The recommended item is an item you could have
                easily come up with yourself
              </li>
              <li>
                <b>Redundant:</b> The recommended item exists or is similar to
                an existing one
              </li>
              <li>
                <b>Contextualized:</b> The recommended item belongs to the
                diagram domain
              </li>
              <li>
                <b>Generalizable:</b> The recommended item is also applicable to
                other classes of the diagram
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
              <h4> Provide here your recommendation</h4>
              <input
                type="text"
                name=""
                id=""
                placeholder="Your recommendation"
              />
              {page !== 1 && <button onClick={prevPage}>Previous</button>}
              {page !== 3 && <button onClick={nextPage}>Next</button>}
              {page === 3 && <button onClick={reset}>Submit</button>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Survey;

// import React from "react";
// import { useAppContext } from "../context/AppContext";

// function Survey() {
//   const { state, dispatch } = useAppContext();
//   console.log(state);
//   return <div>Survey</div>;
// }

// export default Survey;

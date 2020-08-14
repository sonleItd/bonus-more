import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./styles.css";
// #e3fdfd
// #cbf1f5
// #a6e3e9
// #71c9ce
export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        meta: [
          { key: "a", label: "A", type: "String" },
          { key: "b", label: "B", type: "Integer" },
          { key: "c", label: "C", type: "Date" },
          { key: "d", label: "D", type: "String" }
        ],
        body: [
          { a: "A", b: "1", c: "C", d: "D" },
          { a: "A", b: "1", c: "C", d: "D" }
        ]
      },
      instance: { sortable: "d" }
    };
  }

  render() {
    const instance = this.state.instance;
    const tableHeader = [];
    const orderedHeader = [];
    this.state.data.meta.forEach(function (obj, icol) {
      tableHeader.push(
        <td className="header-td" key={icol}>
          <div className="header-field">
            <span className="left">{obj.label}</span>
            {instance.sortable === obj.key && (
              <span className="right">
                <FontAwesomeIcon
                  icon="sort"
                  style={{ "--fa-primary-color": "eggplant" }}
                />
              </span>
            )}
          </div>
        </td>
      );
      orderedHeader.push(obj.key);
    });

    const tableRow = [];
    this.state.data.body.forEach(function (row, irow) {
      let rowTmp = [];
      orderedHeader.forEach(function (key, icol) {
        rowTmp.push(
          <td className="body-td" key={irow + "_" + key}>
            {row[key]}
          </td>
        );
      });
      tableRow.push(
        <tr className="body-tr" key={irow}>
          {rowTmp}
        </tr>
      );
    });

    return (
      <div>
        <table className="table table-sm cusTable">
          <tbody>
            <tr>{tableHeader}</tr>
            {tableRow}
          </tbody>
        </table>
      </div>
    );
  }
}

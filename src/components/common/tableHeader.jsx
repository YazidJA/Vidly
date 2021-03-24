import React, { Component } from "react";

class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  };

  render() {
    const { columns, onSort, sortColumn } = this.props;

    return (
      <thead>
        <tr>
          {this.props.columns.map((columns) => (
            <th
              key={columns.path || columns.key}
              onClick={() => this.raiseSort(columns.path)}>
              {columns.label}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;

import React, { Component } from 'react';


class TableHeaderRow extends Component {
  render() {
    const {tableHeader} = this.state;

    const headerRow = tableHeader.map((tableHeader) =>
      <td key={tableHeader}>{tableHeader}</td>
    );
    return (
      <tr>{headerRow}</tr>
    );
  }
}

export default TableHeaderRow;

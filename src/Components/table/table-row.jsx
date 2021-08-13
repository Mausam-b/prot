import React, { Component } from 'react';


class TableRow extends Component {
  render() {
    const {wordList} = this.state;
    
    const row = Object.keys(wordList).map((index, value) =>
      <td key={index}>{wordList[value]}</td>
    );
    return (
      <tr>{row}</tr>
    );
  }
}
export default TableRow;

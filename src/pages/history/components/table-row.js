import React from 'react';

const TableRow = ({ date, names }) => (
  <tr>
    <td>{date}</td>
    <td>{names[0]} & {names[1]}</td>
  </tr>
);

export default TableRow;


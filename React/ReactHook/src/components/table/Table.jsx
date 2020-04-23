import React from "react";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

export default ({ dataSource, column }) => {
  // const {dataSource} = props;

  return (
    <Table>
      <TableHead>
        <TableRow>
          {column.map((c, i) => (
            <TableCell key={i}>{c.title}</TableCell>
          ))}
        </TableRow>
      </TableHead>

      <TableBody>
        {dataSource.map(data => (
          <TableRow key={data.id}>
            {column.map((c, i) => {
              if (c.render) {
                return <TableCell>{c.render(data[c.dataIndex])}</TableCell>;
              } else {
                return <TableCell key={i}>{data[c.dataIndex]}</TableCell>;
              }
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

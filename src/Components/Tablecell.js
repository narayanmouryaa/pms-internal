// import React from 'react';
// import {
//   Table,
//   TableHead,
//   TableBody,
//   TableRow,
//   TableCell,
//   Checkbox,
// } from '@mui/material';

// function TableCell() {
//   return (
//     <Table>
//       <TableHead>
//         <TableRow>
//           <TableCell>Heading</TableCell>
//           <TableCell>Column 1</TableCell>
//           <TableCell>Column 2</TableCell>
//           <TableCell>Column 3</TableCell>
//           <TableCell>Column 4</TableCell>
//           <TableCell>Column 5</TableCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {Array.from(Array(6).keys()).map((rowIndex) => (
//           <TableRow key={rowIndex}>
//             <TableCell>Row {rowIndex + 1}</TableCell>
//             <TableCell>
//               {rowIndex === 1 || rowIndex === 3 ? (
//                 <Checkbox size="large" />
//               ) : (
//                 <Checkbox />
//               )}
//             </TableCell>
//             <TableCell>Value 2</TableCell>
//             <TableCell>Value 3</TableCell>
//             <TableCell>Value 4</TableCell>
//             <TableCell>Value 5</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }

// export default TableCell;

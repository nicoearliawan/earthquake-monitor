import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

export default function TableList({ earthquakeData }) {

  function formatTime(time) {
    const date = new Date(time);
    return date.toLocaleString();
  }

  return (
    <div className="m-10">
      <div className="overflow-x-auto">
        <Table className="text-md text-center ">
          <TableHead>
            <TableRow className="bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-white">
              <TableHeadCell>No</TableHeadCell>
              <TableHeadCell>Place</TableHeadCell>
              <TableHeadCell>Coordinates</TableHeadCell>
              <TableHeadCell>Magnitude</TableHeadCell>
              <TableHeadCell>Magnitude Type</TableHeadCell>
              <TableHeadCell>Time</TableHeadCell>
              <TableHeadCell>Depth</TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y text-gray-900 dark:divide-gray-700 dark:text-white">
            {earthquakeData.map((item, index) => (
              <TableRow key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="text-grey">
                  {index + 1}
                </TableCell>
                <TableCell className="py-7 max-w-50">{item.properties.place}</TableCell>
                <TableCell>{item.geometry.coordinates[0]}, {item.geometry.coordinates[1]}</TableCell>
                <TableCell>{item.properties.mag}</TableCell>
                <TableCell>{item.properties.magType}</TableCell>
                <TableCell >
                  {formatTime(item.properties.time)}
                </TableCell>
                <TableCell>{item.geometry.coordinates[2]} KM</TableCell>
              </TableRow>
            ))}
          </TableBody>

        </Table>
      </div>
    </div>
  );
}
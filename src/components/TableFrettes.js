import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import CalculeFrette from "../config/CalculeFrette";
import Frette from "./Frette";

export default function TableFrette(props) {
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    setDistances(CalculeFrette(props.diapason, props.nbFrettes));
  }, [props.diapason, props.nbFrettes]);

  console.log(distances);
  return (
    <Card>
      <CardHeader></CardHeader>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th></th>
              <th>Entre frettes</th>
              <th>Sillet à frette</th>
              <th>Chevalet à frette</th>
            </tr>
          </thead>
          <tbody>
            {distances.map((distance, key) => {
              return (
                <Frette
                  numero={distance[0]}
                  distanceFrette={distance[1]}
                  distanceSilletFrette={distance[2]}
                  distanceChevaletFrette={distance[3]}
                />
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

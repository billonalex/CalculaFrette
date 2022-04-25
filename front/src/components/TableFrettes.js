import { useEffect, useState } from "react";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import CalculFrette from "../config/CalculFrette";
import Frette from "./Frette";

export default function TableFrette(props) {
  const [distances, setDistances] = useState([]);

  useEffect(() => {
    setDistances(CalculFrette(props.diapason, props.nbFrettes));
  }, [props.diapason, props.nbFrettes]);

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
                  key={key}
                  numero={distance.numerofrette}
                  distanceFrette={distance.distanceEntreFrettes}
                  distanceSilletFrette={distance.distanceSilletFrette}
                  distanceChevaletFrette={distance.distanceChevaletFrette}
                />
              );
            })}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
}

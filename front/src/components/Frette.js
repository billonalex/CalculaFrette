import { Input } from "reactstrap";

export default function Frette(props) {
  return (
    <tr>
      <td scope="row">{props.numero} - </td>
      <td>
        <Input type="text" disabled value={props.distanceFrette} />
      </td>
      <td>
        <Input type="text" disabled value={props.distanceSilletFrette} />
      </td>
      <td>
        <Input type="text" disabled value={props.distanceChevaletFrette} />
      </td>
    </tr>
  );
}

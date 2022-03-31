import logo from "./logo.svg";
import "./App.css";

import backgrounds from "./config/Backgrounds";
import { Container, Input, Label } from "reactstrap";
import Title from "./components/Title";
import TableFrette from "./components/TableFrettes";
import { useState } from "react";

const Background = backgrounds[Math.floor(Math.random() * backgrounds.length)];

function App() {
  const [nbFrettes, setNbFrettes] = useState(24);
  const [diapason, setDiapason] = useState(0);
  return (
    <div className="App">
      <div style={styles.background}>
        <Container fluid style={styles.container}>
          <Title />
          <br />
          <Label for="nbfrette">Nombre de frettes</Label>
          <Input
            name="nbfrette"
            type="text"
            value={nbFrettes}
            onChange={(e) => {
              setNbFrettes(e.target.value);
            }}
          />
          <br />
          <br />
          <Label for="diapason">Diapason</Label>
          <Input
            name="diapason"
            type="text"
            value={diapason}
            onChange={(e) => {
              setDiapason(e.target.value);
            }}
          />
          <br />
          <br />
          <TableFrette nbFrettes={nbFrettes} diapason={diapason} />
        </Container>
      </div>
    </div>
  );
}

const styles = {
  container: {
    marginBottom: 55,
    maxWidth: 600,
    paddingBottom: 65,
    minHeight: 500,
  },
  background: {
    backgroundImage: `url(${Background}) `,
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100vw",
    height: "100vh",
    alignContent: "center",
    justifyContent: "center",
    display: "flex",
  },
};

export default App;

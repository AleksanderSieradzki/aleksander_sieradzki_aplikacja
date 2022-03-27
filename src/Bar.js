import React from "react";
import { InputGroup, FormControl, Button } from "react-bootstrap";

const Bar = () => {
  return (
    <InputGroup className="mb-3" style={{ marginTop: "20px" }}>
      <FormControl placeholder="Wpisz nazwę rasy" />
      <Button variant="outline-secondary" style={{ marginLeft: "10px" }}>
        Szukaj
      </Button>
    </InputGroup>
  );
};

export default Bar;

import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown } from 'react-bootstrap';
const Mblogin = () => {
  return (
    <>
      <Button type="button" className="btn">
        <span className="glyphicon glyphicon-cog"></span>
      </Button>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default Mblogin;

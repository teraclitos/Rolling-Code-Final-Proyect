import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
function ResponsiveExample() {
  return (
    <Container className="m-5">
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>id</th>
            <th>Mail o nombre usuario</th>
            <th>Contraseña(en puntitos)</th>
            <th>Modificar</th>
            <th>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 </td>
            <td>_id </td>
            <td> user</td>
            <td>password </td>
            <td>
              <Button variant="warning">
                Modificar
                <FontAwesomeIcon icon={faUserPen} className="mx-2" />
              </Button>
            </td>
            <td>
              <Button variant="danger">
                Eliminar
                <FontAwesomeIcon icon={faTrash} className="mx-2" />
              </Button>
            </td>
          </tr>

          {/* {data.map((d, i) => (
            <tr>
              <td>#</td>
              <td>{data._id}</td>
              <td>{data.user}</td>
              <td>{data.password}</td>
              <td>id</td>
              <td>user</td>
              <td>password</td>
              <td>
                <Button>Eliminar</Button>
              </td>
              <td>
                <Button>Modificar</Button>
              </td>
            </tr>
          ))} */}
        </tbody>
      </Table>
    </Container>
  );
}

export default ResponsiveExample;

import { Container, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
import Table from "react-bootstrap/Table";

function AdminTable() {
  return (
    <body>
      <Container>
        <div class="d-flex mx-auto pt-4 pb-3 justify-content-center table-admin">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <td>3</td>
                <td colSpan={2}>Larry the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
    </body>
  );
}

export default AdminTable;

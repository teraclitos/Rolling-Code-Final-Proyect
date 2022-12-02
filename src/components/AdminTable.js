import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";
function ResponsiveExample() {
  return (
    <main>
      <Container>
        <div className="d-flex mx-auto pt-4 pb-3 justify-content-center div-administrador">
          <div className="d-flex flex-column">
            <div className="d-flex flex-column align-items-center">
              <h3 className="text-center py-2 titulo-admin">ADMIN user</h3>
            </div>
            <div class="table-responsive">
              <table className="table table-color mx-auto table-striped table-hover container mt-3 table-bordered">
                <thead>
                  <tr>
                    <th className="col">ID</th>
                    <th className="col">Mail</th>
                    <th className="col">Habilitar</th>
                    <th className="col">Opciones</th>
                    <th className="col">Opciones</th>
                    <th className="col">Habilitar</th>
                    <th className="col">Opciones</th>
                    <th className="col">Opciones</th>
                  </tr>
                </thead>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
                <tbody id="filas"></tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </main>

    // <Table responsive>
    //   <thead>
    //     <tr>
    //       <th>#</th>
    //       <th>id</th>
    //       <th>Mail o nombre usuario</th>
    //       <th>Contraseña(en puntitos)</th>
    //       <th>Modificar</th>
    //       <th>Eliminar</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       <td>1 </td>
    //       <td>_id </td>
    //       <td> user</td>
    //       <td>password </td>
    //       <td>
    //         <Button variant="warning">
    //           Modificar
    //           <FontAwesomeIcon icon={faUserPen} className="mx-2" />
    //         </Button>
    //       </td>
    //       <td>
    //         <Button variant="danger">
    //           Eliminar
    //           <FontAwesomeIcon icon={faTrash} className="mx-2" />
    //         </Button>
    //       </td>
    //     </tr>

    //     {/* {data.map((d, i) => (
    //         <tr>
    //           <td>#</td>
    //           <td>{data._id}</td>
    //           <td>{data.user}</td>
    //           <td>{data.password}</td>
    //           <td>id</td>
    //           <td>user</td>
    //           <td>password</td>
    //           <td>
    //             <Button>Eliminar</Button>
    //           </td>
    //           <td>
    //             <Button>Modificar</Button>
    //           </td>
    //         </tr>
    //       ))} */}
    //   </tbody>
    // </Table>
  );
}

export default ResponsiveExample;

import { Container, Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/allcss.css";
import { faTrash, faUserPen } from "@fortawesome/free-solid-svg-icons";

import React, { useEffect, useState } from "react";

const AdminTable = (dataUser) => {
  // const [dataUser, setDataUser] = useState([]);
  // useEffect(() => {
  //   fetch("https://backend-news-eight.vercel.app/users/verusuarios")
  //     .then((res) => res.json())
  //     .then((json) => setDataUser(json));
  // }, []);

  return (
    <div>
      {" "}
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
                    <th className="col">Nombre</th>
                    <th className="col">Nombre de Usuario</th>
                    <th className="col">COntraseña</th>
                    <th className="col">Email</th>
                    <th className="col">Modificar</th>
                    <th className="col">Eliminar</th>
                  </tr>
                </thead>

                <tbody id="filas">
                  {dataUser.map((d, i) => (
                    <tr>
                      <td>{d._id}</td>
                      <td>{d.name}</td>
                      <td>{d.username}</td>
                      <td>{d.password}</td>
                      <td>{d.email}</td>
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
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AdminTable;

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

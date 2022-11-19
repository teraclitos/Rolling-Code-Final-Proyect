import { React, useState } from "react";
import "../styles/articlepublicitygrid.css";
import Categorias from "../components/Categorias";
import { Button, Card, Pagination } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Articlepublicitygrid = ({ data, add }) => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 2; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="container grid-articles-publicity mt-5  ">
      <div className="grid-articles">
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
        <div className="mb-3 ">
          <Card className="border-0">
            <Card.Img
              variant="top"
              src="https://media.ambito.com/p/9e1a0deee64c500875512338d2a1490a/adjuntos/239/imagenes/040/223/0040223837/entradas-mundial-qatarjpg.jpg"
            />
            <Card.Body className="p-0 ps-1 ">
              <h3 className="category-title fs-6 mt-1 mb-0">Fútbol</h3>
              <Card.Title className="mt-1 mb-0">Mundial</Card.Title>
              <Card.Text className="mt-1 mb-0">
                This is a wider card with supporting text below...
              </Card.Text>
            </Card.Body>
            <Card.Footer className="d-flex justify-content-between p-0 px-1 border-0 mt-2 bg-white ">
              <Button className="py-1 px-2 btn-color ">Leer más</Button>
              <FontAwesomeIcon
                className="align-self-center fs-5 text-danger"
                icon={faHeart}
              />
            </Card.Footer>
          </Card>
        </div>
      </div>
      <div className="grid-publicity ">
        <div>
          <Categorias />
        </div>
      </div>
      <div className="d-flex  justify-content-center mt-1">
        <Pagination>{items}</Pagination>
      </div>
    </div>
  );
};

export default Articlepublicitygrid;

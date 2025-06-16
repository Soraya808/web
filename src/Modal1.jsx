import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function Modal1(props) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const externalCloseBtn = (
    <button
      type="button"
      className="close"
      style={{ position: 'absolute', top: '15px', right: '15px' }}
      onClick={toggle}
    >
      &times;
    </button>
  );
  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Precio
      </Button>
      <Modal isOpen={modal} toggle={toggle} external={externalCloseBtn}>
        <ModalHeader>Cursos de Danza</ModalHeader>
        <ModalBody>
          <b> Aprende danzas típicas con instructores expertos.</b>
          <br />
          Horario: mañana-tarde-noche<br />
          Costo: 200bs. Mensules costo de promocion solo por el mes de mam&aacute;<br />
          Antes: 250bs. Aproveha esta gran oportunidad<br />
          Curso: infantiles-prejuveniles-jovenes<br />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Hacer algo
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cerrar
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Modal1;
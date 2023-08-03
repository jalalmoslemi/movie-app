import Modal from 'react-bootstrap/Modal';

interface Props {
  show: boolean;
  closeModal: () => void;
}

function ModalView({ closeModal, show }: Props) {
  return (
    <Modal show={show} onHide={closeModal}>
      <Modal.Header closeButton>
        <Modal.Title>تماس با ما</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <span>تلفن تماس:</span>
        <span dir="ltr">0939-772-8039</span>
        <br />
        <span>ایمیل:</span>
        <span>jalalmoslemi78@gmail.com</span>
        <br />
        <span>آدرس:</span>
        <span>خراسان رضوی مشهد</span>
      </Modal.Body>
      <Modal.Footer>
        <button className="btn btn-danger" onClick={closeModal}>
          بستن
        </button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalView;

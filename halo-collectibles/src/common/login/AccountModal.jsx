import React from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import AccountList from "./AccountList";
import AddAccountForm from "./AddAccountForm";
import { LoginProvider } from "./LoginContext";

const AccountModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} toggle={onClose}>
      <ModalBody>
        <ModalHeader toggle={onClose}>Settings</ModalHeader>
        <ModalBody>
          <AccountList />
          <hr />
          <AddAccountForm />
        </ModalBody>
      </ModalBody>
    </Modal>
  );
};

export default AccountModal;

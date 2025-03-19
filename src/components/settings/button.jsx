import React, { useState } from "react";
import { Button, Modal } from "antd";
import NormalLoginForm from "./login";
import Register from "./Register";
const ButtonLogin = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Trạng thái cho Login Modal
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Trạng thái cho Register Modal

  const showLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const handleLoginOk = () => {
    setIsLoginModalOpen(false);
  };

  const handleLoginCancel = () => {
    setIsLoginModalOpen(false);
  };

  const showRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  const handleRegisterOk = () => {
    setIsRegisterModalOpen(false);
  };

  const handleRegisterCancel = () => {
    setIsRegisterModalOpen(false);
  };

  return (
    <div>
      {/* Login Button */}
      <Button
        type="primary"
        onClick={showLoginModal}
        className="bg-blue-800 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50"
      >
        Login
      </Button>
      {/* Login Modal */}
      <Modal
        title="Login"
        open={isLoginModalOpen}
        onOk={handleLoginOk}
        onCancel={handleLoginCancel}
        className="modal-custom"
      >
        <NormalLoginForm />
      </Modal>

      {/* Register Button */}
      <Button
        type="primary"
        onClick={showRegisterModal}
        className="bg-blue-800 text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-opacity-50 ml-8"
      >
        Register
      </Button>
      {/* Register Modal */}
      <Modal
        title="Register"
        open={isRegisterModalOpen}
        onOk={handleRegisterOk}
        onCancel={handleRegisterCancel}
        className="modal-custom"
      >
        <Register />
      </Modal>
    </div>
  );
};
export default ButtonLogin;

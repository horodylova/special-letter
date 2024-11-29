import { useState } from "react";

import Home from "./components/Home/Home"
import Modal from "./components/Modal/Modal"
import SecondModal from "./components/SecondModal/SecondModal";

import {openModal, closeModal} from "./modalLogic"
 
function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isSecondModalOpen, setIsSecondModalOpen] = useState(false)

  const handleOpenModal = () => {
    openModal(setIsModalOpen)
  }

  const handleCloseModal = () => {
    closeModal (setIsModalOpen)
  }

  const handleFormSubmit = () => {
    closeModal(setIsModalOpen)
    openModal(setIsSecondModalOpen)
  }

  const handleCloseSecondModal = () => {
    closeModal(setIsSecondModalOpen)
  }
  return (
    <div>
    <Home onButtonClick={handleOpenModal} />
    {isModalOpen && (
      <Modal onClose={handleCloseModal} onSubmit={handleFormSubmit} />
    )}
    {isSecondModalOpen && (
      <SecondModal onClose={handleCloseSecondModal} />
    )}
  </div>
  )
}

export default App;

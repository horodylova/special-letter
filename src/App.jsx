import { useState } from "react";

import Home from "./components/Home/Home"
import Modal from "./components/Modal/Modal"

import {openModal, closeModal} from "./modalLogic"

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    openModal(setIsModalOpen)
  }

  const handleCloseModal = () => {
    closeModal (setIsModalOpen)
  }
  return (
      <>
      <Home onButtonClick = {handleOpenModal}/>
      {isModalOpen && <Modal onClose={handleCloseModal}/>}
      </>
  )
}

export default App;

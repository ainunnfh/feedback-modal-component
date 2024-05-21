"use client";
import React, { useState } from "react";
import ModalFeedback from "./ModalFeedback";

const ButtonOpenModal = () => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <button
        onClick={() => {
          setOpenModal(true);
        }
      }
        className="border border-[#7A58F4] hover:bg-[#7A58F4] p-2 rounded-md hover:cursor-pointer"
      >
        Feedback
      </button>
      {openModal && <ModalFeedback openModal={openModal} setOpenModal={setOpenModal}/>}
    </div>
  );
};

export default ButtonOpenModal;

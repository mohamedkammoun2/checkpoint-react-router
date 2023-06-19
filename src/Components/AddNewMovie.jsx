import React, { useState } from "react";

import Modal from "react-modal";
import StarRating from "./StarRating";
const AddNewMovie = ({ handleAdd }) => {
  const [name, setName] = useState("TEST");
  const [image, setImage] = useState("");
  const [date, setDate] = useState("");
  const [rating, setRating] = useState(0);
  const handleRating = (x) => setRating(x);
  const handleSubmit = () => {
    const newElement = {
      id: Math.random(),
      image,
      date,
      rating,
      name,
    };
    handleAdd(newElement);
    closeModal();
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  // Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
  Modal.setAppElement("#root");

  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <button onClick={openModal} className="btn">
        Add
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form onSubmit={handleSubmit}>
          <label>Movie Title</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Movie Poster</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <StarRating rating={rating} handleRating={handleRating} />
          <label>Movie Date</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <div>
            <button className="btn" type="submit">
              {" "}
              Add
            </button>
            <button className="btn" onClick={closeModal}>
              Cancel
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddNewMovie;

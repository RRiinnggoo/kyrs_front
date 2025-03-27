import React, { useState } from "react";

const AddCardForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [serviceType, setServiceType] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCard = { title, description, imageUrl, serviceType };

    fetch("/api/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCard),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Card created:", data);
        // Очистка формы
        setTitle("");
        setDescription("");
        setImageUrl("");
        setServiceType("");
      })
      .catch((error) => console.error("Error creating card:", error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Service Type"
        value={serviceType}
        onChange={(e) => setServiceType(e.target.value)}
        required
      />
      <button type="submit">Add Card</button>
    </form>
  );
};

export default AddCardForm;
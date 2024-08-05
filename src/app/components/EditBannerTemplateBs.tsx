'use client'
import React, { useState } from 'react';

type EditBannerProps = {
  title: string;
  description: string;
  cta: string;
  image: string;
  background: string;
  onSave: (title: string, description: string, cta: string, image: string, background: string) => void;
};

const EditBannerTemplateBs: React.FC<EditBannerProps> = ({ title: initialTitle, description: initialDescription, cta: initialCta, image: initialImage, background: initialBackground, onSave }) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [cta, setCta] = useState(initialCta);
  const [image, setImage] = useState(initialImage);
  const [background, setBackground] = useState(initialBackground);

  const handleSubmit = () => {
    onSave(title, description, cta, image, background);
  };

  return (
    <div className="edit-banner">
      <h2 className="edit-banner__title">Edit Banner</h2>
      <div className="edit-banner__image">
        <img src={image} alt="Banner Image"></img>
      </div>
      <div className="edit-banner__form">
        <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
        <input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
        <input value={cta} onChange={(e) => setCta(e.target.value)} placeholder="CTA" />
        <input value={image} onChange={(e) => setImage(e.target.value)} placeholder="Image URL" />
        <input value={background} onChange={(e) => setBackground(e.target.value)} placeholder="Background" />
        <button onClick={handleSubmit} className="edit-banner__save-button">Save</button>
      </div>
    </div>
  );
};

export default EditBannerTemplateBs;
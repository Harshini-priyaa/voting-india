import React, { useState } from 'react';

const ImageInput = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUpload = () => {
    // Perform the upload logic here
    // You can use selectedImage to get the selected image file and send it to the server
    setShowPopup(true);
    downloadImage(selectedImage); // Trigger download
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const downloadImage = (imageFile) => {
    const url = URL.createObjectURL(imageFile);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = imageFile.name;
    anchor.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {selectedImage && <img src={URL.createObjectURL(selectedImage)} alt="Uploaded" style={{ width: '200px', height: '200px' }} />}
      <button onClick={handleUpload}>Upload</button>
      {showPopup && (
        <div className="popup">
          <p>Image has been uploaded and downloaded!</p>
          <button onClick={closePopup}>Close</button>
        </div>
      )}
    </div>
  );
};

export default ImageInput;
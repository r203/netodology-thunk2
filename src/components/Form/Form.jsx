import React, { useState, useRef } from 'react';
import fileToDataUrl from '../../helpers/fileToDataUrl';
import { useDispatch } from "react-redux";
import { addPhoto } from '../../redux/photosSlice'

function Form() {
  const [form, setForm] = useState({
    image: '',
  });
  const dispatch = useDispatch();
  const ref = useRef();

  const handleSelectFiles = async (evt) => {
    const files = [...evt.target.files];
    const image = await Promise.all(files.map(o => fileToDataUrl(o)));
    setForm(
      prevForm => ({ ...prevForm, 'image': image })
    )
  }

  const handleAddPhoto = (event) => {
    event.preventDefault();
    if (form.image.length > 0) {
      dispatch(addPhoto(form.image))
    }

    setForm({
      image: '', 
    });
    ref.current.value = ""; // как правильно стереть файл из инпута? с помощью ref?
  }


  return (
    <form onSubmit={handleAddPhoto}>
      <div>
        <label htmlFor="image">Click to select</label>
        <input type="file" id="image" name="image" accept="image/*" onChange={handleSelectFiles} ref={ref} required />
      </div>
      <button>Добавить</button>
    </form>
  );
}

export default Form;
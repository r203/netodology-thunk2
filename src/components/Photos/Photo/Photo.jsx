const Photo = ({ photo }) => {

  return (
    <li className="photo">
      <img src={photo} alt='Фото'></img>
    </li>
  )
}

export default Photo;
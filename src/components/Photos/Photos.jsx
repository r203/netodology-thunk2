import { useSelector } from "react-redux";
import Photo from "./Photo/Photo";

const Photos = () => {
  const photos = useSelector((state) => state.photos.photos)

  return (
    <ul className="photos_list">
      {photos
        .map(photo => {
          return (
            <Photo photo={photo} key={photo.toString()}/>
          )
        })}
    </ul>
  )
}

export default Photos;
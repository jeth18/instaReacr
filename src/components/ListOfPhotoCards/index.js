import React from 'react'
import { PhotoCard } from '../PhotoCard'
// un arreglo vacio y por defecto un objecto vacio
export const ListOfPhotoCardsComponent = ({ data: { photos = [] } } = {}) => {
  return (
    <ul>
      {photos.map(photo => <PhotoCard key={photo.id} {...photo} />)}
    </ul>
  )
}

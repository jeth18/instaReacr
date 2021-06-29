/* eslint-disable react/jsx-closing-tag-location */
import React, { Fragment } from 'react'
import { ImgWrapper, Img, Button, Article } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'

export const PhotoCard = ({ id, likes = 0, src }) => {
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  const [show, ref] = useNearScreen()
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (

    <Article ref={ref}>
      {
        // eslint-disable-next-line react/jsx-fragments
        show && <Fragment>
          <a href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <Button onClick={() => setLiked(!liked)}>
            <Icon size='30px' /> {likes} likes!
          </Button>
        </Fragment>
      }
    </Article>
  )
}

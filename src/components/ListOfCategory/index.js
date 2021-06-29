import React, { useState, useEffect, Fragment } from 'react'
import { Category } from '../Category/'
import { List, Item } from './styles'

export const ListOfCategories = () => {
  const [showFixed, setShowFixed] = useState(false)

  function useCategoriesData () {
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
      setLoading(true)
      window.fetch('https://petgram-server-red.vercel.app/categories')
        .then(response => response.json())
        .then(response => {
          setCategories(response)
          setLoading(false)
        })
    }, [])

    return { categories, loading }
  }

  const { categories, loading } = useCategoriesData()

  useEffect(() => {
    const onScroll = e => {
      const newShowFixed = window.scrollY > 200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => document.removeEventListener('scroll', onScroll)
  })

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading
          ? <Item key={loading}> <Category /> </Item>
          : categories.map(
            category => <Item key={category.id}> <Category {...category} /> </Item>
          )
    }
    </List>
  )
  return (
    // eslint-disable-next-line react/jsx-fragments
    <Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </Fragment>

  )
}

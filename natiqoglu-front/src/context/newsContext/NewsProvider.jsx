import React, { createContext } from 'react'
import { useState } from 'react'

export const NewsContext = createContext()

function NewsProvider({children}) {
    const [news, setNews] = useState([])
    

    const data = {
        setNews
    }

  return (
    <NewsContext.Provider value={data}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider
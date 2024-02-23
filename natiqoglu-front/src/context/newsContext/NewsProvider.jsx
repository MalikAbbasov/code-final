import React, { createContext, useContext } from 'react'
import { useState } from 'react'
import { UserContext } from '../userContext/UserProvider';
import { useParams } from 'react-router-dom';

export const NewsContext = createContext()

function NewsProvider({children}) {
    const [news, setNews] = useState([])
    // const { decode, token } = useContext(UserContext);
    const { userId, newsId } = useParams();
    
      
    const getNews = async () => {
      const data = await fetch("http://localhost:3400/news/");
      const res = await data.json();
      setNews(res);
      
    };
    
    
    const data = {
        news,setNews,getNews
    }

  return (
    <NewsContext.Provider value={{news,setNews,getNews}}>
        {children}
    </NewsContext.Provider>
  )
}

export default NewsProvider
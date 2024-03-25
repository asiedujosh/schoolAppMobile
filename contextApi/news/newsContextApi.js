import React, {useState, createContext, useEffect} from 'react';
import {getAllNews} from './news';

export const NewsApiData = createContext();

const NewsApiDataProvider = props => {
  const [news, setNews] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    processGettingAllNews();
  }, []);

  const processGettingAllNews = async () => {
    try{
    setLoading(prev => !prev);
    let response = await getAllNews();
    if (response) {
      setLoading(prev => !prev);
      setNews(response.data.data);
    }
  } catch (err){
    console.log(err)
  }
  };

  return (
    <NewsApiData.Provider
      value={{
        processGettingAllNews,
        loading,
        setLoading,
        news,
      }}>
      {props.children}
    </NewsApiData.Provider>
  );
};

export default NewsApiDataProvider;

import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import useNews from '../hooks/useNews';
import { SET_NEWS_DATA } from '../context/constants';

const HomePage = () => {
    const { news_data, dispatch } = useNews()

    useEffect(() => {
        fetchNewArticles();
    }, []);

    const fetchNewArticles = async () => {
        try {
            const URL = `https://newsapi.org/v2/everything?q=tesla&from=${getToday()}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;
            const res = await axios.get(URL);
            dispatch({ type: SET_NEWS_DATA , payload: res.data?.articles ?? []})
        } catch (error) {
            console.log(error);
        }
    };

    const getToday = () => {
        const today = new Date();
        const date = today.getDate() - 1;
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const formattedDate = `${year}-${month}-${date}`;
        return formattedDate;
    };

    return (
        <div className="container mx-auto my-5">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    news_data?.map((article, index) => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg" key={index}>
                            <img src={article.urlToImage} className="w-full h-40 object-cover" alt="Article" />
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{article.title}</div>
                                <p className="text-gray-700 text-base truncate">{article.description}</p>
                                </div>
                                <div className="px-6 py-4">
                                <Link to={`/news/${index}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Read More
                                </Link>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default HomePage;

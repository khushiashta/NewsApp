import React from 'react';
import { useParams } from 'react-router-dom';
import useNews from '../hooks/useNews';

const NewsDetails = () => {
    const { id } = useParams();
    const { news_data } = useNews()

    if (!Array.isArray(news_data) || news_data.length === 0) {
        return <div>No articles found!</div>;
    }

    const article = news_data[id];

    if (!article) {
        return <div>Article not found!</div>;
    }

    const { title, description, urlToImage, content } = article;

    return (
        <div className="container mx-auto my-5">
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/2 md:pr-4">
                    <h2 className="font-bold text-2xl mb-4">{title}</h2>
                    <p className="text-gray-700 text-lg">{description}</p>
                    <p className="text-gray-700">{content}</p>
                </div>
                <div className="w-full md:w-1/2 md:pl-4">
                    <img src={urlToImage} alt="Article" className="w-full h-auto" />
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;

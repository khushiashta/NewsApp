import { useContext } from "react";
import { NewsContext } from "../context/newsContext"

const useNews = () => {
    const ctx = useContext(NewsContext);
    if(!ctx){
        throw new Error('Please use hook inside the provider.')
    }
    return ctx;
}

export default useNews;
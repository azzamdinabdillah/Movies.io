import axios from "axios";
import { useEffect, useState } from "react";

export default function Movie(){
    const apiKey = "deaa900ca3b05a88dd6821f011977eea";

    let [movie, setMovie] = useState([]);

    useEffect(() => {
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=' + apiKey).then(function(response) {
            const data = response.data.results;
            setMovie(data);
        });
    }, []);

    return (
        <div></div>
    )
}
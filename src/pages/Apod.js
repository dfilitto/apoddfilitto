import React, { useState, useEffect} from 'react';
import Topo from '../components/Topo/Topo';
import Rodape from '../components/Rodape/Rodape';
import '../css/styleAll.css'
function Apod(){
    //endereço da API
    const url = 'https://api.nasa.gov/planetary/apod?api_key=RHOyuNw5nEVVqJ7hfCKnIoxybpW3uIEjebTOajly';
    //dados da foto do dia
    const [photoData,setPhotoData] = useState(null);
    useEffect(
        async () => {
            const res = await fetch(url);
            const data = await res.json();
            setPhotoData(data);
        },[]);
    if(!photoData) return(<div />);

    return(
        <>
            <Topo></Topo>
            <main>
                <h2>Título: {photoData.title}</h2>
                <h3>Data: {photoData.date}</h3>
                <section>
                    {photoData.media_type === "image"?
                    <img src={photoData.url} alt={photoData.title} />
                    :
                    <iframe src={photoData.url} ></iframe>}
                    <p>Explicação:{photoData.explanation}</p>
                </section>
                <p>O Astronomy Picture of the Day é um website que monstra a cada dia uma foto ou vídeo diferente do universo com uma curta explicação escrita por um astrônomo profissional.</p>  
            </main>
            <Rodape></Rodape>
        </>
    );
}

export default Apod;
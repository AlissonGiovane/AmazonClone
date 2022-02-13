import React from 'react';
import "./Home.css";
import Produto from '../Produto/Produto';

function Home() {
    return <div className='home'>
        <div className='home_container'>
            <img
                className='home_banner'
                src='https://m.media-amazon.com/images/I/712ssWW5iNL._SX3000_.jpg'
                alt=''
            />

            <div className='home_fileira'>
                <Produto
                    id="1209487"
                    titulo='Kindle 10a. geração com bateria de longa duração - Cor Preta'
                    preco={379.05}
                    imagem='https://images-na.ssl-images-amazon.com/images/I/61X0ISBpD-L._AC_UL450_SR450,320_.jpg'
                    avaliacao={5}
                />
                <Produto
                    id="57489012"
                    titulo='Suporte para Notebook, OCTOO, Uptable, UP-BL, Preto'
                    preco={45.90}
                    imagem='https://images-na.ssl-images-amazon.com/images/I/51NM5D1VN+L._AC_UL450_SR450,320_.jpg'
                    avaliacao={5}
                />
            </div>

            <div className='home_fileira'>
                <Produto
                    id="4163789"
                    titulo='Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta'
                    preco={331.55}
                    imagem='https://images-na.ssl-images-amazon.com/images/I/41GZCWFJB1L._AC_UL450_SR450,320_.jpg'
                    avaliacao={5}
                />
                <Produto
                    id="65478390"
                    titulo='Wd-40 Spray Produto Multiusos 300 Ml'
                    preco={45.90}
                    imagem='https://m.media-amazon.com/images/I/510DdqAE8dS._AC_SL1000_.jpg'
                    avaliacao={5}
                />
                <Produto
                    id="0918273"
                    titulo='Corda de Pular em PVC Vollo Vp1075'
                    preco={33.00}
                    imagem='https://images-na.ssl-images-amazon.com/images/I/61e4dMDdxZL._AC_UL450_SR450,320_.jpg'
                    avaliacao={5}
                />
            </div>

            <div className='home_fileira'>
                <Produto
                    id="5623170"
                    titulo='Sofá Cama Smart Conquista Branco'
                    preco={389.99}
                    imagem='https://images-na.ssl-images-amazon.com/images/I/412hYziqTVS._AC_UL450_SR450,320_.jpg'
                    avaliacao={5}
                />
            </div>

        </div>
    </div>
}

export default Home;

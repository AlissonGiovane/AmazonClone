import React from 'react';
import "./Produto.css";
import { useStateValue } from "../StateProvider";

function Produto({ id, titulo, imagem, preco, avaliacao }) {

    const [{ carrinho }, dispatch] = useStateValue();


    const addCarrinho = () => {
        dispatch({
            type: "ADD_TO_CARRINHO",
            item: {
                id: id,
                titulo: titulo,
                imagem: imagem,
                preco: preco,
                avaliacao: avaliacao,
            },
        });
    };

    return (
        <div className='produto'>
            <div className='produto_info'>
                <p>{titulo}</p>
                <p className='produto_preco'>
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>
                <div className='produto_avaliacao'>
                    {Array(avaliacao)
                        .fill()
                        .map((_, i) => (
                            <p>
                                <span role="img" aria-label="star">
                                    ⭐
                                </span>
                            </p>
                        ))}
                </div>
            </div>

            <img
                src={imagem}
                alt=''
            />

            <button onClick={addCarrinho}>Adicionar ao carrinho</button>

        </div>
    )
}

export default Produto;

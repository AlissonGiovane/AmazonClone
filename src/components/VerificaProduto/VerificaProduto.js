import React from 'react';
import "./VerificaProduto.css";
import { useStateValue } from "../StateProvider";

function VerificaProduto({ id, imagem, titulo, preco, avaliacao }) {

    const [{ carrinho }, dispatch] = useStateValue();

    const removerDoCarrinho = () => {

        dispatch({
            type: "REMOVE_FROM_CARRINHO",
            id: id,
        });
    };


    return (
        <div className='verifica_produto'>
            <img className="verifica_produto_imagem" src={imagem} alt="Item Produto" />

            <div className='verifica_produto_info'>
                <p className="verifica_produto_titulo">{titulo}</p>
                <p className="verifica_produto_preco">
                    <small>R$</small>
                    <strong>{preco}</strong>
                </p>
                <div className='verifica_produto_avaliacao'>
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
                <button onClick={removerDoCarrinho}>Remover do Carrinho</button>
            </div>
        </div >
    )
}

export default VerificaProduto;

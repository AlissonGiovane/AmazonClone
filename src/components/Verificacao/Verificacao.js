import React from "react";
import "./Verificacao.css";
import Subtotal from "../Subtotal/Subtotal";
import { useStateValue } from "../StateProvider";
import VerificaProduto from '../VerificaProduto/VerificaProduto';

function Verificacao() {
    const [{ carrinho, usuario }, dispatch] = useStateValue()

    return (
        <div className="verificacao">
            <div className="verificacao_esquerda">
                <img
                    className="verificacao_propaganda"
                    src="https://i.ibb.co/gzdNyF2/image-2022-01-29-163026.png"
                    alt=''
                />

                <div>
                    <h3>Olá {usuario?.email}</h3>
                    <h2 className="verificacao_titulo">Seu carrinho</h2>

                    {carrinho.map((item) => (
                        <VerificaProduto
                            id={item.id}
                            titulo={item.titulo}
                            imagem={item.imagem}
                            avaliacao={item.avaliacao}
                            preco={item.preco}
                        />
                    ))}
                </div>
            </div>


            <div className="verifica_direita">
                <Subtotal />
            </div>
        </div >
    );
}

export default Verificacao;

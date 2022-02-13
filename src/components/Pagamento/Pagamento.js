import React, { useState, useEffect } from "react";
import './Pagamento.css';
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import VerificaProduto from '../VerificaProduto/VerificaProduto';
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { getCarrinhoTotal } from "../reducer";
import CurrencyFormat from "react-currency-format";
import axios from "../axios";
import { db } from "../firebase";

function Pagamento() {
    const [{ carrinho, usuario }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();

    const [processando, setProcessando] = useState("");
    const [concluido, setConcluido] = useState(false);
    const [desabilitado, setDesabilitado] = useState(true);
    const [erro, setErro] = useState(null);
    const [clientId, setClientId] = useState(true);

    useEffect(() => {
        const pegaClientId = async () => {
            const resposta = await axios({
                method: "post",
                url: `/payments/create?total=${getCarrinhoTotal(carrinho) * 100}`,
            });
            setClientId(resposta.data.clientId);
        }
        pegaClientId();
    }, [carrinho])

    console.log('o ID é ', clientId)

    const mandaSubmit = async (e) => {
        e.preventDefault();
        setProcessando(true);

        const carregaPagamento = await stripe
            .ConfirmaCartao(clientId, {
                pagamento_metodo: {
                    card: elements.getElement(CardElement),
                },
            }).then(({ pagamentoConfirmado }) => {
                setConcluido(true);
                setErro(null);
                setProcessando(false)

                history.replace("/pedidos");
            })
    }

    const fazMudanca = async (e) => {
        setDesabilitado(e.empty);
        setErro(e.error ? e.error.message : "");
    }

    return (

        <div className="pagamento">
            <div className='pagamento_container'>

                <h1>
                    Carrinho (<Link to="/Verificacao">{carrinho.length} itens</Link>)
                </h1>


                <div className='pagamento_section'>
                    <div className='pagamento_titulo'>
                        <h3>Adicionar um novo endereço</h3>
                    </div>
                    <div className='pagamento_endereco'>
                        <p>{usuario?.email}</p>
                        <p>London, UK</p>
                        <p>221b Baker St</p>
                    </div>
                </div>

                <div className='pagamento_section'>
                    <div className='pagamento_titulo'>
                        <h3>Reveja itens e entregas</h3>
                    </div>
                    <div className='pagamento_itens'>
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
                    <div>

                    </div>
                </div>

                <div className='pagamento_section'>
                    <div className='pagamento_titulo'>
                        <h3>Método de Pagamento</h3>
                    </div>
                    <div className='pagamento_detalhes'>
                        <form>
                            <CardElement onChange={mandaSubmit} />

                            <div className="pagamento_container_preco">
                                <CurrencyFormat
                                    renderText={(value) => <h3>Valor total: {value}</h3>}
                                    decimalScale={2}
                                    value={getCarrinhoTotal(carrinho)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={'R$'}
                                />
                                <button desabilitado={processando || desabilitado || concluido}>
                                    <span>{processando ? <p>Processando</p> : "Compre Agora"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                    {erro && <div>{erro}</div>}
                </div>
            </div>
        </div>
    );
};
export default Pagamento;
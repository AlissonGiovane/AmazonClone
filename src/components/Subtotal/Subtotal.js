import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../StateProvider";
import { getCarrinhoTotal } from "../reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {

    const history = useHistory();
    const [{ carrinho }, dispatch] = useStateValue();

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({carrinho?.length} items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal_presente">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getCarrinhoTotal(carrinho)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={'R$'}
            />

            <button onClick={(e) => history.push("/Pagamento")}>
                Fechar pedido
            </button>

        </div>
    );
}

export default Subtotal;

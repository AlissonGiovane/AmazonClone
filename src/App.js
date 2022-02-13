import React, { useEffect } from "react";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Home from "./components/Home/Home";
import Verificacao from "./components/Verificacao/Verificacao";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { auth } from "./components/firebase";
import { useStateValue } from "./components/StateProvider";
import Pagamento from "./components/Pagamento/Pagamento";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Pedidos from "./components/Pedidos/Pedidos";

const pk = loadStripe(
  "pk_test_51KQJ71BvB04EV5GH28d1nZuiidoGHsYp22vCoySCexFUgo30XKbYn7H3yCDMeMPciV8wjGxkZvm2mPrwxZcaAaMh00qXJOwEPj"
);

function App() {

  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUsuario) => {
      console.log(`USUARIO >>>`, authUsuario);
      if (authUsuario) {
        dispatch({
          type: "SET_USUARIO",
          usuario: authUsuario,
        });
      } else {
        dispatch({
          type: "SET_USUARIO",
          usuarrio: null,
        });
      }
    });
  }, []);


  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Pedidos">
            <Pedidos />
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/Verificacao">
            <Cabecalho />
            <Verificacao />
          </Route>
          <Route path="/Pagamento">
            <Cabecalho />
            <Elements stripe={pk}>
              <Pagamento />
            </Elements>
          </Route>
          <Route path="/">
            <Cabecalho />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

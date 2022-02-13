import React from 'react';
import './Cabecalho.css'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
import { auth } from "../firebase";


function Cabecalho() {

  const [{ carrinho, usuario }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (usuario) {
      auth.signOut();
    }
  };


  return (
    <div className='cabecalho'>
      <Link to='/'>
        <img
          className='cabecalho_logo'
          src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
          alt='logo_do_cabecalho'
        />
      </Link>

      <div
        className='cabecalho_buscador'>
        <input
          className='cabecalho_busca'
          type='text' />
        <SearchIcon
          className='cabecalho_iconeDeBusca' />
      </div>

      <div className='cabecalho_nav'>
        <Link to={!usuario && "/login"}>
          <div onClick={handleAuth} className="cabecalho_opcao">
            <span className="cabecalho_opcao_linha_1">
              Olá {!usuario ? "Visitante" : usuario.email}
            </span>
            <span className="cabecalho_opcao_linha_2">
              {usuario ? "Deslogar" : "Logar"}
            </span>
          </div>
        </Link>

        <div className='cabecalho_opcao'>
          <span className='cabecalho_opcao_linha_1'>
            Devoluções
          </span>
          <span className='cabecalho_opcao_linha_2'>
            & Pedidos
          </span>
        </div>

        <Link to='/Verificacao'>
          <div className='cabecalho_opcao_carrinho'>
            <AddShoppingCartIcon />
            <span className='cabecalho_opcao_carrinho_quantidade'>{carrinho?.length}</span>
          </div>
        </Link>
      </div>

    </div >
  )
}

export default Cabecalho;

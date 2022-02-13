export const initialState = {
    carrinho: [],
    usuario: null,
};

export const getCarrinhoTotal = (carrinho) =>
    carrinho?.reduce((quantidade, item) => item.preco + quantidade, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CARRINHO":
            return {
                ...state,
                carrinho: [...state.carrinho, action.item],
            };
        case "REMOVE_FROM_CARRINHO":
            const index = state.carrinho.findIndex(
                (carrinhoItem) => carrinhoItem.id === action.id
            );
            let newCarrinho = [...state.carrinho];

            if (index >= 0) {
                newCarrinho.splice(index, 1);
            } else {
                console.warn(
                    `Cannot remove product (id: ${action.id}) as it's not in the basket!`
                );
            }
            return {
                ...state,
                carrinho: newCarrinho,
            };
        case "SET_USUARIO":
            return {
                ...state,
                usuario: action.usuario,
            };
        case "EMPTY_CARRINHO":
            return {
                ...state,
                carrinho: [],
            };
        default:
            return state;
    }
};

export default reducer;
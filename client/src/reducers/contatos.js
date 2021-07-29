const reducer = ( contatos = [], action ) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return contatos;

        default:
            return contatos;

    }
}

export default reducer
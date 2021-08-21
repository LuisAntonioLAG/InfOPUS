import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR } from '../constants/actionTypes.js';

const defaultState = {
    notifications: [],
};

const notificacoesReducer = (notificacoes = defaultState, action) => {
    switch (action.type) {
        case ENQUEUE_SNACKBAR:
            return {
                ...notificacoes,
                notifications: [
                    ...notificacoes.notifications,
                    {
                        key: action.key,
                        ...action.notification,
                    },
                ],
            };

        case CLOSE_SNACKBAR:
            return {
                ...notificacoes,
                notifications: notificacoes.notifications.map(notification => (
                    (action.dismissAll || notification.key === action.key)
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                )),
            };

        case REMOVE_SNACKBAR:
            return {
                ...notificacoes,
                notifications: notificacoes.notifications.filter(
                    notification => notification.key !== action.key,
                ),
            };

        default:
            return notificacoes;
    }
};

export default notificacoesReducer
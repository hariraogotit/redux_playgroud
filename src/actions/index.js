export const increment = (nr) => {
    return {
        type: 'INCREMENT',
        payload: nr
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};

export const login = () => {
    return {
        type: 'SIGN_IN'
    };
}


export const logout = () => {
    return {
        type: 'SIGN_OUT'
    };
};
const initialState = {
    books: [
        {
            _id: 1,
            title: "A book title",
            description: "A book description",
            price: 44.33
        },
        {
            _id: 2,
            title: "Another book title",
            description: "Another book description",
            price: 55.00
        }
    ]
};

//Book Reducers
export const bookReducers = (state = initialState, action) => {
    switch(action.type) {
    case "GET_BOOKS":
        return {...state, books: [...state.books]};
    }
    
    return state;    
};
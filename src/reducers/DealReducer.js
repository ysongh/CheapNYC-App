const initialState = {
    deals: [],
    loading: true,
    totalDeals: 0,
    currentPage: 2
}

export default (state = initialState, action) => {
    switch(action.type){
        default:
            return state;
    }
}
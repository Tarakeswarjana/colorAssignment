
const initialstates = {
    name: "",
    email: "",
    data: null,
    err: null
}


const newsReducer = (state = initialstates, action) => {
    switch (action.type) {
        case "FETCH_NEWS_REQUEST":
            return {
                ...state,
                loading: true,
                data: null,
                error: null
            };

        case "FETCH_NEWS_SUCSESS":
            return {
                ...state,
                loading: true,
                data: action.payload,
                err: null,
            }

        case "FETCH_NEWS_FAILED":
            return {
                ...state,
                loading: true,
                data: null,
                err: action.payload


            }

    }

}

export { newsReducer }


import axios from "axios"

export const fetchNewRequest = () => {
    return {
        type: "FETCH_NEWS_REQUEST"
    }
}

export const fetchNewsSucsess = (data) => {
    return ({
        type: "FETCH_NEWS_SUCSESS",
        payload: data
    })
}
export const fetchNewsFailed = (err) => {
    return ({
        type: "FETCH_NEWS_FAILED",
        payload: err
    })
}

export const FetchNews = () => {
    return (async (dispatch) => {
        dispatch(fetchNewRequest())
        try {
            const response = axios.get("https://jsonplaceholder.typicode.com/users")
            dispatch(fetchNewsSucsess(response.data))
        } catch (err) {
            dispatch(fetchNewsFailed(err))
        }
    })
}
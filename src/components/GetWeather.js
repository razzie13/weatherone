import { useReducer, useEffect } from 'react';
import axios from 'axios';

const ACTIONS = {
    MAKE_REQUEST: 'make-request',
    GET_DATA: 'get-data',
    ERROR: 'error'
}

const proxy = `https://cors-anywhere.herokuapp.com/`;
const api = `${proxy}https://api.openweathermap.org/data/2.5/onecall?lat=43.4516&lon=-80.4925&units=metric&exclude=hourly,daily&appid=31a4da5ead9b1633c81fc2dba65ddee9`;

function reducer(state, action)  {
    switch(action.type)  {
        case ACTIONS.MAKE_REQUEST:
            return { loading: true, weather: [] }
        case ACTIONS.GET_DATA:
            return { ...state, loading: false, weather: action.payload.weather }
        case ACTIONS.ERROR:
            return { ...state, loading: false, error: action.payload.error, weather: [] }
        default:
            return state
    }
}

export default function getWeather(params, page)  {
    const [state, dispatch] = useReducer(reducer, { weather: [], loading: true})

    useEffect(() => {
        const cancelToken = axios.CancelToken.source()
        dispatch({ type: ACTIONS.MAKE_REQUEST })
        axios.get(api, {
            cancelToken: cancelToken.token,
            params: { markdown: true, page: page, ...params }
        }).then(res => {
            dispatch({ type: ACTIONS.GET_DATA, payload: { weather: res.data } })
        }).catch(e => {
            if (axios.isCancel(e)) return
            dispatch({ type: ACTIONS.ERROR, payload: { error: e } })
        })

        return () => {
            cancelToken.cancel()
        }

    }, [params, page])

    return state
}

//=====================================

fetch(api, {
	"method": "GET",
	"headers": {

	}
})
.then((res) => {return res.json()})
.then(data => {
	console.log(data);
})
.catch(err => {
	console.log(err);
});

//=====================================


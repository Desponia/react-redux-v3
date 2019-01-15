import { FETCH_WEATHER } from "../actions/index";

export default (state = [], action) => {
    console.log('Action received ', action);

    switch (action.type) {
        case FETCH_WEATHER:
            // 여러 도시를 가지고 올 것이므로 배열에 넣음
            // return state.concat([action.payload.data])
            return [action.payload.data, ...state]
    }

    return state
}

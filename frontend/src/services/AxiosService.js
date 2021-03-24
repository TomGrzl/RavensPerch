import axios from "axios";

const KonvaUrl = '/konva'

export const postState = (konvaState) => {
    axios.post(KonvaUrl + '/updateState', konvaState).then(response => response.data)
}

export const getState = () => {
    return axios.get(KonvaUrl + '/KonvaState')
}

export default {
    postState,
    getState
}
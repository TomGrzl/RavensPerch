import axios from "axios";

const konvaUrl = '/konva'

export const postState = (konvaState) => {
    axios.post(konvaUrl + '/updateState', konvaState).then(response => response.data)
}

export const getState = () => {
    return axios.get(konvaUrl + '/KonvaState')
}

export default {
    postState,
    getState
}

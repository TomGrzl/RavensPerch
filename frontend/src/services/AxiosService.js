import axios from "axios";

const konvaUrl = '/konva'
const learningUrl = '/learningresources'

export const postState = (konvaState) => {
    axios.post(konvaUrl + '/updateState', konvaState).then(response => response.data)
}

export const getState = () => {
    return axios.get(konvaUrl + '/KonvaState')
}

export const getOffense = () => {
    return axios.get(learningUrl + '/getOffense')
}

export default {
    postState,
    getState,
    getOffense
}

import axios from "axios";

const konvaUrl = '/konva'
const learningUrl = '/learningresources'

export const postState = (konvaState) => {
    axios.post(konvaUrl + '/updateState', konvaState).then(response => response.data)
}

export const getState = () => {
    return axios.get(konvaUrl + '/KonvaState')
}

export const getLearningCard = () => {
    return axios.get(learningUrl + '/getLearningCard')
}

export const getSolution = () => {
    return axios.get(learningUrl + '/getSolution')
}

export default {
    postState,
    getState,
    getLearningCard,
    getSolution
}

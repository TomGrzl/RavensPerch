import axios from "axios";

const konvaUrl = '/konva'
const learningUrl = '/learningresources'

export const getLearningCard = () => {
    return axios.get(learningUrl + '/getLearningCard')
}

export const getSolution = () => {
    return axios.get(learningUrl + '/getSolution')
}

export default {
    getLearningCard,
    getSolution
}

// Import call function
import Call from './fetch'

const getEducationData = async () => {
    try{
        return await Call('/sanketjain/education')
    }
    catch (err){
        throw err
    }
}

module.exports = {
    getEducationData
}
import Repository from './repository'

const resource = '/games';
export default {
    getTopGame(resultNumber){
        return Repository.get(`${resource}/top?first=${resultNumber}`)
    }
}
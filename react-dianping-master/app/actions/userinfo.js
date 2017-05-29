import * as actionTypes from '../constants/userinfo'
import { CITYNAME } from '../config/index'

// export function login(data) {
//     return {
//         type: actionTypes.USERINFO_LOGIN,
//         data
//     }
// }

export function update(data) {
    return {
        type: CITYNAME,
        data
    }
}
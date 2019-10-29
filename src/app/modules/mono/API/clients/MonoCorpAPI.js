import { API } from "@App/tools/API"
import currency from "./methods/currency"
import clientInfo from "./methods/clientInfo"

export default class MonoCorpAPI extends API {
    constructor(token, domain, id = null) {
        if (typeof token !== "string") throw new TypeError("String token expected")
        if (typeof domain !== "string") throw new TypeError("String domain expected")
        super({
            domain,
            requestTimeouts: {
                "bank/currency": 60000,
                "personal/client-info": 0,
                "personal/statement": 0,
                "personal/auth/request": 0,
            },
            globalTimeout: 0,
            token,
            id,
        })
    }

    get authed() {
        return true
    }

    currency = currency.bind(this)

    clientInfo = clientInfo.bind(this)

    _authAttacher(object, request) {
        object.headers["X-Request-Id"] = this.token
        return object
    }
}

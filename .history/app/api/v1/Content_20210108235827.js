import { LinRouter } from 'lin-mizar'
import {AddContentValidator} from 'validator'
const contentApi = new LinRouter({
    prefix : '/v1/content'
})

contentApi.post('/', async ctx => {
    new AddContentValidator().validate(ctx)
})

module.exports = { contentApi }
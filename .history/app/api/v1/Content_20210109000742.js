import { LinRouter } from 'lin-mizar'
import {AddContentValidator} from '../../validator/content'
const contentApi = new LinRouter({
    prefix : '/v1/content'
})

contentApi.post('/', async ctx => {
    const v =await new AddContentValidator().validate(ctx)

    return ctx.json(v)
})

module.exports = { contentApi }
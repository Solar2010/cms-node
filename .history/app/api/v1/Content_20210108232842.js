import { LinRouter } from 'lin-mizar'
const contentApi = new LinRouter({
    prefix : '/v1/content'
})

contentApi.post('/', async ctx => {
    const test = {
        res : true
    }
    return ctx.json(test)
})

module.exports = { contentApi }
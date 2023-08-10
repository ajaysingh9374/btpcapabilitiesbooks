const cds = require('@sap/cds')
class CatalogService extends cds.ApplicationService {
    async init() {
        const { Books } = this.entities
        this.before('READ', Books, each => {
            if (each.stock < 20) each.title += ' (only a few left!)'
        })
       
        this.on('totalStock', async () => {
            const query = SELECT`stock`.from(Books)
            const results = await cds.run(query)
            let sum = 0
            for (const result of results) {
                sum += result.stock
            }
            return sum
        }
        )
      await super.init()
    }
}

module.exports = CatalogService
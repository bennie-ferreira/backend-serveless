import { db } from './config/database'
import { Product } from './functions/Product/model'
import { Provider, ProviderProduct } from './functions/Provider/model'

async function initSync(){
    const queryInterface = db.getQueryInterface();
    await queryInterface.dropTable('Products').catch(error => console.log('Error in delete table: ' + error))
    await queryInterface.dropTable('Providers').catch(error => console.log('Error in delete table: ' + error))
    await queryInterface.dropTable('ProvidersProducts').catch(error => console.log('Error in delete table: ' + error))
    
    console.log('=================================================')
    console.log('------- Synchronizing model with database -------')
    console.log('=================================================')
    
    const product = new Product()
    const provider = new Provider()
    const providerProduct = new ProviderProduct()
    await db.sync()
}

initSync()
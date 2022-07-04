import createClient from 'algoliasearch'
import config from './config'

const search = createClient(config.algolia.app_id, config.algolia.api_key)

export default search

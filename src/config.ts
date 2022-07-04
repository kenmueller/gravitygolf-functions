import { config as getConfig } from 'firebase-functions'

export interface Config {
	storage: {
		bucket: string
	}
	algolia: {
		app_id: string
		api_key: string
	}
}

const config = getConfig() as Config

export default config

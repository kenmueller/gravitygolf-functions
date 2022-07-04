import type CommunityLevel from '..'

export default interface CommunityLevelRecord
	extends Omit<CommunityLevel, 'id' | 'data'> {
	objectID: string
}

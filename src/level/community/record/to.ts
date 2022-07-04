import type CommunityLevel from '..'
import type CommunityLevelRecord from '.'

const communityLevelToRecord = (
	level: CommunityLevel
): CommunityLevelRecord => ({
	objectID: level.id,
	name: level.name,
	gravity: level.gravity,
	antigravity: level.antigravity,
	stars: level.stars,
	attempts: level.attempts,
	completions: level.completions
})

export default communityLevelToRecord

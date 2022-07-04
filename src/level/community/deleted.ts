import { firestore as firestoreTrigger } from 'firebase-functions'

import client from './client'

const communityLevelDeleted = firestoreTrigger
	.document('community_levels/{level}')
	.onDelete(async snapshot => {
		await client.deleteObject(snapshot.id)
	})

export default communityLevelDeleted

import { firestore as firestoreTrigger } from 'firebase-functions'

import client from './client'
import toRecord from './record/to'
import fromSnapshot from './snapshot/from'

const communityLevelUpdated = firestoreTrigger
	.document('community_levels/{level}')
	.onUpdate(async ({ after: snapshot }) => {
		await client.saveObject(toRecord(fromSnapshot(snapshot)))
	})

export default communityLevelUpdated

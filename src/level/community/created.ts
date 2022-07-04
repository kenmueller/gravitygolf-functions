import { firestore as firestoreTrigger } from 'firebase-functions'

import client from './client'
import toRecord from './record/to'
import fromSnapshot from './snapshot/from'

const communityLevelCreated = firestoreTrigger
	.document('community_levels/{level}')
	.onCreate(async snapshot => {
		await client.saveObject(toRecord(fromSnapshot(snapshot)))
	})

export default communityLevelCreated

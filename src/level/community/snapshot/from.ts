import type { firestore } from 'firebase-admin'
import type CommunityLevel from '..'

const communityLevelFromSnapshot = (snapshot: firestore.DocumentSnapshot) =>
	({ ...snapshot.data(), id: snapshot.id } as CommunityLevel)

export default communityLevelFromSnapshot

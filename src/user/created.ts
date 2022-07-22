import { auth as authTrigger } from 'firebase-functions'
import { getAuth } from 'firebase-admin/auth'
import { getFirestore, Timestamp } from 'firebase-admin/firestore'

import nameFromEmail from '../name/from/email'

const auth = getAuth()
const firestore = getFirestore()

const userCreated = authTrigger.user().beforeCreate(async user => {
	const promises: Promise<unknown>[] = []

	let name: string

	if (user.displayName) {
		name = user.displayName
	} else {
		name = (user.email && nameFromEmail(user.email)) || 'Anonymous'
		promises.push(auth.updateUser(user.uid, { displayName: name }))
	}

	promises.push(
		firestore.doc(`users/${user.uid}`).create({
			name,
			email: user.email || null,
			created: Timestamp.fromDate(new Date(user.metadata.creationTime))
		})
	)

	await Promise.all(promises)
})

export default userCreated

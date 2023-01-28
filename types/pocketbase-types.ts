/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Annoucements = "annoucements",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export type AnnoucementsRecord = {
	content: string
	user: RecordIdString
	title: string
}

export type UsersRecord = {
	name: string
	avatar?: string
	address: string
}

// Response types include system fields and match responses from the PocketBase API
export type AnnoucementsResponse<Texpand = unknown> = AnnoucementsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	annoucements: AnnoucementsRecord
	users: UsersRecord
}
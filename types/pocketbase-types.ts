/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Announcements = "announcements",
	Tickets = "tickets",
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

export type AnnouncementsRecord = {
	content: string
	user: RecordIdString
	title: string
}

export type TicketsRecord = {
	subject: string
	message: string
	user: RecordIdString
}

export enum UsersRoleOptions {
	"member" = "member",
	"admin" = "admin",
}
export type UsersRecord = {
	name: string
	avatar?: string
	address: string
	role: UsersRoleOptions
	approved?: boolean
}

// Response types include system fields and match responses from the PocketBase API
export type AnnouncementsResponse<Texpand = unknown> = AnnouncementsRecord & BaseSystemFields<Texpand>
export type TicketsResponse<Texpand = unknown> = TicketsRecord & BaseSystemFields<Texpand>
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	announcements: AnnouncementsRecord
	tickets: TicketsRecord
	users: UsersRecord
}
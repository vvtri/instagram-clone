import { NestedKeyOf, NestedValueOf } from 'next-intl';
import auth from './messages/en/auth.json';
import client from './messages/en/client.json';
import common from './messages/en/common.json';
import user from './messages/en/user.json';
import userStory from './messages/en/user-story.json';

export type MessageCommon = typeof common;
export type MessageAuth = typeof auth;
export type MessageClient = typeof client;
export type MessageUser = typeof user;
export type MessageUserStory = typeof userStory;

export type MessageClientKey = NestedValueOf<MessageClient>;
export type MessageCommonKey = NestedValueOf<MessageCommon>;

export type Messages = {
	Auth: MessageAuth;
	Client: MessageClient;
	Common: MessageCommon;
	User: MessageUser;
	UserStory: MessageUserStory;
};

declare global {
	// Use type safe message keys with `next-intl`
	interface IntlMessages extends Messages {}
}

import { NestedKeyOf, NestedValueOf } from 'next-intl';
import authEn from './messages/en/auth.json';
import authVi from './messages/vi/auth.json';
import clientEn from './messages/en/client.json';
import clientVi from './messages/vi/client.json';
import commonEn from './messages/en/common.json';
import commonVi from './messages/vi/common.json';
import userEn from './messages/en/user.json';
import userVi from './messages/vi/user.json';
import userStoryEn from './messages/en/user-story.json';
import userStoryVi from './messages/vi/user-story.json';

export type MessageCommon = typeof commonEn | typeof commonVi;
export type MessageAuth = typeof authEn | typeof authVi;
export type MessageClient = typeof clientEn | typeof clientVi;
export type MessageUser = typeof userEn | typeof userVi;
export type MessageUserStory = typeof userStoryEn | typeof userStoryVi;

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

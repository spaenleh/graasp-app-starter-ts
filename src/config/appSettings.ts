import { Context, PermissionLevel } from '@graasp/sdk';

// todo: use graasp-sdk
export const CONTEXTS = {
  BUILDER: 'builder',
  PLAYER: 'player',
  ANALYZER: 'analyzer',
  STANDALONE: 'standalone',
} as const;

export const DEFAULT_MOCK_SETTING = {
  mockSetting: 'I am a mock',
};

export const DEFAULT_CONTEXT = Context.BUILDER;
export const DEFAULT_PERMISSION = PermissionLevel.Read;

export const DEFAULT_CONTEXT_API_HOST = '';
export const DEFAULT_CONTEXT_ITEM_ID = '';
export const DEFAULT_CONTEXT_LANGUAGE = 'en';
export const DEFAULT_CONTEXT_STANDALONE = false;
export const DEFAULT_CONTEXT_OFFLINE = false;
export const DEFAULT_CONTEXT_DEV = false;
export const DEFAULT_CONTEXT_SETTINGS = {};

// default values
export const DEFAULT_SHOW_HEADER_SETTING = false;
export const DEFAULT_SHOW_TOOLBAR_SETTING = true;
export const DEFAULT_SHOW_VERSION_NAVIGATION_SETTING = false;
export const DEFAULT_SHOW_EDIT_BUTTON_SETTING = false;
export const DEFAULT_SHOW_VISIBILITY_BUTTON_SETTING = true;
export const DEFAULT_ALLOW_COMMENTS_SETTING = true;
export const DEFAULT_ALLOW_REPLIES_SETTING = true;
export const DEFAULT_ALLOW_COMMENT_REPORTING = true;
export const DEFAULT_CODE_SETTING = '';
export const DEFAULT_COMMIT_MESSAGE_SETTING = '';
export const DEFAULT_COMMIT_DESCRIPTION_SETTING = '';

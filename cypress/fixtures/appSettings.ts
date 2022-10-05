import { v4 } from 'uuid';

import { MOCK_SETTING_KEY } from '../../src/config/appSettingTypes';
import { DEFAULT_MOCK_SETTING } from '../../src/config/appSettings';

export const MOCK_GENERAL_SETTINGS = {
  id: v4(),
  name: MOCK_SETTING_KEY,
  data: DEFAULT_MOCK_SETTING,
};

export const MOCK_APP_SETTINGS = [MOCK_GENERAL_SETTINGS];

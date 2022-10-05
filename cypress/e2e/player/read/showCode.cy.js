import { Context, PermissionLevel } from '@graasp/sdk';

import { PLAYER_VIEW_CY, buildDataCy } from '../../../../src/config/selectors';
import { MOCK_APP_SETTINGS } from '../../../fixtures/appSettings';

describe('Show Example App', () => {
  beforeEach(() => {
    cy.setUpApi({
      database: {
        appData: [],
        appSettings: MOCK_APP_SETTINGS,
      },
      appContext: {
        context: Context.PLAYER,
        permission: PermissionLevel.Read,
      },
    });
    cy.visit('/');
  });

  it('show app', () => {
    cy.get(buildDataCy(PLAYER_VIEW_CY)).should('be.visible');
  });
});

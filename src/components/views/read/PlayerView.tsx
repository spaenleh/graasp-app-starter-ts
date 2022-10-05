import React, { FC, useContext } from 'react';

import { Context } from '@graasp/apps-query-client';

import { Button, Divider, Stack, Typography, styled } from '@mui/material';

import { APP_DATA_TYPES } from '../../../config/appDataTypes';
import { hooks } from '../../../config/queryClient';
// import { MUTATION_KEYS, hooks, useMutation } from '../../../config/queryClient';
import { PLAYER_VIEW_CY } from '../../../config/selectors';
import { useAppDataContext } from '../../context/AppDataContext';
import { useMembersContext } from '../../context/MembersContext';

const SmallPre = styled('pre')(({ theme }) => ({
  fontSize: 12,
  overflow: 'scroll',
  border: '1px solid gray',
  borderRadius: theme.spacing(1),
  padding: theme.spacing(2),
  margin: '0',
}));

const PlayerView: FC = () => {
  const context = useContext(Context);
  const members = useMembersContext();
  const { postAppData, appDataArray } = useAppDataContext();
  const { data: appContext } = hooks.useAppContext();

  // const postSettings = useMutation<unknown, unknown, Partial<AppSetting>>(
  //   MUTATION_KEYS.POST_APP_SETTING,
  // );
  // const patchSettings = useMutation<unknown, unknown, Partial<AppSetting>>(
  //   MUTATION_KEYS.PATCH_APP_SETTING,
  // );
  // const appSettings = hooks.useAppSettings();

  return (
    <div data-cy={PLAYER_VIEW_CY}>
      <Stack direction="row">
        <Stack
          direction="column"
          spacing={2}
          sx={{ flex: 1, height: '100vh', p: 2 }}
        >
          <Button
            onClick={() =>
              postAppData({
                data: { content: 'New Data' },
                type: APP_DATA_TYPES.MOCK_TYPE,
              })
            }
          >
            New App Data
          </Button>
          <SmallPre>
            {appDataArray
              .map((appData) => JSON.stringify(appData, undefined, 2))
              .join('\n')}
          </SmallPre>
        </Stack>
        <Divider orientation="vertical" flexItem />
        <Stack
          direction="column"
          sx={{
            flex: 1,
            height: '100vh',
            overflow: 'scroll',
            p: 2,
          }}
          spacing={2}
        >
          <div>
            <Typography variant="h6">Local Context</Typography>
            <SmallPre>{JSON.stringify(context.toJS(), undefined, 2)}</SmallPre>
          </div>
          <Divider />
          <div>
            <Typography variant="h6">App Context</Typography>
            <SmallPre>
              {JSON.stringify(appContext?.toJS(), undefined, 2)}
            </SmallPre>
          </div>
          <Divider />
          <div>
            <Typography variant="h6">Members</Typography>
            <SmallPre>
              {members.map((m) => JSON.stringify(m, undefined, 2)).join('\n')}
            </SmallPre>
          </div>
        </Stack>
      </Stack>
    </div>
  );
};

export default PlayerView;

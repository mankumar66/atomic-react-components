import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Notification.mock';

// Import Styled Component to showcase variations
import Notification, { NotificationVanilla } from '.';

import {successNotification, errorNotification, infoNotification, warningNotification} from './Notification.mock';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Notification', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <NotificationVanilla {...errorNotification} className={`hide-default-sample ${errorNotification.className}`} />
          ),
          options: {
            showSource: true,
            allowSourceToggling: true,
            showPropTables: true,
            allowPropTablesToggling: true,
          },
        },
      ],
    },
    {
      title: 'Primary Notification Variations',
      sections: [
        {
          title: 'Success Notification',
          sectionFn: () => <Notification {...successNotification} />,
        },
        {
          title: 'Failure Notification',
          sectionFn: () => <Notification {...errorNotification} />,
        },
        {
          title: 'Info Notification',
          sectionFn: () => <Notification {...infoNotification} />,
        },
        {
          title: 'Warning Notification',
          sectionFn: () => <Notification {...warningNotification} />,
        },
      ],
    },
  ],
});

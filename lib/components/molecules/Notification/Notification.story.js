import React from 'react';
import { storiesOf } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import defaultConfig from './Notification.mock';

// Import Styled Component to showcase variations
import Notification, { NotificationVanilla } from '.';

// $FlowFixMe eslint-disable-next-line extra-rules/no-commented-out-code
storiesOf('Molecules', module).addWithChapters('Notification', {
  chapters: [
    {
      sections: [
        {
          sectionFn: () => (
            <NotificationVanilla {...defaultConfig} className={`hide-default-sample ${defaultConfig.className}`} />
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
          title: 'Variation Name',
          sectionFn: () => <Notification {...defaultConfig} />,
        },
      ],
    },
  ],
});

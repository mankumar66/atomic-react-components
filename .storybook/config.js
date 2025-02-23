import 'react-app-polyfill/ie11';
import React from 'react';
import { configure, setAddon, addDecorator, addParameters } from '@storybook/react';
import chaptersAddon, { setDefaults } from 'react-storybook-addon-chapters';
import { withConsole } from '@storybook/addon-console';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { withKnobs } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import { withA11y } from '@storybook/addon-a11y';
import { ThemeProvider } from 'styled-components';
import Theme from '../lib/styles/theme';
import '../lib/styles/cssIncludes';
import GlobalStyles from '../lib/styles';

setDefaults({
  sectionOptions: {
    showSource: false,
    allowSourceToggling: false,
    showPropTables: false,
    allowPropTablesToggling: false,
  },
});

addDecorator(withKnobs);
addDecorator(withSmartKnobs);
addDecorator(withA11y);

addDecorator((storyFn, context) => (
  <React.Fragment>
    <GlobalStyles />
    <ThemeProvider theme={Theme}>{withConsole()(storyFn)(context)}</ThemeProvider>
  </React.Fragment>
));

addParameters({
  options: {
    name: `Atomic React Pattern Library`,
    url: 'https://github.com/pagesource/atomic-react-components',
  },
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
});

setAddon(chaptersAddon);

const req = require.context('../lib/components', true, /story\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

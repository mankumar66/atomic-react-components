import { shallow } from 'enzyme';

import Notification from '../index';

describe('<Notification />', () => {
  let NotificationComponent = '';
  beforeEach(() => {
    NotificationComponent = shallow(<Notification>Test</Notification>);
  });

  test('should render correctly', () => {
    expect(NotificationComponent).toMatchSnapshot();
  });
});

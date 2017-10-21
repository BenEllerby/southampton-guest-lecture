import React from 'react';
import Home from './Home.component';
import createComponentWithIntl from '../../services/i18n/create-component-with-intl';

describe('The Home component', () => {
  it('should renders correctly', () => {
    const props = {
      intl: {
        formatMessage: jest.fn(),
      },
      fetchUser: jest.fn(),
      updateUserId: jest.fn(),
    };
    const tree = createComponentWithIntl(<Home {...props} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import Error from '..';

describe('Error component', () => {
  it('Error component snapshot', async () => {
    const { container } = render(<Error message="test" />);

    expect(container).toMatchSnapshot();
  });
});

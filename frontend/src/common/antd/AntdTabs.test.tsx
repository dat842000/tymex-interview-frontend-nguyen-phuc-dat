import React from 'react';
import { render, screen } from '@testing-library/react';
import AntdTabs from './AntdTabs';
import '@testing-library/jest-dom';

describe('AntdTabs Component', () => {
  test('renders without crashing', () => {
    const { container } = render(
      <AntdTabs defaultActiveKey="1" items={[{ key: '1', label: 'Tab 1' }]} />,
    );
    expect(container).toBeInTheDocument();
  });

  test('renders tabs with the correct labels', () => {
    render(
      <AntdTabs
        defaultActiveKey="1"
        items={[
          { key: '1', label: 'Tab 1' },
          { key: '2', label: 'Tab 2' },
        ]}
      />,
    );

    expect(screen.getByText(/tab 1/i)).toBeInTheDocument();
    expect(screen.getByText(/tab 2/i)).toBeInTheDocument();
  });

  test('applies custom class', () => {
    const { container } = render(
      <AntdTabs defaultActiveKey="1" items={[{ key: '1', label: 'Tab 1' }]} />,
    );
    const tabsElement = container.querySelector('.custom-tab');
    expect(tabsElement).toBeInTheDocument();
  });
});

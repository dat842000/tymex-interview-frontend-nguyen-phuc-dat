import React from 'react';
import { render, screen } from '@testing-library/react';
import AntdDrawer from './AntdDrawer';
import '@testing-library/jest-dom';

describe('AntdDrawer Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<AntdDrawer open={true} />);
    expect(container).toBeInTheDocument();
  });

  test('renders an Ant Design Drawer', () => {
    render(<AntdDrawer open={true} title="Test Drawer" />);
    const drawer = screen.getByText(/test drawer/i); // Check if the title is rendered
    expect(drawer).toBeInTheDocument();
  });

  test('does not render when not visible', () => {
    const { container } = render(<AntdDrawer open={false} />);
    expect(container.querySelector('.ant-drawer')).not.toBeInTheDocument(); // Check that the drawer is not rendered
  });
});

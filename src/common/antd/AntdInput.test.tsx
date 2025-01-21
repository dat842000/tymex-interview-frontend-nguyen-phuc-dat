import React from 'react';
import { render, screen } from '@testing-library/react';
import AntdInput from './AntdInput';
import '@testing-library/jest-dom';

describe('AntdInput Component', () => {
  test('renders without crashing', () => {
    const { container } = render(<AntdInput placeholder="Test Input" />);
    expect(container).toBeInTheDocument();
  });

  test('renders an Ant Design Input with placeholder', () => {
    render(<AntdInput placeholder="Test Input" />);
    const input = screen.getByPlaceholderText(/test input/i); // Check if the placeholder is rendered
    expect(input).toBeInTheDocument();
  });

  test('displays user input', () => {
    render(<AntdInput placeholder="Test Input" value={'Hello'} />);
    screen.getByDisplayValue(/hello/i);
  });
});

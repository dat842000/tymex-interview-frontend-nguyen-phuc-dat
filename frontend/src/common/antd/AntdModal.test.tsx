import React from 'react';
import { render, screen } from '@testing-library/react';
import AntdModal from './AntdModal';
import '@testing-library/jest-dom';

describe('AntdModal Component', () => {
  test('renders without crashing', () => {
    render(<AntdModal open={true} title="Test Modal" />);
    expect(screen.getByText(/test modal/i)).toBeInTheDocument();
  });

  test('renders children correctly', () => {
    render(
      <AntdModal open={true} title="Test Modal">
        <p>Modal content</p>
      </AntdModal>,
    );
    expect(screen.getByText(/modal content/i)).toBeInTheDocument();
  });

  test('does not render when open is false', () => {
    const { container } = render(<AntdModal open={false} title="Test Modal" />);
    expect(container).toBeEmptyDOMElement(); // No modal should be rendered
  });

  test('handles onCancel prop correctly', () => {
    const mockOnCancel = jest.fn();
    render(
      <AntdModal open={true} title="Test Modal" onCancel={mockOnCancel}>
        <p>Modal content</p>
      </AntdModal>,
    );

    // Simulate canceling the modal
    const closeButton = screen.getByRole('button', { name: /close/i });
    closeButton.click();

    expect(mockOnCancel).toHaveBeenCalledTimes(1); // Check if onCancel was called
  });
});

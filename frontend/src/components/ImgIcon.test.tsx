import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImgIcon from './ImgIcon';

describe('ImgIcon Component', () => {
  it('renders an img element with the provided src', () => {
    const src = 'test-image.png';
    render(<ImgIcon src={src} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('src', src);
  });

  it('applies the provided alt text', () => {
    const altText = 'Test Alt Text';
    render(<ImgIcon src="test-image.png" alt={altText} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('alt', altText);
  });

  it('applies the default alt text when none is provided', () => {
    render(<ImgIcon src="test-image.png" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveAttribute('alt', 'img-icon');
  });

  it('applies the default className when none is provided', () => {
    render(<ImgIcon src="test-image.png" />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveClass('img-icon');
  });

  it('sets the height and width based on the "size" prop when no height or width is provided', () => {
    render(<ImgIcon src="test-image.png" size={32} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle({ height: '32px', width: '32px' });
  });

  it('overrides "size" with the "height" and "width" props', () => {
    render(
      <ImgIcon src="test-image.png" size={32} height="40px" width="50px" />,
    );
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle({ height: '40px', width: '50px' });
  });

  it('handles numeric height and width values correctly', () => {
    render(<ImgIcon src="test-image.png" height={40} width={50} />);
    const imgElement = screen.getByRole('img');
    expect(imgElement).toHaveStyle({ height: '40px', width: '50px' });
  });
});

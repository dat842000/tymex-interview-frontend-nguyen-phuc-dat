// components/__tests__/Footer.test.tsx
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';
import { NAV_FOOTER_ITEMS, NAV_FOOTER_POLICY_ITEMS } from '../utils/constant';

jest.mock('../common/antd/AntdButton', () => ({ text }: { text: string }) => (
  <button>{text}</button>
));

describe('Footer Component', () => {
  it('renders the navigation section correctly', () => {
    render(<Footer />);

    const navigationHeader = screen.getByText('Navigation');
    expect(navigationHeader).toBeInTheDocument();

    NAV_FOOTER_ITEMS.forEach((item) => {
      const navItem = screen.getByText(item.label);
      expect(navItem).toBeInTheDocument();
    });
  });

  it('renders the contact section correctly', () => {
    render(<Footer />);

    const contactHeader = screen.getByText('Contact us');
    expect(contactHeader).toBeInTheDocument();

    const phoneElement = screen.getByText('01234568910');
    expect(phoneElement).toBeInTheDocument();

    const emailElement = screen.getByText('tymex-talent@tyme.com');
    expect(emailElement).toBeInTheDocument();

    const handsetIcon = screen
      .getAllByAltText('handset')
      .find((img) => img.getAttribute('src')?.includes('handset.svg'));
    expect(handsetIcon).toBeInTheDocument();

    const commentIcon = screen
      .getAllByAltText('comment')
      .find((img) => img.getAttribute('src')?.includes('comment.svg'));
    expect(commentIcon).toBeInTheDocument();
  });

  it('renders the subscription section correctly', () => {
    render(<Footer />);

    const subscriptionHeader = screen.getByText(
      'Subcribe to receive our latest update',
    );
    expect(subscriptionHeader).toBeInTheDocument();

    const emailInput = screen.getByPlaceholderText('Your email address');
    expect(emailInput).toBeInTheDocument();

    const subscribeButton = screen.getByText('Subcribe');
    expect(subscribeButton).toBeInTheDocument();
  });

  it('renders the policy navigation section correctly', () => {
    render(<Footer />);

    NAV_FOOTER_POLICY_ITEMS.forEach((item) => {
      const policyItem = screen.getByText(item.label);
      expect(policyItem).toBeInTheDocument();
    });
  });

  it('renders the footer below section correctly', () => {
    render(<Footer />);

    const copyright = screen.getByText(
      '©2023 Tyme - Edit. All Rights reserved.',
    );
    expect(copyright).toBeInTheDocument();
  });
});

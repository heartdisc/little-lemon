import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

jest.mock('react-router', () => {
  const React = require('react');
  return {
    BrowserRouter: ({ children }) => <div data-testid="browser-router">{children}</div>,
    Routes: ({ children }) => <div data-testid="routes">{children}</div>,
    Route: ({ element }) => element,
    Link: ({ to, children, ...props }) => <a href={to} {...props}>{children}</a>,
    NavLink: ({ to, children, className, ...props }) => {
      const cls = typeof className === 'function' ? className({ isActive: false }) : className;
      return <a href={to} className={cls} {...props}>{children}</a>;
    },
    useNavigate: () => jest.fn(),
    useParams: () => ({}),
    useLocation: () => ({ pathname: '/' }),
  };
});

jest.mock('react', () => {
  const React = jest.requireActual('react');
  return {
    ...React,
    lazy: (fn) => {
      return (props) => <div data-testid="lazy-component" {...props} />;
    },
    Suspense: ({ children }) => <>{children}</>,
  };
});

test('renders Little Lemon logo', () => {
  render(<App />);
  const logoElements = screen.getAllByAltText(/Little Lemon Logo/i);
  expect(logoElements.length).toBeGreaterThan(0);
});

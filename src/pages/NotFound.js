import React from 'react';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <main style={{ padding: '8rem 2rem', textAlign: 'center' }}>
      <h1 style={{ fontSize: '6rem', color: 'var(--color-primary-yellow)' }}>404</h1>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--color-primary-green)', marginBottom: '1.5rem' }}>Page Not Found</h2>
      <p style={{ margin: '0 auto 2.5rem auto', maxWidth: '500px' }}>
        Oops! The page you are looking for does not exist or has been moved. Let's get you back on track.
      </p>
      <Link to="/" className="button-primary">
        Go Back Home
      </Link>
    </main>
  );
}

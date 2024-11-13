import '@testing-library/jest-dom'
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';




// Importera App component...
import App from './App';

beforeEach(() => render(<App />));

describe('App component', () => {
    it('should have a heading with the text Welcome to my Xmas-Shop', () => {
      const heading = screen.getByRole('heading', { name: /welcome to my xmas-shop/i });
      expect(heading).toBeInTheDocument();
    });
  });

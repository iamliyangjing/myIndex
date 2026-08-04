import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders all main sections in English by default', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Tech Stack & Skills' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Experience & Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Currently Learning' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Reading List' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Tech Blog' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Space' })).toBeInTheDocument();
  });

  it('toggles to Chinese and back to English', () => {
    render(<App />);

    // Language toggle button (EN in the navbar)
    fireEvent.click(screen.getAllByText('EN')[0]);
    expect(screen.getByRole('heading', { name: '技术栈 & 核心能力' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '工作经历 & 项目' })).toBeInTheDocument();

    fireEvent.click(screen.getAllByText('CN')[0]);
    expect(screen.getByRole('heading', { name: 'Tech Stack & Skills' })).toBeInTheDocument();
  });
});

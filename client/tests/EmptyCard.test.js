/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import EmptyCard from '../src/components/RelatedItemsAndComparison/EmptyCard';

afterEach(() => {
  cleanup();
});

describe('Button Components', () => {
  render(<Router><EmptyCard /></Router>);
  const emptyCard = screen.getByTestId('emptyCard');

  test('Empty Card component renders well', () => {
    expect(emptyCard).toBeInTheDocument();
  });
});

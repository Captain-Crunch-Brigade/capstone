/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen, cleanup,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import Card from '../src/components/RelatedItemsAndComparison/Card';

afterEach(() => {
  cleanup();
});

describe('Card Components', () => {
  it('Card component with isOutfit props renders well', () => {
    render(<Router><Card isOutfit /></Router>);
    const card = screen.getByTestId('card');
    expect(card).toBeInTheDocument();
    cleanup();
  });
});

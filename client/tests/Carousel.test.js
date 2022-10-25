/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '../src/components/RelatedItemsAndComparison/Carousel';

afterEach(() => {
  cleanup();
});

describe('Button Components', () => {
  render(<Carousel />);
  const carousel = screen.getByTestId('carousel');

  test('Carousel component renders well', () => {
    expect(carousel).toBeInTheDocument();
  });
});

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
import Comparison from '../src/components/RelatedItemsAndComparison/Comparison';

afterEach(() => {
  cleanup();
});

describe('Comparison Components', () => {
  it('Comparison component renders well', () => {
    const data = {
      name: 'Heir Force Ones',
      category: 'Kicks',
      defaultPrice: 99,
      salePrice: 0,
      ratings: 4,
      features: [
        { feature: 'Sole', value: 'Rubber' },
        { feature: 'Material', value: 'FullControlSkin' },
        { feature: 'Mid-Sole', value: 'ControlSupport' },
        { feature: 'Stitching', value: 'Double Stitch' },
      ],
    };
    render(<Router><Comparison data={data} /></Router>);
    const modal = screen.getByTestId('comparison');
    expect(modal).toBeInTheDocument();
    cleanup();
  });
});

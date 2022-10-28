/**
 * @jest-environment jsdom
 */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import {
  render, screen, cleanup,
} from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import QnAWidget from '../src/components/QnAWidget';

afterEach(() => {
  cleanup();
});

describe('QnA widget component', () => {
  it('renders an the QnAWidget based on the poduct id param', () => {
    const route = 'products/40344';
    render(
      <MemoryRouter initialEntries={[route]}>
        <QnAWidget />
      </MemoryRouter>
    )
    const qna = screen.getByTestId('QnAWidget');
    expect(qna).toBeInTheDocument();
    cleanup();
  })

})
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
import Answer from '../src/components/QnAWidget/Answer';

afterEach(() => {
  cleanup();
});

describe('Answer component', () => {
  it('renders an answer based on inputed object', () => {
    const ansObj = {
      answerer_name: "someDude34",
      body: "generic answer",
      date: "2022-09-09T00:00:00.000Z",
      helpfulness: 3,
    }
    render(<Router><Answer answer={ansObj} /></Router>);
    const answer = screen.getByTestId('answer');
    expect(answer).toBeInTheDocument();
    cleanup();

  })
})

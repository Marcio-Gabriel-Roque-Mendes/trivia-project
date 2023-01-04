import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouterAndRedux';
import Game from '../pages/Game';
import App from '../App';
import { getQuestion } from '../services/fethApiTrivia';

describe('Teste da pagina de Game', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });
  it('Verifique se o next button esta presente na pagina ', async () => {
    renderWithRouterAndRedux(<Game />);

    const questionCategory = await screen.findByTestId('question-category');
    const question = await screen.findByTestId('question-text');
    const resposta = await screen.findByTestId('btn-success correct-answer');
    userEvent.click(resposta);
    const btnNext = await screen.findByRole('button', { name: /next/i });

    expect(questionCategory).toBeInTheDocument();
    expect(question).toBeInTheDocument();
    expect(resposta).toBeInTheDocument();
    expect(btnNext).toBeInTheDocument();
  });

  it('Verifica se renderiza a pagina Feedback', async () => {
    const { history } = renderWithRouterAndRedux(<App />);

    const campoName = screen.getByTestId('input-player-name');
    userEvent.type(campoName, 'Ada Love');

    const campoEmailGravatar = screen.getByTestId('input-gravatar-email');
    userEvent.type(campoEmailGravatar, 'adalove@email.com');

    const botaoPlay = await screen.findByRole('button', { name: /play/i });
    userEvent.click(botaoPlay);

    await waitFor(() => expect(history.location.pathname).toBe('/game'));

    for (let i = 0; i < 5; i += 1) {
      const resposta = await screen.findByTestId(
        'btn-success correct-answer',
        undefined,
        3000,
      );
      userEvent.click(resposta);
      const btnNext = await screen.findByRole('button', { name: /next/i });
      userEvent.click(btnNext);
      // console.log(i);
    }

    // expect(history.location.pathname).toBe("/feedback")
    await waitFor(() => expect(history.location.pathname).toBe('/feedback'));
  });

  it('Verfica o funcionamento do Timer', async () => {
    renderWithRouterAndRedux(<Game />);

    const timer = await screen.findByTestId('timer');
    expect(timer).toBeInTheDocument();
  });
});

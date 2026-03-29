import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders student name', () => {
  render(<App />);
  const nameElement = screen.getByText(/Carol Iantas/i);
  expect(nameElement).toBeInTheDocument();
});

test('shows validation errors when form is empty', () => {
  render(<App />);

  const button = screen.getByRole('button', { name: /submit/i });
  fireEvent.click(button);

  expect(screen.getByText(/Name is required./i)).toBeInTheDocument();
  expect(screen.getByText(/Email is required./i)).toBeInTheDocument();
});

test('shows email validation error for invalid email', () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: 'Carol' } });
  fireEvent.change(emailInput, { target: { value: 'carol-email' } });
  fireEvent.click(button);

  expect(
    screen.getByText(/Please enter a valid email address./i)
  ).toBeInTheDocument();
});

test('submits form successfully with valid data', () => {
  render(<App />);

  const nameInput = screen.getByLabelText(/name/i);
  const emailInput = screen.getByLabelText(/email/i);
  const button = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(nameInput, { target: { value: 'Carol Iantas' } });
  fireEvent.change(emailInput, { target: { value: 'carol@email.com' } });
  fireEvent.click(button);

  expect(
    screen.getByText(/Form submitted successfully!/i)
  ).toBeInTheDocument();
});
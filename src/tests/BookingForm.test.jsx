import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; 
import { describe, test, beforeEach, vi } from 'vitest';
import BookingForm from '../components/BookingForm';

describe('BookingForm', () => {
  const mockSubmitForm = vi.fn(); // Mock function to simulate form submission

  // Run before each test to clear any previous calls to the mock function
  beforeEach(() => {
    vi.clearAllMocks();
  });

  // Test case for checking if an error is shown when the date is invalid
  test('should show error when date is invalid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']} // Sample available times
        submitForm={mockSubmitForm} // Pass the mock submit function
      />
    );

    // Change the date input to an empty value and submit the form
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Expect an error message indicating that the date is required
    expect(screen.getByText(/date is required/i)).toBeInTheDocument();
  });

  // Test case for checking if an error is shown when the time is invalid
  test('should show error when time is invalid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in the date and leave the time empty
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-10-20' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Expect an error message indicating that the time is required
    expect(screen.getByText(/time is required/i)).toBeInTheDocument();
  });

  // Test case for checking if an error is shown when the guests input is invalid
  test('should show error when guests input is invalid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in the date and time, but leave guests empty
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-10-20' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Expect an error message indicating that the number of guests is required
    expect(screen.getByText(/number of guests is required/i)).toBeInTheDocument();
  });

  // Test case for checking if an error is shown when the occasion is invalid
  test('should show error when occasion is invalid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in date and time, and guests, but leave occasion empty
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-10-20' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: '' } });
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Expect an error message indicating that the occasion is required
    expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
  });

  // Test case for checking that no errors are shown when all fields are valid
  test('should not show errors when all fields are valid', () => {
    render(
      <BookingForm
        availableTimes={['17:00', '17:30', '18:00']}
        submitForm={mockSubmitForm}
      />
    );

    // Fill in all fields correctly
    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2025-10-20' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '17:00' } });
    fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '4' } });
    fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });
    
    // Submit the form
    fireEvent.click(screen.getByRole('button', { name: /make your reservation/i }));

    // Expect the mock submit function to be called with the correct data
    expect(mockSubmitForm).toHaveBeenCalledWith({
      date: '2025-10-20',
      time: '17:00',
      guests: '4',
      occasion: 'Birthday',
    });

    // Expect no error messages to be displayed
    expect(screen.queryByText(/date is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/time is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/number of guests is required/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/occasion is required/i)).not.toBeInTheDocument();
  });
});
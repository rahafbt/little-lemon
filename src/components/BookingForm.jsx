import { useState, useEffect } from 'react';

const BookingForm = ({ availableTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [occasion, setOccasion] = useState('');
  const [dateError, setDateError] = useState('');
  const [timeError, setTimeError] = useState('');
  const [guestsError, setGuestsError] = useState('');
  const [occasionError, setOccasionError] = useState('');

  useEffect(() => {
    // Reset error messages
    setDateError('');
    setTimeError('');
    setGuestsError('');
    setOccasionError('');
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;

    // Validation logic
    if (!date) {
      setDateError('Date is required.');
      isValid = false;
    }
    if (!time) {
      setTimeError('Time is required.');
      isValid = false;
    }
    if (!guests) {
      setGuestsError('Number of guests is required.');
      isValid = false;
    }
    if (!occasion) {
      setOccasionError('Occasion is required.');
      isValid = false;
    }
    if (isValid) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <div>
        <label htmlFor="date">Choose Date</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          min={new Date().toISOString().split('T')[0]} // Today's date
        />
        {dateError && <p className="error-message">{dateError}</p>}
      </div>

      <div>
        <label htmlFor="time">Choose Time</label>
        <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
          <option value="">Select time</option>
          {availableTimes.map((availableTime) => (
            <option key={availableTime} value={availableTime}>{availableTime}</option>
          ))}
        </select>
        {timeError && <p className="error-message">{timeError}</p>}
      </div>

      <div>
        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          min="1"
          max="10"
        />
        {guestsError && <p className="error-message">{guestsError}</p>}
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label>
        <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
          <option value="">Select occasion</option>
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {occasionError && <p className="error-message">{occasionError}</p>}
      </div>
      
      <button type="submit" className="booking-btn">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
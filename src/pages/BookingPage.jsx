import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes, updateTimes, submitForm }) => {
  return (
    <div className="booking-page">
      <h2>Book a Table</h2>
      <BookingForm 
        availableTimes={availableTimes} 
        updateTimes={updateTimes} 
        submitForm={submitForm}
      />
    </div>
  );
};

export default BookingPage;
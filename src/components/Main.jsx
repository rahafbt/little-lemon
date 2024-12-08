import { Route, Routes, useNavigate } from "react-router-dom";
import { useReducer, useEffect } from "react";
import HomePage from "../pages/HomePage";
import BookingPage from "../pages/BookingPage";
import ConfirmedBookingPage from "../pages/ConfirmedBookingPage";

const seededRandom = function (seed) {
  const m = 2**35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = s * a % m) / m;
  };
};

const fetchAPI = function(date) {
  let result = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ':00');
    }
    if (random() < 0.5) {
      result.push(i + ':30');
    }
  }
  return result;
};

const submitAPI = function(formData) {
  return true; // Simulate a successful submission
};

// Reducer for managing available times
const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TIMES':
      return action.payload;
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(timesReducer, []);
  const navigate = useNavigate();

  const updateTimes = async (selectedDate) => {
    const dateObject = new Date(selectedDate);
    const times = await fetchAPI(dateObject);
    dispatch({ type: 'SET_TIMES', payload: times });
  };

  const submitForm = async (formData) => {
    const isSuccess = await submitAPI(formData);
    if (isSuccess) {
      navigate('/confirmed'); // Navigate to confirmation page
    }
  };

  // Fetch available times for today on mount
  useEffect(() => {
    (async () => {
      const todayDate = new Date();
      const times = await fetchAPI(todayDate);
      dispatch({ type: 'SET_TIMES', payload: times });
    })();
  }, []);

  return (
    <main>
      <div id="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/booking" 
                 element={<BookingPage 
                            availableTimes={availableTimes} 
                            updateTimes={updateTimes} 
                            submitForm={submitForm} />} />
          <Route path="/confirmed" element={<ConfirmedBookingPage />} />
        </Routes>
      </div>
    </main>
  );
};

export default Main;
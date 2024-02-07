


const validateFormData = (name, date, time, phoneNumber, email) => {
  const errors = [];

  if (!name || name.trim() === '') {
    errors.push({ key: 'name', message: 'Name is required.' });
  }

  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phoneNumber)) {
    errors.push({ key: 'phoneNumber', message: 'Invalid phone number.' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push({ key: 'email', message: 'Invalid email address.' });
  }

  if (!date || date.trim() === '') {
    errors.push({ key: 'date', message: 'Date is required.' });
  }

  if (!time || time.trim() === '') {
    errors.push({ key: 'time', message: 'Time is required.' });
  }

  return errors;
};





module.exports = validateFormData;
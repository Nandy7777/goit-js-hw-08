import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`textarea[name="message"]`);
const email = document.querySelector(`input[name="email"]`);
const STORAGE_KEY = `feedback-form-state`;

let formData = {};

form.addEventListener(`submit`, onFormSubmit);
form.addEventListener(`input`, throttle(onFormInput, 500));

populateEmailTextarea();

function onFormSubmit(evt) {
    evt.preventDefault();
    console.log(formData);
    evt.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function onFormInput (e) {
    formData[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateEmailTextarea() {
    const saveMessage = localStorage.getItem(STORAGE_KEY);
  if (saveMessage) {
    formData = JSON.parse(saveMessage)
    if (formData.message) {
      textarea.value = formData.message;
    }
    if (formData.email) {
      email.value = formData.email;
    }
  }
}; 



import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
const textarea = document.querySelector(`.feedback-form textarea`);
const input = document.querySelector(`.feedback-form input`);
const STORAGE_KEY = `feedback-form-state`;

const formData = {};

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
      console.log(saveMessage);
    }
   if (saveMessage) {
     textarea.value = (saveMessage);
   }
   if (saveMessage) {
     input.value = (saveMessage);
   }
}; 



import throttle from 'lodash.throttle';

const form = document.querySelector(`.feedback-form`);
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
      saveMessage = JSON.parse(saveMessage);
      Object.entries(saveMessage).forEach(([name, value]) => {
        formData[name] = value;
        form.elements[name].value = value;
      });
  }
}
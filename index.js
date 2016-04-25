import './styles.css'
import langEn from './locales/en.json'
import langMsRaw from './locales/ms.json'
import langArEgRaw from './locales/ar-EG.json'

// append to english language as fallback
const langMs = { ...langEn, ...langMsRaw };
const langArEg = { ...langEn, ...langArEgRaw };


function getLangPath(langKey) {
  return `./locales/${langKey}.json`
}
function getLangFile(lang) {
  // return require(getLangPath(lang));
  switch (lang) {
    case 'en':
      return langEn; break;
    case 'ms':
      return langMs; break;
    case 'ar-EG':
      return langArEg; break;
    default:
      return langEn
  }
}

function getSelectedValue(e) {
  const selectedIndex = e.srcElement.selectedIndex;
  const select = document.getElementById('select');

  // return selected value
  return select.options[selectedIndex].value
}

function setLanguage(lang) {
  const $title = document.getElementById('title');
  const $description = document.getElementById('description');
  const $message = document.getElementById('message');

  $title.innerHTML = lang.messages.title;
  $description.innerHTML = lang.messages.description;
  $message.innerHTML = lang.messages.message;
}

function startApp() {
  document.getElementById('select').addEventListener('change', updateLanguageOnChange)

  // initialize english as default
  setLanguage(langEn)
}

function shutApp() {
  document.getElementById('select').removeEventListener('change', updateLanguageOnChange)
}

function updateLanguageOnChange(e) {
  const langKey = getSelectedValue(e);
  const lang = getLangFile(langKey);
  setLanguage(lang)
}



window.onload = startApp;
window.onunload = shutApp;
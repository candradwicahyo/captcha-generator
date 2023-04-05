window.onload = () => {
  
  function generateCaptcha() {
    const string = `abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ,.~\`|•√π÷×¶∆£¢€¥^°=}{\\%©®™✓][><@#$_&-+()/*"':;!?`;
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += string[Math.floor(Math.random() * string.length)];
    }
    const inputCaptcha = document.querySelector('.input-captcha');
    inputCaptcha.value = result;
    return result;
  }
  
  let result = generateCaptcha();
  
  const btnGenerate = document.querySelector('.btn-generate');
  btnGenerate.addEventListener('click', () => result = generateCaptcha());
  
  const input = document.querySelector('.input');
  const btnSubmit = document.querySelector('.btn-submit');
  btnSubmit.addEventListener('click', () => {
    const value = input.value.trim();
    if (validate(value) == true) compare(value);
  });
  
  function validate(value) {
    if (!value) return alerts('error', 'input is empty!');
    if (value.match(/\s/g)) return alerts('error', 'please enter something without spaces!');
    return true;
  }
  
  function compare(value) {
    const icon = (value == result) ? 'success' : 'error';
    const text = (value == result) ? 'captcha is valid!' : 'captcha is invalid!';
    alerts(icon, text);
  }
  
  function alerts(type, text) {
    swal.fire ({
      icon: type,
      title: 'Alert',
      text: text
    });
  }
  
}
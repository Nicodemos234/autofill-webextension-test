setInterval(() => {
  const element = document.querySelector('form input');
  if(!element || element.value !== "") return;
  console.log('element founded')
  element.value = "testemail@email.com";
  element.dispatchEvent(new Event("input", { bubbles: true }));
  element.dispatchEvent(new Event("change", { bubbles: true }));
}, 1000);
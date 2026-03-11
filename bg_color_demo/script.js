function changeBackgroundColor() {
  const select = document.querySelector("select");
  const selectedColor = select.value;
  const message = document.getElementById("message");
  //   instructor did a giant switch statement here, ummmmm sure!
  document.body.style.backgroundColor = selectedColor;
  message.textContent = `Background color changed to ${selectedColor}`;
}

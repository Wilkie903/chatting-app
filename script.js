document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('form');
  const input = document.getElementById('input');
  const messages = document.getElementById('messages');

  form.addEventListener('submit', (e) => {
      e.preventDefault();
      const message = input.value.trim();
      if (message) {
          appendMessage('You: ' + message);
          // Send the message to your friend (you need to handle this part)
          input.value = '';
      }
  });

  // Function to append messages to the chat window
  function appendMessage(message) {
      const li = document.createElement('li');
      li.textContent = message;
      messages.appendChild(li);
      messages.scrollTop = messages.scrollHeight;
  }

  // Function to receive messages from your friend (you need to handle this part)
  function receiveMessage(message) {
      appendMessage('Friend: ' + message);
  }
});

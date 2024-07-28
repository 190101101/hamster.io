document.addEventListener('DOMContentLoaded', () => {});

fetch('https://api.hamsterkombatgame.io/clicker/tap', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    Authorization:
      'Bearer 1721509825647mvnIWoHCAjZ30DUdoPRCsREA4952IbdjeWwmZNhmdxshd2mgL3wnn0X3uoCpG0Ts1572965406',
  },
  body: JSON.stringify({
    count: 1000000,
    availableTaps: 1000000,
    timestamp: new Date().getTime()
  }),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    console.log('Success:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });


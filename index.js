async function fetcher() {
  try {
    const response = await fetch('https://api.hamsterkombatgame.io/clicker/tap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization:
          'Bearer 1721509825647mvnIWoHCAjZ30DUdoPRCsREA4952IbdjeWwmZNhmdxshd2mgL3wnn0X3uoCpG0Ts1572965406',
      },
      body: JSON.stringify({
        count: 1000000,
        availableTaps: 1000000,
        timestamp: new Date().getTime(),
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return null; 
  }
}


document.addEventListener('DOMContentLoaded', () => {
  const balanceCoinBlockContext = document.querySelector('#balanceCoinBlockContext');
  const balanceCoinSpanContext = document.createElement('span');
  balanceCoinBlockContext.appendChild(balanceCoinSpanContext);

  fetcher().then(data => {
    if (data) {
      console.log(data);
      balanceCoinSpanContext.innerHTML = data.clickerUser.balanceCoins;
    } else {
      balanceCoinSpanContext.innerHTML = 'No data returned due to an error';
    }
  });
});


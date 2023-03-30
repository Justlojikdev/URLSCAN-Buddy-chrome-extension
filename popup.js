const scanUrl = (url) => {
  return new Promise((resolve, reject) => {
    if (!url) {
      console.error('Invalid URL');
      reject('Invalid URL');
      return;
    }

    chrome.runtime.sendMessage({ action: 'scanUrl', url }, response => {
      if (chrome.runtime.lastError) {
        console.error('Error scanning URL:', chrome.runtime.lastError);
        reject(chrome.runtime.lastError.message);
        return;
      }

      if (response.error) {
        console.error('Error scanning URL:', response.error);
        reject(response.error);
        return;
      }

      console.log('Received scan response:', response);
      resolve(response);
    });
  });
};

const displayResults = (response) => {
  const resultsDiv = document.getElementById('results');
  resultsDiv.innerHTML = '';

  if (response) {
    const resultLink = document.createElement('a');
    resultLink.href = response.result;
    resultLink.target = '_blank';
    resultLink.textContent = response.result;

    resultsDiv.appendChild(document.createTextNode('Scan result: '));
    resultsDiv.appendChild(resultLink);
  } else {
    resultsDiv.textContent = 'Error scanning URL';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');
  const urlInput = document.getElementById('url');
  const scanButton = document.getElementById('scanButton');
  const loadingDiv = document.getElementById('loading');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const url = urlInput.value.trim();
    loadingDiv.style.display = 'block';

    try {
      const response = await scanUrl(url);
      displayResults(response);
    } catch (error) {
      console.error('Error scanning URL:', error);
      displayResults(null);
    } finally {
      loadingDiv.style.display = 'none';
    }
  });
});

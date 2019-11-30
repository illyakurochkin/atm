import React from 'react';
import Money from './../../components/Money';
import {renderToString} from 'react-dom/server';
import axios from 'axios';

const apiId = '0e4d77ac-8f92-488f-8406-2cafc169cb8c';
const apiKey = '9d24f153-6273-44e5-9043-842939c6e1e6';

const service = axios.create({
  baseURL: 'https://hcti.io/v1',
  headers: {'Authorization': 'Basic ' + window.btoa(`${apiId}:${apiKey}`)},
});

const forceDownload = (url, fileName) => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    const urlCreator = window.URL || window.webkitURL;
    const imageUrl = urlCreator.createObjectURL(this.response);
    const tag = document.createElement('a');
    tag.href = imageUrl;
    tag.download = fileName;
    document.body.appendChild(tag);
    tag.click();
    document.body.removeChild(tag);
  };
  xhr.send();
};

export const downloadWithdrawal = (amount) => {
  const html = renderToString(<Money amount={amount}/>);
  return service.post('/image', {html})
    .then(response => response.data.url)
    .then(url => forceDownload(url, `${amount}$.png`));
};

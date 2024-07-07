const express = require('express');
const request = require('request');
const app = express();

// 데이터4라이브러리 API 프록시
app.get('/api/library', (req, res) => {
    const apiUrl = 'http://data4library.kr/api/loanItemSrch?authKey=e72fa97321d82cb19f04f9c3ecc9721a344b2bdc5ecb8f84b79adec8046e4116&format=json';
    request(apiUrl, (error, response, body) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(body);
    });
});

// 알라딘 API 프록시
app.get('/api/aladin', (req, res) => {
    const apiUrl = 'http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=YOUR_TTBKEY&Query=YOUR_QUERY&Output=JS';
    request(apiUrl, (error, response, body) => {
        if (error) {
            return res.status(500).send(error);
        }
        res.send(body);
    });
});

app.listen(5173, () => {
    console.log('Proxy server is running on port 5173');
});

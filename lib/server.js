import express from 'express';
import config from './config';

// const express = require('express');
// const config = require('./config');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.render('index', {answer: 45});
})

app.listen(config.port, function listenHandler()
{
  console.info(`running on ${config.port}`);
});

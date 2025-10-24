require('dotenv').config();
const express = require('express');
const app = express();
app.get('/health', (req,res) => res.json({ok:true, message:'Payroll backend live'}));
app.listen(process.env.PORT || 3000, ()=>console.log('Server started'));

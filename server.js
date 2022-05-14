const express = require('express')
const app = express()
const port = 3000

const puppeteer = require('puppeteer');

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.get('/api/stroke', (req, res) => {
    //res.send('hello i am express')
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://developer.mozilla.org/ja/docs/Web/JavaScript');
        //await page.screenshot({ path: 'example.png' });
      
        let listSelector="#sidebar-quicklinks > div > div > ol > li > details > ol > li > a";
      
        var datas = await page.$$eval(listSelector, list => {
          var datas=[];
          for (let i = 0; i < list.length; i++) {
            var data = {
              href: list[i].href,
              //textContent: list[i].textContent,
              innerHTML: list[i].innerHTML
            };
            datas.push(data);
          }
          return datas;
        });
        console.log("some items some attributes using $$eval");
        console.log(datas);
        res.send(datas)
      
        await browser.close();
      })();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

const puppeteer = require('puppeteer');

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));

// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/dist/index.html')
})

app.post('/api/stroke/ahref', (req, res) => {
    console.log(req.body);
    console.log(Object.keys(req.body));
    console.log(req.body.targetUrl);
    //console.log(req.targetUrl);
    //res.send('hello i am express')
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto(req.body.targetUrl);
        //await page.goto("https://developer.mozilla.org/ja/docs/Web/API");
        //await page.goto(req.targetUrl);   //NG
        //await page.goto('https://developer.mozilla.org/ja/docs/Web/JavaScript');
        //await page.screenshot({ path: 'example.png' });
      
        console.log(req.body.targetSelector);
        let listSelector=req.body.targetSelector;
        //let listSelector="a";
        //let listSelector=req.body.targetSelector;
        //let listSelector=req.targetSelector;  //NG
        //let listSelector="#sidebar-quicklinks > div > div > ol > li > details > ol > li > a";
      
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
        console.log(datas);
        res.send(datas)
      
        await browser.close();
      })();
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config();
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.tfgke.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });


async function run(){
    try{
        const Eman = client.db("ASUKDB").collection("Eman");
        const Salah = client.db("ASUKDB").collection("Salah");
        const Zakat = client.db("ASUKDB").collection("Zakat");
        const Sawm = client.db("ASUKDB").collection("Sawm");
        const Hajj = client.db("ASUKDB").collection("Hajj");
        const IslamicBlog = client.db("ASUKDB").collection("IslamicBlog");




        const Aspokb = client.db("ASDB").collection("Aspokb");
        
        const dhakas = client.db("SGDB").collection("Dhakas");
        const chattograms = client.db("SGDB").collection("Chattograms");
        const sylhets = client.db("SGDB").collection("Sylhets");
        const khulnas = client.db("SGDB").collection("Khulnas");
        const barishals = client.db("SGDB").collection("Barishals");
        const rajshahis = client.db("SGDB").collection("Rajshahis");
        const rangpurs = client.db("SGDB").collection("Rangpurs");
        const mymensinghs = client.db("SGDB").collection("Mymensinghs");

        const dhakac = client.db("SGDB").collection("Dhakac");
        const chattogramc = client.db("SGDB").collection("Chattogramc");
        const sylhetc = client.db("SGDB").collection("Sylhetc");
        const khulnac = client.db("SGDB").collection("Khulnac");
        const barishalc = client.db("SGDB").collection("Barishalc");
        const rajshahic = client.db("SGDB").collection("Rajshahic");
        const rangpurc = client.db("SGDB").collection("Rangpurc");
        const mymensinghc = client.db("SGDB").collection("Mymensinghc");

        const spregi = client.db("SGDB").collection("Preregi");


        // ............ Eman

        app.get( '/eman', async (req, res) =>{
            const cursor = Eman.find({});
            const aseman = await cursor.toArray();
            res.send(aseman);
        });
        app.post('/emandb', async (req, res) => {
            const aseman = req.body;
            const result = await Eman.insertOne(aseman);
            console.log(result);
            res.send(aseman);
        })
        // ............ Salah

        app.get( '/salah', async (req, res) =>{
            const cursor = Salah.find({});
            const assalah = await cursor.toArray();
            res.send(assalah);
        });
        app.post('/salahdb', async (req, res) => {
            const assalah = req.body;
            const result = await Salah.insertOne(assalah);
            console.log(result);
            res.send(assalah);
        })
        // ............ Zakat

        app.get( '/zakat', async (req, res) =>{
            const cursor = Zakat.find({});
            const aszakat = await cursor.toArray();
            res.send(aszakat);
        });
        app.post('/zakatdb', async (req, res) => {
            const aszakat = req.body;
            const result = await Zakat.insertOne(aszakat);
            console.log(result);
            res.send(aszakat);
        })
        // ............ Sawm

        app.get( '/sawm', async (req, res) =>{
            const cursor = Sawm.find({});
            const assawm = await cursor.toArray();
            res.send(assawm);
        });
        app.post('/sawmdb', async (req, res) => {
            const assawm = req.body;
            const result = await Sawm.insertOne(assawm);
            console.log(result);
            res.send(assawm);
        })
        // ............ Hajj

        app.get( '/hajj', async (req, res) =>{
            const cursor = Hajj.find({});
            const ashajj = await cursor.toArray();
            res.send(ashajj);
        });
        app.post('/hajjdb', async (req, res) => {
            const ashajj = req.body;
            const result = await Hajj.insertOne(ashajj);
            console.log(result);
            res.send(ashajj);
        })
        // ............ Islamic Blog

        app.get( '/islamicblog', async (req, res) =>{
            const cursor = IslamicBlog.find({});
            const asislamicblog = await cursor.toArray();
            res.send(asislamicblog);
        });
        app.post('/islamicblogdb', async (req, res) => {
            const asislamicblog = req.body;
            const result = await IslamicBlog.insertOne(asislamicblog);
            console.log(result);
            res.send(asislamicblog);
        })

        
        // ............ Arabic Spoking Basic

        app.get( '/asb', async (req, res) =>{
            const cursor = Aspokb.find({});
            const asb = await cursor.toArray();
            res.send(asb);
        });
        app.post('/asbi', async (req, res) => {
            const asb = req.body;
            const result = await Aspokb.insertOne(asb);
            console.log(result);
            res.send(asb);
        })

          // ............ Dhaka School

        app.get( '/alldsregi', async (req, res) =>{
            const cursor = dhakas.find({});
            const dsregi = await cursor.toArray();
            res.send(dsregi);
        });
        app.post('/dsregi', async (req, res) => {
            const dsregi = req.body;
            const result = await dhakas.insertOne(dsregi);
            console.log(result);
            res.send(dsregi);
        })
        // ............ Chattogram School

        app.get( '/allcsregi', async (req, res) =>{
            const cursor = chattograms.find({});
            const csregi = await cursor.toArray();
            res.send(csregi);
        });
        app.post('/csregi', async (req, res) => {
            const csregi = req.body;
            const result = await chattograms.insertOne(csregi);
            console.log(result);
            res.send(csregi);
        })
        // ............ Sylhet School

        app.get( '/allssregi', async (req, res) =>{
            const cursor = sylhets.find({});
            const ssregi = await cursor.toArray();
            res.send(ssregi);
        });
        app.post('/ssregi', async (req, res) => {
            const ssregi = req.body;
            const result = await sylhets.insertOne(ssregi);
            console.log(result);
            res.send(ssregi);
        })
        // ............ Khulna School

        app.get( '/allksregi', async (req, res) =>{
            const cursor = khulnas.find({});
            const ksregi = await cursor.toArray();
            res.send(ksregi);
        });
        app.post('/ksregi', async (req, res) => {
            const ksregi = req.body;
            const result = await khulnas.insertOne(ksregi);
            console.log(result);
            res.send(ksregi);
        })
        // ............ Barishal School

        app.get( '/allbsregi', async (req, res) =>{
            const cursor = barishals.find({});
            const bsregi = await cursor.toArray();
            res.send(bsregi);
        });
        app.post('/bsregi', async (req, res) => {
            const bsregi = req.body;
            const result = await barishals.insertOne(bsregi);
            console.log(result);
            res.send(bsregi);
        })
        // ............ Rajshahi School

        app.get( '/allrajsregi', async (req, res) =>{
            const cursor = rajshahis.find({});
            const rajsregi = await cursor.toArray();
            res.send(rajsregi);
        });
        app.post('/rajsregi', async (req, res) => {
            const rajsregi = req.body;
            const result = await rajshahis.insertOne(rajsregi);
            console.log(result);
            res.send(rajsregi);
        })
        // ............ Rangpur School

        app.get( '/allransregi', async (req, res) =>{
            const cursor = rangpurs.find({});
            const ransregi = await cursor.toArray();
            res.send(ransregi);
        });
        app.post('/ransregi', async (req, res) => {
            const ransregi = req.body;
            const result = await rangpurs.insertOne(ransregi);
            console.log(result);
            res.send(ransregi);
        })
        // ............ Mymensingh School

        app.get( '/allmsregi', async (req, res) =>{
            const cursor = mymensinghs.find({});
            const msregi = await cursor.toArray();
            res.send(msregi);
        });
        app.post('/msregi', async (req, res) => {
            const msregi = req.body;
            const result = await mymensinghs.insertOne(msregi);
            console.log(result);
            res.send(msregi);
        })
        
        // ............ Dhaka Collage

        app.get( '/alldcregi', async (req, res) =>{
            const cursor = dhakac.find({});
            const dcregi = await cursor.toArray();
            res.send(dcregi);
        });
        app.post('/dcregi', async (req, res) => {
            const dcregi = req.body;
            const result = await dhakac.insertOne(dcregi);
            console.log(result);
            res.send(dcregi);
        })
        // ............ Chattogram Collage

        app.get( '/allccregi', async (req, res) =>{
            const cursor = chattogramc.find({});
            const ccregi = await cursor.toArray();
            res.send(ccregi);
        });
        app.post('/ccregi', async (req, res) => {
            const ccregi = req.body;
            const result = await chattogramc.insertOne(ccregi);
            console.log(result);
            res.send(ccregi);
        })
        // ............ Sylhet Collage

        app.get( '/allscregi', async (req, res) =>{
            const cursor = sylhetc.find({});
            const scregi = await cursor.toArray();
            res.send(scregi);
        });
        app.post('/scregi', async (req, res) => {
            const scregi = req.body;
            const result = await sylhetc.insertOne(scregi);
            console.log(result);
            res.send(scregi);
        })
        // ............ Khulna Collage

        app.get( '/allkcregi', async (req, res) =>{
            const cursor = khulnac.find({});
            const kcregi = await cursor.toArray();
            res.send(kcregi);
        });
        app.post('/kcregi', async (req, res) => {
            const kcregi = req.body;
            const result = await khulnac.insertOne(kcregi);
            console.log(result);
            res.send(kcregi);
        })
        // ............ Barishal Collage

        app.get( '/allbcregi', async (req, res) =>{
            const cursor = barishalc.find({});
            const bcregi = await cursor.toArray();
            res.send(bcregi);
        });
        app.post('/bcregi', async (req, res) => {
            const bcregi = req.body;
            const result = await barishalc.insertOne(bcregi);
            console.log(result);
            res.send(bcregi);
        })
        // ............ Rajshahi Collage

        app.get( '/allrajcregi', async (req, res) =>{
            const cursor = rajshahic.find({});
            const rajcregi = await cursor.toArray();
            res.send(rajcregi);
        });
        app.post('/rajcregi', async (req, res) => {
            const rajcregi = req.body;
            const result = await rajshahic.insertOne(rajcregi);
            console.log(result);
            res.send(rajcregi);
        })
        // ............ Rangpur Collage

        app.get( '/allrancregi', async (req, res) =>{
            const cursor = rangpurc.find({});
            const rancregi = await cursor.toArray();
            res.send(rancregi);
        });
        app.post('/rancregi', async (req, res) => {
            const rancregi = req.body;
            const result = await rangpurc.insertOne(rancregi);
            console.log(result);
            res.send(rancregi);
        })
        // ............ Mymensingh Collage

        app.get( '/allmcregi', async (req, res) =>{
            const cursor = mymensinghc.find({});
            const mcregi = await cursor.toArray();
            res.send(mcregi);
        });
        app.post('/mcregi', async (req, res) => {
            const mcregi = req.body;
            const result = await mymensinghc.insertOne(mcregi);
            console.log(result);
            res.send(mcregi);
        })

        // ...... Pre Regi
        app.post('/pregi', async (req, res) => {
            const regi = req.body;
            const result = await spregi.insertOne(regi);
            console.log(result);
            res.send(regi);
        })

    }
    finally{

    }
} 
run().catch(err => console.error(err));

app.get('/', (req, res) =>{
    res.send('AS UK');
})

app.listen(port, () =>{
    console.log(`ema john running on: ${port}`)
})
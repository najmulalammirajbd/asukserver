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
        const Taharat = client.db("ASUKDB").collection("Taharat");
        const Podcast = client.db("ASUKDB").collection("Podcast");
        const IslamicBlog = client.db("ASUKDB").collection("IslamicBlog");
        const ShortHadithForKids = client.db("ASUKDB").collection("ShortHadithForKids");
        // ............ 40 Short Hadith For Kids

        app.get( '/shorthadithforkids', async (req, res) =>{
            const cursor = ShortHadithForKids.find({});
            const asshorthadithforkids = await cursor.toArray();
            res.send(asshorthadithforkids);
        });
        app.post('/shorthadithforkidsdb', async (req, res) => {
            const asshorthadithforkids = req.body;
            const result = await ShortHadithForKids.insertOne(asshorthadithforkids);
            console.log(result);
            res.send(asshorthadithforkids);
        })

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
        // ............ Taharat

        app.get( '/taharat', async (req, res) =>{
            const cursor = Taharat.find({});
            const astaharat = await cursor.toArray();
            res.send(astaharat);
        });
        app.post('/taharatdb', async (req, res) => {
            const astaharat = req.body;
            const result = await Taharat.insertOne(astaharat);
            console.log(result);
            res.send(astaharat);
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
        // ............ AS PODCAST

        app.get( '/podcast', async (req, res) =>{
            const cursor = Podcast.find({});
            const asPodcast = await cursor.toArray();
            res.send(asPodcast);
        });
        app.post('/podcastdb', async (req, res) => {
            const asPodcast = req.body;
            const result = await Podcast.insertOne(asPodcast);
            console.log(result);
            res.send(asPodcast);
        })

        

    }
    finally{

    }
} 
run().catch(err => console.error(err));

app.get('/', (req, res) =>{
    res.send('ASH SHAJARAH');
})

app.listen(port, () =>{
    console.log(`ema john running on: ${port}`)
})
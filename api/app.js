const express = require('express') 
const cors = require('cors') 
const bodyParser = require('body-parser')
const webpush = require('web-push') 

const app = express() 
app.use(cors()) 
app.use(bodyParser.json())

const port = process.env.PORT ||  4000 



// app.get('/', (req, res) => res.send('Hello World!')) 

const dummyDb = { subscription: null }


const saveToDatabase = async (subscription) => {
    try {
        dummyDb.subscription = subscription
        console.log(dummyDb, "dummyDb, save to database")
    } catch (error) {
        console.log(error, "error saveToDatabase")
    }
  }

    // The new /save-subscription endpoint
    app.post('/save-subscription', async (req,res) =>{
        try
        {
            const subscription = req.body
            await saveToDatabase(subscription)	
            res.json({message: 'success' })
        }
        catch(err) {
            console.log("New Error 1",err)
        }
    })

const vapidKeys = {
    publicKey: 'BP3iMEWhbmXLmExSDcqqpO9YtI7FyeY1f0BD2rgJsbofYeK2-sg7qkaxXtHqBuFPYWfqMjcIBYhyYSOdkSWAPgc',    
    privateKey: 'tYVBsLyKwndHRBrq99BGum17-afOIs0Lco0vXTInZcY',
  }

webpush.setVapidDetails(
    'mailto:myuserid@email.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
  )
  
  const sendNotification = (subscription, dataToSend='') => {
       webpush.sendNotification(subscription, dataToSend)
  }


  //route to test send notification
app.get('/send-notification', (req, res) => {
	try
	{
    const message = 'AAARGGHHHH!!! Finally!!';
    const subscription = dummyDb.subscription; //get subscription from your databse here.
    sendNotification(subscription, message);
    res.send(JSON.stringify({ success: true }));
}
catch(err) { console.log("Error send-notification",err)
        }
  })


app.listen(port, () => 
console.log(`Creating server on port: ${port}`))


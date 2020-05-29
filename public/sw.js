self.addEventListener('install', event => {
    console.log('ServiceWorker installed at: ', new Date().toLocaleTimeString());
    event.waitUntil(
        caches.open('v1').then((cache) => {
            return cache.addAll(['index.html', 'offline.html', 'offline.css'])
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('ServiceWorker activated at: ', new Date().toLocaleTimeString());
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (!navigator.onLine) {
                if (response) { 
                    return response;
                } else {
                    return caches.match(new Request('offline.html'));
                }
            } else {
                return updateCache(event.request);
            }
        })
    )
});

async function updateCache(request) {
    return fetch(request).then((response) => {
        if(response) {
            return caches.open('v1').then((cache) => {
                return cache.put(request, response.clone())
                .then(() => {
                    return response;
                })
            });
        }
    })
}


// Push notification:

const urlB64ToUint8Array = base64String => {
    const padding = '='.repeat((4 - (base64String.length % 4)) % 4)
    const base64 = (base64String + padding).replace(/\-/g, '+').replace(/_/g, '/')
    const rawData = atob(base64)
    const outputArray = new Uint8Array(rawData.length)
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i)
    }
    return outputArray
  };
  
  
  const saveSubscription = async subscription => {
    const SERVER_URL = "http://localhost:4000/save-subscription";

    const response = await fetch(SERVER_URL, {
      method: "post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(subscription)
    });
    return response.json();
  };
  

     async function subscribeMe () {
      
      const applicationServerKey = urlB64ToUint8Array(
        'BP3iMEWhbmXLmExSDcqqpO9YtI7FyeY1f0BD2rgJsbofYeK2-sg7qkaxXtHqBuFPYWfqMjcIBYhyYSOdkSWAPgc'
      )

      // Check if there is a subscription
      const options = { applicationServerKey, userVisibleOnly: true }
      const subscription = await registration.pushManager.getSubscription(options)
      if (subscription ) {
        console.log("unsubscribe")
        return subscription.unsubscribe()

      } else {
          try {
          const options = { applicationServerKey, userVisibleOnly: true }
          const subscription = await registration.pushManager.subscribe(options)
            console.log(subscription, "subscribe")
          const response = await saveSubscription(subscription); // pass in subscription and starts the function that pushes it to backend
            console.log(response);

          } catch (err) {
            console.log('Error', err)
            }
      }
    }

  subscribeMe ()
  
    self.addEventListener('push', function(event) {
      if (event.data) {
        console.log('Push event!!', event.data.text())
        activatePushNotification(event.data.text());
      } else {
        console.log('Push event but no data')
      }
    })


    const activatePushNotification = (event) => {
      registration.showNotification('Remember RainbowRandy', {
            body: event,
            icon: 'image/unicorn.jpg'
        })
    }
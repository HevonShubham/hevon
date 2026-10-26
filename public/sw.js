const CACHE = 'hevon-public-v1';
const SHELL = ['/offline.html','/icons/hevon-192.png','/icons/hevon-512.png'];
self.addEventListener('install', event => {event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(SHELL)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',event => {event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(key=>key.startsWith('hevon-public-') && key!==CACHE).map(key=>caches.delete(key)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',event=>{
 const request=event.request;const url=new URL(request.url);
 if(request.method!=='GET' || url.origin!==self.location.origin || url.pathname.startsWith('/api/') || url.pathname==='/__forms.html') return;
 // Never cache submissions, checkout, customer data or HTML product claims.
 if(request.mode==='navigate') {event.respondWith(fetch(request).catch(()=>caches.match('/offline.html')));return;}
 if(SHELL.includes(url.pathname)) event.respondWith(caches.match(request).then(hit=>hit || fetch(request)));
});

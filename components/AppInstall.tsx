"use client";
import { useEffect, useState } from 'react';
interface InstallEvent extends Event { prompt: () => Promise<void>; userChoice: Promise<{outcome:string}> }
export default function AppInstall() {
  const [prompt, setPrompt] = useState<InstallEvent | null>(null);
  const [installed, setInstalled] = useState(false);
  const [ios, setIos] = useState(false);
  const [help, setHelp] = useState(false);
  const [offline, setOffline] = useState(false);
  useEffect(() => {
    setInstalled(window.matchMedia('(display-mode: standalone)').matches || Boolean((navigator as Navigator & {standalone?:boolean}).standalone));
    setIos(/iPad|iPhone|iPod/.test(navigator.userAgent));
    setOffline(!navigator.onLine);
    const capture = (e:Event) => {e.preventDefault(); setPrompt(e as InstallEvent);};
    const done = () => {setInstalled(true);setPrompt(null);};
    const online = () => setOffline(!navigator.onLine);
    window.addEventListener('beforeinstallprompt',capture); window.addEventListener('appinstalled',done);
    window.addEventListener('online',online);window.addEventListener('offline',online);
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('/sw.js', {scope:'/'}).catch(() => {});
    return () => {window.removeEventListener('beforeinstallprompt',capture);window.removeEventListener('appinstalled',done);window.removeEventListener('online',online);window.removeEventListener('offline',online);};
  }, []);
  async function install() { if(prompt) {await prompt.prompt();await prompt.userChoice;setPrompt(null);} else setHelp(v=>!v); }
  return <><div className="app-install"><div><strong>HEVON, one tap away.</strong><p>{installed ? 'You’re using the HEVON app.' : 'Keep the first drop close. Add HEVON to your home screen.'}</p></div>{!installed && <button onClick={install}>{prompt ? 'Install app' : 'How to install'}</button>}</div>{help && <div className="app-install-help" role="status">{ios ? 'On iPhone: open this page in Safari, tap Share, then Add to Home Screen and Add.' : 'On Android: open this page in Chrome, open the browser menu, then choose Install app or Add to Home screen. On desktop, use your browser’s install option.'} <button onClick={()=>setHelp(false)} aria-label="Dismiss installation instructions">Close</button></div>}{offline && <p className="app-offline" role="status">You’re offline. Your saved cart stays on this device. Reconnect to join the waitlist or check out.</p>}</>;
}

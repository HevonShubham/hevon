import AppInstall from '@/components/AppInstall';
import Storefront from '@/components/Storefront';
export const metadata = {title:'HEVON App',description:'Your HEVON first drop, waitlist and saved cart. Install on Android or iPhone.'};
export default function AppPage() { return <div className="hevon-app"><AppInstall/><Storefront/><nav className="app-bottom-nav" aria-label="App navigation"><a href="#home">Home</a><a href="#shop">Discover</a><a href="#waitlist">Waitlist</a><a href="#contact">Help</a></nav></div>; }

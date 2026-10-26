import type { MetadataRoute } from 'next';
export default function manifest(): MetadataRoute.Manifest {
  return {id:'/app',name:'HEVON',short_name:'HEVON',description:'A little more. Every day. Discover the first drop and save your cart.',start_url:'/app',scope:'/',display:'standalone',background_color:'#fffaf1',theme_color:'#2b1d16',lang:'en-IN',icons:[{src:'/icons/hevon-192.png',sizes:'192x192',type:'image/png',purpose:'any'},{src:'/icons/hevon-512.png',sizes:'512x512',type:'image/png',purpose:'any'}],shortcuts:[{name:'Discover the first drop',url:'/app#shop'},{name:'Join the waitlist',url:'/app#waitlist'}]};
}

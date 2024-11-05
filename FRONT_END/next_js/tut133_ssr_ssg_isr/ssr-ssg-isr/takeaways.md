# SSR(server side rendering)
- This is default behaviour....

- these terms were popular when there was page router in next js.but now its app router

# SSG(static site generation)
- Any content which doesn't have network calls is a static site by default.

# ISG/ISR(incremental static regeneration)
<!-- read fetch function next js documentation -->
- fetch in nextjs caches the response but there are exeptions which we hve discussed below:
- next js by default cache garxa..so hamle api fetch garim ekchoti ani tyo page render garim..ani arko choti reload huda tyo fast hnxa coz tyo network call gayera aauxa ra yeta cache bhyera basya hnxa.
- if we want naya data aaos..then cache no store garera cache huna na dini ..ani chai harek choti network call janxa.
-  see if we have blog than we want if we change something on our blog than it gets changed to users side too...aba tesko lagi cache no garnu paro...tara cache:no-store garda harek choti user ley page kholda fetch huney bho so server lai load hnxa....aba k garney ta...for that we can do 
      let data=await fetch('https://api.vercel.app/blog',{next:{revalidate:3600}});

      this 3600 represent 3600s.So every one hour ma ekchoti render garxa server lai call hanera
## export const dynamic='force-dynamic'
- normally build garda as static build bhaa hnxa,
- if we use export const dynamic='force-dynamic' on page.js and build it then dynamic page bhyera built hnxa...
- then cache garera render garnu ko sato ssr matlab server site render garxa
# basics
 - tyo error hataua use npm install
 --save-dev @types/estree @types/json-schema

-  jaba hami server component ma thim.then hamle return bhitrai
{process.env.ID } garda ni tyo content print bhaako dekhi rathim..but as soon as we make it client component it doesn't happen..

-  process.env server component ho.
- use client garera process.env garda now process.env is client ko ..it means browser ko...and it wont get id so doesnt work or say errors..

# how to make .env content available to public?
- tyo garna .env ma store garda save it as NEXT_PUBLIC_{ID/SECRET/KEY} j garey ni bho...
- yesto garesi "use client"/client component bhye ni  na bhye ni kei problem hudaina..browser ma tyo component send garxa
- 
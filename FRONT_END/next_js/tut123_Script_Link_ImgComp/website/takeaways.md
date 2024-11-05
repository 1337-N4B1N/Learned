# Link 
    a href ko satto Link use garni same as react..
# Title of each page
    tyo instagram tira chats kholo bhni browser tab ma
     Chats;Instagram dekhauxa....
     testai banauna lai every page{tyo app bhitra folder banayera tes bhitra banako page } ko tala metadata halera edit garni...metadata layout.js ma painxa..
     u can check about in this project to know about it
# Script tag
    like tyo file bhitra js lekhnu paroo bhnye import script at first then html ma jstai script bhitra lekhni
    # Strategy- 
        lazyonload-- jaba time pauxa taba garni..
        ads haru launu paro bhni layout.js ma launi..
# img

   - import image garni..
   -  ani tei img src jstai <Image src=" alt=" /> hunxa..
    tesma height ra width specify garnu compulsion hunxa if image chai device ma nabhyera remote leko xa bhni..hamrai device ma xa bhni chai import garni..
   - tespaxi next.config.mjs(next.config.js) ma gayera  hostname configure garni .. as we have done over here...
    -  
        images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 's3.amazonaws.com',
            port: '',
            pathname: '/my-bucket/**',
          },
        ],
      },

    - height width nadera fill=true garo bhnye ms paint ko fill jstai purai bharinxa..tara thing is ki..image bhako div ko position relative rakho bhnyo tyo div kai size jati fill hunxa


# why Image is used instead of img...
    it is because hamle thulo screen ma herda ta thulos size ko picture aauxa load hunxa..tara saano ma herda ni tetrai chainna..tara server bata tei thulo load hunxa which means heavier image...so...
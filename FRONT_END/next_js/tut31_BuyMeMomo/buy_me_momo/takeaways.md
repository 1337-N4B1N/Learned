# initital 15 mins
- tei navbar ra footer banaim.
- components folder banayera tynha rakhya xam

# 15-30 mins
- ibelick gayera background uthaim
- flowbite bata css button uthaim
# 30-45 mins
- tei css haru milaiyo..
- google tailwind google login button ani tesbata direct css uthaiyo...
- nothing much special over here.
# 45-1 hr
- we worked on next-auth
- next auth google garim ani seesion provider banyera children lai wrap gardim..sessionwrapper bhnnye component banaim yo kaam ko lagi.don't forget session wrapper client component ho hai..
- tespaxi github bata login garna milney banauna github next-auth google..
- ani tyo api/auth folder banaim..env.local ma secret ra ID   halim
- ani api/nextauth folder banaim app ko bhitra ani tesma route.js banaim..this is used for creating apis...
- tei  github bata signin garna milney samma chai banaim j hoss..
# 1-1.15 hr
- session huda ra nahuda different navbar kasari display garni bhnera thyo..
- {session && session huda dekhauney wala}
- {!session&& session nahuda dekhauney wala}
- flowbyte tailwind css dropdown google hanim ani...
- dropdown lai milaim...
- than login huney bittikai dashboard ma navigate huney tarikaley navigation milam...for this we use router.push where useRouter was imported from next/navigation
- ani tespaxi drop down ma onBlur wala use garim so that aru kati click bhye tyo hide hos..
# 1.15-1.5 hrs
- tei creator ko name end point ma jaada uslai support garna milney page..tyo creator ko page banaim..like /aalu ma jaada aalu bhnni creator ko page display hunu paro ani teslai support haru garna milney tei bata huna paro...
- tei UI css wala kaam nothing much special..

# 1.5-1.45 hrs
-tei UI stuff again...nothing testo khatra...

# 1.45-2hrs 
- tyo dashaboard lai component banaim ani tesma tannai kaam garim
- paymnet sytem integration garnu parney xa jun maile garya xaina ailey samma..esewa ko gara siknu ..
- esewa bata api key id ra secret lesi teslai gaera .env.local ma haldinu
- aba backend ma user ley login garesi tyo info haru save garni rey.so for that we searched next-auth callbacks
- hamle tespaxi models folder banayim tyo bhitra mongoose use garera UserModel banaim..now it was turn for PaymentModel.
# 2-2.15hrs
- mongoose.connect("give uri over here.")
- ani github bata aako info lai save hanim database ma...
- tei ho user ko login info lai database ma save garim...
- dont know why tara everychoti login garda tyo user ko info save bhai rathyo..even though already exist thyo bhneni..so 
# 2.15-2.30 hrs
- esewa integrate garni try garnu paro ma chai...or paypal...no idea..but lets try
- payment integration ailey lai hault ma hai...
- component ma PaymentPage.js banauni..
- useractions bhanni folder bananauni(not subfolder) outside mai not inside app folder or other folders..remember it shall be server side .So "use server"
- tespaxi tyo useractions k page.js ma payment app ko website ma gayera backend lekhnu parney uthayera lyauney.
- ani PaymentPage.js bhannye ma gayera chai tei esewa/paypal ko front end part jhyammai copy paste..{dont forget to import and replace <scrip/t> tag}
# 2.30-2.45 mins
- first 5 min ta tei payment procedure milaudai gaisakyo..


# 2.45-3hrs roughly
- tyo payment procedure milisakya thyo almost
- ani tyo supporters list a db bata fetch garera amount ko aadharma display garim,,,



# 3-3.15hrs
tyo dashboard ko form fill garera user ley aafno profile update garna milney banaim..
ani tei fata fetch garera your page{jun user ley tyo dashboard ma fill garya thyo teskai} ma profile ra cover update huney banaim,,,,,
 
 # 3.15-3.30
 - tei profile-pic ani cover-pic display huney banaim...
 - css milaim halka
 
 # 3.30-3.45 hrs
 - react toastify
 - tyo dashboard ma profile update garesi ra payment garesi toastify use garim to assist user
 - tyo user jasley payment pairaxa tesko secret db bata fetch garni
 - aba jun celebrity/user jasley payment pai raxa tesko paypal id ki secret db bata fetch garni...so that jaba tesko profile ma kasailey donate garxa tyo tesley paaos.
 - also dashboard ma tsley aafo paypal id chnge garo bhnye tei anusar yeta usko page ma ni chnge hunu parxa so that he still gets payment...yei kaam garya ho..
 - error404 dekhauney if username isn't in database.

 # error 404
 - import NotFound

 # 3.45-4 hrs
 - tei error page configure garim
 - paypal id lai dynamic banaim

 # 4-4.15 hrs
   * Generate Metadata
    - We generated metadata as we can see in dashboard page..with the help of this we could change every page title.
    - but we cant do this on client component..
    - make responsive
 # 4-4:30 
 - make responsive for mobile usage
 
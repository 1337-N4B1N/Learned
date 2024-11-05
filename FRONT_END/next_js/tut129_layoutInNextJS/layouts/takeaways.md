# layout
  - layout.js ma haleko kura sab ma apply hunxa...overall page structure ma..
  - so hamlai sab page ma navbar ra footer chaiyeko xa bhnye we can just import and include that in layou.js,,,wrap handiney tyo layout,js ko children lai,,
  - testai Navbar ra footer components hun...hamlai routing garnu xain...so we create components folder{not inside app folder hai} and make navbar and footer over there.,,
  - aba admin ko lagi xuttai page banauni bhaye ..app bhitra admin banauni ani different folder banayera tesko pages haru banauni..
  - admin/ end point wala haru sabma common design chaiyeko xa bhnye just create layout.js in admin folder ...

# tailblocks.cc
  - yesma ramro ramro design hunxa like footer navbar etc..So jst copy it...why to waste time...
  # grouping endpoints in a single folder
- tyo adming banaki thim hamle yo tutorial ma..testai hamle aru kei banauda keep the folder{endlpoint} name under small brackets i.e (admin)
- paila hamle (admin) yesari na lekhi admin matra lekhda hami admin ko login page ma jaana /admin/adminlogin endpoint ma janu parthyo bhnye (admin) yesari lekhisake paxi chai directly /adminlogin ma jaana sakxam....
- this is called group layout.

- yesari folder bhitra layout banauda paila global layout apply hunxa ani tespaxi tyo folder bhitra ko..so navbar global wala ma xa tara admin layout wala ma xaina bhnye ni there will be navbar in admin panel..
- metadata every page ma halna milxa read docs about metada of nextjs.
- read generate metadata functon...
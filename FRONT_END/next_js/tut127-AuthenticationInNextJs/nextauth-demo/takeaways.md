# nextAuth.js
 - documentation available at next-auth.js.org
 - hamle next app based ma garxam so tesko lagi next-auth use garna make folder under app on following patter 
        -app/api/auth/[...nextauth]/rote.js
- documentation ma deko wala chai page.js ko lagi ho jun chai pages/api/auth/[...nextauth].js ma hnxa

# how to use....

- tyo file route.js banayesi tesma next-auth.org mai bhako wala copy garni ani paste hanni...
- layout ma gayera SessionProvider import hanni ho...
- nai layout ko body lai wrap garni SessionProvider ley i.e
    <SessionProvider></SessionProvider>
- tei /path ma rakheko of that next-route.js.org ..tynha client side bhenra deko xa..tesko page.js wala lai copy hanera hamro page.js lai replace handini....
- page.js ma dont forget to write "use client" in top face..
# tespaxi .env.local banauni ani tesma hamro secrets haru rakhni..yei project/tutorial ko check garda ni hnxa..teso garesi ti secrets haru lai app ma use garna milxa..like abstraction

tyo github id ra secret github>settings>developer_settings>oauth_apps>ani tesma register garera client id ra secret generate and copy to env_local

# jnha jnha SessionProvider use bhaaxa tynha client component i.e "use client" banauni...tara layout lai nai client component banaxainam yesma hamle..instead we have made component in app and over there imported SessionWrapper ani tyo session wrapper lai layout ma import garda no issues..
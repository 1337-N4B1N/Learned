src bhitra euta redux bhni folder banayera tes bhitra store.js banauni...

ani tyo store.js bhitra redux toolkid ko tutorial ko getting started ma gayera  tyo configueStore wala first mai xa teslai copy paste hanni..

ani main.jsx ma gayera store ra provider import garni       import {store} from './redux/storejs'
 import {Provider} from 'react-redux'


ani tespaxi main.js bhitra app lai wrap garni with <Provider store={store}></Provider>

then create slice ..tei getting started ko taltira deko xa...creater counter folder insider redux and keep counterslice.js over there 

than store.js  ma gayera
 import counterReducer from './counter/counterSlice' ani tyo reducer{
    counter:counterReducer,
 }

 ani app.jsx ma gayera herni kk import garya xa tei ho...
 ani uta parameter pathaunu pardaina Navbar ma..tei import garesi hnxa..

checkout store.js
// https://stackoverflow.com/questions/54385323/what-is-a-difference-between-action-reducer-and-store-in-redux
# route.js
   - front_end ma pgae.js garesi jsari routing kaam garxa tesari nai route.js wala banayesi get put post i.e apis ko kaam garna aateko xam bhnera thadinxa next lai..
# post request
   - same node ma garejstai ..fetch api use garerea send hanni..tyo header haru pathaunu parxa...same tei xa..ani response lai await garera euta var ma save hanni..ani await garera teslai .json ma lagni ani console garera herni...
# backend of processing api
   - nextresponse lai import garni  
            export async function POST(request) {
            let data=await request.json()
            console.log(data)
            return NextResponse.json({success:true,data:"yes"})
            }
    - yesko tyo exort wala line deko hunxa docs ma check route.js bhnni ma xa...tynha bata copy..ani bhitra ko logic chai lekhni ho



    
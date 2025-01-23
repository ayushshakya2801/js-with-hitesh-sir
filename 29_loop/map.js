// ++ map in js 

 const map = new Map ()
 map.set('IND',"India")
 map.set('AUS',"Austrelia")
 map.set('US',"United State")

//  console.log(map);
 

 for (const [key , value] of map) {
    console.log(key, ':-', value);
    
 }
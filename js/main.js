var blacksquare="<div class='square black'></div>"
var whitesquare="<div class='square white'></div>"
var redpiece="<div class='redpiece'></div>"
 var blackpiece="<div class='blackpiece'></div>"

for(var i=0;i<8;i++){
 for(var k=0;k<8;k++){
   if (i%2==0){
    if(k%2==0){
       $(".board").append(whitesquare)

    }
     else{
     $(".board").append(blacksquare)
     if(i>=6){
        var p=(i*8)+k
        $(".square").eq(p).append(redpiece)
      }

      if(i<2){
        var p=(i*8)+k
        $(".square").eq(p).append(blackpiece)
      }
    }

   }
   else{
     if (k%2==0){
       $(".board").append(blacksquare)
       if(i>6){
        var p=(i*8)+k
        $(".square").eq(p).append(redpiece)
      }

      if(i<2){
        var p=(i*8)+k
        $(".square").eq(p).append(blackpiece)
      }
     }
     else{
       $(".board").append(whitesquare)

     }
   }
 }
}
for(var i=0; i<64; i++){
 if(i%8==0){
   $(".square").eq(i).addClass("border")
 }

}

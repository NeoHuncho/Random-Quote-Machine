const randomQuotes=["In all moments, for all reasons--love complete","If we aim high and fall short, we still achieve more than by aiming low and falling short"," May you recognize the passion and the possibility in your day today and have the courage to follow it","When was the last time worry ever solved a problem? Breathe and know that you are perfect in this moment","There is nothing more important in the world than loving yourself"];
const chooseQuote= randomQuotes[(Math.floor(Math.random() * randomQuotes.length))]
function quote(){
    $("#text").html(chooseQuote);
}
$(document).ready(function() { 
 
    $('#new-quote').click(function () { 
       quote()
        
    });
        
    });
           
   
        




console.log(chooseQuote);

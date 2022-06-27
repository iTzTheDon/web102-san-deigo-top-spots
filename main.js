$(document).ready(function() {
    $.getJSON("data.json", function(locations) {
    $.each(locations,function(i,location){
        //console.log(i,location)
        $(
            // "<tr><td>" + information + "</td></tr>"
             `<tr>
             <td> ${location.name} </td>
             <td> ${location.description} </td>
             <td> <a href="https://www.google.com/maps?q=${location.location}"><button class="buttonstyle"> Open in Google Maps</button></a> </td>
             </tr>` 
            ).appendTo("tbody") 
            console.log("name",location.name,"description",location.description,"location",location.location)   
    })
    });

});

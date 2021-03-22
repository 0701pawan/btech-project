function updateMap()
{
    fetch("https://api.thingspeak.com/channels/986549/feeds.json?results=2")
    .then(response => response.json())
    .then(rsp => {
        console.log(rsp.channel)
        //console.log(rsp.feed.temperature)
        latitude=rsp.channel.latitude;
        longitude=rsp.channel.longitude;
        console.log(rsp.channel)
         console.log(latitude)
         console.log(longitude)
         console.log(rsp.feeds[0].field1)
         ppm = rsp.feeds[0].field5;
                /*if (ppm>=0 && ppm<=50) {                       Standard Values
                    color = 'rgb(0, 255, 0)';
                }
                else if(ppm>=51 && ppm<=100){
                    color = 'rgb(0, 153, 51)'
                }
               
                else if(ppm>=101 && ppm<=250){
                    color = 'rgb(255, 255, 0)'
                }
                else if(ppm>=251 && ppm<=350){
                    color = 'rgb(255, 128, 0)'
                }
                else if(ppm>=351 && ppm<=430){
                    color = 'rgb(255, 0, 0)'
                }
                else if(ppm>430){
                    color = 'rgb(51, 10, 0)';
                }*/
                if (ppm>=0 && ppm<=10) {                       
                    color = 'rgb(0, 255, 0)';
                }
                else if(ppm>=11 && ppm<=20){
                    color = 'rgb(0, 153, 51)'
                }
               
                else if(ppm>=21 && ppm<=30){
                    color = 'rgb(255, 255, 0)'
                }
                else if(ppm>=31 && ppm<=40){
                    color = 'rgb(255, 128, 0)'
                }
                else if(ppm>=41 && ppm<=50){
                    color = 'rgb(255, 0, 0)'
                }
                else if(ppm>51){
                    color = 'rgb(51, 10, 0)';
                }
        
        
         new mapboxgl.Marker({
            draggable: false,
            color: color
        })

            .setLngLat([longitude, latitude])
            .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML( '<p>'+ "TEMPERATURE"  +": "+ rsp.feeds[0].field1  + '</p>'+'<p>'+"HUMIDITY"+": "  + rsp.feeds[0].field2  + '</p> '+'<p>'+"MQ135" + ": " + rsp.feeds[0].field3  + '</p>'+'<p>'+"MQ2" + ': ' + rsp.feeds[0].field4  + '</p><p>'+"PPM(CO2)" + ': ' + rsp.feeds[0].field5  + '</p>'))
            .addTo(map)
    })
}
updateMap();
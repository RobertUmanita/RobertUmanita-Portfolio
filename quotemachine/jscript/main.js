   function doIt() { 
     var output = $.ajax({
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
    type: 'GET', 
    data: {}, 
    dataType: 'json',
    success: function(data) {
       console.log(data);
        document.getElementById("output").innerHTML = '"' + data.quote + '"';
       document.getElementById("author").innerHTML =  "-" + data.author;
        },
    error: function(err) { alert(err); },
    beforeSend: function(xhr) {
    xhr.setRequestHeader("X-Mashape-Authorization", "flafSTXhPFmshD7rUMttn46ELgZUp15Ory2jsnHZCf8BPrHtae"); 
    }
});
  

}
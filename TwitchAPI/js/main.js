$(document).ready(function() {
	
	var j = 0;
	var twstreams = ["ESL_SC2", "OgamingSC2", "totalbiscuit", "savjz", "summit1g", "ogaminglol", "cohhcarnage", "cretetion", "freecodecamp", "habathcx", "RobotCaleb", "noobs2ninjas"];
	for (var i = 0; i < twstreams.length; i++) {
		$.when(
		
		$.getJSON("https://api.twitch.tv/kraken/streams/" + twstreams[i] + "?callback=?"),
		$.getJSON("https://api.twitch.tv/kraken/channels/" + twstreams[i] + "?callback=?")

	).done(function(strob, chob){
		
		
		$('#searchy').fadeOut();

		if (strob[0].stream === null) {
			console.log(chob[0]);

			if (j == 0){
							$("html").append("<div class='container'><div class='row'>");
							if (chob[0].game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recently streamed: " + chob[0].game + "</p><p class='offline'>OFFLINE</p> </a></div>");
							} else if (chob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recent staus: " + chob[0].status + "</p><p class='offline'>OFFLINE</p></a></div>");
							} else if (chob[0].game === null && chob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2></a></div>");
							}
														
							j = 4;
						}
						else if (j == 4) {
							if (chob[0].game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recently streamed: " + chob[0].game + "</p><p class='offline'>OFFLINE</p> </a></div>");
							} else if (chob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recent staus: " + chob[0].status + "</p><p class='offline'>OFFLINE</p></a></div>");
							} else if (chob[0].game === null && chob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p class='offline'>OFFLINE</p></a></div>");
							}
							j = 8;
						}
						else {
							if (chob[0].game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recently streamed: " + chob[0].game + "</p><p class='offline'>OFFLINE</p> </a></div>");
							} else if (chob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Recent staus: " + chob[0].status + "</p><p class='offline'>OFFLINE</p></a></div>");
							} else if (chob[0].game === null && chob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+chob[0].url+"><h2 class='text-center'>" + chob[0].display_name + "<img src=" + chob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p class='offline'>OFFLINE</p></a></div>");
							}
							$("html").append("</div></div>");
							j = 0;
						}
					$(".cob").mouseenter(function() {
          $(this).animate({
            bottom: '10px'
          },"slow");
        });
        $(".cob").mouseleave(function() {
          $(this).animate({
            bottom: '0px'
          },"slow");
        });
		} else {
			console.log(strob[0].stream);
				if (j == 0){
							$("html").append("<div class='container'><div class='row'>");
							if (strob[0].stream.game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].stream.channel.url+"><h2 class='text-center'>" + strob[0].stream.channel.display_name + "<img src=" + strob[0].stream.channel.logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Currently steaming: " + strob[0].stream.game + "</p><p class='online'>ONLINE</p> </a></div>");
							} else if (strob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Current status: " + strob[0].status + "</p><p class='online'>ONLINE</p></a></div>");
							} else if (strob[0].game === null && strob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p class='online'>ONLINE</p></a></div>");
							}
														
							j = 4;
						}
						else if (j == 4) {
							if (strob[0].game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].stream.channel.url+"><h2 class='text-center'>" + strob[0].stream.channel.display_name + "<img src=" + strob[0].stream.channel.logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Currently steaming: " + strob[0].stream.game + "</p><p class='online'>ONLINE</p> </a></div>");
							} else if (strob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Current status: " + strob[0].status + "</p><p class='online'>ONLINE</p></a></div>");
							} else if (strob[0].game === null && strob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p class='online'>ONLINE</p></a></div>");
							}
							j = 8;
						}
						else {
							if (strob[0].game !== null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].stream.channel.url+"><h2 class='text-center'>" + strob[0].stream.channel.display_name + "<img src=" + strob[0].stream.channel.logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Currently steaming: " + strob[0].stream.game + "</p><p class='online'>ONLINE</p> </a></div>");
							} else if (strob[0].status !== null){
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p>Current status: " + strob[0].status + "</p><p class='online'>ONLINE</p></a></div>");
							} else if (strob[0].game === null && strob[0].status === null) {
								$("html").append("<div class='col-sm-4 cob'><a class='entry' target='_blank' href="+strob[0].url+"><h2 class='text-center'>" + strob[0].display_name + "<img src=" + strob[0].logo + " alt='Smiley face' align='right' height='42' width='42'></h2><p class='online'>ONLINE</p></a></div>");
							}
							$("html").append("</div></div>");
							j = 0;
						}
					$(".cob").mouseenter(function() {
          $(this).animate({
            bottom: '10px'
          },"slow");
        });
        $(".cob").mouseleave(function() {
          $(this).animate({
            bottom: '0px'
          },"slow");
        });

		}


		});
	}
	


	});

function loadJData(filename) {
	var Nthreads=6;
	$.getJSON(filename, function(data) {
		var activeItems = [];
		var acceptedItems = [];
        var respondedItems = [];

        $.each(data, function(i, item) {
        	var thread = '<li id="thread class="link" ' + i + '"> ' 
        	+ data[i].score + ' - <a href="' + data[i].url + '">' 
        	+ data[i].title + '</a></li>' 
            +'- por ' + data[i].author + ' | ' + data[i].comments + ' comentarios';
			if (data[i].response == true){
				respondedItems.push(thread)
			}
			else if(data[i].score > 22) {
		        acceptedItems.push(thread)
		    } else {
		        activeItems.push(thread)
		    }
		});
		        
		$(".active").html("<h2> Pendientes </h2>")
		$(".accepted").html("<h2> Aceptadas </h2>")
		$(".responded").html("<h2> Respondidas </h2>")
				
		$('<ul/>', {
			"class": "my-new-list",
		    html: activeItems.slice(0, Nthreads).join(""),
		}).appendTo(".active");

		$('<ul/>', {
			"class": "my-new-list",
			html: acceptedItems.slice(0, Nthreads).join(""),
		}).appendTo(".accepted");

		$('<ul/>', {
			"class": "my-new-list",
			html: respondedItems.slice(0, Nthreads).join(""),
		}).appendTo(".responded");


	});
    		
}
		
		
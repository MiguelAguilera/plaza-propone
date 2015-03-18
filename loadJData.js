function loadJData(filename) {
	var Nthreads=8;
	var Nresponses=4;
	$.getJSON(filename, function(data) {
		var activeItems = [];
		var acceptedItems = [];
        var respondedItems = [];
        $.each(data, function(i, item) {
        	var thread = '<li id="thread class="link" ' + i + '"> ' + '<a href="' + data[i].url + '">' + data[i].title + '</a> ('  + data[i].ups + ' votos positivos, '+ data[i].downs + ' votos negativos)</li>' +'por ' + data[i].author + ' | ' + data[i].comments + ' comentarios';
			if (data[i].response == true){
				respondedItems.push(thread)
			}
			else if(data[i].ups > 22) {
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
			html: acceptedItems.slice(0, Nresponses).join(""),
		}).appendTo(".accepted");
		$('<ul/>', {
			"class": "my-new-list",
			html: respondedItems.slice(0, Nresponses).join(""),
		}).appendTo(".responded");
	});		
}

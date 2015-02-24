;(function($,window,undefined){
})(jQuery,this);
$(document).ready(function(){
	logged();
	getData();
	dropdown();
	$('#modal-form-submit-addcarrer').on('click', function(e){
		e.preventDefault();
		savecarrer();
	});
	$('#pushtowin').on('click', function(e){
		e.preventDefault();
		pushtowin();
	});
	$('#clean').on('click', function(e){
		e.preventDefault();
   // clean();
});

});
function logged(){
	var loggedInUser = Parse.User.current();
	var template;
	if(!loggedInUser){
		window.location.replace("index.html");
	} else {
		$("#user").html("");
		template=Handlebars.compile($("#userdata").html());
		$("#user").append(template(loggedInUser));

	}
}
//funciton to fill the categories
function dropdown(){
	var query=Parsequerybuilder("Carrers_cat");
	var results;
	var template;
	query.ascending("categoryName");
	query.find({
		success:function(result){
			$("#drop").html("");
			$(result).each(function(i,e){
				results=e.toJSON();
				template=Handlebars.compile($("#dropdownitems").html());
				$("#drop").append(template(results));
			});
		},
		error:function(error){
			console.log(error.message);
		}
	});
}
//funciton to save the feed from rsss
function savecarrer(){
	if(document.getElementById('url').value===""){
		alert('Please fill the correct url');
		return false;
	}else{
		var carrer=Parseobjecbuilder("Carrers");
		var url    =$("#url").val();
		var e = document.getElementById("drop");
		var category = e.options[e.selectedIndex].text;
		carrer.set("url", url);
		carrer.set("category", category);
		carrer.set("active", true);
		carrer.save(null,{
			success:function(){
				alert("Added!");
				location.reload();
				return false;
			},
			error:function(carrer,error){
				alert("error!");
				return false;
			}
		});
		return false;
	}
}
//get the carrer
function getData(){
	var query     =Parsequerybuilder("Carrers");
	var template;
	var results;
	query.ascending("category");
	query.equalTo("active", true);
	query.find({
		success:function(result){
			$("#data").html("");
			template=Handlebars.compile($("#Fulldata").html());
			$(result).each(function(i,e){
				results=e.toJSON();
				$("#data").append(template(results));
			});
		},
		error:function(error){
			console.log(error.message);
		}
	});
}
//function to delete carrer
function deletecarrer(clicked_id){
	var x;
	var query;
	if (confirm("Are you sure?") === true) {
		x = 1;
	} else {
		x = 0;
	}
	if(x==1){
		query=Parsequerybuilder("Carrers");
		query.get(clicked_id, {
			success: function(query) {
				query.set("active", false);
				query.save();
				alert("Deleted!");
				location.reload();
				return false;
			},
			error: function(object, error) {
				alert("ERROR!");
				return false;
			}
		});
		return false;
	}
}

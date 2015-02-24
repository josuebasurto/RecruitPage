;(function($,window,undefined){
})(jQuery,this);
$(document).ready(function(){
	getData();
});
/*key*/
Parse.initialize("Wg8uEs9pwJ5INAi5BKw9TMTYFKVxx2tqqf5X1r6A", "7w58DrchX1jA5PPoPGQv0cdd6FWxmbTpEKM6M3BA");

/*Builders*/
/*Objectbuilder*/
function Parseobjecbuilder(clase){
	var objetoparse=Parse.Object.extend(clase);
	var objectoconstruido=new objetoparse();
	return objectoconstruido;
}
/*querybuilder*/
function Parsequerybuilder(clase){
	var objeto = Parse.Object.extend(clase);
	var query = new Parse.Query(objeto);
	return query;
}

//get the carrer
function getData(){
	var query     =Parsequerybuilder("Carrers");
	var templateimg;
	var templatetag;
	var helper="inicio";
	var results;
	query.ascending("category");
	query.equalTo("active", true);
	query.find({
		success:function(result){
			$("#data").html("");
			templateimg=Handlebars.compile($("#img").html());
			templatetag=Handlebars.compile($("#tag").html());
			$(result).each(function(i,e){
				results=e.toJSON();
				if(helper!=results.category){
					helper=results.category;
					$("#data").append(templatetag(results));
					$("#data").append(templateimg(results));
				}else if(helper==results.category){
					$("#data").append(templateimg(results));
				}



			});
		},
		error:function(error){
			console.log(error.message);
		}
	});
}
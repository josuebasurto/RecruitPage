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

function forceout(){

  Parse.User.logOut();
  window.location.replace("index.html");

};
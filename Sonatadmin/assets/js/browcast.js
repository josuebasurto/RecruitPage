;(function($,window,undefined){
})(jQuery,this);
$(document).ready(function(){
  filldropdowns();
  logged();
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
//function to fill dropdowns
function filldropdowns() {
  var query=Parsequerybuilder("Groups");
  var template;
  query.ascending("name");
  query.find({
    success:function(files){
      template=Handlebars.compile($("#filedrop").html());
      $("#group").append(template(""));
      $(files).each(function(i,e){
          //fill the dropdown modal
          var resultsf=e.toJSON();
          $("#group").append(template(resultsf));
        });
    },
    error:function(error){
      console.log(error.message);
    }
  });
}

// function to add mark
function pushtowin(){
  var messages=Parseobjecbuilder("Messages");
  var sender = Parse.User.current();
  var title=$("#title").val();
  var description=$("#description").val();
  var type = $('#type :selected').data('type');
  var recipients = [];
  var helper = $('#group :selected').data('group');
  recipients.push(helper);

  messages.set("title", title);
  messages.set("description", description);
  messages.set("type", type);
  messages.set("sender", sender);
  messages.set("recipients", recipients);
  messages.save(null,{
    success:function(){
      alert("Added!");
      return false;
    },
    error:function(rss,error){
      alert("error!");
      return false;
    }
  }).then(function(){

    Parse.Cloud.run('sendPushToUsers', {messages: title}, {
      success: function() {
         alert("Added!");
  },
  error: function(error) {
    alert("buuu!");
  }
});
    /*
    var query = new Parse.Query(Parse.Installation);
    query.equalTo('channels', 'all');
    Parse.Push.send({
          where: query, // Set our Installation query
          data: {
            alert: title,
            title: description
          }
        }, {
          success: function() {
           alert("Added!");
         },
         error: function(error) {
           alert("buuu!");
         }
       });*/
}, function(error){

});

}

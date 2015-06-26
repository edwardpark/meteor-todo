if (Meteor.isClient) {
  // This code only runs on the client

  Tasks = new Mongo.Collection("tasks");

  Template.body.helpers({
    tasks: function(){
      return Tasks.find({});

    }
  });

  Template.body.events({
    "submit .new-task": function(event){
      var text = event.target.text.value;

      Tasks.insert({
        text: text,
        createdAt: new Date()

      });
      event.target.text.value = "";
      //return false; //prevent defautl form submit.    
    } //end of new task form submit .new-task

  });




} //end of .isClient

ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
        listContacts: function(){
            var contacs = ContactManager.request("contact:entities");
            var contactsListView = new List.Contacts({
                collection: contacs
            });
            contactsListView.on("itemview:contact:show", function(childView, model){
               ContactManager.trigger("contact:show", model.get("id"));

            });
            contactsListView.on("itemview:contact:delete", function(childView, model){
                model.destroy();
            });
            ContactManager.mainRegion.show(contactsListView);
        }
    }
})
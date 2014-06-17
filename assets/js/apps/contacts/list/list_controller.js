ContactManager.module("ContactsApp.List", function(List, ContactManager, Backbone, Marionette, $, _) {
    List.Controller = {
        listContacts: function(){
            var contacs = ContactManager.request("contact:entities");
            var contactsListView = new List.Contacts({
                collection: contacs
            });
            ContactManager.mainRegion.show(contactsListView);
        }
    }
})
ContactManager.module("ContactsApp.Show", function(Show, ContactManager, Backbone, Marionette, $, _) {
    Show.Controller = {
        showContact: function(id) {
            var contact = ContactManager.request("contact:entities", id);
            var contactView;

            if (contact !== undefined) {
                var contactView = new Show.Contact({
                    model: contact
                });
            }
            else {
                contactView = new Show.MissingContact();
            }

            ContactManager.mainRegion.show(contactView);
        }
    }
})
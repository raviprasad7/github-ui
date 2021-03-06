import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default Route.extend({
    favorites: service(),

    model() {
        return new Ember.RSVP.Promise((resolve, reject)=>{
            Ember.run.later(()=>{
                resolve([
                    { id: "emberjs", name: "EmberJs"},
                    { id: "microsoft", name: "Microsoft"},
                    { id: "yahoo", name: "Yahoo"},
                    { id: "netflix", name: "Netflix"},
                    { id: "facebook", name: "Facebook"}
                ]);
            });
        });
    },

    actions: {
        addToFavorites: function(org) {
            this.get('favorites.items').addObject(org);
            console.log(this.get('favorites.items').join(', '));
        },
        linksToggled() {
            console.log('Toggled');
        }
    }
});
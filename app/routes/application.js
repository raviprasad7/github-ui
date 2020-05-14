import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(transition) {
        this._super(...arguments);
        if(transition.intent.url === "/") {
            this.replaceWith("/orgs");
        }
    }
});

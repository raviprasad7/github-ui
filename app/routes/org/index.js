import Route from '@ember/routing/route';

export default Route.extend({
    beforeModel(transition) {
        this._super(...arguments);
        this.replaceWith("org.repos");
    }
})
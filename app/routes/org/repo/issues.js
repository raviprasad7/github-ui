import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model(params) {
        var orgId = this.modelFor('org').orgid;
        var repoId = this.modelFor('org.repo').id;
        return $.get(`https://api.github.com/repos/${orgId}/${repoId}/issues?access_token=d4b8421246b1949fe40482ba127b0274a684319d`);
    }
});

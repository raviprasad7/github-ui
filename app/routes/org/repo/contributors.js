import Route from '@ember/routing/route';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Route.extend({
    utils: service(),
    model(params) {
        var orgId = this.modelFor('org').orgid;
        var repoId = this.modelFor('org.repo').id;
        var accessToken = this.get('utils.accessToken');
        return $.get(`https://api.github.com/repos/${orgId}/${repoId}/contributors?access_token=${accessToken}`);
    }
});

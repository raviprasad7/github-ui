import Route from '@ember/routing/route';
import $ from 'jquery';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
    utils: service(),
    model() {
        var orgId = get(this.modelFor('org'), 'orgid');
        var accessToken = this.get('utils.accessToken');
        return $.get(`https://api.github.com/orgs/${orgId}/repos?access_token=${accessToken}`).then(response=>{
            return response.map(repo=>{
                repo.uniqueId = repo.id;
                repo.id = repo.name;
                return repo;
            });
        });
    }
    // setupController(controller, model) {
    //     this._super(...arguments);
    //     var org = this.modelFor('org');
    //     console.log('org: ', org);
    //     controller.set('')
    // }
});

import Route from '@ember/routing/route';
import $ from 'jquery';
import { get } from '@ember/object';

export default Route.extend({
    model() {
        var orgId = get(this.modelFor('org'), 'orgid');
        return $.get('https://api.github.com/orgs/'+orgId+'/repos?access_token=d4b8421246b1949fe40482ba127b0274a684319d').then(response=>{
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

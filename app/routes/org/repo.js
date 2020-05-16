import Route from '@ember/routing/route';
import $ from 'jquery';
import { get } from '@ember/object';
import { inject as service } from '@ember/service';

export default Route.extend({
    utils: service(),
    model(params) {
        var orgId = get(this.modelFor('org'), 'orgid');
        var accessToken = this.get('utils.accessToken');
        return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}?access_token=${accessToken}`).then(response=>{
            response.uniqueId = response.id;
            response.id = response.name;
            return response;
        });
    }
});

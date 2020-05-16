import Route from '@ember/routing/route';
import $ from 'jquery';
import { inject as service } from '@ember/service';

export default Route.extend({
    utils: service(),
    model(params) {
        var orgId = params.orgid;
        var accessToken = this.get('utils.accessToken');
        return $.get(`https://api.github.com/orgs/${orgId}?access_token=${accessToken}`).then(response=>{
            response.orgid = orgId;
            return response;
        });
    },
    actions: {
        error(jXhr) {
            if(jXhr.status === 404) {
                this.intermediateTransitionTo('org.notfound');
            } else {
                return true;
            }
        }
    }
});
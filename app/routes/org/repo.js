import Route from '@ember/routing/route';
import $ from 'jquery';
import { get } from '@ember/object';
export default Route.extend({
    model(params) {
        var orgId = get(this.modelFor('org'), 'orgid');
        return $.get(`https://api.github.com/repos/${orgId}/${params.repoid}?access_token=d4b8421246b1949fe40482ba127b0274a684319d`).then(response=>{
            response.uniqueId = response.id;
            response.id = response.name;
            return response;
        });
    }
});

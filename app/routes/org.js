import Route from '@ember/routing/route';
import $ from 'jquery';

export default Route.extend({
    model(params) {
        var orgId = params.orgid;
        return $.get('https://api.github.com/orgs/'+orgId+'?access_token=d4b8421246b1949fe40482ba127b0274a684319d').then(response=>{
            response.orgid = orgId;
            return response;
        });
    }
});
import Service from '@ember/service';

export default Service.extend({
    init() {
        this._super(...arguments);
        this.set('accessToken', '161d19183433b171525d5ccb021cd43a1d50a2a1');
    }
});

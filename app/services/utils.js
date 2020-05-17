import Service from '@ember/service';

export default Service.extend({
    init() {
        this._super(...arguments);
        this.set('accessToken', '576c6e9cd6aa3ebe9ac20f2deaad9a19d06d0957');
    }
});

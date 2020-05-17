import Component from '@ember/component';

export default Component.extend({
    tagName: 'li',
    actions: {
        favoritedClicked() {
            this.sendAction('on-fav-clicked', this.get('org.id'));
        }
    }
});

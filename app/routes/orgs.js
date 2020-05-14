import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [
            { id: "emberjs", name: "EmberJs"},
            { id: "microsoft", name: "Microsoft"},
            { id: "yahoo", name: "Yahoo"},
            { id: "netflix", name: "Netflix"},
            { id: "facebook", name: "Facebook"}
        ]
    }
});
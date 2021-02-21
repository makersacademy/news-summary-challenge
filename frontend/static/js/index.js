import Headlines from './views/Headlines.js';

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};


const router = async () => {
    const routes = [
        { path: '/', view: Headlines },
        { path: '/error', view: () => {console.log('Invaid path!')}},
        // { path: '/posts', view: () => {console.log('Viewing Posts')}},
        // { path: '/settings', view: () => {console.log('Viewing Settings')}},
    ];

    // Test each route for a potential match
    const possibleMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = possibleMatches.find(possibleMatch => possibleMatch.isMatch);

    if (!match) {
        // match = { route: routes[0], isMatch: true };
        match = { route: routes[1], isMatch: true };
    };

    const view = new match.route.view();

    // document.querySelector('#app').innerHTML = await view.getHtml().then(data => {console.log(data);return data.response.content.fields.body});
    document.querySelector('#app').innerHTML = await view.getHtml().then(data => {console.log(data);return data});
    // document.querySelector('#app').innerHTML = view.getHtml();

    // console.log(match.route.view());
};

window.addEventListener('popstate', router);

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', e => {
        if (e.target.matches('[data-link]')) {
            e.preventDefault();
            navigateTo(e.target.href);
        };
    });
    router();
});
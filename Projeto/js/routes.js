const routes = [
    { path: '/', component: Vue.component('home-page') },
    { path: '/:number', component: Vue.component('about-page') }
]

const myRouter = new VueRouter({ routes })

myRouter.beforeEach((to, from, next) => {
    if (to.path !== '/') {
        var pkmNumber = to.path.slice(1);

        if (!pkmNumber.match(/\D/g)) {
            next();
        } else {
            next('/');
        }
    } else {
        next();
    }
})

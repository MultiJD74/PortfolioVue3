//VUE APP
const vm = Vue.createApp({
    data() {
        return {
            scrollNotch: 0,
            page: 0,
            timer: false,
            delta: 0,
        };
    },
    methods: {
        wheelItBetter() {
            //Calcule les crans de la molette de la souris.
            this.delta = event.deltaY;

            //Si le nombre de cran pour monter est supérieur à 0, la variable «page» augmente de 1.
            //Et la variable des crans de souris est réinitialisée.
            if (this.delta > 0 && this.timer == false) {
                this.page += 1;
                this.timer = true;
                this.delta = 0;

                //Timer qui empêche le changement de page durant la transition
                setTimeout(() => (this.timer = false), 1000);
            }

            //Sinon si le nombre de cran pour monter est inférieur à 0, la variable «page» diminue de 1.
            //Et la variable des crans de souris est réinitialisée.
            else if (this.delta < 0 && this.timer == false) {
                this.page -= 1;
                this.timer = true;
                this.delta = 0;

                //Timer qui empêche le changement de page durant la transition
                setTimeout(() => (this.timer = false), 1001);
            }

            //Ramène la page d'accueil ou contact lorsque celui ci dépasse 6 ou dans le sen opposé 0.
            if (this.page > 6) {
                this.page = 0;
            } else if (this.page < 0) {
                this.page = 6;
            }

            //Envoie le bon composant via le router selon le numéro de la variable « page »
            switch (this.page) {
                case 0:
                    router.push({ path: "/" });
                    break;
                case 1:
                    router.push("skills");
                    break;
                case 2:
                    router.push("workOne");
                    break;
                case 3:
                    router.push("workTwo");
                    break;
                case 4:
                    router.push("workThree");
                    break;
                case 5:
                    router.push("workFour");
                    break;
                case 6:
                    router.push("contact");
                    break;
            }
        },
    },
});

//COMPONENT
vm.component("home", {
    data() {
        return {
            showInfo: false,
            timer: false,
            text:
                "Cherchant toujours à m'améliorer et à apprendre, la curiosité m'amène à me dépasser et à trouver des solutions à toutes sortes de problèmes. C'est certainement ma meilleure qualitée de dévellopeur front-end.",
            textInfo:
                "Sur chacune de ses pages, il y aura cette bulle pour en apprendre plus sur moi.",
        };
    },
    template: "#home",
    name: "Home",
});

vm.component("skills", {
    data() {
        return {
            showInfo: false,
            text:
                "Illustrator, Wordpress, Vue.JS, PHP... Mes compétences sont multiples et visent à devenir de plus en plus polyvalents. Toujours prêt à apprendre et à me perfectionné pour suivre le vitesse effréné de l'évolution du web.",
            textInfo:
                "l'informatique est une de mes principale passion, j'adore suivre l'actualité des nouvelles technologie.",
        };
    },
    template: "#skills",
    name: "Skills",
});

vm.component("workOne", {
    data() {
        return {
            showInfo: false,
            infoText: false,
            title: "Illstration",
            text:
                "Illustration vectorielle réalisé en juillet 2019 avec Illustrator pour le plaisir d’essayer les fonctionnalité d’illustrator.",
            textInfo: "La motocross est mon défouloir de prédilection.",
        };
    },
    template: "#workOne",
    name: "Travaux1",
});

vm.component("workTwo", {
    data() {
        return {
            showInfo: false,
            infoText: false,
            title: "Affiche Prévention suicide",
            text:
                "Affiche qui devait être réalisé dans le cours de Photoshop pour l’organisme prévention suicide et qui a été sélectionné par cette dernière pour être publier dans leur campagne publicitaire.",
            textInfo:
                "Existe t'il quelque chose de plus impressionnant que d'être à bord d'une stucture de métal qui flotte dans le ciel.",
        };
    },
    template: "#workTwo",
    name: "Travaux2",
});

vm.component("workThree", {
    data() {
        return {
            showInfo: false,
            infoText: false,
            title: "Consilium Terra",
            text:
                "Interface réalisée dans le cadre du cours d’ergonomie multimédia.",
            textInfo:
                "Depuis mon plus jeunes âge, l'automobile m'a toujours fasciné.",
        };
    },
    template: "#workThree",
    name: "Travaux3",
});

vm.component("workFour", {
    data() {
        return {
            showInfo: false,
            infoText: false,
            title: "Cult.com",
            text:
                "Interface de site réalisé en mars 2020 sur Adobe XD pour le cours de création sur support.",
            textInfo:
                "Rien de mieux le soir que d'être avec ses amis et de jouer.",
        };
    },
    template: "#workFour",
    name: "Travaux4",
});

vm.component("contact", {
    data() {
        return {
            showInfo: false,
        };
    },
    template: "#contact",
    name: "Contact",
});

const Home = vm.component("home");
const Skills = vm.component("skills");
const WorkOne = vm.component("workOne");
const WorkTwo = vm.component("workTwo");
const WorkThree = vm.component("workThree");
const WorkFour = vm.component("workFour");
const Contact = vm.component("contact");

//ROUTES
const routes = [
    {
        path: "/",
        name: "Accueil",
        component: Home,
    },

    {
        path: "/skills",
        name: "Compétence",
        component: Skills,
    },

    {
        path: "/workone",
        name: "Travaux 1",
        component: WorkOne,
    },

    {
        path: "/worktwo",
        name: "Travaux 2",
        component: WorkTwo,
    },

    {
        path: "/workthree",
        name: "Travaux 3",
        component: WorkThree,
    },

    {
        path: "/workfour",
        name: "Travaux 4",
        component: WorkFour,
    },

    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
];

//ROUTER
const router = VueRouter.createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
});

var trans = document.querySelector("transition");

switch (this.page) {
    case 0:
        router.push({ path: "/" });
        //this.timer = true
        break;
    case 1:
        router.push("skills");
        break;
    case 2:
        router.push("workOne");
        break;
    case 3:
        router.push("workTwo");
        break;
    case 4:
        router.push("workThree");
        break;
    case 5:
        router.push("workFour");
        break;
    case 6:
        router.push("contact");
        break;
}

const fadeOutRight = "animate__animated animate__fadeOutRight";
const fadeInRight = "animate__animated animate__fadeInRight";
const fadeOutUp = "animate__animated animate__fadeOutUp";
const fadeInUp = "animate__animated animate__fadeInUp";
const fadeInDown = "animate__animated animate__fadeInDown";
const fadeOutDown = "animate__animated animate__fadeOutDown";
const fadeInLeft = "animate__animated animate__fadeInLeft";
const fadeOutLeft = "animate__animated animate__fadeOutLeft";
const backInDown = "animate__animated animate__backInDown animate__faster";

router.afterEach((to, from) => {
    //home && skills - transition
    if (to.path === "/" && from.path === "/skills") {
        to.meta.transitionEnter = fadeInLeft;
        to.meta.transitionLeave = fadeOutRight;
    } else if (to.path === "/skills" && from.path === "/") {
        to.meta.transitionEnter = fadeInRight;
        to.meta.transitionLeave = fadeOutLeft;
    }

    //skills && WorkOne - transition
    else if (to.path === "/skills" && from.path === "/workOne") {
        to.meta.transitionEnter = fadeInLeft;
        to.meta.transitionLeave = fadeOutRight;
    } else if (to.path === "/workOne" && from.path === "/skills") {
        to.meta.transitionLeave = fadeOutLeft;
        to.meta.transitionEnter = fadeInRight;
    }

    //WorkOne && WorkTwo - transition
    else if (to.path === "/workOne" && from.path === "/workTwo") {
        to.meta.transitionLeave = fadeOutDown;
        to.meta.transitionEnter = fadeInDown;
    } else if (to.path === "/workTwo" && from.path === "/workOne") {
        to.meta.transitionLeave = fadeOutUp;
        to.meta.transitionEnter = fadeInUp;
    }

    //workTwo && WorkThree - transition
    else if (to.path === "/workTwo" && from.path === "/workThree") {
        to.meta.transitionLeave = fadeOutDown;
        to.meta.transitionEnter = fadeInDown;
    } else if (to.path === "/workThree" && from.path === "/workTwo") {
        to.meta.transitionLeave = fadeOutUp;
        to.meta.transitionEnter = fadeInUp;
    }

    //workThree && workFour - transition
    else if (to.path === "/workThree" && from.path === "/workFour") {
        to.meta.transitionLeave = fadeOutDown;
        to.meta.transitionEnter = fadeInDown;
    } else if (to.path === "/workFour" && from.path === "/workThree") {
        to.meta.transitionLeave = fadeOutUp;
        to.meta.transitionEnter = fadeInUp;
    }

    //workFour && contact - transition
    else if (to.path === "/workFour" && from.path === "/contact") {
        to.meta.transitionLeave = fadeOutRight;
        to.meta.transitionEnter = fadeInLeft;
    } else if (to.path === "/contact" && from.path === "/workFour") {
        to.meta.transitionLeave = fadeOutLeft;
        to.meta.transitionEnter = fadeInRight;
    }

    //contact && home - transition
    else if (to.path === "/contact" && from.path === "/") {
        to.meta.transitionLeave = fadeOutRight;
        to.meta.transitionEnter = fadeInLeft;
    } else if (to.path === "/" && from.path === "/contact") {
        to.meta.transitionLeave = fadeOutLeft;
        to.meta.transitionEnter = fadeInRight;
    }

    //menu OR error - transition
    else {
        to.meta.transitionEnter = backInDown;
    }

    /*switch( to.path, from.path ) {
			case ('/' && '/skills') :
				console.log("je suis ici '/', '/skills' :");
				to.meta.transitionEnter = 'animated fadeInLeft';
				to.meta.transitionLeave = 'animated fadeOutRight';
			break;
			case ('/skills' && '/') :
				console.log("je suis ici '/skills', '/' :");
				to.meta.transitionEnter = 'animated fadeInRight';
				to.meta.transitionLeave = 'animated fadeOutLeft';
			break;
			case  ('/skills' && '/workOne') :
				console.log("je suis ici '/skills', '/workOne' :");
				to.meta.transitionEnter = 'animated fadeInLeft';
				to.meta.transitionLeave = 'animated fadeOutRight';
			break;
			case ('/workOne' && '/skills') :
				console.log("je suis ici '/workOne', '/skills' :");
				to.meta.transitionEnter = 'animated fadeInUp';
				to.meta.transitionLeave = 'animated fadeOutLeft';
			break;
			default:
				to.meta.transitionEnter = 'animated fadeInUp';
				to.meta.transitionLeave = 'animated fadeOutDown';
		}*/
});

vm.use(router);

vm.mount("#app");

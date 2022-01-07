import UrlPagination from "./components/UrlPagination.vue";

function install(Vue) {
	if (install.installed) return;
	install.installed = true;
	Vue.component("vue-elegant-button", UrlPagination);
}

const plugin = {
	install,
};

let GlobalVue = null;
if (typeof window !== "undefined") {
	GlobalVue = window.Vue;
} else if (typeof global !== "undefined") {
	GlobalVue = global.vue;
}
if (GlobalVue) {
	GlobalVue.use(plugin);
}

UrlPagination.install = install;

export default UrlPagination;
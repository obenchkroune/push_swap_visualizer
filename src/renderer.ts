import "primevue/resources/themes/aura-dark-green/theme.css";
import "primeicons/primeicons.css";
import { createApp } from "vue";
import App from "./components/App.vue";
import PrimeVue from "primevue/config";
import Tooltip from "primevue/tooltip";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";

const app = createApp(App);
app.use(PrimeVue);
app.use(ConfirmationService);
app.use(ToastService);
app.directive("tooltip", Tooltip);
app.mount("#app");

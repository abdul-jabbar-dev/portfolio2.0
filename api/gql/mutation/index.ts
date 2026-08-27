import LOGIN_MUTATION from "./login"; 
import DashboardMutations from "./dashboard";

const Mutation = {
 LOGIN_MUTATION,
 ...DashboardMutations
};
export default Mutation;

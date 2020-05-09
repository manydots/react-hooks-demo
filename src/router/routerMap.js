import Index from '@/page/index/';
import Login from '@/page/login/';

export default [{
	path: "/login",
	name: "Login",
	component: Login
}, {
	path: "/",
	name: "Index",
	component: Index,
	auth: true
}];
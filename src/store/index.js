import Vue from 'vue'
import Vuex from 'vuex'
import app from './module/app'
import user from './module/user'
import report from './module/report'
import verify from './module/verify'
import paperIn from './module/paperIn'
import paperOB from './module/paperOB'
import boxIn from './module/boxIn'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {

	},
	mutations: {

	},
	actions: {

	},
	modules: {
		app,
		user,
		report,
		verify,
		paperIn,
		paperOB,
		boxIn
	}
})

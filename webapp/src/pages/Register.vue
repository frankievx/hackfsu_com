<template>
	<div>
		<p>Register</p>
		<v-form v-model="valid">
			<text-field v-bind:callback="updateFn"></text-field>
		</v-form>
	</div>
</template>

<script>
	import TextField from '../components/TextField.vue'
	import { updateName, updateEmail, updateUniversity, updateMajor } from '../store/actions'
  export default {
		data: {
			registerItems: ['name', 'email', 'university', 'major'],
		},
    components: {
      TextField
		},
		computed: () => {
			switch(this.$state.currentRegisterItem){
					case 'name':
						return {
							updateFn: this.$
						};
				}
		},
		methods: {
			registerItem: () => {
				switch(this.$state.currentRegisterItem){
					case 'name':
						return {
							
						}
				}
			}
		}
  }
</script>
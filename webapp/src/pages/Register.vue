<template>
	<div>
		<p>Register</p>
		<v-form v-model="valid">
			<v-text-field v-show="showTextField" ></v-text-field>
			<v-btn v-if="lastField" @click="submitForm">Submit</v-btn>
			<v-btn v-else @click="updateField">Next</v-btn>
		</v-form>
	</div>
</template>

<script>
	import TextField from '../components/TextField.vue'
  export default {
		components: {
			TextField
		},
		data: {
			registerFields: [
				{ fieldName: 'name', position: 1, fieldType: 'text' },
				{ fieldName: 'email', position: 2, fieldType: 'text' },
				{ fieldName: 'university', position: 3, fieldType: 'select'},
				{ fieldName: 'major', position: 4, fieldType: 'text'}
			],
		},
		computed: {
			lastField: () => {
				return this.registerFields.filter((item) => item.fieldName === this.$state.currentRegisterField)[0].position === this.registerFields.length
			},
			updateField: (value) => {
				return this.$store.commit('UPDATE_REGISTER_FORM', { fieldName: this.$state.currentRegisterField,  value: value})
			},
			showTextField: () => {
				return this.registerFields.filter((item) => item.fieldType === 'text').includes(this.$state.currentRegisterField)
			}
		},
		methods: {
			submitForm: () => {
				this.$store.commit('UPDATE_REGISTER_FORM', { fieldName: this.$state.currentRegisterField,  value: value})
				return this.$store.dispatch('SUBMIT_REGISTER_FORM', { fieldName: this.$state.currentRegisterField,  value: value})
			}
		}
  }
</script>
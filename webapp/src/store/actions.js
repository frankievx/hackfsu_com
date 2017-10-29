// const updateName = ({dispatch}, e) => {
//   dispatch('UPDATE_NAME', e.target.value)
// }

// const updateEmail = ({dispatch}, e) => {
//   dispatch('UPDATE_EMAIL', e.target.value)
// }

// const updateUniversity = ({dispatch}, e) => {
//   dispatch('UPDATE_UNIVERSITY', e.target.value)
// }

// const updateMajor = ({dispatch}, e) => {
//   dispatch('UPDATE_UNIVERSITY', e.target.value)
// }

const UPDATE_REGISTER_FORM = ({commit}, payload) => {
  commit('UPDATE_REGISTER_FORM', payload)
}

const submitRegisterForm = ({commit}, payload) => {
  console.log('submitted');
  // commit('SUBMIT_REGISTER_FORM', payload);
}

export default {
  // updateName,
  // updateEmail,
  // updateUniversity,
  // updateMajor,
  UPDATE_REGISTER_FORM
}
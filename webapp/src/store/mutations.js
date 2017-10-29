
const UPDATE_REGISTER_FORM = (state, payload) => {
  state.registerForm[payload.fieldName] = payload.value
  state.currentRegisterField = payload.fieldName
  return state
}

export default {
  UPDATE_REGISTER_FORM
}
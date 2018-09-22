const state = {
  ticketShow:false,
  favourable:false,
  popup:false,
  active:0
};

const mutations = {
  changeStatus(state, status) {
    Object.assign(state, status);
  }
}

const status = {
  state,
  mutations,
}

export default status

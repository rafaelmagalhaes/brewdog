import Vuex from 'vuex'
import { shallowMount, createLocalVue } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('store action', () => {
  let actions
  let store

  beforeEach(() => {
    actions = {
      getBeers: jest.fn()
    }
    store = new Vuex.Store({
      actions
    })
  })
  it('should call getBeers actions', () => {
    shallowMount(Home, { store, localVue })
    expect(actions.getBeers).toHaveBeenCalled()
  })
})

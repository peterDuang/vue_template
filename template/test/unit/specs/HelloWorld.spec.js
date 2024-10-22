import Vue from 'vue'
import HelloWorld from '@/views/helloworld'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
    {{#if_eq runner "karma" }}.to.equal('Welcome to Vue template'){{/if_eq}}{{#if_eq runner "jest"}}.toEqual('Welcome to Vue template'){{/if_eq}}
  })
})

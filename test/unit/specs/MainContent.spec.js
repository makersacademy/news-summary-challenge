import Vue from 'vue';
import MainContent from '@/components/MainContent';

describe('MainContent.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(MainContent);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('.article h1').textContent);
  });
});

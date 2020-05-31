import Vue from 'vue';
import App from '@/App';

describe("App", () => {
  it ('should render correct contents', () => {
    const Constructor = Vue.extend(App);
  });
});

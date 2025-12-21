import { BasePage } from '@/pages/BasePage';

export class StartPage extends BasePage {
  get heading() {
    return this.el('h1');
  }
}

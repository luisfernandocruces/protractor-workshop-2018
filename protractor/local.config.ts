import { Config, browser } from 'protractor';
<<<<<<< HEAD
import { reporter } from './helpers/reporter';
=======
>>>>>>> 45fb3e09ad1384bd72b5ba4e48d548e15e24ca39

export const config: Config = {
  framework: 'jasmine',
  specs: [ '../test/google.spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub',
  onPrepare: () => {
    browser.ignoreSynchronization = true;
<<<<<<< HEAD
    reporter();
=======
>>>>>>> 45fb3e09ad1384bd72b5ba4e48d548e15e24ca39
  }
};

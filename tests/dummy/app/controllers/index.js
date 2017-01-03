import Ember from 'ember';
import UserValidations from 'dummy/validations/user';

export default Ember.Controller.extend({
  UserValidations,

  countries: ['United States', 'United Kingdom', 'Switzerland', 'Other'],

  actions: {
    submit(model) {
      model.save();
      console.log('submit', model);
    }
  }
});

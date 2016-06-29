import { test } from 'qunit';
import moduleForAcceptance from 'ember-quickstart/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | scientists');

test('visiting /scientists', function(assert) {
  visit('/scientists');

  andThen(function() {
    assert.equal(currentURL(), '/scientists');
  });
});

test('should see scientists', function(assert) {
  visit('/scientists');

  andThen(function() {
    assert.equal(find('.person').length, 3, "should have 3 scientists");
  });
});

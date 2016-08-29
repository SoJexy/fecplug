'use strict';

const assert = require('assert');
const render = require('../../../../src/services/post/hooks/render.js');

describe('post render hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    render()(mockHook);

    assert.ok(mockHook.render);
  });
});

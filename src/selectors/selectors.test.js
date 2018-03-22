import expect from 'expect';
import {authorsForDropdown} from './selectors';

describe ('Authors Selectors', () => {

  describe ('authorsForDropdown', () => {

    it ('should return author data formatted for use as select options',
    () => {

      const testAuthors = [
        {id: 'cory-house', firstName: 'Cory', lastName: 'House'},
        {id: 'scott-allen', firstName: 'Scott', lastName: 'Allen'}
      ];
      
      const expected = [
        {value: 'cory-house', text: 'Cory House'},
        {value: 'scott-allen', text: 'Scott Allen'}
      ];

      expect (authorsForDropdown (testAuthors)).toEqual (expected);
    });

  });
});
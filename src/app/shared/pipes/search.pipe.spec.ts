import { SearchPipe } from './search.pipe';
import { TestBed } from '@angular/core/testing';

describe('SearchPipe', () => {
  let pipe: SearchPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchPipe],
      providers: [SearchPipe]
    });

    pipe = TestBed.inject(SearchPipe);
  });

  it('should transform input correctly', () => {
    const items = [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ];
    const searchText = 'item';
    const expectedOutput = [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ];
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle empty input array', () => {
    const items: any[] = [];
    const searchText = 'item';
    const expectedOutput: any[] = [];
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle empty search text', () => {
    const items = [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ];
    const searchText = '';
    const expectedOutput = items;
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle non-matching search text', () => {
    const items = [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ];
    const searchText = 'non-matching';
    const expectedOutput: any[] = [];
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });

  it('should handle null input array', () => {
    const items = null;
    const searchText = 'item';
    const expectedOutput: any[] = [];
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });
  
  it('should handle null search text', () => {
    const items = [
      { name: 'item 1' },
      { name: 'item 2' },
      { name: 'item 3' }
    ];
    const searchText = null;
    const expectedOutput = items;
    const actualOutput = pipe.transform(items, searchText);
    expect(actualOutput).toEqual(expectedOutput);
  });
});

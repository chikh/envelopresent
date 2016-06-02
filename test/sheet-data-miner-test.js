import test from 'ava';

import sheetDataMiner from '../services/sheet-data-miner';
import googleSheetsProviderStub from './stubs/sheets-provider-stub';

test('should calculate total sum correctly',
  t => sheetDataMiner(googleSheetsProviderStub)
    .calculateSum().then(s => t.is(s, 250))
);

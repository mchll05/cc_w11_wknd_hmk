const assert = require('assert');
const Record = require('../record.js');
const Collector = require('../record_collector.js');

describe('Collector', function() {

  let record1
  let record2
  let record3
  let record4
  let record5
  let records;
  let collector;

  beforeEach(function() {
      record1 = new Record('Spice World', 'The Spice Girls', 'pop', 20);
      record2 = new Record('Nevermind', 'Nirvana', 'rock', 15);
      record3 = new Record('CodeMaster', 'Jaime Lopez', 'country', 10);
      record4 = new Record('Blue Haired Girl', 'Marta Beveridge', 'rap', 12);
      record5 = new Record('Heartbreaker', 'Ewa Lipinska', 'opera', 8);
      records = [record1, record2, record3, record4, record5];
      collector = new Collector(records, 0);
    });

  it('should have a collection of records', function() {
    const actual = collector.records;
    assert.deepStrictEqual(actual, records);
  });

  it('should have no funds', function() {
    const actual = collector.funds;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add to funds', function() {
    const actual = collector.addToFunds(50);
    assert.strictEqual(actual, 50);
  });

  it('should be able to remove fund', function() {
    const actual = collector.removeFromFunds(-20);
    assert.strictEqual(actual, 20);
  });

  it('should be able to add record to collection', function() {
    collector.addRecordToCollection(record1);
    const actual = collector.records.length;
    assert.deepStrictEqual(actual, 6);
  });

  it('should be able to remove a record from collection', function(){
    collector.removeRecordFromCollection(record1);
    const actual = collector.records.length;
    assert.deepStrictEqual(actual, 4);
  });

  it('should be able to find record by title', function() {
    const actual = [];
    assert.deepStrictEqual(actual, collector.getRecordByTitle('Spice World'));
  });

  it('should be able to purchase record', function() {
    collector.purchaseARecord(record1);
    const actual = collector.funds;
    const actual2 = collector.records.length;
    assert.strictEqual(actual, 0);
    assert.deepStrictEqual(actual2, 5);
  });

});

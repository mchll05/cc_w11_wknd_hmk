const Collector = function(records, funds) {
this.records = records;
this.funds = 0;
};

Collector.prototype.addToFunds = function(addAmount){
  const newFundTotal = this.funds += addAmount;
  return newFundTotal;
};

Collector.prototype.removeFromFunds = function(removeAmount){
  const fundsLeft = this.funds -= removeAmount;
  return fundsLeft;
};

Collector.prototype.addRecordToCollection = function(record){
  this.records.push(record);
};

Collector.prototype.removeRecordFromCollection = function(record){
  this.records.shift(record);
};

Collector.prototype.getRecordByTitle = function (title){
  const foundRecord = this.records.filter((singleRecord) => {
    return singleRecord.title === title;
  });
  return foundRecord;
};

Collector.prototype.purchaseARecord = function (){
  this.funds.removeFromFunds;
  this.records.addRecordToCollection;
};


module.exports = Collector;

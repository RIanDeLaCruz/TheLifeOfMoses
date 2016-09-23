var leviteMother = new Person('Levite', 'mother');
var pharaoh = new Person('Egyptian', 'pharaoh');

while(pharaoh.killMaleBabies()) {
  var MOSES = leviteMother.giveBirth('Moses');
  var floatingBasket = new Basket();
  if(MOSES.isHardToKeep()) {
    floatingBasket.put(MOSES)
                  .putInto('Nile River');
  }
  if(pharaoh.daughter.found(floatingBasket)) {
    pharaoh.daughter.setAsChild(floatingBasket.content);
    leviteMother.daughter.presentNurse(leviteMother);
    break;
  }

  MOSES.growUp()
       .strikeEgyptian()
       .flee();

  MOSES.saveWomen()
       .getWife();

  burningBush()

  MOSES.goToEgypt()
       .talkToPharaoh();

  pharaoh.hardLife();
}

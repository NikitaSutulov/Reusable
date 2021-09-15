'use strict';

const phonebook = {
  Nikita: '+380972974067',
  Creditor: '88005553535'
};

const findPhoneByName = (name) => phonebook[name];

module.exports = { phonebook, findPhoneByName };

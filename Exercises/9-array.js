'use strict';

const phonebook = [
  { name: 'Nikita', phone: '+380972974067' },
  { name: 'Creditor', phone: '88005553535' }
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

module.exports = { phonebook, findPhoneByName };

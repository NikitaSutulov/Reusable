'use strict';

const fn = () => {
    const obj1 = {name: 'Nikita'};
    let obj2 = {name: 'Nikita'};
    obj1.name = 'Vasya';
    obj2.name = 'Viktor';
    
    const obj3 = {name: 'Alexander'};
    //obj1 = obj3; - ERROR: Assignment to constant variable
    obj2 = obj3;
};

module.exports = { fn };

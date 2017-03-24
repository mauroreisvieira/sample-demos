'use strict';

class ES6DevTools {

    constructor() {
        this.getData();
        this.map();
    }

    getData () {
        const people = [
        { passed: 2000, first : 'Mauro', last : 'Vieira', year: 1990  },
        { passed: 2008, first : 'Didie', last : 'Margarido', year: 1970  },
        { passed: 2008, first : 'André', last : 'Ramalho', year: 1970  },
        { passed: 2010, first : 'Rubem', last : 'Motas', year: 1992  },
        ];        
        
        // Passar por variaveis para o console log.
        var flag = '🇵🇹';

        console.log('I love my %s and my %s', '🇵🇹', '👩🏻', 10);
        console.log(`I love my ${flag}`);

        console.log('%c Nunca mais é sexta feira! ', 'font-size: 24px; color: blue;');
        console.warn(' Warning! This alert box indicates a warning that might need attention');
        console.error(' Danger! This alert box indicates a dangerous or potentially negative action. ');
        console.info('Info! This alert box indicates a neutral informative change or action.');

        console.assert(1 === 2, 'It`s wrong, believe me.');
        console.assert(1 === 1, 'It`s true!');

        
        //console.clear();
        
        console.group('Team');
        people.forEach( person => {
            console.log(`Name: ${person.first} ${person.last}`);
        });
        console.groupEnd('Team');

        console.groupCollapsed('Team Collapsed');
        people.forEach( person => {
            console.log(`Name: ${person.first} ${person.last}`);
        });
        console.groupEnd('Team');

        console.count('Hi INTERACTIVE');
        console.count('Hi INTERACTIVE');
        console.count('Hi HI');
        console.count('Hi HI');
        console.count('Hi INTERACTIVE');
        console.count('Hi INTERACTIVE');
        console.count('Hi HII');
        console.count('Hi INTERACTIVE');
        console.table(people);


        const arr1 = [1,2,3];
        const arr2 = [4,5,6];
        const arr3 = [...arr1, ...arr2];

        console.log(arr3);

        //console.clear();
        console.time('Request');
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            console.timeEnd('End Request');
        });

    }

    map() {
        console.log('%c Map! ', 'font-size: 20px;');
        // instantiation
        const myMap = new Map([
            [ "A", 1 ],
            [ "B", 2 ]
        ]);

        console.log(myMap);

        // what's built into Map for you
        myMap.forEach( (val, key) => console.log(key, val) ); // "A 1", "B 2"

        // what Array can do for you
        Array.from( myMap ).map(([key, value]) => ({ key, value })); // [{key:"A", value: 1}, ... ]

        // less awesome iteration
        let entries = myMap.entries( );
        console.log(entries);
        for (let entry of entries) {
            console.log(entry);
        }
    }
}

new ES6DevTools();



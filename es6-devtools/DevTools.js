/*jshint esversion: 6 */

class DevTools {

    constructor() {
        this.getData();
        this.map();
        this.getMovieAsync();
    }

    getData () {
        const people = [
        { passed: 2000, first : 'Mauro', last : 'Vieira', year: 1990  },
        { passed: 2008, first : 'Didie', last : 'Margarido', year: 1970  },
        { passed: 2008, first : 'André', last : 'Ramalho', year: 1970  },
        { passed: 2010, first : 'Rubem', last : 'Motas', year: 1992  },
        ];

        var flag = '🇵🇹';

        console.log('I love my %s and my %s', '🇵🇹', '👩🏻', 10);
        console.log(`I love my ${flag}`);

        console.log('%c Nunca mais é sexta ira! ', 'font-size: 24px; color: blue;');
        console.warn(' Warning! This alert box indicates a warning that might need attention');
        console.error(' Danger! This alert box indicates a dangerous or potentially negative action. ');
        console.info('Info! This alert box indicates a neutral informative change or action.');

        console.assert(1 === 2, 'It`s wrong, believe me.');
        console.assert(1 === 1, 'It`s true!');

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

        [ 1, 3, 4, 2 ].find(x => x > 3);

        console.log("hello".startsWith("ello", 1));
        console.log("hello".endsWith("hell", 4) );
        console.log("hello".includes("ell"));
        console.log("hello".includes("ell", 1));
        console.log("hello".includes("ell", 2));
    }


    map() {

        console.log('%c Map! ', 'font-size: 20px;');
        const myMap = new Map([[ "A", 1 ],[ "B", 2 ]]);
        console.log(myMap);

        myMap.forEach( (val, key) => console.log(key, val) );

        Array.from( myMap ).map(([key, value]) => ({ key, value }));

        let entries = myMap.entries( );
        console.log(entries);
        for (let entry of entries) {
            console.log(entry);
        }

        console.time('Request');
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(data => data.json())
        .then(data => {
            console.log(data);
            console.timeEnd('End Request');
        });
    }
}

new DevTools();



export class Form {

    constructor() {
        console.error('IN');
        this.send();
    }

    /**
     * Send user invitation for slack, using email
     */
     send() {
        let $formEl = document.querySelector('.form');
        if ($formEl)
            $formEl.addEventListener('click', function($e) {
                $e.preventDefault();
                var fields = {},
                elements = this.querySelectorAll( "input, select, textarea" ),
                error = false;

                for ( var i = 0; i < elements.length; ++i ) {
                    var element = elements[i],
                    req = element.required,
                    value = element.value,
                    name = element.name;

                    if (req == true && value.length == 0) {
                        element.parentElement.classList.add('textfield--invalid');
                        error = true;
                    }
                    if ( name ) {
                        fields[ name ] = value;
                    }
                }
                return false;
            });
    }
}

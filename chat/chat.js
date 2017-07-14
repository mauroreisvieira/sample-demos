'use strict';

class Chat {

    constructor() {
        this.getMessages();
    }

    getMessages() {
        fetch('http://jsonplaceholder.typicode.com/comments/')
        .then(comments => comments.json())
        .then(comments => {
            this.listMessages(comments);
        });

    }

    listMessages(messages) {
        var $elHtml = document.querySelector('#js-each-user');
        messages.forEach( message => {
            if (message.postId == 1 || message.postId == 2) {
                let elClass = message.postId == 1 ? '' : 'list__item--reverse';
                $elHtml.innerHTML +=`<li class="list__item ${elClass}">
                    <div class="list__item__image">
                        <img src="https://pbs.twimg.com/profile_images/754886061872979968/BzaOWhs1.jpg">
                        <a href="mailto:${message.email}">${message.email}</a>
                    </div>
                    <div class="list__item__text">
                        <p>${message.body}</p>
                    </div>
                </li>`;
            }
        });
    }
}

new Chat();

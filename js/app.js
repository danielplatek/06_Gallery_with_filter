document.addEventListener('DOMContentLoaded', function (e) {
       var arrayImg = document.querySelectorAll('#gallery img');
       var tagInput = document.querySelector('#tagInput');
       var buttons = document.querySelectorAll('button');

    buttons.forEach(function(a){
        a.addEventListener('click', function (e) {
            var idButton = a.getAttribute('id');

            if ( idButton == 'showButton' ) {
                arrayImg.forEach(function (show) {
                    show.className == 'invisible' ? show.classList.remove('invisible') : '';
                    show.dataset.tag.indexOf(tagInput.value) < 0 ? show.classList.add('invisible') : '';
                });
            }

            if ( idButton == 'hideButton' ) {
                arrayImg.forEach(function (hide) {
                    hide.className == 'invisible' ? hide.classList.remove('invisible') : '';
                    hide.dataset.tag.indexOf(tagInput.value) > -1 ? hide.classList.add('invisible') : '';
                });
            }
        });
    });
});
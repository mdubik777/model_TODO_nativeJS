
window.onload = function() {
    var _popup = document.getElementById('popup-box');

    var app = {
        dom: {
            overlay: document.getElementById('blackout'),
            popup:  _popup,
            list: document.getElementById('user-table-list'),
            showPopupBtn: document.getElementById('show-popup'),
            closePopupBtn: _popup.getElementsByClassName('close-popup-action'),
            saveEditBtn: _popup.getElementsByClassName('save-edition-action'),
            sendPopupBtn: _popup.getElementsByClassName('send-popup-action'),
            cancelPopupBtn: _popup.getElementsByClassName('cancel-popup-action'),
            countrySelect: _popup.getElementsByClassName('select-action-js'),
            checkboxAll: document.getElementById('ckb-all'),
            deleteSelectedUsersBtn: document.getElementsByClassName('delete-selected-users-js'),
            showMessageBtn: document.getElementsByClassName('show-message-js')
        },
        popupFields: null,
        selectedUsers: [],
        users: [
            {
                "id": "260b295e-e5f6-fc28-9017-e6c8bac9f7a5",
                "name": "Александр",
                "surname": "Иванов",
                "age": "29",
                "birth": "19-01-1987",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": true,
                "country": "5"
            },

            {
                "id": "270b295e-e5f6-fc28-9017-e6c8bac9f7a5",
                "name": "Мария",
                "surname": "Петрова",
                "age": "30",
                "birth": "06-03-1986",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "1"
            },
            {
                "id": "270b295e-e5f6-fc28-8611-e6c8bac9f7a5",
                "name": "Василий",
                "surname": "Королёв",
                "age": "36",
                "birth": "06-03-1980",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "4"
            },
            {
                "id": "270b295e-e5f6-fc28-4751-e6c8bac9f7a5",
                "name": "Екатерина",
                "surname": "Сомова",
                "age": "26",
                "birth": "06-03-1990",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "2"
            },
            {
                "id": "270b295e-e5f6-fc28-6912-e6c8bac9f7a5",
                "name": "Елена",
                "surname": "Воронина",
                "age": "20",
                "birth": "06-03-1996",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "3"
            },
            {
                "id": "270b295e-e5f6-fc28-9017-e6c8bac9f7a5",
                "name": "Мария",
                "surname": "Петрова",
                "age": "30",
                "birth": "06-03-1986",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "1"
            },
            {
                "id": "270b295e-e5f6-fc28-8611-e6c8bac9f7a5",
                "name": "Василий",
                "surname": "Королёв",
                "age": "36",
                "birth": "06-03-1980",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "4"
            },
            {
                "id": "270b295e-e5f6-fc28-4751-e6c8bac9f7a5",
                "name": "Екатерина",
                "surname": "Сомова",
                "age": "26",
                "birth": "06-03-1990",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "2"
            },
            {
                "id": "270b295e-e5f6-fc28-6912-e6c8bac9f7a5",
                "name": "Елена",
                "surname": "Воронина",
                "age": "20",
                "birth": "06-03-1996",
                "message": "Запрос авторизации",
                "delivery": true,
                "male": false,
                "country": "3"
            }

        ]
    };
    renderAllUsers(app.users);
//    renderQuantityUsers(app.users);
//
//    function renderQuantityUsers(users) {
//        var liQuantityUsers = '<li>' + '<div class="data-box">' + '<span></span>' +  '<span>Всего пользователей</span>' + '<span>' + app.users.length + '</span>' + '</div>' + '</li>';
//        app.dom.list.insertAdjacentHTML('beforeend' , liQuantityUsers);
//    }

    function renderAllUsers(users) {
        var result = '';
        for (var i = 0; i < users.length; ++i) {
            result = result + renderUser(users[i], true);
        }
        app.dom.list.insertAdjacentHTML('beforeend' , result);
//        if (localStorage.getItem('users') == null) {
//            localStorage.setItem('users', JSON.stringify(users))
//        }
    }

    function renderUser(_user, withWrapper) {
        var gender = 'мужчина';
        var delivery = 'да';
        var country = '';

        if (!_user.delivery) {
           delivery = 'нет';
        }
        if (!_user.male) {
            gender = 'женщина';
        }

        switch (_user.country) {
            case '1':
                country = 'Москва';
                break;
            case '2':
                country = 'Санкт-Петербург';
                break;
            case '3':
                country = 'Калуга';
                break;
            case '4':
                country = 'Ростов-на-Дону';
                break;
            case '5':
                country = 'Саратов';
                break;
        }


        var dataStr =   '<div class="data-box">' +
                            '<span>' +
                                '<span class="custom-checkbox">' +
                                    '<input class="checkbox-action-js" type="checkbox" id="' + _user.id  + '"' + '/>' +
                                    '<label' + ' for="' + _user.id + '"><i class="icon-checkmark"></i></label>' +
                                '</span>' +
                            '</span>' +
                            '<span>' +_user.name + '</span>' +
                            '<span>'+ _user.surname + '</span>' +
                            '<span>' + _user.age + '</span>' +
//                            '<span>' + _user.birth + '</span>' +
                            '<span>' + delivery + '</span>' +
                            '<span>' + gender + '</span>' +
//                            '<span>' + country + '</span>' +
                            '<span>' +
                                '<button class="btn show-message-js" data-id="' + _user.id + '">Показать сообщение</button>' +
                             '</span>' +
                            '<span>' +
                                '<button class="btn delete-user-js" data-id="' + _user.id + '">Удалить</button>' +
                                '<button class="btn edit-user-js" data-id="' + _user.id + '">Редактировать</button>' +
                            '</span>' +
                        '</div>' +
                        '<div class="msg-box msg-box-js"><div class="in">' + _user.message + '</div></div>';


        if (withWrapper == true) {
            return '<li>' + dataStr + '</li>';
        } else {
            return dataStr
        }
    }

    function handlerShowPopup(e) {
        app.dom.showPopupBtn.classList.add('active');
        e.preventDefault();
        e.stopPropagation();
        var editMode = false;
        openPopup(editMode);
    }



        function openPopup (editMode) {
            if (editMode == true) {
                app.dom.saveEditBtn[0].style.display = 'inline-block';
                app.dom.cancelPopupBtn[0].style.display = 'inline-block';
                app.dom.sendPopupBtn[0].style.display = 'none';
            } else {
                app.dom.saveEditBtn[0].style.display = 'none';
                app.dom.cancelPopupBtn[0].style.display = 'none';
                app.dom.sendPopupBtn[0].style.display = 'inline-block';
            }
            app.dom.overlay.style.display = 'inline-block';
            app.dom.popup.style.display = 'inline-block';
            setPopupHeight(app.dom);


        }


        app.dom.showPopupBtn.addEventListener('click', handlerShowPopup);
        var browserHeight = window.innerHeight;



        function setPopupHeight(DomObj){
            var popupHeight = app.dom.popup.offsetHeight;
            if (popupHeight > browserHeight) {

                DomObj.popup.style.marginTop = '0';
                DomObj.popup.style.top = '10%';
            } else {

                DomObj.popup.style.marginTop = '-' + popupHeight/2 + 'px';
                DomObj.popup.style.top = '50%';
            }
            DomObj.popup.style.marginTop = '-' + popupHeight/2 + 'px';
            DomObj.popup.style.top = '50%';
        }


//    Close popup

    function closePopup() {
        app.dom.overlay.style.display = 'none';
        app.dom.popup.style.display = 'none';
        app.dom.showPopupBtn.classList.remove('active');
        cleanPopupAllFields();

    }

    app.dom.overlay.addEventListener("click", function(e){
    var popupClick =  e.target.closest('#popup-box');
        if (popupClick) {
            e.stopPropagation();
        } else {
            closePopup();
        }
    });

    var btnLength = app.dom.closePopupBtn.length;
    for (var i = 0;  i < btnLength; i++) {
        app.dom.closePopupBtn[i].addEventListener('click',  closePopup);
    }

    //Clean all popup fields

    function cleanPopupAllFields () {
        if (app.popupFields == null) {
            app.popupFields =  findElements(_popup);
        }
            app.popupFields.name.value = '';
            app.popupFields.surname.value = '';
            app.popupFields.age.value = '';
            app.popupFields.message.value = '';
            app.popupFields.delivery.checked = false;
            app.popupFields.gender[0].checked = true;
    }

//    getInfoUser

    function getInfoUser(popup, id) {
        if (app.popupFields == null) {
            app.popupFields =  findElements(_popup);
        }
        var name =  app.popupFields.name.value,
            surname =  app.popupFields.surname.value,
            age =  app.popupFields.age.value,
            message =  app.popupFields.message.value,
            delivery =  app.popupFields.delivery.checked,
            gender =  app.popupFields.gender[0].checked;

        var _id = id ? id : guid();

        return {
            id: _id,
            name: name,
            surname: surname,
            age: age,
            message: message,
            delivery: delivery,
            male: gender
        }

    }


    function guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }

//    getInfoUser(app.dom.popup, null);


//add user

    app.dom.sendPopupBtn[0].addEventListener('click', function() {
        var user = getInfoUser(app.dom.popup, null);
        app.users.push(user);
        var needWrapperLi = true;
        var result = renderUser(user, needWrapperLi);
        app.dom.list.insertAdjacentHTML('beforeend' , result);
//        localStorage.clear();
//        localStorage.setItem('users', JSON.stringify(app.users));
        closePopup();
    });

//Delete user


    app.dom.list.addEventListener('click', function(e) {
        var clickedElement = e.target;
        if (clickedElement.tagName == 'BUTTON') {
            var userId = clickedElement.getAttribute("data-id");
            if (clickedElement.classList.contains('delete-user-js')) {
                deleteUser(userId, clickedElement);
            }
            if (clickedElement.classList.contains('edit-user-js')) {
                editUser(userId);
            }
            if (clickedElement.classList.contains('show-message-js')) {
                showMessage(clickedElement);
            }
            if (clickedElement.classList.contains('delete-selected-users-js')) {
                deleteSelectedUsers();
            }
            return;
        }
        var clickedCheckbox = clickedElement.closest('.custom-checkbox');
        if (clickedCheckbox) {
            e.preventDefault();
            if (clickedCheckbox.classList.contains('head-checkbox')) {
                onToggleMasterCheckbox(clickedCheckbox);
            } else {
                onToggleCheckbox(clickedCheckbox)
            }
            return;
        }
    });

    function deleteSelectedUsers() {
        if (app.selectedUsers.length > 0) {
            if (app.users.length == app.selectedUsers.length ) {
                app.dom.deleteSelectedUsersBtn[0].setAttribute('disabled', true);
                app.dom.checkboxAll.checked = false;
            }
            for (var k = 0; k < app.selectedUsers.length; k++) {
                var checkbox = document.getElementById(app.selectedUsers[k]);
                var currentLi = checkbox.closest('li');
                app.dom.list.removeChild(currentLi);
                for (var i = 0; i < app.users.length; i++) {
                    if (app.selectedUsers[k] == app.users[i].id) {
                        app.users.splice(i, 1);
                        break;
                    }
                }

            }

        }

    }

    ////DELETE ALL USERS
//
//    app.dom.deleteSelectedUsersBtn.on('click', function() {
//        var everyCheckbox = $('.checkbox-action-js:checked');
//        if (everyCheckbox.length !== 0) {
//                for (var i = 0; i < everyCheckbox.length; ++i ) {
//
//                    var idUser = $(everyCheckbox[i]).prop('id');
//                    var currentCheckbox = everyCheckbox[i].closest('li');
//                    currentCheckbox.remove();
//                    var idValue = app.users[i].id;
//                    if (idUser == idValue) {
//                        app.users.splice(i, 1);
//                        everyCheckbox.splice(i, 1);
//                        --i;
//
//                    }
//
//                }
//            localStorage.clear();
//            localStorage.setItem('users', JSON.stringify(app.users));
//
//            app.dom.deleteSelectedUsersBtn.attr('disabled', 'disabled');
//            app.dom.checkboxAll.removeAttr('checked');
//        }
//
//    });


    function onToggleMasterCheckbox(checkbox) {

        var _checkbox = checkbox.getElementsByTagName('input')[0];
            _checkbox.checked = !_checkbox.checked;

        var arrayCheckbox = app.dom.list.getElementsByClassName('checkbox-action-js');
        var arrayCheckboxLength = arrayCheckbox.length;

        if (_checkbox.checked) {

            for (var i = 0; i < arrayCheckboxLength; i++) {
                arrayCheckbox[i].checked = true;

            }
            app.dom.deleteSelectedUsersBtn[0].removeAttribute('disabled');

            onSetUsers();

        } else {

            for (var j = 0; j < arrayCheckboxLength; j++) {
                arrayCheckbox[j].checked = false;
            }
            app.dom.deleteSelectedUsersBtn[0].setAttribute('disabled', true);
            app.selectedUsers = [];
        }

    }



    function onSetUsers(checkboxesChecked){
        app.selectedUsers = [];
        if(checkboxesChecked) {
            for (var j = 0; j < checkboxesChecked.length; j++ ) {
                app.selectedUsers.push(checkboxesChecked[j].id);
            }
        } else {
            for (var j = 0; j < app.users.length; j++ ) {
                app.selectedUsers.push(app.users[j].id);
            }
        }

    }


    function onToggleMasterCheckboxBySelection(checkboxesChecked) {
        if (checkboxesChecked.length == app.users.length) {
            app.dom.checkboxAll.checked = true;
        } else {
            app.dom.checkboxAll.checked = false;
        }
    }


    function onToggleDisabledDeleteBtn(checkboxesChecked) {

        if (checkboxesChecked.length == 0) {
            app.dom.deleteSelectedUsersBtn[0].setAttribute('disabled', true);
        } else {
            app.dom.deleteSelectedUsersBtn[0].removeAttribute('disabled');
        }
    }

    function onToggleCheckbox(checkbox) {

        var _checkbox = checkbox.getElementsByTagName('input')[0];
        _checkbox.checked = !_checkbox.checked;

        var checkboxesChecked = app.dom.list.querySelectorAll('.checkbox-action-js:checked');

        onToggleMasterCheckboxBySelection(checkboxesChecked);
        onToggleDisabledDeleteBtn(checkboxesChecked);
        onSetUsers(checkboxesChecked);
    }




    

    function deleteUser(_userID,_clickedButton) {
        var wrapper = _clickedButton.closest('li');
        app.dom.list.removeChild(wrapper);
        for (var i = 0; i < app.users.length; ++i) {
            var idValue = app.users[i]['id'];
            if (idValue == _userID ) {
                app.users.splice(i, 1);
            }
        }
    }

    function editUser(_userID) {
        if (app.popupFields == null) {
            app.popupFields =  findElements(_popup);
        }
        openPopup(true);
        var editingUser = null;

        for (var i = 0; i < app.users.length; ++i) {
            var idValue = app.users[i].id;

            if (idValue == _userID ) {
                editingUser = app.users[i];
            }
        }
        app.popupFields.surname.value = editingUser.surname;
        app.popupFields.name.value = editingUser.name;
        app.popupFields.age.value = editingUser.age;
        app.popupFields.message.value = editingUser.message;
        app.popupFields.delivery.value = editingUser.delivery;
        app.popupFields.gender.value = editingUser.gender;
        app.popupFields.delivery.checked = editingUser.delivery;

        if (editingUser.male == true) {
            app.popupFields.gender[0].checked = true;
        } else
            app.popupFields.gender[1].checked = true;

        bindEditBtn(_userID);
    }

// выборка


    function findElements(popup) {
        var nameInput =  popup.getElementsByClassName('user-name-action'),
            surnameInput =  popup.getElementsByClassName('user-surname-action'),
            ageInput =  popup.getElementsByClassName('user-age-action'),
            messageInput =  popup.getElementsByClassName('user-message-action'),
            deliveryInput = document.getElementById('add-info'),
            genderInput = popup.getElementsByClassName('gender-action');
        return {
            name: nameInput[0],
            surname: surnameInput[0],
            age: ageInput[0],
            message: messageInput[0],
            delivery: deliveryInput,
            gender: genderInput
        }


    }



    function showMessage(_clickedElement) {
        var msgBox = _clickedElement.closest('li').getElementsByClassName('msg-box-js')[0];
        var button = _clickedElement.closest('.show-message-js');
        if (msgBox.offsetWidth > 0 && msgBox.offsetHeight > 0) {
            msgBox.style.display ='none';
            button.classList.remove('active');
        } else {
            msgBox.style.display = 'block';
            button.classList.add('active');

        }
    }


    function bindEditBtn(_userID){


        var saveEditUser = function(){
            var user = getInfoUser(app.dom.popup, _userID);
            for (var i = 0; i < app.users.length; ++i) {
                var id = app.users[i].id;

                if (id == _userID  ) {
                    app.users[i] = user;
                    break;
                }
            }

            var editUserCheckbox = document.getElementById(_userID);
            var wrapper = editUserCheckbox.closest('li');
            wrapper.innerHTML = renderUser(user, false);
            closePopup();

            app.dom.saveEditBtn[0].removeEventListener('click', saveEditUser);
        };

        app.dom.saveEditBtn[0].addEventListener('click', saveEditUser);
    }
};





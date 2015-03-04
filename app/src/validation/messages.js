'use strict';
angular.module('nemo')

    .factory('nemoMessages', [function () {

        var messages = {};

        function set(key, value) {
            messages[key] = value;
        }

        function get(key) {
            return messages[key]
        }

        return {
            set: set,
            get: get
        }
    }]);
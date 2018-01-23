"use strict";

/**

    var bob = {
        _name: "Bob",
        _friends: [
            "Ghilherme",
            "Camila",
            "Murilo"
        ],
        printFriends: function printFriends() {

            var self = this; //modo antigo para acessar o scopo _name

            this._friends.forEach(function(f) {
                return console.log(self._name + " knows " + f);
            });

        }
    };

    bob.printFriends(); 
*/

/**
 * Arrows functions
 */

var color = function color() {
    return console.log("red");
};
color();

var bob = {
    _name: "Bob",
    _friends: ["Ghilherme", "Camila", "Murilo"],
    printFriends: function printFriends() {
        var _this = this;

        this._friends.forEach(function (f) {
            return console.log(_this._name + " knows " + f);
        });
    }
};

bob.printFriends();

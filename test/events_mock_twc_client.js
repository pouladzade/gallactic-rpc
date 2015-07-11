/* This file is for testing RPC methods using a mock client.
 */
var asrt;

if (typeof(window) === "undefined") {
    asrt = require('assert');
} else {
    asrt = assert;
}

var test_data = require('./testdata/testdata.json');
var template = require('./mock/test_template');
var MockTwcClient = require('./mock/mock_twc_client');
var erisdbFactory = require('../index');

var requestData = {
    priv_validator: test_data.chain_data.priv_validator,
    genesis: test_data.chain_data.genesis,
    max_duration: 10
};

// Just need an address.
var testAddress = requestData.priv_validator.address;

var edb;

// TODO update to use the appropriate event type for each sub once the test data update is done.
describe('Events', function () {

    before(function () {
        var handlers = template.getHandlers(test_data);
        var client = new MockTwcClient(handlers);
        edb = erisdbFactory.createInstanceFromClient(client, null);
    });

    describe('.subSolidityEvent', function () {

        it("should subscribe to solidity event using once", function (done) {
            edb.events().subSolidityEvent(testAddress, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to solidity event", function (done) {
            var sub;
            edb.events().subSolidityEvent(testAddress, function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    /*

    describe('.subAccountInput', function () {

        it("should subscribe to account input using once", function (done) {
            edb.events().subAccountInput(testAddress, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to account input", function (done) {
            var sub;
            edb.events().subAccountInput(testAddress, function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subAccountOutput', function () {

        it("should subscribe to account output using once", function (done) {
            edb.events().subAccountOutput(testAddress, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to account output", function (done) {
            var sub;
            edb.events().subAccountOutput(testAddress, function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subAccountReceive', function () {

        it("should subscribe to account receive using once", function (done) {
            edb.events().subAccountReceive(testAddress, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to account receive", function (done) {
            var sub;
            edb.events().subAccountReceive(testAddress, function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subBonds', function () {

        it("should subscribe to bond events using once", function (done) {
            edb.events().subBonds(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to bond events", function (done) {
            var sub;
            edb.events().subBonds(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subUnbonds', function () {

        it("should subscribe to unbond events using once", function (done) {
            edb.events().subUnbonds(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to unbond events", function (done) {
            var sub;
            edb.events().subUnbonds(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subRebonds', function () {

        it("should subscribe to rebond events using once", function (done) {
            edb.events().subRebonds(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to rebond events", function (done) {
            var sub;
            edb.events().subRebonds(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subDupeouts', function () {

        it("should subscribe to dupeout events using once", function (done) {
            edb.events().subDupeouts(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to dupeout events", function (done) {
            var sub;
            edb.events().subDupeouts(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subNewBlocks', function () {

        it("should subscribe to new block events using once", function (done) {
            edb.events().subNewBlocks(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to new block events", function (done) {
            var sub;
            edb.events().subNewBlocks(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });

    describe('.subForks', function () {

        it("should subscribe to fork events using once", function (done) {
            edb.events().subForks(function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                done();
            });
        });

        it("should subscribe to fork events", function (done) {
            var sub;
            edb.events().subForks(function (error, eventSub) {
                asrt.ifError(error);
                sub = eventSub;
            }, function (error, event) {
                asrt.ifError(error);
                asrt.deepEqual(test_data.output.evt_poll.events[0], event, "Event did not match.");
                sub.stop();
                done();
            });
        });

    });
*/
});


// Expected is the expected data. done is the mocha done-function, modifiers are
// used to overwrite fields in the return-data that should not be included in the
// tests (like certain timestamps for example).
function check(expected, done, fieldModifiers) {
    return function (error, data) {
        if (error) {
            console.log(error);
        }
        if (fieldModifiers && fieldModifiers.length > 0) {
            for (var i = 0; i < fieldModifiers.length; i++) {
                fieldModifiers[i](data);
            }
        }
        asrt.ifError(error, "Failed to call rpc method.");
        asrt.deepEqual(data, expected);
        done();
    };
}
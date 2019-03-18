const { DatoBiometrico } = require('../../models');

const log = log4Js.getLogger("CheckFingerPrint");

async function checkFinger(finger) {
    const Huella = DatoBiometrico.findOne(finger);
}

module.exports = checkFinger;
const osu = require('node-os-utils')
const si = require('systeminformation');
const cpu = osu.cpu


function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

module.exports = {

    cpu() {
        return Promise.all([
            cpu.usage(),
            cpu.free()
        ]).then(data => ({ usage: data[0], free: data[1] }) );
    },

    async memory() {
        const memory = await si.mem()
        return {
            used: formatBytes(memory.used),
            free: formatBytes(memory.free),
            total: formatBytes(memory.total)
        }
    }
}
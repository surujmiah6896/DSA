var RecentCounter = function () {
    this.queue = [];
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function (t) {
    this.queue.push(t);
    while (this.queue.length > 0 && this.queue[0] < t - 3000) {
        this.queue.shift();
    }
    return this.queue.length;
};

const input = ["RecentCounter", "ping", "ping", "ping", "ping"][
  ([], [1], [100], [3001], [3002])
];
var obj = new RecentCounter();
console.log(obj.ping(30001));
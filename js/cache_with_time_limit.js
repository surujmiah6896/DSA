class TimeLimitedCache{
    constructor(){
        this.cache = new Map();
    }

    set(key, value, duration){
        const exists = this.cache.has(key);

        if(exists){
            clearTimeout(this.cache.get(key).timer);
        }

        const timer = setTimeout(()=>{
            this.cache.delete(key);
        }, duration);

        this.cache.set(key,{value, timer});

        return exists;
    }

    get(key){
        return this.cache.has(key) ? this.cache.get(key).value : -1;
    }

    count(){
        return this.cache.size;
    }
}

const l = new Map();
l.set('k', {value: 5, time:50});
const r = l.get('k');
console.log(r.value);
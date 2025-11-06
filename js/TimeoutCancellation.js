var cancellable = function (fn, args, t) {
  const timeoutId = setTimeout(() => fn(...args), t);
  console.log(timeoutId);
  return () => {
    clearTimeout(timeoutId);
  };
};

const re = cancellable((fn = (x) => x * 5), (args = [2]), (t = 20));

/**
 * *****防抖****
 *
 * 在连续的操作中，无论进行了多长时间，
 * 只有某一次的操作后在指定的时间内没有再操作，这一次才被判定有效
 * @param fn
 * @param t
 * @returns {function(...[*]=)}
 * @constructor
 */
export const Debounce = function (fn, t) {
    let delay = t || 300;
    let timer = null;
    return function () {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(() => {
        fn.apply(this, arguments);
      }, delay);
    }
}

/**
 * ***节流****
 *
 * 一定时间内一定执行而且只执行一次。我们通常规定300ms执行一下的话，
 * 那不管你持续不断的点击，一到300ms就执行一次了。
 * 所以你持续不断的点击足够久的话，那就执行很多次了。
 * @param fn
 * @param delay
 * @returns {function(...[*]=)}
 * @constructor
 */
export const Throttle = function (fn, delay=300) {
    let canRun = true; // 通过闭包保存一个标记
    return function () {
      if (!canRun) return;//在delay时间内，直接返回，不执行fn
      canRun = false;
      setTimeout(() => {
        fn.apply(this, arguments);
        canRun = true;//直到执行完fn,也就是delay时间后，打开开关，可以执行下一个fn
      }, delay);
    };
}
  
  
exports = typeof window === 'undefined' ? global : window;

exports.countAnswers = {
  count: function (start, end) {

    let forceEnd = false;

    function print (i) {
      if (forceEnd || i > end) {
        return;
      }

      // eslint-disable-next-line no-console
      console.log(i);

      setTimeout(() => print(i + 1), 1000 / 10);
    }

    print(start);

    return {
      cancel () {
        forceEnd = true;
      }
    };
  }
};

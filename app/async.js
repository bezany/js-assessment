exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return Promise.resolve(value);
  },

  manipulateRemoteData: function(url) {
    return fetch(url).
      then((res) => res.json()).
      then((json) => {
        const names = json.people.map((el) => el.name);
        names.sort();
        return names;
      });
  }
};

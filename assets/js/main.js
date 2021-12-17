new Vue({
  el: '#main',
  data: {
    package: {},
  },
  mounted: function () {
    const params = new URLSearchParams(window.location.search.substring(1));
    const package = params.get('p');
    fetch(`./depiction/${package}.json`)
      .then((res) => res.json())
      .then((json) => {
        this.package = json;
      });
  },
});

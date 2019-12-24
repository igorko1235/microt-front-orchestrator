singleSpa.registerApplication(
  'app1',
  function () {
    return System.import('app1');
  },
  function (location) {
    return location.pathname.startsWith('/app1');
  }
);
singleSpa.start();

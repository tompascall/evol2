angular.module('evolApp', [])

.controller('navCtrl', ['$scope', function ($scope) {

  $scope.status = {
    intro: true,
    services: false,
    partners: false,
    fees: false,
    contacts: false,
    closed: true
  };

  $scope.changeStatus = function (currentKey) {
    var keys = Object.keys($scope.status);
    keys.forEach(function (key) {
      $scope.status[key] = false;
    });
    $scope.status[currentKey] = true;
    $scope.status.closed = true;
    console.log($scope.status.closed);
  };

}])

.directive('slider', function () {
  return {
    restrict: 'A',
    replace: true,
    templateUrl: 'template/slider.html',
    link: function () {
      var options = {
        $BulletNavigatorOptions: {
            $Class: $JssorBulletNavigator$,
            $ChanceToShow: 2,
            $AutoCenter: 1
        },
        $AutoPlay: true,
        $Loop: 1
      };

      var jssor_slider1 = new $JssorSlider$('slider1_container', options);

      //responsive code begin
      //you can remove responsive code if you don't want the slider scales
      //while window resizes
      function ScaleSlider() {
        var parentWidth = $('#slider1_container').parent().width();
        if (parentWidth) {
          jssor_slider1.$ScaleWidth(parentWidth);
        }
        else {
          window.setTimeout(ScaleSlider, 30);
        }
      }
      //Scale slider after document ready
      ScaleSlider();

      //Scale slider while window load/resize/orientationchange.
      $(window).bind("load", ScaleSlider);
      $(window).bind("resize", ScaleSlider);
      $(window).bind("orientationchange", ScaleSlider);
      //responsive code end
    }
  };
})


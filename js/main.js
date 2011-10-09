(function($) {
  $(document).ready(function() {
    var windowObj = $(window),
        bodySelector = $(document.body),
        eventData = {
          firstPos: 0,
          moved: false
        };

    /*
    windowObj.mousemove(function(e) {
      if (!eventData.moved) {
        eventData.firstPos = e.clientY;
        eventData.moved = true;
      }

      eventData.up = Math.round(eventData.firstPos / e.clientY);
      eventData.down = Math.round(e.clientY / eventData.firstPos);

      if (eventData.previousPos > e.clientY) {
        //console.log(eventData.up);
      } else if (eventData.previousPos < e.clientY) {
        //console.log('down');
      }

      eventData.previousPos = e.clientY;
    });
    */
  })
}(jQuery));

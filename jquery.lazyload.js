(function($, win, doc, undefined) {
  var pluginName = "lazyload";

  function Plugin(ele, options) {
    var defaultOptions = {
      distance: 10,
      immediate: false,
    };
    this.ele = $(ele);
    this.options = $.extend({}, defaultOptions, options);
    this.init();
  }
  Plugin.prototype = {
    init: function() {
      var self = this;
      var ele = self.ele;
      self.src = ele.attr("data-src");
      self.offsetTop = self.ele.offset().top;
      if (self.options.immediate) {
        self.watch();
      }
      $(doc).on("scroll", function() {
        self.watch();
      });
      $(win).on("resize", function() {
        self.watch();
      });
    },
    watch: function() {
      var self = this;
      var scrollTop = $(doc).scrollTop();
      var clientHeight = document.documentElement.clientHeight;
      var distance = this.offsetTop - scrollTop - clientHeight;
      if (self.src && distance < self.options.distance) {
        console.log(self.ele.attr('data-src'))
        self.ele.attr({
          "src": self.src,
        });
        self.src = ''
      }
    }
  };

  $.fn[pluginName] = function(options) {
    this.each(function() {
      new Plugin(this, options);
    });
    return this;
  };
})(jQuery, window, document);



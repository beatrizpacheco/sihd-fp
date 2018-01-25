(function($) {
  $.fn.tile = function(columns) {
    var tiles, $tile, max, c, h, last = this.length - 1, s, method;
    if(!columns) columns = this.length;
    this.each(function() {
      s = this.style;
      if(s.removeProperty) s.removeProperty("height");
      else if(s.removeAttribute) s.removeAttribute("height");
    });
    return this.each(function(i) {
      c = i % columns;
      if(c == 0) tiles = [];
      $tile = tiles[c] = $(this);
      method = ($tile.css("box-sizing") == "border-box") ? $.fn.outerHeight : $.fn.innerHeight;
      h = method.apply($tile);
      if(c == 0 || h > max) max = h;
      if(i == last || c == columns - 1) {
        $.each(tiles, function() { method.apply(this, [max]); });
      }
    });
  };
})(jQuery);
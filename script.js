// detect-features
!(function (o, c) {
  var n = c.documentElement,
    t = " w-mod-";
  n.className += t + "js";

  ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) &&
    (n.className += t + "touch");
})(window, document);

//The horizontal slider css
$(".st-row").slick({
  responsive: [
    {
      breakpoint: 100000,
      settings: "unslick",
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        fade: true,
        arrows: false,
        dots: true,
        appendDots: $(".st_dots"),
      },
    },
  ],
});

//faq
$(function () {
  var Accordion = function (el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    var items = this.el.find(".dd-toggle");
    items.on(
      "click",
      {
        el: this.el,
        multiple: this.multiple,
      },
      this.dropdown
    );
  };

  Accordion.prototype.dropdown = function (e) {
    var $el = e.data.el;
    ($this = $(this)), ($next = $this.next());

    $next.slideToggle();
    $this.parent().toggleClass("active");

    if (!e.data.multiple) {
      $el.find(".dd-cont").not($next).slideUp().parent().removeClass("active");
    }
  };

  var accordion = new Accordion($("#accordion"), false);
});

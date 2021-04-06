//
// Home lib
//
class Home
{
  /**
   * Class constructor
   *
   * @return void
   */
  constructor () {}

  /**
   * Init
   *
   * @return void
   */
  init () {
    if ($('.recipe').length > 0) {
      const container = $('.recipe .recipe__steps')
      // Setup indicator
      const total = $('._slide', container).length;
      if (total > 0) {
        $('._indicator--info ._total', container).text(total);
        $('._indicator--info ._current', container).text('1');
        $('._indicator--main ._active', container).width('25%');
      }

      // Setup slider
      $('._slider', container).slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
      $('._slider', container).on('beforeChange', (event, slick, currentSlide, nextSlide) => {
        const itemWidth = 100 / total;
        const indicatorWidth = (nextSlide + 1) * itemWidth;

        console.log(itemWidth);
        console.log(indicatorWidth);

        $('._indicator--info ._current', container).text(nextSlide + 1);
        $('._indicator--main ._active', container).width(`${indicatorWidth}%`);
      });
    }

    return this;
  }
}

export default Home;

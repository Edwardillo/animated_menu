import React from "react";
import { Dimensions, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import CarouselSlide from "./CarouselSlide";
import Pagination from "./Pagination";
import { AnimatedView } from "./AnimatedComponents";

const SLIDER_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = SLIDER_WIDTH * 0.6;

function AnimatedCarousel({ data }) {
  const ref = React.useRef(0);
  const [activeSlide, setActive] = React.useState(0);

  const onBeforeSnapToItem = (slideIndex) => setActive(slideIndex);

  const renderItem = ({ item, index }) => (
    <CarouselSlide item={item} isActive={activeSlide === index} />
  );

  return (
    <View>
      <AnimatedView style={{ height: 400 }} animation="fadeInRight">
        <Carousel
          ref={ref}
          data={data}
          renderItem={renderItem}
          onBeforeSnapToItem={onBeforeSnapToItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideOpacity={1}
          useScrollView
        />
      </AnimatedView>
      <Pagination activeSlide={activeSlide} dotsLength={data.length} />
    </View>
  );
}

export default AnimatedCarousel;

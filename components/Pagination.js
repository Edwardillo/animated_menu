import React from "react";
import { Pagination } from "react-native-snap-carousel";
import { AnimatedView } from "./AnimatedComponents";

function CarouselPagination({ dotsLength, activeSlide }) {
  return (
    <AnimatedView>
      <Pagination
        dotsLength={dotsLength}
        activeDotIndex={activeSlide}
        dotStyle={{
          width: 8,
          height: 8,
          borderRadius: 8,
          marginHorizontal: 5,
          backgroundColor: "#424A93",
        }}
        inactiveDotStyle={{
          backgroundColor: "#A0A9B8",
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    </AnimatedView>
  );
}

export default CarouselPagination;

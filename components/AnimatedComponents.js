import React, { useEffect, useState, useRef } from "react";
import * as Animatable from "react-native-animatable";

export function AninmatedText({ children, style, status, duration = 1000 }) {
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (status === true && !isActive) ref.current.fadeInUp(duration);
    if (status === false && isActive) ref.current.fadeOutDown(duration);

    setActive(status);
  }, [status]);

  return (
    <Animatable.Text ref={ref} style={style}>
      {children}
    </Animatable.Text>
  );
}

export function AnimatedImage({ status, duration = 1000, ...restProps }) {
  const [isActive, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (status === true && !isActive) ref.current.zoomIn(duration);
    if (status === false && isActive) ref.current.zoomOut(duration);

    setActive(status);
  }, [status]);

  return <Animatable.Image ref={ref} {...restProps} />;
}

export function AnimatedView({ children, style, animation = "fadeInUp" }) {
  const ref = useRef(null);

  useEffect(() => {
    ref.current[animation]();
  }, []);

  return (
    <Animatable.View ref={ref} style={style}>
      {children}
    </Animatable.View>
  );
}

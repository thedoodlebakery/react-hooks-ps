import React from "react";
import ImageChangeOnScroll from "../src/ImageChangeOnScroll";

const ImageToggleOnScroll = () => {
  return (
    <div>
      {[1124, 187, 823, 1269, 1530].map((speakerId) => {
        return (
          <div key={speakerId}>
            <ImageChangeOnScroll
              primaryImg={`/static/speakers/bw/Speaker-${speakerId}.jpg`}
              secondaryImg={`/static/speakers/Speaker-${speakerId}.jpg`}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageToggleOnScroll;

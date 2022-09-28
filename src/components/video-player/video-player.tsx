import * as React from "react";

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLVideoElement> {
  src: string;
  controls?: boolean;
}

export const VideoPlayer = (props: VideoPlayerProps) => {
  const { src, controls } = props;
  const video = React.useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (video.current?.paused) {
      video.current.play();
    } else {
      video.current?.pause();
    }
  };

  return (
    <div className="relative">
      {controls && <Controls />}
      <video ref={video} {...props} src={src} onClick={togglePlay} />
    </div>
  );
};

import { ComponentStory, ComponentMeta } from "@storybook/react";
import { VideoPlayer } from "./video-player";

import video from "../../assets/video.mp4";

export default {
  title: "VideoPlayer",
  component: VideoPlayer,
} as ComponentMeta<typeof VideoPlayer>;

const Template: ComponentStory<typeof VideoPlayer> = (args) => (
  <VideoPlayer {...args} src={video} />
);

export const Default = Template.bind({});

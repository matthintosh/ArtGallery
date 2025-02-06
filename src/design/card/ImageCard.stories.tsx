import { StoryObj, Meta } from "@storybook/react";
import { ImageCard } from "./ImageCard";

const meta: Meta<typeof ImageCard> = {
  component: ImageCard,
  title: "ImageCard",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof ImageCard>;

export const Primary: Story = {
  args: {
    imgUrl:
      "https://images.pexels.com/photos/29847092/pexels-photo-29847092/free-photo-of-paysage-islandais-au-coucher-du-soleil-avec-jimny.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&dpr=2",
    imgAlt: "Test image",
    caption: "This is the caption test for the image",
  },
};

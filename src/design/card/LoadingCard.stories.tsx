import { StoryObj, Meta } from "@storybook/react";
import { LoadingCard } from "./LoadingCard";

const meta: Meta<typeof LoadingCard> = {
  component: LoadingCard,
  title: "LoadingCard",
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof LoadingCard>;

export const Primary: Story = {
  args: {},
};

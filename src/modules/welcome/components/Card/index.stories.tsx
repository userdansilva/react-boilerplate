import { ComponentMeta, StoryObj } from "@storybook/react";
import { Card, CardProps } from ".";

export default {
  title: "Welcome/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Base: StoryObj<CardProps> = {
  args: {
    title: "Title Example",
    children: "Content Example",
  },
};

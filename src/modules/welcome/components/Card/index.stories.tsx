import { ComponentMeta, StoryObj } from "@storybook/react";
import { Card, CardProps } from ".";

export default {
  title: "Welcome/Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Base: StoryObj<CardProps> = {
  args: {
    title: "Title Example",
    children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non libero vehicula, fringilla purus ac, congue elit. Nullam sit amet tortor metus. In euismod risus.",
  },
};

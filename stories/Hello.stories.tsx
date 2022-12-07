import { ComponentMeta } from "@storybook/react";
import { Hello as NNHello } from "../components/Hello";

export default {
  title: "Hello",
  component: NNHello,
} as ComponentMeta<typeof NNHello>;

export const Greeting = () => <NNHello />;

import { ComponentMeta } from "@storybook/react";
import { Hello as NNHello } from "components/Hello";

export default {
  title: "Components/Hello",
  component: NNHello,
} as ComponentMeta<typeof NNHello>;

export const Greeting = () => <NNHello />;

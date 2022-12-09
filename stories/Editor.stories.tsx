import { ComponentMeta } from "@storybook/react";
import dynamic from "next/dynamic";

const NNEditor = dynamic(import("components/Editor"), { ssr: false });

export default {
  title: "Components/Editor",
  component: NNEditor,
} as ComponentMeta<typeof NNEditor>;

export const InitialState = () => <NNEditor />;

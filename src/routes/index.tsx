import { type VoidComponent } from "solid-js";
import { A } from "solid-start";

const Home: VoidComponent = () => {
  return (
  <main class="w-screen h-screen flex flex-col gap-8 items-center justify-center">
      <div>Hello 👋 My name is Kyle.</div>
      <div>I am a web developer.</div>
      <div>I made this in 5 minutes.</div>
      <div>I hope you enjoy the fruits of my labour.</div>
    </main>
  );
};

export default Home;

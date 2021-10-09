import Hero from "../components/Hero";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <ContainerBlock>
      <Hero />
      <Projects />
    </ContainerBlock>
  );
}

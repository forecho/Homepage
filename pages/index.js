import Header from "@components/Header";
import Hero from "@components/Hero";
import ContainerBlock from "@components/ContainerBlock";
import Projects from "@components/Projects";

export default function Home() {
  return (
    <ContainerBlock>
      <Header />
      <Hero />
      <Projects />
    </ContainerBlock>
  );
}

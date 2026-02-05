import Image from 'next/image';

type Props = {
  title: string;
};

const ComponentTest = ({ title }: Props) => {
  return <h2>{title}</h2>;
};

export default function Home() {
  return (
    <div>
      <h2>Hello world!!!</h2>
      <ComponentTest title={2} />
    </div>
  );
}

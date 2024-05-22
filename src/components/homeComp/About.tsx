import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="mb-8 flex flex-col items-center">
      <h4 className="w-full mb-4 font-bold text-3xl text-lime-400">
        How we start
      </h4>
      <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
        consequatur impedit veniam dolores fuga molestias praesentium laborum
        fugit odit, eveniet rem vitae asperiores aliquam repellat quia.
        Voluptate harum nesciunt ipsam id amet! Natus tenetur incidunt fuga,
        inventore saepe adipisci, amet facere pariatur ipsum rem veritatis, at
        obcaecati accusamus laboriosam porro? Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Nobis consequatur impedit veniam dolores
        fuga molestias praesentium laborum fugit odit, eveniet rem vitae
        asperiores aliquam repellat quia. Voluptate harum nesciunt ipsam id
        amet! Natus tenetur incidunt fuga, inventore saepe adipisci, amet facere
        pariatur ipsum rem veritatis, at obcaecati accusamus laboriosam porro?
      </p>
      <Link className="hover:text-lime-400 w-full font-medium" to="/about">
        Read more...
      </Link>
    </div>
  );
};

export default About;

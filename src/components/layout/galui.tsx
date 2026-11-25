import { 
  GridBody,
  DraggableContainer,
  GridItem, 
  } from "@/components/ui/infinegal";


const images = [
  {
    id: 1,
    alt: "coffe1",
    src: "https://i.pinimg.com/736x/ea/82/df/ea82df375393b9980685116e440c1dc5.jpg",
  },
  {
    id: 2,
    alt: "making coffe",
    src: "https://i.pinimg.com/1200x/47/03/72/47037248d8be402334fa03dcc9864cb9.jpg",
  },
  {
    id: 3,
    alt: "person1",
    src: "https://i.pinimg.com/736x/ca/18/2c/ca182cf37ae88016088773b021e5cca6.jpg",
  },
  {
    id: 4,
    alt: "food1",
    src: "https://i.pinimg.com/736x/ab/1d/7d/ab1d7d63dc3ad87625963f6935afb94b.jpg"
  },
  {
    id: 5,
    alt: "food2",
    src: "https://i.pinimg.com/736x/6f/20/a4/6f20a42146233868256c52ae8cd37b3e.jpg",
  },
  {
    id: 6,
    alt: "people",
    src: "https://i.pinimg.com/736x/3b/94/04/3b9404d92963538d0c550492d3cb29fa.jpg",
  },
  {
    id: 7,
    alt: "people2",
    src: "https://i.pinimg.com/736x/a1/d9/47/a1d947b4ec8860a3e9de5737b325d212.jpg",
  },
  {
    id: 8,
    alt: "party",
    src: "https://i.pinimg.com/736x/36/86/ea/3686ea72659a1a3b0cecc198ad236e4d.jpg",
  },
  {
    id: 9,
    alt: "party2",
    src: "https://i.pinimg.com/1200x/fd/af/a9/fdafa97d8e6dee33c0c0403be4ca1d9b.jpg",
  },
  {
    id: 10,
    alt: "food",
    src: "https://i.pinimg.com/736x/61/7b/9e/617b9e0751c2ff9c75473d82eea5f608.jpg",
  },
  {
    id: 11,
    alt: "cheif",
    src: "https://i.pinimg.com/736x/fa/2f/65/fa2f65f61d760a0167d8a9f2f4787a34.jpg",
  },
  {
    id: 12,
    alt: "normal",
    src: "https://i.pinimg.com/736x/87/8b/1b/878b1b8fd2734d2509a9570b576652c6.jpg",
  },

  {
    id: 13,
    alt: "books",
    src: "https://i.pinimg.com/736x/6a/22/e8/6a22e81bd662a06752373e650ffd2824.jpg",
  },
  {
    id: 14,
    alt: "Tor",
    src: "https://i.pinimg.com/736x/71/a8/a6/71a8a649aabe907e76a6fd99c5a47dab.jpg",
  },
  {
    id: 15,
    alt: "food4",
    src: "https://i.pinimg.com/736x/7e/0e/9b/7e0e9bae19730ce1afc2df828d8076e2.jpg",
  },
  {
    id: 17,
    alt: "food5",
    src: "https://i.pinimg.com/1200x/c0/b0/47/c0b047c4c41d5da97907d1ad5b539f9f.jpg",
  },
  {
    id: 18,
    alt: "cheif",
    src: "https://i.pinimg.com/1200x/41/2d/ed/412dedc1fad0c4ad352bbb35d9a36864.jpg",
  },
  {
    id: 19,
    alt: "food6",
    src: "https://i.pinimg.com/736x/c7/2d/c4/c72dc4d94119c369b44b5de6d8b838d1.jpg",
  },
];

const DemoOne = () => {
  return (
     <DraggableContainer variant="masonry">
      <GridBody>
        {images.map((image, index) => (
          <GridItem
            key={image.id}
            className="relative h-54 w-36 md:h-96 md:w-64"
          >
            <img
              src={image.src}
              alt={image.alt}
              className="pointer-events-none absolute h-full w-full object-cover"

            />
          </GridItem>
        ))}
      </GridBody>
    </DraggableContainer>
  );
};

export { DemoOne };

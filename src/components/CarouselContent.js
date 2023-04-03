import { Carousel, Image } from "react-bootstrap";

function CarouselContent({ title, text, src, objectPosition }) {
  return (
    <>
      <Image
        src={src}
        fluid
        className="h-100 w-100 rounded shadow"
        style={{ objectFit: "cover", objectPosition: objectPosition }}
        alt={title}
      />
      <Carousel.Caption>
        <h3>{title}</h3>
        <p className="d-none d-md-block">{text}</p>
      </Carousel.Caption>
    </>
  );
}

export default CarouselContent;

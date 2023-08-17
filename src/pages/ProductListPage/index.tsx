import {
  ProductList,
  Product,
  Container,
  Tag,
  Rating,
  Button,
  AnyDiv,
} from "./styles.ts";
import { Product as ProductProps } from "../../types";

export default function ProductListPage() {
  const productList: ProductProps[] = Array.from(
    { length: 10 },
    (_, index) => ({
      id: index + 1,
      title: `Product ${index + 1}`,
      description: `Product ${index + 1} description`,
      price: 100,
      image: "https://picsum.photos/200/300",
      category: `Category ${index + 1}`,
      rating: {
        rate: 4.5,
        count: 10,
      },
    })
  );

  return (
    <Container>
      <ProductList>
        {productList.map((product) => (
          <Product key={product.id}>
            <img src={product.image} alt={product.title} />
            <Tag>{product.category}</Tag>
            <h4>{product.title}</h4>
            <p>{product.description}</p>
            <AnyDiv>
              <Rating>{product.rating.rate}</Rating>
              <Button>Buy</Button>
            </AnyDiv>
            <span>${product.price.toFixed(2)}</span>
          </Product>
        ))}
      </ProductList>
    </Container>
  );
}

// Team 1, 2, 3 -> One project? -> Ecommerce

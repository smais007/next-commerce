export interface simplifiedProduct {
  _id: string;
  name: string;
  price: number;
  categoryName: string;
  imageUrl: string;
  slug: string;
}

export interface fullProduct {
  price_id: string;
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string[];
  slug: string;
  categoryName: string;
}

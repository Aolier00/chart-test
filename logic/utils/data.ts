import { Cart, CartsByMonth } from "@/domains/Cart";
import { CartComplete } from "@/domains/CartComplete";
import { DropdownInterface } from "@/domains/Dropdown";
import { Product } from "@/domains/Product";

const cartsComplete: CartComplete[] = [];
const carts_localStorage = localStorage.getItem("data-carts");
const dataCarts: Cart[] = carts_localStorage
  ? JSON.parse(carts_localStorage)
  : [];
const products_localStorage = localStorage.getItem("data-products");
const dataProducts: Product[] = products_localStorage
  ? JSON.parse(products_localStorage)
  : [];

//Cantidad de productos vendidos por mes
export const formatData = (carts: Cart[] | null): CartsByMonth[] => {
  const dataByMonthsArray: CartsByMonth[] = [];
  carts?.forEach((cart) => {
    const existingMonthEntry = dataByMonthsArray.find(
      (item) => item.date == cart.date
    );
    if (existingMonthEntry) {
      existingMonthEntry.carts.push(cart);
    } else {
      dataByMonthsArray.push({
        date: cart.date,
        carts: [cart],
      });
    }
  });
  return dataByMonthsArray.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA.getTime() - dateB.getTime();
  });
};

//Obtener categorias
export const dataCategories = (
  products: Product[] | null
): DropdownInterface[] => {
  let dataCategory: DropdownInterface[] = [];
  products?.forEach((product, index) => {
    if (!dataCategory.find((item) => item.name == product.category)) {
      dataCategory.push({
        id: index.toString(),
        name: product.category,
        value: product.category,
        checked: false,
      });
    }
  });
  return dataCategory;
};

//Cantidad de productos vendidos por categoria

//format Date
export const formatDate = (date: string): string => {
  return new Date(date).toLocaleDateString("en-us", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

const findProduct = (
  dataProducts: Product[],
  idProduct: string
): Product | undefined =>
  dataProducts.find((product) => product.id.toString() == idProduct);

//format data complete
export const formatDataComplete = (): CartComplete[] => {
  dataCarts?.forEach((cart) => {
    let products: Product[] = [];
    cart.products.filter((item) => {
      const product: Product | undefined = findProduct(
        dataProducts,
        item.productId.toString()
      );
      if (product) {
        products.push(product);
      }
    });
    cartsComplete.push({ ...cart, products: products });
  });

  return cartsComplete;
};

//Cantidad de producto por categoria
export const cantProductForCategory = (
  category: string
): {
  category: string;
  quantity: number;
}[] => {
  const data = dataCategories(dataProducts)?.map((item) => {
    let cont: number = 0;
    dataProducts?.filter((product) => {
      if (item.value == product.category) {
        cont += product.rating.count;
      }
    });
    return { category: item.value, quantity: cont };
  });
  return category
    ? [
        { category: "0", quantity: 0 },
        ...data.filter((item) => item.category == category),
      ]
    : data;
};

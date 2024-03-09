import { Cart, CartsByMonth } from "@/domains/Cart";
import { DropdownInterface } from "@/domains/Dropdown";
import { Product } from "@/domains/Product";

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
        value: product.title,
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

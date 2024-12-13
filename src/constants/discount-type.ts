export enum DiscountType {
  PERCENTAGE = "percentage",
  CATEGORY = "category",
  POINT = "points",
  SPECIAL = "special",
  FIXED_AMOUNT = "fixed_amount",
}

export const DISCOUNT_TYPE = [
  { label: "Percentage", value: DiscountType.PERCENTAGE },
  { label: "Category", value: DiscountType.CATEGORY },
  { label: "Point", value: DiscountType.POINT },
  { label: "Special", value: DiscountType.SPECIAL },
  { label: "Fixed Amount", value: DiscountType.FIXED_AMOUNT },
];

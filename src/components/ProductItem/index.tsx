import * as S from "./style";

const ProductItem = () => {
  return <S.ProductItem>
  <S.ProductItemImage src="" alt="" />
  <div>
  	<S.ProductItemName>Nome do Perfume</S.ProductItemName>
  	<S.ProductItemPrice>R$ 300.00</S.ProductItemPrice>
  	<S.ProductItemDescription>Descrição do perfume</S.ProductItemDescription>
  </div>
</S.ProductItem>
}
export default ProductItem;
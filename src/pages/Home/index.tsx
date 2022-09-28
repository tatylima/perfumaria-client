import Menu from 'components/Menu';
import { ReactComponent as Search } from 'assets/icons/search.svg';
import * as S from './style';
import { RoutePath } from 'types/routes';
import { navigationItems } from 'data/navigation';
import { DateTime } from "luxon";
import ProductItemList from "components/ProductItemList";
import ProductItem from "components/ProductItem";

const Home = () => {
  const dateDescription = DateTime.now().toLocaleString({
    ...DateTime.DATE_SHORT,
    weekday: "long",
  });

  return (
    <S.Home>
      <Menu active={RoutePath.HOME} navItems={navigationItems} />
      <S.HomeContent>
        app/src/navigation.tsx{' '}
        <header>
          <S.HomeHeaderDetails>
            <div>
              <S.HomeHeaderDetailsLogo>
                Perfumaria Padron
              </S.HomeHeaderDetailsLogo>
              <S.HomeHeaderDetailsDate>
                {dateDescription}
              </S.HomeHeaderDetailsDate>
            </div>
            <S.HomeHeaderDetailsSearch>
              <Search />
              <input type="text" placeholder="Procurar perfume" />
            </S.HomeHeaderDetailsSearch>
          </S.HomeHeaderDetails>
        </header>
        <div>
          <S.HomeProductTitle>
            <b>Perfumes</b>
          </S.HomeProductTitle>
          <S.HomeProductList>
          <ProductItemList>
          <ProductItem />
          </ProductItemList>
          </S.HomeProductList>
        </div>
      </S.HomeContent>
      <aside>
        <p>Detalhes dos pedidos aqui</p>
      </aside>
    </S.Home>
  );
};

export default Home;
